(()=>{"use strict";var e,t={78:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=l(r(163)),u=o(r(982)),d=o(r(69)),c=s.default.div`
    background-color: #f2f2f2;
    min-height: 100vh;
    padding: 24px;
    box-sizing: border-box;
`,f=s.createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
        font-family: 'Segoe UI', sans-serif;
    }
    :root {
        --size: 16px;
        --color-done: green;
        --color-disabled: grey;
        --color-active: blue;
        --color-default: black;
    }
`;t.default=()=>{const[e,t]=a.useState(),[r,i]=a.useState(!1),n=a.useCallback((e=>{t(e),i(!0)}),[]);return a.default.createElement(c,null,a.default.createElement(f,null),r?a.default.createElement(u.default,{treeNode:e}):a.default.createElement(d.default,{onChange:n}))}},982:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(349)),d=o(r(451)),c=o(r(973)),f=o(r(769)),p=s.default.div`
    display: block;
`,h=s.default.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 3fr 1fr;
    max-width: 1024px;
`;t.default=({treeNode:e})=>{const t=a.useMemo((()=>new u.default(e,{},{now:()=>(new Date).toLocaleString()})),[e]),[r,i]=a.useState(0),n=a.useCallback((e=>{t.finishStep(e),i((e=>e+1))}),[t]),l=a.useCallback((e=>t.render(e)),[t]),o=a.useCallback((e=>t.getStepInitialVariables(e)),[t]),s=a.useCallback((e=>{const r=t.findTreeNode(t.getCurrentStep().id);if(!r)return;const i=window.outerWidth,n=window.innerHeight,l=window.screenTop,o=window.screenLeft;window.open(e,"step"===r.type?r.title:"",`top=${l},left=${o+Math.floor(i/2)},height=${n},width=${Math.floor(i/2)},resizable,scrollbars,status`).focus()}),[t]),b=a.useMemo((()=>({steps:t.getSteps(),sections:t.getSections(),finishStep:n,render:l,current:t.getCurrentStep(),finished:t.isFisished(),getStepInitialVariables:o,openLink:s})),[t,n,l,r]);return a.default.createElement(d.default.Provider,{value:b},a.default.createElement(p,null,a.default.createElement(h,null,a.default.createElement(f.default,{treeNode:t.getTreeNode()}),a.default.createElement("div",null,a.default.createElement(c.default,null)))))}},451:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(r(294)).default.createContext({});t.default=n},662:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=s.default.div`
    padding: 8px;
    border: 1px solid grey;
    display: flex;
    align-items: baseline;

    & > * + * {
        margin-left: 8px;
    }
`,d=s.default.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
`,c=s.default.div`
    color: grey;
    font-size: 14px;
`,f=s.default.div`
    flex-grow: 1;
`,p=s.default.button`
    color: white;
    text-shadow: 0 0 1px black;
    background-color: blue;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`,h=s.default.button`
    color: white;
    text-shadow: 0 0 1px black;
    background-color: red;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;t.default=({info:e,onLoad:t,onDelete:r})=>{const i=a.useCallback((()=>{t(e)}),[e,t]),n=a.useCallback((()=>{r(e)}),[e,r]);return a.default.createElement(u,null,a.default.createElement(d,null,e.title),a.default.createElement(c,null,"- ",new Date(e.used).toLocaleString()," (",new Date(e.created).toLocaleString(),")"),a.default.createElement(f,null),a.default.createElement(p,{onClick:i},"Load"),a.default.createElement(h,{onClick:n},"Delete"))}},973:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(451)),d=s.default.div`
    margin: 16px 4px 0;
    padding: 8px;
    box-sizing: border-box;
    background-color: black;
    color: white;
    border-radius: 8px;
    /* width: 200px; */
    font-size: 14px;
    font-weight: bold;
    position: sticky;
    top: 20px;
`;t.default=()=>{const{steps:e,finished:t}=a.useContext(u.default),r=e.filter((e=>e.enabled&&e.finished)).length,i=e.filter((e=>e.enabled)).length;return a.default.createElement(d,null,"Main information:",a.default.createElement("br",null),t?"Finished":a.default.createElement(a.default.Fragment,null,"Steps ",r+1," / ",i))}},269:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=s.default.label`
    padding: 32px;
    background-color: lightblue;
    border: 4px dashed grey;
    font-size: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    display: block;
    text-align: center;
    position: relative;
`,d=s.default.input`
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;t.default=({onChange:e})=>{const t=a.useCallback((t=>{if(!t.target.files[0])return;const r=new FileReader;r.readAsText(t.target.files[0]),r.onload=()=>{e(r.result)}}),[e]);return a.default.createElement(u,null,a.default.createElement(d,{type:"file",name:"file",accept:".xml",onChange:t}),"Put file")}},69:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(442)),d=o(r(269)),c=o(r(662)),f=s.default.div`
    & > * + * {
        margin-top: 12px;
    }
