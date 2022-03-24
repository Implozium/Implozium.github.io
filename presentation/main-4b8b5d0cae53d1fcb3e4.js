(()=>{"use strict";var e,t={78:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(294)),s=a(r(163)),u=l(r(187)),d=l(r(69)),c=s.default.div`
    background-color: white;
    height: 100vh;
    padding: 24px;
    box-sizing: border-box;
`,f=s.createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
        font-family: 'Segoe UI', sans-serif;
        background-color: #f2f2f2;
    }
    :root {
        --size: 16px;
    }
`;t.default=()=>{const[e,t]=o.useState({type:"md",content:""}),[r,n]=o.useState(!1),i=o.useCallback((e=>{t(e),n(!0)}),[]);return o.default.createElement(c,null,o.default.createElement(f,null),r?o.default.createElement(u.default,{treeNode:e}):o.default.createElement(d.default,{onChange:i}))}},269:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(294)),s=l(r(163)),u=s.default.label`
    padding: 32px;
    background-color: palevioletred;
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
`;t.default=({onChange:e})=>{const t=o.useCallback((t=>{if(!t.target.files||!t.target.files.length)return;const r=new FileReader;r.readAsText(t.target.files[0]),r.onload=()=>{e(r.result)}}),[e]);return o.default.createElement(u,null,o.default.createElement(d,{type:"file",name:"file",accept:".xml",onChange:t}),"Put file")}},69:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(294)),s=l(r(163)),u=l(r(442)),d=l(r(269)),c=l(r(560)),f=s.default.div`
    & > * + * {
        margin-top: 12px;
    }
`,h=s.default.div`
    font-size: 32px;
    text-align: center;
`,p=s.default.div`
    font-size: 16px;
    text-align: center;
    color: red;
`;t.default=({onChange:e})=>{const[t,r]=o.useState((()=>JSON.parse(localStorage.getItem("presentations")||"[]"))),n=o.useCallback((e=>{localStorage.setItem("presentations",JSON.stringify(e)),r(e)}),[]),[i,a]=o.useState(""),l=o.useCallback((r=>{try{const i=new u.default(r).parse();if("main"===i.type){const e=t.concat();e.unshift({title:i.title,created:Date.now(),used:Date.now(),xml:r}),n(e)}e(i)}catch(e){a(e.message)}}),[t,e,n]),s=o.useCallback((r=>{const i=t.filter((e=>e!==r));i.unshift(Object.assign(Object.assign({},r),{used:Date.now()}));try{const t=new u.default(r.xml).parse();"main"===t.type&&n(i),e(t)}catch(e){a(e.message)}n(i)}),[t,e,n]),m=o.useCallback((e=>{const r=t.filter((t=>t!==e));n(r)}),[t,n]);return o.default.createElement(f,null,o.default.createElement(h,null,"Presentation"),o.default.createElement(d.default,{onChange:l}),i&&o.default.createElement(p,null,i),t.map(((e,t)=>o.default.createElement(c.default,{key:String(t),info:e,onLoad:s,onDelete:m}))))}},187:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(294)),s=l(r(163)),u=l(r(769)),d=l(r(286)),c=s.default.input`
    height: 4vmin;
    width: 4vmin;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
`,f=s.default.div`
    height: 4vmin;
    width: 4vmin;
    display: flex;
    align-items: center;
    justify-content: center;
`,h=s.default.div`
    height: 4vmin;
    width: 4vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    background-color: white;
    color: grey;
    cursor: pointer;

    &:hover {
        color: black;
    }
`,p=s.default.div`
    position: absolute;
    left: 50%;
    bottom: 0vmin;
    display: flex;
    transform: translateX(-50%) translateY(80%);
    transition: 0.3s all;
    border: 1px solid darkgray;
    padding: 2vmin 1vmin 1vmin;
    background-color: #ddd;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    gap: 1vmin;

    &:hover {
        transform: translateX(-50%) translateY(0%);
    }
`,m=s.default.div`
    display: block;
    width: 100%;
    height: 100%;
`;t.default=({treeNode:e})=>{const t=o.useMemo((()=>new d.default(e)),[e]),[r,n]=o.useState(0),[i,a]=o.useState(String(r+1));o.useEffect((()=>{a(String(r+1))}),[r]);const l=o.useCallback((e=>{a(e.target.value)}),[]),s=o.useCallback((()=>{const e=Number(i);!Number.isNaN(e)&&e>0&&e<=t.getCount()?(t.setCurrentSlide(e-1),n(t.getCurrentNumber())):a(String(r+1))}),[i,t,r]),b=o.useCallback((()=>{t.nextSlide(),n(t.getCurrentNumber())}),[t]),g=o.useCallback((()=>{t.prevSlide(),n(t.getCurrentNumber())}),[t]);return o.useEffect((()=>{const e=e=>{"ArrowRight"===e.key?b():"ArrowLeft"===e.key&&g()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}),[b,t,g]),o.default.createElement(m,null,o.default.createElement(u.default,{treeNode:t.getCurrentSlide()}),o.default.createElement(p,null,o.default.createElement(h,{onClick:g},"<"),o.default.createElement(c,{value:i,onChange:l,onBlur:s}),o.default.createElement(f,null,": ",t.getCount()),o.default.createElement(h,{onClick:b},">")))}},560:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(294)),s=l(r(163)),u=s.default.div`
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
`,h=s.default.button`
    color: white;
    text-shadow: 0 0 1px black;
    background-color: blue;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`,p=s.default.button`
    color: white;
    text-shadow: 0 0 1px black;
    background-color: red;
    padding: 8px;
    border: 1px solid lightgray;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;t.default=({info:e,onLoad:t,onDelete:r})=>{const n=o.useCallback((()=>{t(e)}),[e,t]),i=o.useCallback((()=>{r(e)}),[e,r]);return o.default.createElement(u,null,o.default.createElement(d,null,e.title),o.default.createElement(c,null,"- ",new Date(e.used).toLocaleString()," (",new Date(e.created).toLocaleString(),")"),o.default.createElement(f,null),o.default.createElement(h,{onClick:n},"Load"),o.default.createElement(p,{onClick:i},"Delete"))}},769:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(45)),l=n(r(440)),o=n(r(668)),s=n(r(508)),u=n(r(44)),d=n(r(743)),c=n(r(745)),f=n(r(747));function h(e,t){switch(e.type){case"slide":return i.default.createElement(u.default,{treeNode:e,key:t,creator:h});case"section":return i.default.createElement(d.default,{treeNode:e,key:t,creator:h});case"layout":return i.default.createElement(c.default,{treeNode:e,key:t,creator:h});case"header":return i.default.createElement(a.default,{treeNode:e,key:t,creator:h});case"block":return i.default.createElement(l.default,{treeNode:e,key:t,creator:h});case"text":return i.default.createElement(s.default,{treeNode:e,key:t,creator:h});case"code":return i.default.createElement(o.default,{treeNode:e,key:t,creator:h});case"md":return i.default.createElement(f.default,{treeNode:e,key:t,creator:h});default:return null}}t.default=function({treeNode:e}){return h(e,"")}},440:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)),l=a.default.div`
    margin: 1vw;
    border-radius: 1vmin;
    background-color: #333333;
`,o=a.default.div`
    height: 3vmin;
    display: flex;
    padding-left: 0.5vmin;
    padding-top: 0.5vmin;
`,s=a.default.div`
    height: 1.5vmin;
    width: 1.5vmin;
    border-radius: 50%;
    margin: 0.5vmin;
    background: #ff5c5c;
`,u=a.default.div`
    height: 1.5vmin;
    width: 1.5vmin;
    border-radius: 50%;
    margin: 0.5vmin;
    background: #ffbd4c;
`,d=a.default.div`
    height: 1.5vmin;
    width: 1.5vmin;
    border-radius: 50%;
    margin: 0.5vmin;
    background: #00ca56;
`,c=a.default.div`
    padding: 2vmin;
    padding-top: 1vmin;
    filter: invert(1) hue-rotate(180deg);
`;t.default=({treeNode:e,creator:t})=>i.default.createElement(l,null,i.default.createElement(o,null,i.default.createElement(s,null),i.default.createElement(u,null),i.default.createElement(d,null)),i.default.createElement(c,null,e.children.map(((e,r)=>t(e,String(r))))))},668:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)).default.div`
    white-space: pre;
    line-height: 1.25;
`;t.default=({treeNode:e})=>i.default.createElement(a,null,e.content)},45:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)).default.div`
    text-align: center;
    font-weight: bold;
    margin-bottom: 1vmin;
`;t.default=({treeNode:e})=>i.default.createElement(a,null,e.content)},745:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(r(294)),s=a(r(163)),u=s.default.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: ${({direction:e})=>e};
    align-items: ${({align:e})=>e};
    justify-content: ${({justify:e})=>e};
    ${({mode:e,count:t})=>"fit"===e?s.css`
            & > * {
                flex-basis: ${Math.floor(1/t*100)}%;
            }
        `:""}
