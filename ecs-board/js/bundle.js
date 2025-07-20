(function () {
    'use strict';

    class App {
        engine;
        canvas;
        interval;
        time = 16;
        drawer;
        stat = { totalTime: 0, count: 0 };
        constructor(canvas, engine, width, height, drawer) {
            this.canvas = canvas;
            this.engine = engine;
            this.canvas.width = width;
            this.canvas.height = height;
            this.drawer = drawer;
        }
        start() {
            this.stop();
            this.interval = setInterval(() => {
                this.engine.act();
                // this.draw();
            }, this.time);
        }
        stop() {
            clearInterval(this.interval);
        }
        draw() {
            const ctx = this.canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Need canvas context');
            }
            const draw = () => {
                const totalNow = Date.now();
                this.drawer(ctx);
                this.stat.totalTime += Date.now() - totalNow;
                this.stat.count += 1;
                window.requestAnimationFrame(draw);
            };
            draw();
        }
        printStat() {
            console.log(`Draw: ${this.stat.totalTime}ms / ${this.stat.count} = ${this.stat.totalTime / this.stat.count}ms`);
        }
        dropStat() {
            this.stat.totalTime = 0;
            this.stat.count = 0;
        }
    }

    class Bits {
        value;
        constructor(value = 0n) {
            this.value = value;
        }
        set(index) {
            this.value = this.value | (2n ** BigInt(index));
            return this;
        }
        unset(index) {
            this.value = (this.value ^ (2n ** BigInt(index))) & this.value;
            return this;
        }
        toggle(index) {
            this.value = this.value ^ (2n ** BigInt(index));
            return this;
        }
        isSet(index) {
            return (this.value & (2n ** BigInt(index))) === 2n ** BigInt(index);
        }
        getValue() {
            return this.value;
        }
        contains(numb) {
            return (this.value & numb) === numb;
        }
    }

    class ComponentIndex {
        componentMap = new Map();
        componentCount = new Map();
        getEntities(componentName) {
            let entities = this.componentMap.get(componentName);
            if (!entities) {
                entities = new Set();
                this.componentMap.set(componentName, entities);
                this.componentCount.set(componentName, 0);
            }
            return entities;
        }
        getLowerEntities(componentNames) {
            let lowerComponentName = componentNames[0];
            for (let i = 1; i < componentNames.length; i++) {
                if (this.componentCount.get(lowerComponentName) > this.componentCount.get(componentNames[i])) {
                    lowerComponentName = componentNames[i];
                }
            }
            return this.getEntities(lowerComponentName);
        }
        addEntityId(componentName, entityId) {
            const entities = this.getEntities(componentName);
            entities.add(entityId);
            this.componentCount.set(componentName, this.componentCount.get(componentName) + 1);
        }
        removeEntityId(componentName, entityId) {
            const entities = this.getEntities(componentName);
            if (entities.has(entityId)) {
                entities.delete(entityId);
                this.componentCount.set(componentName, this.componentCount.get(componentName) - 1);
            }
        }
        removeAllEntityId(entityId) {
            Array.from(this.componentMap.entries()).forEach(([componentName, entities]) => {
                if (entities.has(entityId)) {
                    entities.delete(entityId);
                    this.componentCount.set(componentName, this.componentCount.get(componentName) - 1);
                }
            });
        }
        hasEntityId(componentName, entityId) {
            const entities = this.getEntities(componentName);
            return entities.has(entityId);
        }
        getCount(componentName) {
            return this.componentCount.get(componentName) ?? 0;
        }
    }
    class Engine {
        entities = [];
        entityMap = new Map();
        systems = [];
        order;
        counter = 0;
        index = new ComponentIndex();
        step = 0;
        stat = { totalTime: 0, count: 0 };
        events = [];
        constructor(order) {
            this.order = order;
        }
        handleEvents() {
            for (const event of this.events) {
                switch (event.type) {
                    case 'add-entity': {
                        const entity = {
                            id: String(event.id),
                            bits: new Bits(),
                            components: new Map(),
                        };
                        this.entities.push(entity);
                        this.entityMap.set(entity.id, entity);
                        break;
                    }
                    case 'remove-entity': {
                        this.entityMap.delete(event.id);
                        this.index.removeAllEntityId(event.id);
                        break;
                    }
                    case 'add-component': {
                        const entity = this.entityMap.get(event.entityId);
                        if (entity) {
                            entity.bits.set(this.order.indexOf(event.name));
                            entity.components.set(event.name, event.component);
                            this.index.addEntityId(event.name, event.entityId);
                        }
                        break;
                    }
                    case 'remove-component': {
                        const entity = this.entityMap.get(event.entityId);
                        if (entity) {
                            entity.bits.unset(this.order.indexOf(event.name));
                            entity.components.delete(event.name);
                            this.index.removeEntityId(event.name, event.entityId);
                        }
                        break;
                    }
                }
            }
            this.events = [];
        }
        getStepNumber() {
            return this.step;
        }
        addComponent(entityId, name, component) {
            this.events.push({
                type: 'add-component',
                entityId,
                name,
                component,
            });
            return component;
        }
        addComponents(entityId, components) {
            for (const [name, value] of Object.entries(components)) {
                this.addComponent(entityId, name, value);
            }
            return components;
        }
        getComponent(entityId, name) {
            const entity = this.entityMap.get(entityId);
            if (entity) {
                return entity.components.get(name);
            }
        }
        removeComponent(entityId, name) {
            this.events.push({
                type: 'remove-component',
                entityId,
                name,
            });
            return this;
        }
        addEntity(components) {
            const id = String(this.counter++);
            this.events.push({
                type: 'add-entity',
                id,
            });
            if (components) {
                for (const [name, value] of Object.entries(components)) {
                    this.addComponent(id, name, value);
                }
            }
            return id;
        }
        removeEntity(id) {
            this.events.push({
                type: 'remove-entity',
                id,
            });
            return this;
        }
        getEntity(id) {
            return this.entityMap.get(id);
        }
        getBits(componentNames) {
            const bits = new Bits();
            for (let i = 0; i < componentNames.length; i++) {
                bits.set(this.order.indexOf(componentNames[i]));
            }
            return bits.getValue();
        }
        fetch(componentNames) {
            const entityIds = this.index.getLowerEntities(componentNames);
            const numb = this.getBits(componentNames);
            const entities = [];
            for (const entityId of entityIds) {
                const entity = this.getEntity(entityId);
                if (entity.bits.contains(numb)) {
                    entities.push(entity);
                }
            }
            return entities;
        }
        forEach(componentNames, handler) {
            const entityIds = this.index.getLowerEntities(componentNames);
            const numb = this.getBits(componentNames);
            for (const entityId of entityIds) {
                const entity = this.getEntity(entityId);
                if (entity.bits.contains(numb)) {
                    const components = [];
                    for (let j = 0; j < componentNames.length; j++) {
                        components.push(entity.components.get(componentNames[j]));
                    }
                    handler(entity.id, components);
                }
            }
        }
        filterEntities(componentName, filter) {
            const entityIds = this.index.getEntities(componentName);
            const entities = [];
            for (const entityId of entityIds) {
                const entity = this.getEntity(entityId);
                if (filter(entity.components.get(componentName))) {
                    entities.push(entity);
                }
            }
            return entities;
        }
        select(componentNames) {
            const entityIds = this.index.getLowerEntities(componentNames);
            const numb = this.getBits(componentNames);
            let entity;
            for (const entityId of entityIds) {
                const anEntity = this.getEntity(entityId);
                if (anEntity.bits.contains(numb)) {
                    entity = anEntity;
                }
            }
            if (entity) {
                const components = [];
                for (let k = 0; k < componentNames.length; k++) {
                    components.push(entity.components.get(componentNames[k]));
                }
                return components;
            }
            return;
        }
        selectById(entityId, componentNames) {
            const numb = this.getBits(componentNames);
            let entity = this.getEntity(entityId);
            if (!entity?.bits.contains(numb)) {
                return;
            }
            if (entity) {
                const components = [];
                for (let k = 0; k < componentNames.length; k++) {
                    components.push(entity.components.get(componentNames[k]));
                }
                return components;
            }
            return;
        }
        registerComponentSystem(name, components, handler, every = 1) {
            this.systems.push({
                type: 'component',
                name,
                components,
                handler: handler,
                active: true,
                stat: { count: 0, totalTime: 0 },
                every,
            });
            return this;
        }
        registerEntitySystem(name, components, composeContext, handler, every = 1) {
            this.systems.push({
                type: 'entity',
                name,
                components,
                composeContext,
                handler: handler,
                active: true,
                stat: { count: 0, totalTime: 0 },
                every,
            });
            return this;
        }
        registerCommonSystem(name, handler, every = 1) {
            this.systems.push({
                type: 'common',
                name,
                handler,
                active: true,
                stat: { count: 0, totalTime: 0 },
                every,
            });
            return this;
        }
        activateSystem(name) {
            const system = this.systems.find((aSystem) => aSystem.name === name);
            if (system) {
                system.active = true;
            }
            return this;
        }
        deactivateSystem(name) {
            const system = this.systems.find((aSystem) => aSystem.name === name);
            if (system) {
                system.active = false;
            }
            return this;
        }
        act() {
            const totalNow = Date.now();
            this.handleEvents();
            for (let i = 0; i < this.systems.length; i++) {
                const system = this.systems[i];
                if (!system.active || this.step % system.every !== 0) {
                    continue;
                }
                const now = Date.now();
                if ((system.type === 'entity' || system.type === 'component') && this.index.getCount(system.components[0]) === 0) {
                    continue;
                }
                if (system.type === 'common') {
                    system.handler(this);
                }
                else if (system.type === 'component') {
                    const entityIds = this.index.getLowerEntities(system.components);
                    const numb = this.getBits(system.components);
                    for (const entityId of entityIds) {
                        const entity = this.getEntity(entityId);
                        if (entity?.bits.contains(numb)) {
                            const components = [];
                            for (let k = 0; k < system.components.length; k++) {
                                components.push(entity.components.get(system.components[k]));
                            }
                            system.handler(this, components);
                        }
                    }
                }
                else {
                    const entityIds = this.index.getLowerEntities(system.components);
                    const ctx = system.composeContext(this);
                    const numb = this.getBits(system.components);
                    for (const entityId of entityIds) {
                        const entity = this.getEntity(entityId);
                        if (entity?.bits.contains(numb)) {
                            const components = [];
                            for (let k = 0; k < system.components.length; k++) {
                                components.push(entity.components.get(system.components[k]));
                            }
                            system.handler(this, ctx, entityId, components);
                        }
                    }
                }
                this.systems[i].stat.totalTime += Date.now() - now;
                this.systems[i].stat.count += 1;
            }
            this.step += 1;
            this.stat.totalTime += Date.now() - totalNow;
            this.stat.count += 1;
        }
        printStat() {
            for (let i = 0; i < this.systems.length; i++) {
                console.log(`System "${this.systems[i].name}": ${this.systems[i].stat.totalTime}ms / ${this.systems[i].stat.count} = ${this.systems[i].stat.totalTime / this.systems[i].stat.count}ms`);
            }
            console.log(`Act: ${this.stat.totalTime}ms / ${this.stat.count} = ${this.stat.totalTime / this.stat.count}ms`);
        }
        dropStat() {
            for (let i = 0; i < this.systems.length; i++) {
                this.systems[i].stat.totalTime = 0;
                this.systems[i].stat.count = 0;
            }
            this.stat.totalTime = 0;
            this.stat.count = 0;
        }
    }

    let previous = 1;
    function rand() {
        previous = previous * 16807 % 2147483647;
        return previous / 2147483647;
    }
    const engine = new Engine([
        'position',
        'size',
        'velocity',
        'container',
        'model',
        'attributes',
        'blow',
        'blast',
    ]);
    const k = parseInt(new URL(window.location.href).searchParams.get('k') ?? '0');
    const HALF_LENGTH = 8 * (2 ** k);
    const OFFSET = 160;
    const SIZE = 640;
    const FRICTION = 0.1;
    const GRAVITY = [1, 1];
    for (let i = 0; i < SIZE / HALF_LENGTH / 2; i++) {
        for (let j = 0; j < SIZE / HALF_LENGTH / 2; j++) {
            const id = engine.addEntity();
            engine.addComponent(id, 'position', {
                center: [
                    OFFSET + i * HALF_LENGTH * 2 + HALF_LENGTH,
                    OFFSET + j * HALF_LENGTH * 2 + HALF_LENGTH,
                ],
                angle: 0,
                // angle: Math.PI / 4,
            });
            engine.addComponent(id, 'velocity', {
                direction: {
                    speed: [0, 0],
                    accs: [
                    // [[GRAVITY[0], GRAVITY[1]], 0],
                    ],
                    friction: FRICTION,
                },
                axis: {
                    angle: 0,
                    angleA: 0,
                    friction: 0,
                },
            });
            engine.addComponent(id, 'size', {
                halfLength: HALF_LENGTH,
            });
            engine.addComponent(id, 'attributes', {
                durability: 1 + rand() * 2,
                generation: 0,
                cracked: false,
                chunk: 0,
            });
            engine.addComponent(id, 'model', {
                type: 'square',
                opacity: 0,
                offset: [i * HALF_LENGTH * 2, j * HALF_LENGTH * 2],
                rotate: 0,
                initialScale: 1,
                scale: 1,
            });
        }
    }
    const fieldId = engine.addEntity();
    engine.addComponent(fieldId, 'container', {
        width: OFFSET + SIZE + OFFSET,
        height: OFFSET + SIZE + OFFSET,
    });
    const DELTA = 0.001;
    engine.registerComponentSystem('velocity', ['velocity'], (engine, [velocity]) => {
        for (let i = 0; i < velocity.direction.accs.length; i++) {
            velocity.direction.accs[i][0][0] = velocity.direction.accs[i][0][0] * (1 - velocity.direction.accs[i][1]);
            velocity.direction.accs[i][0][1] = velocity.direction.accs[i][0][1] * (1 - velocity.direction.accs[i][1]);
            velocity.direction.speed[0] += velocity.direction.accs[i][0][0];
            velocity.direction.speed[1] += velocity.direction.accs[i][0][1];
        }
        velocity.direction.accs = velocity.direction.accs.filter((acc) => Math.abs(acc[0][0]) > DELTA || Math.abs(acc[0][1]) > DELTA);
        velocity.direction.speed[0] = velocity.direction.speed[0] * (1 - velocity.direction.friction);
        velocity.direction.speed[1] = velocity.direction.speed[1] * (1 - velocity.direction.friction);
        velocity.axis.angleA = velocity.axis.angleA * (1 - velocity.axis.friction);
        velocity.axis.angle += velocity.axis.angleA;
        velocity.axis.angle = velocity.axis.angle * (1 - velocity.axis.friction);
        if (Math.abs(velocity.axis.angle) < DELTA) {
            velocity.axis.angle = 0;
        }
        if (Math.abs(velocity.axis.angleA) < DELTA) {
            velocity.axis.angleA = 0;
        }
    });
    engine.registerComponentSystem('move', ['position', 'velocity'], (engine, [position, velocity]) => {
        position.center[0] += velocity.direction.speed[0];
        position.center[1] += velocity.direction.speed[1];
        if (velocity.axis.angle) {
            position.angle = (position.angle + velocity.axis.angle + 2 * Math.PI) % (2 * Math.PI);
        }
    });
    engine.registerEntitySystem('remover', ['position', 'size'], () => engine.select(['container']), (engine, ctx, entityId, [position, size]) => {
        const containerEntity = ctx;
        if (!containerEntity) {
            return;
        }
        const container = containerEntity[0];
        if (position.center[0] + 2 * size.halfLength < 0) {
            engine.removeEntity(entityId);
        }
        else if (position.center[0] - 2 * size.halfLength > container.width) {
            engine.removeEntity(entityId);
        }
        if (position.center[1] + 2 * size.halfLength < 0) {
            engine.removeEntity(entityId);
        }
        else if (position.center[1] - 2 * size.halfLength > container.height) {
            engine.removeEntity(entityId);
        }
    });
    engine.registerEntitySystem('gravity', ['position', 'velocity'], () => { }, (engine, ctx, entityId, [position, velocity]) => {
        if (position.center[0] < OFFSET || position.center[1] < OFFSET || position.center[0] > SIZE + OFFSET || position.center[1] > SIZE + OFFSET) {
            const kX = (position.center[0] - OFFSET - SIZE / 2) / (OFFSET + SIZE / 2);
            const kY = (position.center[1] - OFFSET - SIZE / 2) / (OFFSET + SIZE / 2);
            position.center[0] += kX * GRAVITY[0];
            position.center[1] += kY * GRAVITY[1];
        }
    });
    engine.registerEntitySystem('blow', ['position', 'blow'], () => { }, (engine, ctx, entityId, [blowPosition, blow]) => {
        engine.forEach(['position', 'attributes', 'model'], (entityId, [position, attributes, model]) => {
            const length = Math.hypot(blowPosition.center[0] - position.center[0], blowPosition.center[1] - position.center[1]);
            if (length > blow.radius && length < DELTA) {
                return;
            }
            if (attributes.durability > 0 && length < blow.radius) {
                attributes.durability -= Math.abs(blow.power) * Math.abs(length - blow.radius) / blow.radius;
            }
            if (attributes.durability > 0) {
                return;
            }
            if (attributes.generation === 0) {
                const id = engine.addEntity();
                engine.addComponent(id, 'position', {
                    center: [position.center[0], position.center[1]],
                    angle: 0,
                });
                engine.addComponent(id, 'size', {
                    halfLength: HALF_LENGTH,
                });
                engine.addComponent(id, 'attributes', {
                    durability: 1 + rand() * 2,
                    generation: 0,
                    cracked: false,
                    chunk: 0,
                });
                engine.addComponent(id, 'model', {
                    type: 'square',
                    opacity: model.opacity + 1,
                    offset: model.offset,
                    rotate: 0,
                    initialScale: 1,
                    scale: 1,
                });
            }
            attributes.generation += 1;
            if (attributes.cracked) {
                let velocity = engine.getComponent(entityId, 'velocity');
                if (!velocity) {
                    velocity = engine.addComponent(entityId, 'velocity', {
                        direction: {
                            speed: [0, 0],
                            accs: [
                            // [[GRAVITY[0], GRAVITY[1]], 0],
                            ],
                            friction: FRICTION,
                        },
                        axis: {
                            angle: 0,
                            angleA: 0,
                            friction: 0,
                        },
                    });
                }
                velocity.direction.accs.push([
                    [
                        -(blowPosition.center[0] - position.center[0]) / length * blow.power,
                        -(blowPosition.center[1] - position.center[1]) / length * blow.power,
                    ],
                    0.1,
                ]);
                velocity.axis = {
                    angle: -0.025 + rand() * 0.05,
                    angleA: -0.005,
                    friction: 0.1,
                };
                model.animation = {
                    type: 'scale',
                    to: 1.4,
                    reversed: true,
                    currentStep: 0,
                    steps: Math.ceil(10 * blow.power + 10),
                };
            }
            else {
                attributes.cracked = true;
                const k = (1 - length / blow.radius);
                model.animation = {
                    type: 'scale',
                    to: (1 + 0.8 * k),
                    reversed: true,
                    currentStep: -Math.ceil(k * 3 * blow.power),
                    steps: Math.ceil(3 * blow.power + 3),
                };
            }
        });
        engine.removeEntity(entityId);
    });
    engine.registerEntitySystem('blast', ['model', 'position', 'size', 'velocity', 'attributes', 'blast'], () => { }, (engine, ctx, entityId, [model, position, size, velocity, attributes, blast]) => {
        if (attributes.chunk >= 1) {
            engine.removeComponent(entityId, 'blast');
            return;
        }
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                const id = engine.addEntity();
                engine.addComponent(id, 'position', {
                    center: [
                        position.center[0] + Math.hypot(size.halfLength / 2, size.halfLength / 2) * Math.cos(position.angle + Math.PI / 4 + Math.PI / 2 * (j * 2 + k)),
                        position.center[1] + Math.hypot(size.halfLength / 2, size.halfLength / 2) * Math.sin(position.angle + Math.PI / 4 + Math.PI / 2 * (j * 2 + k)),
                    ],
                    angle: position.angle,
                });
                engine.addComponent(id, 'size', {
                    halfLength: size.halfLength / 2,
                });
                engine.addComponent(id, 'attributes', {
                    durability: 0,
                    generation: attributes.generation + 1,
                    chunk: attributes.chunk + 1,
                    cracked: true,
                });
                engine.addComponent(id, 'model', {
                    type: 'square',
                    opacity: model.opacity,
                    offset: [
                        model.offset[0] - size.halfLength / 2 + size.halfLength * j,
                        model.offset[0] - size.halfLength / 2 + size.halfLength * k,
                    ],
                    rotate: model.rotate,
                    scale: 1,
                    initialScale: model.initialScale,
                });
                engine.addComponent(id, 'velocity', {
                    direction: {
                        speed: [velocity.direction.speed[0], velocity.direction.speed[1]],
                        accs: [
                            [
                                [
                                    blast.power * Math.cos(position.angle + Math.PI / 4 + Math.PI / 2 * (j * 2 + k)),
                                    blast.power * Math.sin(position.angle + Math.PI / 4 + Math.PI / 2 * (j * 2 + k)),
                                ],
                                0.1,
                            ]
                        ],
                        friction: velocity.direction.friction,
                    },
                    axis: {
                        angle: velocity.axis.angle,
                        angleA: velocity.axis.angleA,
                        friction: velocity.axis.friction,
                    },
                });
            }
        }
        engine.removeEntity(entityId);
    });
    engine.registerEntitySystem('animate', ['model'], () => { }, (engine, ctx, entityId, [model]) => {
        if (model.animation) {
            model.animation.currentStep += 1;
            if (model.animation.currentStep > model.animation.steps) {
                model.animation = undefined;
            }
            else if (model.animation.currentStep < 0) {
                return;
            }
        }
        switch (model.animation?.type) {
            case 'scale': {
                if (model.animation.reversed) {
                    if (model.animation.currentStep < model.animation.steps / 2) {
                        model.scale = model.initialScale + (model.animation.to - 1) * model.animation.currentStep / model.animation.steps * 2;
                    }
                    else {
                        model.scale = model.initialScale + (model.animation.to - 1) * ((model.animation.steps - model.animation.currentStep) / model.animation.steps * 2);
                    }
                }
                else {
                    model.scale = model.initialScale + (model.animation.to - 1) * model.animation.currentStep / model.animation.steps;
                }
            }
        }
    });
    engine.registerEntitySystem('modeling', ['position', 'model'], () => { }, (engine, ctx, entityId, [position, model]) => {
        model.rotate = position.angle;
        if (position.center[0] < OFFSET || position.center[1] < OFFSET || position.center[0] > SIZE + OFFSET || position.center[1] > SIZE + OFFSET) {
            model.initialScale = Math.max(Math.min(position.center[0], position.center[1], OFFSET + SIZE + OFFSET - position.center[0], OFFSET + SIZE + OFFSET - position.center[1]), 0) / OFFSET;
            if (!model.animation) {
                model.scale = model.initialScale;
            }
        }
        else if (!model.animation) {
            model.initialScale = 1;
            model.scale = 1;
        }
    });
    const image = new Image();
    image.src = "./images/nin3.jpg";
    const slicedImage = document.createElement('canvas');
    slicedImage.width = SIZE;
    slicedImage.height = SIZE;
    let offsetX = 0;
    let offsetY = 0;
    let scale = 1;
    const drawer = (ctx) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, OFFSET + SIZE + OFFSET, OFFSET + SIZE + OFFSET);
        // console.time('draw');
        // const container = engine.select(['container']);
        // if (container) {
        //     ctx.fillStyle = '#000000';
        //     ctx.fillRect(0, 0, this.width * this.cellSize, this.height * this.cellSize);
        // }
        const entities = engine.fetch(['model', 'position', 'size', 'attributes'])
            .sort((a, b) => {
            const attributesA = a.components.get('attributes');
            const attributesB = b.components.get('attributes');
            return attributesA.generation - attributesB.generation;
        });
        // console.log(entities.length);
        for (const entity of entities) {
            const model = entity.components.get('model');
            const position = entity.components.get('position');
            const size = entity.components.get('size');
            const attributes = entity.components.get('attributes');
            ctx.save();
            ctx.translate(position.center[0], position.center[1]);
            ctx.rotate(model.rotate);
            ctx.scale(model.scale, model.scale);
            // ctx.fillStyle = '#ff0000';
            // ctx.fillRect(-size.halfLength, -size.halfLength, size.halfLength * 2, size.halfLength * 2);
            // ctx.drawImage(image, offsetX + model.part[0] * scale, offsetY + model.part[1] * scale, scale, scale, -size.halfLength, -size.halfLength, size.halfLength * 2, size.halfLength * 2);
            ctx.drawImage(slicedImage, model.offset[0], model.offset[1], size.halfLength * 2, size.halfLength * 2, -size.halfLength, -size.halfLength, size.halfLength * 2, size.halfLength * 2);
            ctx.fillStyle = '#ffffff' + (Math.abs(255 - model.opacity * 10) % 256).toString(16).padStart(2, '0');
            ctx.fillRect(-size.halfLength, -size.halfLength, size.halfLength * 2, size.halfLength * 2);
            if (attributes.generation) {
                ctx.strokeStyle = '#88888888';
                ctx.lineWidth = 1;
                ctx.strokeRect(-size.halfLength, -size.halfLength, size.halfLength * 2, size.halfLength * 2);
            }
            ctx.restore();
        }
        // console.timeEnd('draw');
    };
    function onStep(min, max, avg, pMin, pMax, pAvg) {
        // console.log(min, max, avg, pMin, pMax, pAvg);
        if (avg > pAvg) {
            engine.addEntity({
                position: {
                    center: [OFFSET + Math.abs(rand() * SIZE), OFFSET + Math.abs(rand() * SIZE)],
                    angle: 0,
                },
                blow: {
                    radius: 100 + Math.abs(max * SIZE),
                    power: 1 + max * 4,
                },
            });
        }
        else if (min < pMin) {
            let i = 0;
            engine.forEach(['position', 'attributes'], (entityId, [position, attributes]) => {
                if ((i++) % 60 ||
                    !attributes.cracked ||
                    position.center[0] < OFFSET ||
                    position.center[1] < OFFSET ||
                    position.center[0] > OFFSET + SIZE ||
                    position.center[1] > OFFSET + SIZE) {
                    return;
                }
                engine.addComponent(entityId, 'blast', {
                    power: 1 + min * 2,
                });
            });
        }
        else if (Math.abs(avg - pAvg) < 0.1) {
            let i = 0;
            engine.forEach(['model', 'attributes'], (entityId, [model, attributes]) => {
                if ((i++) % 10 || !attributes.cracked || model.animation) {
                    return;
                }
                model.animation = {
                    type: 'scale',
                    to: 1.8,
                    reversed: true,
                    currentStep: 20 - Math.ceil(i / 10),
                    steps: Math.ceil(3 * Math.abs(avg - pAvg) + 12),
                };
            });
        }
        else if (pMax > max) {
            let i = 0;
            engine.forEach(['model', 'attributes'], (entityId, [model, attributes]) => {
                if (!attributes.cracked || model.animation) {
                    return;
                }
                i++;
                model.animation = {
                    type: 'scale',
                    to: 1.4,
                    reversed: true,
                    currentStep: 20 - Math.ceil(i / 10),
                    steps: 15,
                };
            });
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('root');
        const canvas = document.createElement('canvas');
        root.appendChild(canvas);
        const app = new App(canvas, engine, OFFSET + SIZE + OFFSET, OFFSET + SIZE + OFFSET, drawer);
        image.addEventListener('load', () => {
            if (image.naturalWidth > image.naturalHeight) {
                offsetX = (image.naturalWidth - image.naturalHeight) / 2;
                scale = image.naturalWidth / (SIZE / HALF_LENGTH / 2);
            }
            else {
                offsetY = (image.naturalHeight - image.naturalWidth) / 2;
                scale = image.naturalHeight / (SIZE / HALF_LENGTH / 2);
            }
            console.log(scale);
            const ctx = slicedImage.getContext('2d');
            if (!ctx) {
                throw new Error();
            }
            ctx.drawImage(image, offsetX, offsetY, scale * (SIZE / HALF_LENGTH / 2), scale * (SIZE / HALF_LENGTH / 2), 0, 0, SIZE, SIZE);
        });
        document.addEventListener('click', () => {
            app.start();
            app.draw();
            setInterval(() => {
                engine.printStat();
                engine.dropStat();
                app.printStat();
                app.dropStat();
                // const entities = engine.fetchByComponents(['velocity']);
                // console.log(entities.map((entity) => entity.components.get('velocity')));
                // debugger;
            }, 4000);
            const audioCtx = new window.AudioContext();
            const audio = new Audio('./songs/somewhat-damaged.mp3');
            audio.crossOrigin = 'anonymous';
            audio.addEventListener('canplaythrough', () => {
                const source = audioCtx.createMediaElementSource(audio);
                const analyser = audioCtx.createAnalyser();
                source.connect(analyser);
                analyser.connect(audioCtx.destination);
                analyser.fftSize = 256;
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);
                let buffer = [];
                let pBuffer = [0];
                let step = 0;
                function getVolume() {
                    analyser.getByteTimeDomainData(dataArray);
                    let sumSquares = 0;
                    for (let i = 0; i < bufferLength; i++) {
                        const sample = (dataArray[i] - 128) / 128;
                        sumSquares += sample * sample;
                    }
                    if (Math.floor(audio.currentTime * 10) !== step) {
                        onStep(Math.min(...buffer), Math.max(...buffer), buffer.reduce((sum, n) => sum + n, 0) / buffer.length, Math.min(...pBuffer), Math.max(...pBuffer), pBuffer.reduce((sum, n) => sum + n, 0) / pBuffer.length);
                        pBuffer = buffer;
                        buffer = [];
                        step += 1;
                    }
                    const rms = Math.sqrt(sumSquares / bufferLength);
                    buffer.push(rms);
                    // if (rms > 0.2) {
                    //     console.log(audio.currentTime, rms);
                    // }
                    // volumeData.push([audio.currentTime, rms]);
                    if (!audio.paused) {
                        requestAnimationFrame(getVolume);
                    }
                }
                audio.play();
                getVolume(); // Start analysis
            });
        }, { once: true });
    });

})();