`,p=s.default.div`
    font-size: 32px;
    text-align: center;
`,h=s.default.div`
    font-size: 16px;
    text-align: center;
    color: red;
`;t.default=({onChange:e})=>{const[t,r]=a.useState((()=>JSON.parse(localStorage.getItem("checklists")||"[]"))),i=a.useCallback((e=>{localStorage.setItem("checklists",JSON.stringify(e)),r(e)}),[]),[n,l]=a.useState(""),o=a.useCallback((r=>{try{const n=new u.default(r).parse();if("main"===n.type){const e=t.concat();e.unshift({title:n.title,created:Date.now(),used:Date.now(),xml:r}),i(e)}e(n)}catch(e){l(e.message)}}),[t,e,i]),s=a.useCallback((r=>{const n=t.filter((e=>e!==r));n.unshift(Object.assign(Object.assign({},r),{used:Date.now()}));try{const t=new u.default(r.xml).parse();"main"===t.type&&i(n),e(t)}catch(e){l(e.message)}i(n)}),[t,e,i]),b=a.useCallback((e=>{const r=t.filter((t=>t!==e));i(r)}),[t,i]);return a.default.createElement(f,null,a.default.createElement(p,null,"Checklist"),a.default.createElement(d.default,{onChange:o}),n&&a.default.createElement(h,null,n),t.map(((e,t)=>a.default.createElement(c.default,{key:String(t),info:e,onLoad:s,onDelete:b}))))}},465:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(r(294)).default.createContext({});t.default=n},769:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=l(r(163)),u=o(r(451)),d=o(r(465)),c=o(r(20)),f=o(r(73)),p=o(r(631)),h=o(r(647)),b=o(r(508)),g=s.default.div`
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    margin: 0 auto;
`,v=s.default.div`
    font-size: 36px;
    line-height: 40px;
    font-weight: bold;
`,m=s.default.div`
    margin-top: 16px;
    margin-left: 16px;
`,x=s.default.div`
    margin-top: 16px;
    padding: 12px;
    text-align: center;
    font-size: 20px;
    box-sizing: border-box;
    border-radius: 8px;
    background-color: lightgreen;
    color: black;
`,_=({treeNode:e})=>{const{finished:t}=a.useContext(u.default),r=a.useRef();return a.useLayoutEffect((()=>{t&&r.current.scrollIntoView({behavior:"smooth",block:"center"})}),[t]),a.default.createElement(g,null,a.default.createElement(v,null,e.title),a.default.createElement(m,null,e.children.map(((e,t)=>a.default.createElement(T,{key:String(t),treeNode:e})))),t&&a.default.createElement(x,{ref:r},"Checklist has been finished"))},y=s.default.div`
    position: relative;

    --border-color: var(--color-default);
    ${({finished:e})=>e?s.css`
                  --border-color: var(--color-done);
              `:""}
    ${({enabled:e})=>e?"":s.css`
                  --border-color: var(--color-disabled);
              `}

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: calc(var(--size) * 2);
        box-sizing: border-box;
        border: 4px solid white;
        top: 0;
        left: 0;
        background: var(--border-color);
        box-shadow: 0 0 0 2px lightgrey;
    }

    & & {
        margin-left: calc(var(--size) * 2);

        &::before {
            content: '';
            position: absolute;
            width: calc(var(--size) * 2 + 1px);
            height: 2px;
            border: 1px solid lightgrey;
            top: calc(var(--size) - 1px);
            box-sizing: border-box;
            left: calc(var(--size) * -2 - 1px);
        }
    }