`;t.default=({treeNode:e,creator:t})=>o.default.createElement(u,{direction:e.direction,mode:e.mode,align:e.align,justify:e.justify,count:e.children.length},e.children.map(((e,r)=>t(e,String(r)))))},747:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)).default.div`
    
`;t.default=({treeNode:e})=>i.default.createElement(a,null,e.content)},743:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)).default.div`
    display: flex;
    flex-direction: column;
    font-size: ${({size:e})=>"large"===e?"12vmin":"medium"===e?"4vmin":"3vmin"};
`;t.default=({treeNode:e,creator:t})=>i.default.createElement(a,{size:e.size},e.children.map(((e,r)=>t(e,String(r)))))},44:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)),l=a.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 4vmin;
    overflow: hidden;
`,o=a.default.div`
    flex-basis: 15%;
    flex-shrink: 0;
    flex-grow: 0;
    text-align: center;
    font-size: 10vmin;
`,s=a.default.div`
    flex-shrink: 0;
    flex-grow: 1;
`,u=a.default.div`
    flex-basis: 10%;
    flex-shrink: 0;
    flex-grow: 0;
    font-size: 6vmin;
    color: grey;
`;t.default=({treeNode:e,creator:t})=>i.default.createElement(l,null,e.header&&i.default.createElement(o,null,e.header),i.default.createElement(s,null,e.children.map(((e,r)=>t(e,String(r))))),e.footer&&i.default.createElement(u,null,e.footer))},508:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(163)).default.div`
    text-align: ${({align:e})=>e};
`;t.default=({treeNode:e})=>i.default.createElement(a,{align:e.align},e.content)},442:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=r(658),i=r(392);t.default=class{constructor(e){this.xml=e}parse(){const e=new i.XMLParser(this.xml);e.parse().removeWhitespaces().removeUnused().joinTexts();const t=n.convertXMLTreeNodeToTreeNode(e.toXMLNode(),"",0);if(!t||"main"!==t.type)throw new Error("Main node is not main");return t}}},286:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.currentSlide=0,this.treeNode=e,this.slides=[],this.extractSlides(this.treeNode)}getSlide(e){return this.slides[e]}getCurrentSlide(){return this.slides[this.currentSlide]}setCurrentSlide(e){e<0||e>=this.slides.length||(this.currentSlide=e)}getCurrentNumber(){return this.currentSlide}nextSlide(){this.currentSlide+1<this.slides.length&&(this.currentSlide+=1)}prevSlide(){this.currentSlide-1>=0&&(this.currentSlide-=1)}getCount(){return this.slides.length}extractSlides(e){"slide"===e.type&&this.slides.push(e),"main"===e.type&&(this.slides.push({type:"slide",children:[{type:"layout",align:"center",justify:"center",direction:"row",mode:"shrink",children:[{type:"section",size:"large",children:[{type:"text",align:"center",content:e.title}]}]}]}),e.children.forEach((e=>this.extractSlides(e))))}}},658:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.convertXMLTreeNodeToTreeNode=void 0,t.convertXMLTreeNodeToTreeNode=function e(t,r,n){var i,a,l,o;switch(t.tag){case"main":return{type:"main",title:null!==(i=t.attributes.title)&&void 0!==i?i:"",children:t.children.map(((t,n)=>e(t,r,n))).filter((e=>null!==e))};case"slide":return{type:"slide",header:null!==(a=t.attributes.header)&&void 0!==a?a:"",footer:null!==(l=t.attributes.footer)&&void 0!==l?l:"",children:t.children.map((t=>e(t,r,0))).filter((e=>null!==e))};case"layout":return{type:"layout",direction:["row","column"].includes(t.attributes.direction)?t.attributes.direction:"row",mode:["fit","shrink"].includes(t.attributes.mode)?t.attributes.mode:"shrink",align:["start","end","center"].includes(t.attributes.align)?t.attributes.align:"start",justify:["start","end","center"].includes(t.attributes.justify)?t.attributes.justify:"start",children:t.children.map((t=>e(t,r,0))).filter((e=>null!==e))};case"section":return{type:"section",size:["large","medium","small"].includes(t.attributes.size)?t.attributes.size:"medium",children:t.children.map((t=>e(t,r,0))).filter((e=>null!==e))};case"header":return{type:"header",content:t.text};case"text":return{type:"text",align:["left","center","right"].includes(t.attributes.align)?t.attributes.align:"left",content:t.text};case"block":return{type:"block",view:["window"].includes(t.attributes.view)?t.attributes.view:"window",children:t.children.map((t=>e(t,r,0))).filter((e=>null!==e))};case"code":return{type:"code",lang:null!==(o=t.attributes.lang)&&void 0!==o?o:"",content:t.text};case"md":return{type:"md",content:t.text};default:return null}}},392:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.XMLParser=t.TagParser=t.AttributesParser=t.AttributeParser=t.SpaceParser=t.AttributeValueParser=t.AttributeNameParser=t.CommentParser=t.CDataParser=t.TextParser=void 0;class r{constructor(e){this.position=0,this.content=e}get length(){return this.content.length}get left(){return this.content.length-1-this.position}test(e=1){return this.content.slice(this.position,this.position+e)}read(e=1){if(this.position+e>this.content.length)throw new Error(`Out of bounds: ${this.position} ${e} > ${this.content.length}`);const t=this.content.slice(this.position,this.position+e);return this.position+=e,t}unshift(e=1){if(this.position-e<0)throw new Error("Out of bounds");this.position-=e}}class n{constructor(e){this.buffer="",this.reader=e}test(){return!0}readWhile(e){if(this.reader.left)for(;this.reader.left&&e(this.buffer);)this.buffer+=this.reader.read()}}class i extends n{parse(){return this.readWhile((e=>"<"!==e.slice(-1))),this.reader.unshift(),{type:"text",content:this.buffer.slice(0,-1)}}}t.TextParser=i;class a extends n{test(){return"<![CDATA["===this.reader.test(9)}parse(){return this.reader.read(9),this.readWhile((e=>"]]>"!==e.slice(-3))),{type:"cdata",content:this.buffer.slice(0,-3)}}}t.CDataParser=a;class l extends n{test(){return"\x3c!--"===this.reader.test(4)}parse(){return this.reader.read(4),this.readWhile((e=>"--\x3e"!==e.slice(-3))),{type:"comment",content:this.buffer.slice(0,-3)}}}t.CommentParser=l;class o extends n{parse(){return this.readWhile((e=>"/>"!==e.slice(-2)&&!["="," ",">"].includes(e.slice(-1)))),"/>"===this.buffer.slice(-2)?(this.reader.unshift(2),this.buffer.slice(0,-2)):(this.reader.unshift(1),this.buffer.slice(0,-1))}}t.AttributeNameParser=o;class s extends n{test(){return'"'===this.reader.test(1)}parse(){return this.reader.read(),this.readWhile((e=>'"'!==e.slice(-1))),this.buffer}}t.AttributeValueParser=s;class u extends n{parse(){return this.readWhile((e=>0===e.trim().length)),this.reader.unshift(1),this.buffer.slice(-1)}}t.SpaceParser=u;class d extends n{test(){return null!==this.reader.test(1).match(/[a-z]/i)}parse(){const e=new o(this.reader).parse();if("="===this.reader.test(1)){this.reader.read();return{type:"attribute",name:e,value:new s(this.reader).parse().slice(0,-1)}}return{type:"attribute",name:e,value:e}}}t.AttributeParser=d;class c extends n{test(){return null!==this.reader.test(1).match(/[a-z]/i)}parse(){const e=[];for(;this.test();){const t=new d(this.reader).parse();e.push(t),new u(this.reader).parse()}return e}}t.AttributesParser=c;class f extends n{test(){return null!==this.reader.test(2).match(/<[^/]/)}parse(){this.reader.read(1);const e=new o(this.reader).parse();new u(this.reader).parse();const t=new c(this.reader).parse();if("/>"===this.reader.test(2))return this.reader.read(2),{type:"tag",name:e,attributes:t,children:[]};this.reader.read(1);const r=[];for(;this.reader.left&&this.reader.test(2+e.length+1)!==`</${e}>`;){const e=new i(this.reader).parse();e.content.length&&r.push(e);const t=new a(this.reader);if(t.test()){const e=t.parse();r.push(e)}const n=new l(this.reader);if(n.test()){const e=n.parse();r.push(e)}const o=new f(this.reader);if(o.test()){const e=o.parse();r.push(e)}}return this.reader.read(2+e.length+1),{type:"tag",name:e,attributes:t,children:r}}}function h(e,t){t(e),e.children.forEach((e=>{"tag"===e.type?h(e,t):t(e)}))}function p(e){const t={tag:e.name,attributes:e.attributes.reduce(((e,t)=>(e[t.name]=t.value,e)),{}),text:"",children:e.children.filter((e=>"tag"===e.type)).map((e=>p(e)))};return 0===t.children.length&&(t.text=e.children.filter((e=>"text"===e.type)).map((e=>e.content)).join("")),t}t.TagParser=f;t.XMLParser=class{constructor(e){this.reader=new r(e.replace(/<\?xml.*?\?>/g,"").trim())}parse(){return this.root=new f(this.reader).parse(),this}get(){if(!this.root)throw new Error("Don't have any data");return this.root}removeWhitespaces(){return this.root?(h(this.root,(e=>{"text"===e.type&&(e.content=e.content.trim()),"cdata"===e.type&&(e.content=e.content.trim())})),this):this}removeUnused(){return this.root?(h(this.root,(e=>{"tag"===e.type&&(e.children=e.children.filter((e=>("text"!==e.type||0!==e.content.trim().length)&&"comment"!==e.type)))})),this):this}joinTexts(){return this.root?(h(this.root,(e=>{"tag"===e.type&&(e.children=e.children.map((e=>"cdata"===e.type?{type:"text",content:e.content}:e)).reduce(((e,t)=>"text"===t.type&&e.length&&"text"===e[0].type?(e[0].content+=t.content,e):(e.push(t),e)),[]))})),this):this}toXMLNode(){if(!this.root)throw new Error("Don't have any data");return p(this.root)}}},629:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(r(294)),a=n(r(935)),l=n(r(78)),o=document.getElementById("root");a.default.render(i.default.createElement(l.default,null),o)}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,i,a)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,i,a]=e[u],o=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(o=!1,a<l&&(l=a));o&&(e.splice(u--,1),t=i())}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[l,o,s]=r,u=0;for(i in o)n.o(o,i)&&(n.m[i]=o[i]);for(s&&s(n),t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[l[u]]=0;n.O()},r=self.webpackChunkpresentation=self.webpackChunkpresentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=n.O(void 0,[216],(()=>n(629)));i=n.O(i)})();