`,O=s.default.div`
    padding-left: calc(var(--size) * 2);
    margin-left: var(--size);
    min-height: calc(var(--size) * 2);
    line-height: calc(var(--size) * 2);
    font-size: 20px;
    font-weight: 600;
`,S=s.default.div`
    border-left: 2px solid lightgrey;
    margin-left: calc(var(--size) - 1px);
    padding-left: 1px;
    padding-top: var(--size);
    padding-bottom: var(--size);

    & > * + * {
        margin-top: var(--size);
    }

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: 2px;
        border: 1px solid var(--border-color);
        bottom: -2px;
        box-sizing: border-box;
        left: 0;
    }
`,j=({treeNode:e})=>{const{sections:t}=a.useContext(u.default),r=a.useMemo((()=>t.find((t=>t.id===e.id))),[t,e]),i=a.useMemo((()=>e.id.split("-").map((e=>Number(e)+1)).join(".")),[e]);return a.default.createElement(y,{enabled:r.enabled,finished:r.finished},a.default.createElement(O,null,i," ",e.title),a.default.createElement(S,null,e.children.map(((e,t)=>a.default.createElement(T,{key:String(t),treeNode:e})))))},k=s.default.div`
    margin-left: calc(var(--size) * -1 - 2px);
    padding-left: calc(var(--size) * 2);
    position: relative;

    --border-color: var(--color-default);
    ${({active:e})=>e?s.css`
                  --border-color: var(--color-active);
              `:""}
    ${({finished:e})=>e?s.css`
                  --border-color: var(--color-done);
              `:""}
    ${({enabled:e})=>e?"":s.css`
                  --border-color: var(--color-disabled);
              `}

    &::after {
        content: '';
        position: absolute;
        width: calc(var(--size) * 2);
        height: calc(var(--size) * 2);
        box-sizing: border-box;
        border: 4px solid white;
        border-radius: 50%;
        top: 0;
        left: 0;
        background: var(--border-color);
        box-shadow: 0 0 0 2px lightgrey;
    }
`,w=s.default.div`
    margin-left: var(--size);
    border-radius: 8px;
    border-top-left-radius: 0px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
    background-color: #fff;
    position: relative;
    box-sizing: border-box;

    &::before {
        content: '';
        --size: 16px;
        height: calc(var(--size) * 2);
        width: calc(var(--size) * 2);
        position: absolute;
        top: 0px;
        left: calc(var(--size) * -2);
        border: calc(var(--size)) solid transparent;
        border-right: calc(var(--size) / 2) solid var(--border-color);
        box-sizing: border-box;
    }
`,E=s.default.div`
    min-height: calc(var(--size) * 2);
    line-height: calc(var(--size) * 2);
    font-size: 14px;
    font-weight: 600;
    padding: 0px 20px;
    color: white;
    background-color: var(--border-color);
    border-top-right-radius: 8px;
    ${({expanded:e})=>e?s.css``:s.css`border-bottom-right-radius: 8px;`}
    display: flex;
    justify-content: space-between;
    align-items: center;
`,M=s.default.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 24px;
    line-height: 24px;
    text-align: center;

    ${({toggled:e})=>e?s.css`transform: scaleY(-1);`:s.css`transform: scaleY(1);`}

    &::before {
        content: '↓';
    }

    &:hover {
        color: aqua;
    }
`,z=s.default.div`
    border-top: 1px solid rgb(0 0 0 / 10%);
    padding: 10px 20px;

    ${({expanded:e})=>e?s.css`display: block;`:s.css`display: none;`}

    & > * + * {
        margin-top: 8px;
    }
`,P=s.default.div`
    box-sizing: border-box;
    ${({enabled:e})=>e?s.css`
                  background-color: var(--color-active);
              `:s.css`
                  background-color: var(--color-disabled);
              `}
    border-radius: 4px;
    padding: 6px;
    line-height: 24px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`,C=({treeNode:e})=>{const{current:t,steps:r,finishStep:i,render:n,getStepInitialVariables:l}=a.useContext(u.default),o=a.useMemo((()=>r.find((t=>t.id===e.id))),[r,e]),s=a.useMemo((()=>Number(e.id.split(":").pop())+1),[e]),[c,f]=a.useState((()=>l(o))),p=a.useRef(),[h,b]=a.useState((()=>o===t&&Object.values(c).every(Boolean)));a.useEffect((()=>{if(o===t){const e=l(o);f(e),b(Object.values(e).every(Boolean))}}),[e,n,o,t,l]);const[g,v]=a.useState(void 0);a.useLayoutEffect((()=>{o===t&&v(setTimeout((()=>{p.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),100))}),[o,t]),a.useEffect((()=>()=>{clearTimeout(g)}),[g]);const m=a.useCallback((()=>{o===t&&Object.values(c).every(Boolean)&&(i(c),b(!1))}),[o,t,i,c]),x=a.useCallback(((e,r)=>{const i=Object.assign(Object.assign({},c),{[e]:r});f(i),b(o===t&&Object.values(i).every(Boolean))}),[o,t,c]),_=a.useMemo((()=>({variables:c,set:x,enabled:o===t})),[c,x,o,t]),y=o.finished?"Done":h?"Finish":"Waiting for fill fields...",[O,S]=a.useState(o===t);a.useEffect((()=>{o===t&&S(!0)}),[t,o]);const j=a.useCallback((()=>{S((e=>!e))}),[]);return a.default.createElement(k,{enabled:o.enabled,active:o===t,finished:o.finished,ref:p},a.default.createElement(w,null,a.default.createElement(E,{expanded:O},s,". ",e.title,a.default.createElement(M,{toggled:O,onClick:j})),a.default.createElement(z,{expanded:O},a.default.createElement(d.default.Provider,{value:_},e.children.map(((e,t)=>a.default.createElement(T,{key:String(t),treeNode:e})))),(o.finished||o===t)&&a.default.createElement(P,{enabled:h,onClick:m},y))))};function T({treeNode:e}){switch(e.type){case"main":return a.default.createElement(_,{treeNode:e});case"section":return a.default.createElement(j,{treeNode:e});case"step":return a.default.createElement(C,{treeNode:e});case"input":return a.default.createElement(c.default,{treeNode:e});case"radio":return a.default.createElement(p.default,{treeNode:e});case"text":return a.default.createElement(b.default,{treeNode:e});case"textblock":return a.default.createElement(h.default,{treeNode:e});case"link":return a.default.createElement(f.default,{treeNode:e});default:return null}}t.default=T},20:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(465)),d=s.default.div`
    position: relative;
    border: 2px solid lightgrey;
    border-radius: 4px;
    background: white;

    &:focus-within {
        border-color: var(--color-active);
    }
`,c=s.default.div`
    position: absolute;
    font-size: 12px;
    left: 8px;
    color: grey;
`,f=s.default.input`
    background: none;
    border: none;
    display: block;
    width: 100%;
    margin: 0;
    padding: 12px 4px 0 8px;
    font-size: 14px;
    height: 38px;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;t.default=({treeNode:e})=>{const{variables:t,enabled:r,set:i}=a.useContext(u.default),n=a.useCallback((t=>{i(e.name,t.target.value)}),[i,e.name]);return a.default.createElement(d,null,a.default.createElement(c,null,e.title),a.default.createElement(f,{type:"text",value:t[e.name],onChange:n,disabled:!r}))}},73:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(451)),d=s.default.div`
    margin-top: 8px;
    line-height: 20px;
    font-size: 14px;
    display: flex;
    text-decoration: none;
    align-items: center;

    &::before {
        content: '➤';
        margin-right: 4px;
        font-size: 20px;
        height: 20px;
        display: inline-block;
    }
`,c=s.default.a`
    flex-grow: 1;
`,f=s.default.a`
    flex-shrink: 1;
    color: grey;
    font-weight: bold;
    opacity: 0.5;
    transition: all 0.3s;
    cursor: pointer;

    ${d}:hover & {
        opacity: 1;
    }

    &:hover {
        color: black;
    }
`;t.default=({treeNode:e})=>{const{render:t,openLink:r}=a.useContext(u.default),i=a.useCallback((()=>{r(t(e.href))}),[r,t,e]);return a.default.createElement(d,null,a.default.createElement(c,{href:t(e.href),target:"blank"},t(e.text)),a.default.createElement(f,{onClick:i},"new window"))}},631:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(465)),d=s.default.fieldset`
    position: relative;
    border: 2px solid lightgrey;
    border-radius: 4px;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
`,c=s.default.label`
    position: absolute;
    font-size: 12px;
    left: 4px;
    color: grey;
    top: -6px;
    background: white;
    line-height: 14px;
    padding: 0 4px;
`,f=s.default.div`
    padding: 12px 8px;
`,p=s.default.input`
    margin: 0px;
    margin-right: 8px;
`,h=s.default.label`
    display: flex;
    font-size: 14px;
    align-items: center;
`;t.default=({treeNode:e})=>{const t=a.useContext(u.default),r=a.useCallback((r=>{t.set(e.name,r.target.value)}),[t,e]);return a.default.createElement(d,null,a.default.createElement(c,null,e.title),a.default.createElement(f,null,e.options.map((i=>a.default.createElement(h,{key:i.value},a.default.createElement(p,{type:"radio",checked:t.variables[e.name]===i.value,value:i.value,onChange:r,disabled:!t.enabled}),i.title)))))}},508:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(451)),d=s.default.div`
    margin-top: 8px;
    line-height: 20px;
    font-size: 14px;
    top: 2px;
    position: relative;

    &::before {
        content: '〉';
        color: darkgray;
        margin-right: 4px;
        font-size: 14px;
        height: 20px;
        display: inline-block;
        font-weight: bold;
        position: relative;
        top: -1px;
    }
`;t.default=({treeNode:e})=>{const{render:t}=a.useContext(u.default);return a.default.createElement(d,null,t(e.text))}},647:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return n(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=l(r(294)),s=o(r(163)),u=o(r(451)),d=s.default.div`
    position: relative;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-radius: 4px;
    top: 2px;

    &::before {
        content: '⧉';
        position: absolute;
        left: 4px;
        top: 2px;
    }

    &:hover {
        border: 1px solid #ffffff88;
        background: #ffffff22;
    }
`,c=s.default.div`
    padding: 8px;
    border-radius: 8px;
    color: white;
    background-color: black;
    margin-top: 8px;
    display: flex;
    font-size: 14px;
`,f=s.default.div`
    font-family: monospace;
    white-space: pre-line;
    padding: 4px 0;
`;t.default=({treeNode:e})=>{const{render:t}=a.useContext(u.default),r=a.useCallback((()=>{navigator.clipboard.writeText(t(e.text))}),[e,t]);return a.default.createElement(c,null,a.default.createElement(d,{onClick:r,title:"Copy"}),a.default.createElement(f,null,t(e.text)))}},349:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(r(207)),l=r(55);t.default=class{constructor(e,t={},r={}){this.finished=!1,this.treeNode=e,this.steps=[],this.sections=[],this.methods=r,this.extractCheckableSteps(this.treeNode,this.sections,this.steps),this.currentStep=this.nextStep(),this.stepsStorage=new n.default(t),this.calc()}getTreeNode(){return this.treeNode}getSteps(){return this.steps}getSections(){return this.sections}getCurrentStep(){return this.currentStep}isFisished(){return this.finished}extractCheckableSteps(e,t,r){"section"===e.type?(t.push({id:e.id,condition:e.condition,finished:!1,enabled:!0}),e.children.forEach((e=>this.extractCheckableSteps(e,t,r)))):"step"===e.type?(r.push({id:e.id,condition:e.condition,finished:!1,enabled:!0,variables:e.variables}),e.children.forEach((e=>this.extractCheckableSteps(e,t,r)))):"main"===e.type&&e.children.forEach((e=>this.extractCheckableSteps(e,t,r)))}calc(){this.sections.forEach((e=>{e.enabled=!e.condition||l.calc(e.condition,this.stepsStorage.getVariablesToStep(e.id),this.methods)})),this.steps.forEach((e=>{e.enabled=!e.condition||l.calc(e.condition,this.stepsStorage.getVariablesToStep(e.id),this.methods)})),this.sections.forEach((e=>{e.enabled||(this.sections.forEach((t=>{t.id.startsWith(e.id)&&(t.enabled=!1)})),this.steps.forEach((t=>{t.id.startsWith(e.id)&&(t.enabled=!1)})))})),this.sections.concat().reverse().forEach((e=>{e.finished=this.sections.filter((t=>t.id!==e.id&&t.id.startsWith(e.id))).every((e=>!e.enabled||e.finished)),e.finished=e.finished&&this.steps.filter((t=>t.id!==e.id&&t.id.startsWith(e.id))).every((e=>!e.enabled||e.finished))}))}nextStep(){const e=this.steps.findIndex((e=>e===this.currentStep));return this.steps.slice(e+1).find((e=>{const t=e.id.split(":")[0];return e.enabled&&this.getSection(t).enabled}))}subFindTreeNode(e,t){if(("step"===e.type||"section"===e.type)&&e.id===t)return e;if("main"===e.type||"section"===e.type)for(let r=0;r<e.children.length;r++){const i=this.subFindTreeNode(e.children[r],t);if(i)return i}}findTreeNode(e){return this.subFindTreeNode(this.treeNode,e)}getSection(e){return this.sections.find((t=>t.id===e))}getStep(e){return this.steps.find((t=>t.id===e))}setFinishedStep(e,t){const r=this.getStep(e);r&&(r.finished=t)}finishStep(e){this.stepsStorage.pushStep(this.currentStep.id,e),this.currentStep.finished=!0,this.calc(),this.currentStep=this.nextStep(),this.currentStep?this.finished=!1:this.finished=!0}getStepInitialVariables(e){return Object.keys(e.variables).reduce(((t,r)=>(t[r]=this.render(e.variables[r]),t)),{})}backToStep(e){const t=this.steps.findIndex((t=>t.id===e));if(-1===t)return;this.currentStep=this.steps[t],this.steps.slice(t).forEach((e=>{e.finished=!1})),this.stepsStorage.toStep(this.currentStep.id),this.calc();const r=this.currentStep.id.split(":")[0];this.setFinishedStep(r,!1)}render(e){return this.currentStep?l.renderTemplate(e,this.stepsStorage.getVariablesToStep(this.currentStep.id),this.methods):l.renderTemplate(e,this.stepsStorage.getVariablesToStep(""),this.methods)}}},442:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=r(658),n=r(392);t.default=class{constructor(e){this.xml=e}parse(){const e=n.parseXML(this.xml);if(!e.length)throw new Error("Invalid XML");const t=i.convertXMLTreeNodeToTreeNode(e[0],"",0);if("main"!==t.type)throw new Error("Main node is not main");return t}}},207:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.steps=[],this.steps.push({id:"0",variables:e})}pushStep(e,t){const r={id:e,variables:Object.assign(Object.assign({},this.steps[this.steps.length-1].variables),t)};this.steps.push(r)}getStep(e){return this.steps.find((t=>t.id===e))}lastStep(){return this.steps[this.steps.length-1]}getVariablesToStep(e){return(this.steps.find((t=>t.id===e))||this.lastStep()).variables}toStep(e){const t=this.steps.findIndex((t=>t.id===e));-1!==t&&(this.steps=this.steps.slice(0,t+1))}}},55:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderTemplate=t.calc=t.calcBlock=t.calcExpression=t.replace=void 0;const r=/^(["'])(.*)\1$/;function i(e){const t=r.exec(e);return t?t[2]:null}const n=/\$\{\s*([^|}]*?)\s*(?:\|\s*([a-zA-Z0-9_.]+)((?:\s*:\s*.+?\s*)*))?\}/g;function l(e,t,r,l='"'){return e.trim().replace(n,((e,n,o,a)=>{var s;let u="";if(u=void 0!==t[n]?t[n]:null!==(s=i(n))&&void 0!==s?s:"",r[o]){const e=0===a.length?[]:a.slice(1).split(":").map(i);u=r[o](u,...e)}return`${l}${u}${l}`}))}t.replace=l;const o=/(["'])(.*)\1\s+eq\s+(["'])(.*)\3/,a=/(["'])(.*)\1\s+not eq\s+(["'])(.*)\3/,s=/(["'])(.*)\1\s+like\s+(["'])(.*)\3/,u=/(["'])(.*)\1\s+in\s+\[(.*)\]/,d=/(["'])(.*)\1/;function c(e,t,i){const n=l(e,t,i);let c=n.match(o);if(c){const[,,e,,t]=c;return e===t}if(c=n.match(a),c){const[,,e,,t]=c;return e!==t}if(c=n.match(s),c){const[,,e,,t]=c;return new RegExp(`^${t.replace(/%/g,".*")}$`).test(e)}if(c=n.match(u),c){const[,,e,t]=c;return t.split(",").map((e=>{var t;return null===(t=e.trim().match(r))||void 0===t?void 0:t[2]})).filter((e=>void 0!==e)).includes(e)}if(c=n.match(d),c){const[,,e]=c;return""!==e}return!1}t.calcExpression=c;const f=/\s+(and|or)\s+/;function p(e,t,r){const i=e.split(f);for(;i.length;){const e=c(i.shift(),t,r),n=i.shift();if(!n)return e;if("and"===n){if(e)continue;return!1}if("or"!==n)return!0;if(e)return!0}return!0}t.calcBlock=p;const h=/\(\s*([^()]+)\s*\)/g;function b(e,t,r){let i=e,n=e;do{n=i,i=i.replace(h,((e,i)=>p(i,t,r)?'"true"':""))}while(i!==n);return p(i,t,r)}t.calc=b;const g=/\{\{([^:]+):(.+?)\}\}([^}].*?)\{\{:\1\}\}/gs;t.renderTemplate=function(e,t,r){let i=e,n=e;do{n=i,i=i.replace(g,((e,i,n,l)=>b(n,t,r)?l.trim():""))}while(i!==n);return l(i,t,r,"").split("\n").map((e=>e.trim())).join("\n").replace(/\n\{\{rmel\}\}/g,"").replace(/\{\{rmel\}\}/g,"").trim()}},658:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.convertXMLTreeNodeToTreeNode=void 0;const i=r(392);t.convertXMLTreeNodeToTreeNode=function e(t,r,n){var l,o,a,s,u,d,c,f,p,h,b,g,v,m,x,_,y,O,S;switch(t.tag){case"main":return{type:"main",title:null!==(l=t.attributes.title)&&void 0!==l?l:"",children:t.children.map(((t,i)=>e(t,r,i))).filter((e=>null!==e&&"section"===e.type))};case"section":{const i=r?`${r}-${n}`:String(n);let l=0;return{type:"section",title:null!==(o=t.attributes.title)&&void 0!==o?o:"",condition:null!==(a=t.attributes.condition)&&void 0!==a?a:"",id:i,children:t.children.map((t=>"section"===t.tag||"step"===t.tag?e(t,i,l++):e(t,i,0))).filter((e=>null!==e&&("section"===e.type||"step"===e.type)))}}case"step":{const l=`${r}:${n}`,o={};return i.forEachXMLNode(t,(e=>{e.attributes.name&&(o[e.attributes.name]=e.attributes.value||"")})),{type:"step",title:null!==(s=t.attributes.title)&&void 0!==s?s:"",condition:null!==(u=t.attributes.condition)&&void 0!==u?u:"",id:l,variables:o,children:t.children.map((t=>e(t,r,0))).filter((e=>null!==e&&"variable"!==e.type&&"template"!==e.type))}}case"variable":return{type:"variable",name:null!==(d=t.attributes.name)&&void 0!==d?d:"",value:null!==(c=t.attributes.value)&&void 0!==c?c:""};case"template":return{type:"template",name:null!==(f=t.attributes.name)&&void 0!==f?f:"",text:i.childrenToText(t)};case"input":return{type:"input",title:null!==(p=t.attributes.title)&&void 0!==p?p:"",name:null!==(h=t.attributes.name)&&void 0!==h?h:"",value:null!==(b=t.attributes.value)&&void 0!==b?b:""};case"text":return{type:"text",text:i.childrenToText(t)};case"textarea":return{type:"textarea",text:i.childrenToText(t)};case"textblock":return{type:"textblock",text:i.childrenToText(t)};case"image":return{type:"image",src:null!==(g=t.attributes.src)&&void 0!==g?g:""};case"link":return{type:"link",href:null!==(v=t.attributes.href)&&void 0!==v?v:"",text:i.childrenToText(t)};case"select":return{type:"select",title:null!==(m=t.attributes.title)&&void 0!==m?m:"",name:null!==(x=t.attributes.name)&&void 0!==x?x:"",value:null!==(_=t.attributes.value)&&void 0!==_?_:"",options:t.children.filter((e=>"option"===e.tag)).map((e=>{var t;return{title:i.childrenToText(e),value:null!==(t=e.attributes.value)&&void 0!==t?t:""}}))};case"radio":return{type:"radio",title:null!==(y=t.attributes.title)&&void 0!==y?y:"",name:null!==(O=t.attributes.name)&&void 0!==O?O:"",value:null!==(S=t.attributes.value)&&void 0!==S?S:"",options:t.children.filter((e=>"option"===e.tag)).map((e=>{var t;return{title:i.childrenToText(e),value:null!==(t=e.attributes.value)&&void 0!==t?t:""}}))};default:return null}}},392:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.forEachXMLNode=t.childrenToText=t.parseXML=t.extractAttributes=void 0;const r=/([^\s=]+?)\s*=\s*"(.*?)"|(\S+)/;function i(e){const t=e.trim().match(new RegExp(r,"g"));return t?t.reduce(((e,t)=>{const i=r.exec(t);if(i){const[,t,r,n]=i;t&&(e[t]=r),n&&(e[n]=n)}return e}),{}):{}}t.extractAttributes=i;const n=/(<[^>]+>)/,l=/<(\S+?)(\s+.+?)?\s*\/>/,o=/<(\S+?)(\s+.+?)?>/,a=/<\/(\S+?)>/;t.parseXML=function(e){const t=e.replace(/<\?xml.*?\?>/g,"").trim().split(n).map((e=>e.trim())).filter(Boolean),r=[];for(let e=0;e<t.length;e++){const n=t[e];let s=l.exec(n);if(s){const e={tag:s[1].toLowerCase(),attributes:s[2]?i(s[2]):{},text:"",children:[]};0===r.length?r.push(e):r[r.length-1].children.push(e)}else if(s=a.exec(n),s){const e=r.pop();if(!e)throw new Error("Stack is empty");r[r.length-1]?r[r.length-1].children.push(e):r.push(e)}else if(s=o.exec(n),s){const e={tag:s[1].toLowerCase(),attributes:s[2]?i(s[2]):{},text:"",children:[]};r.push(e)}else if(r[r.length-1]){const e={tag:"text",attributes:{},text:n,children:[]};0===r.length?r.push(e):r[r.length-1].children.push(e)}}return r},t.childrenToText=function(e){return e.children.filter((e=>"text"===e.tag)).map((e=>e.text)).join(" ")},t.forEachXMLNode=function(e,t){t(e),e.children.forEach((e=>t(e)))}},629:function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(r(294)),l=i(r(935)),o=i(r(78)),a=document.getElementById("root");l.default.render(n.default.createElement(o.default,null),a)}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e].call(l.exports,l,l.exports,i),l.exports}i.m=t,e=[],i.O=(t,r,n,l)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,n,l]=e[u],a=!0,s=0;s<r.length;s++)(!1&l||o>=l)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(a=!1,l<o&&(o=l));a&&(e.splice(u--,1),t=n())}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,n,l]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,[o,a,s]=r,u=0;for(n in a)i.o(a,n)&&(i.m[n]=a[n]);for(s&&s(i),t&&t(r);u<o.length;u++)l=o[u],i.o(e,l)&&e[l]&&e[l][0](),e[o[u]]=0;i.O()},r=self.webpackChunkchecklist=self.webpackChunkchecklist||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=i.O(void 0,[216],(()=>i(629)));n=i.O(n)})();