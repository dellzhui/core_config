function e(e,t,i,s){var a,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,i,o):a(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class a{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new a(s,i)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const n=window.trustedTypes,d=n?n.emptyScript:"",c=window.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},u=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=m){var s,a;const r=this.constructor._$Eh(e,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(a=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==a?a:h.toAttribute)(t,i.type);this._$Ei=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(e,t){var i,s,a;const r=this.constructor,o=r._$Eu.get(e);if(void 0!==o&&this._$Ei!==o){const e=r.getPropertyOptions(o),l=e.converter,n=null!==(a=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==a?a:h.fromAttribute;this._$Ei=o,this[o]=n(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:g}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const p=globalThis.trustedTypes,_=p?p.createPolicy("lit-html",{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,w=`<${b}>`,y=document,$=(e="")=>y.createComment(e),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,E=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,M=/"/g,O=/^(?:script|style|textarea|title)$/i,T=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),P=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),R=new WeakMap,N=y.createTreeWalker(y,129,null,!1),H=(e,t)=>{const i=e.length-1,s=[];let a,r=2===t?"<svg>":"",o=x;for(let t=0;t<i;t++){const i=e[t];let l,n,d=-1,c=0;for(;c<i.length&&(o.lastIndex=c,n=o.exec(i),null!==n);)c=o.lastIndex,o===x?"!--"===n[1]?o=C:void 0!==n[1]?o=E:void 0!==n[2]?(O.test(n[2])&&(a=RegExp("</"+n[2],"g")),o=k):void 0!==n[3]&&(o=k):o===k?">"===n[0]?(o=null!=a?a:x,d=-1):void 0===n[1]?d=-2:(d=o.lastIndex-n[2].length,l=n[1],o=void 0===n[3]?k:'"'===n[3]?M:I):o===M||o===I?o=k:o===C||o===E?o=x:(o=k,a=void 0);const h=o===k&&e[t+1].startsWith("/>")?" ":"";r+=o===x?i+w:d>=0?(s.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+f+h):i+f+(-2===d?(s.push(void 0),t):h)}const l=r+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,s]};class D{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,r=0;const o=e.length-1,l=this.parts,[n,d]=H(e,t);if(this.el=D.createElement(n,i),N.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=N.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(f)){const i=d[r++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(f),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?B:"?"===t[1]?W:"@"===t[1]?q:j})}else l.push({type:6,index:a})}for(const t of e)s.removeAttribute(t)}if(O.test(s.tagName)){const e=s.textContent.split(f),t=e.length-1;if(t>0){s.textContent=p?p.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],$()),N.nextNode(),l.push({type:2,index:++a});s.append(e[t],$())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=s.data.indexOf(f,e+1));)l.push({type:7,index:a}),e+=f.length-1}a++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function z(e,t,i=e,s){var a,r,o,l;if(t===P)return t;let n=void 0!==s?null===(a=i._$Cl)||void 0===a?void 0:a[s]:i._$Cu;const d=A(t)?void 0:t._$litDirective$;return(null==n?void 0:n.constructor)!==d&&(null===(r=null==n?void 0:n._$AO)||void 0===r||r.call(n,!1),void 0===d?n=void 0:(n=new d(e),n._$AT(e,i,s)),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=n:i._$Cu=n),void 0!==n&&(t=z(e,n._$AS(e,t.values),n,s)),t}class V{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:y).importNode(i,!0);N.currentNode=a;let r=N.nextNode(),o=0,l=0,n=s[0];for(;void 0!==n;){if(o===n.index){let t;2===n.type?t=new L(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new K(r,this,e)),this.v.push(t),n=s[++l]}o!==(null==n?void 0:n.index)&&(r=N.nextNode(),o++)}return a}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{constructor(e,t,i,s){var a;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(a=null==s?void 0:s.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),A(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==P&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return S(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=e:this.k(y.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,a="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.m(i);else{const e=new V(a,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new D(e)),t}S(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new L(this.M($()),this.M($()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class j{constructor(e,t,i,s,a){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const a=this.strings;let r=!1;if(void 0===a)e=z(this,e,t,0),r=!A(e)||e!==this._$AH&&e!==P,r&&(this._$AH=e);else{const s=e;let o,l;for(e=a[0],o=0;o<a.length-1;o++)l=z(this,s[i+o],t,o),l===P&&(l=this._$AH[o]),r||(r=!A(l)||l!==this._$AH[o]),l===U?e=U:e!==U&&(e+=(null!=l?l:"")+a[o+1]),this._$AH[o]=l}r&&!s&&this.C(e)}C(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class B extends j{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===U?void 0:e}}const F=p?p.emptyScript:"";class W extends j{constructor(){super(...arguments),this.type=4}C(e){e&&e!==U?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class q extends j{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=z(this,e,t,0))&&void 0!==i?i:U)===P)return;const s=this._$AH,a=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==U&&(s===U||a);a&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,G;null==J||J(D,L),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.5");class Y extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var s,a;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let o=r._$litPart$;if(void 0===o){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=o=new L(t.insertBefore($(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return P}}Y.finalized=!0,Y._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Y});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:Y}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ee(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ie(e){return te({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se,ae,re;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements,function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ae||(ae={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(re||(re={}));var oe={version:"Version",invalid_configuration:"Invalid configuration"},le={common:oe},ne={version:"Version",invalid_configuration:"Configuration incorrecte"},de={common:ne},ce={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration"},he={common:ce};const ue={en:Object.freeze({__proto__:null,common:oe,default:le}),fr:Object.freeze({__proto__:null,common:ne,default:de}),nb:Object.freeze({__proto__:null,common:ce,default:he})};function me(e,t="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce(((e,t)=>e[t]),ue[s])}catch(t){a=e.split(".").reduce(((e,t)=>e[t]),ue.en)}return void 0===a&&(a=e.split(".").reduce(((e,t)=>e[t]),ue.en)),""!==t&&""!==i&&(a=a.replace(t,i)),a}const ge={song:{id:"song",label:"Songs",icon:"mdi:music",order:0},album:{id:"album",label:"Albums",icon:"mdi:disc",order:1},artist:{id:"artist",label:"Artists",icon:"mdi:account-circle",order:2},movie:{id:"movie",label:"Movies",icon:"mdi:movie",order:3},musicvideo:{id:"musicvideo",label:"Music Videos",icon:"mdi:movie",order:4},tvshow:{id:"tvshow",label:"TV Shows",icon:"mdi:movie",order:5},episode:{id:"episode",label:"Episodes",icon:"mdi:movie",order:6},channel:{id:"channel",label:"Channels",icon:"mdi:movie",order:7},seasondetail:{id:"seasondetail",label:"Season Detail",icon:"mdi:movie",order:-1},albumdetail:{id:"albumdetail",label:"Album Detail",icon:"mdi:music",order:-1},filemusicplaylist:{id:"filemusicplaylist",label:"Music Playlists",icon:"mdi:music",order:8}},ve=Object.keys(ge),pe=ve.filter((e=>-1==ge[e].order)),_e={play:{id:"play",label:"Play",icon:"mdi:play",method:"play"},add:{id:"add",label:"Add",icon:"mdi:plus",method:"add"}},fe={date_asc:{id:"date_asc",label:"Date Ascending"},date_desc:{id:"date_desc",label:"Date Descending"},title_asc:{id:"title_asc",label:"Title Ascending"},title_desc:{id:"title_desc",label:"Title Descending"}},be=ve.filter((e=>ge[e].order>=0)).sort(((e,t)=>ge[e].order-ge[t].order));let we=class extends Y{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _title(){var e;return(null===(e=this._config)||void 0===e?void 0:e.title)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _show_thumbnail(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_thumbnail)||!1}get _show_thumbnail_border(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_thumbnail_border)||!1}get _show_thumbnail_overlay(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_thumbnail_overlay)||!1}get _outline_color(){var e;return(null===(e=this._config)||void 0===e?void 0:e.outline_color)||""}get _album_details_sort(){var e;return(null===(e=this._config)||void 0===e?void 0:e.album_details_sort)||""}get _show_action_mode(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_action_mode)||!1}get _show_recently_added(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_recently_added)||!0}get _show_recently_played(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_recently_played)||!0}get _action_mode(){var e;return(null===(e=this._config)||void 0===e?void 0:e.action_mode)||""}get _add_position(){var e;return(null===(e=this._config)||void 0===e?void 0:e.add_position)||0}render(){if(!this.hass||!this._helpers)return T``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states);return T`
            <div class="card-config">
                <div class="config">
                    <ha-textfield
                        label="title"
                        .value=${this._title}
                        .configValue=${"title"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>
                <div class="config">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label="Entity"
                        }
                        @selected=${this._valueChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"entity"}
                        .value=${this._entity}>
                        ${e.map((e=>T`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
                    </ha-select>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Thumbnail">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail}
                            .configValue=${"show_thumbnail"}
                            @change=${this._valueChanged}>
                        </ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show thumbnail overlay">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail_overlay}
                            .configValue=${"show_thumbnail_overlay"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show thumbnail border">
                        <ha-switch
                            .checked=${!1!==this._show_thumbnail_border}
                            .configValue=${"show_thumbnail_border"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>
                <div class="config">
                    <ha-textfield
                        label="Outline Color (Optional)"
                        .value=${this._outline_color}
                        .configValue=${"outline_color"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>

                <div class="config">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label="Sort Albums for one artist"
                        @selected=${this._entityChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"album_details_sort"}
                        .value=${this._album_details_sort}>
                        ${Object.keys(fe).map((e=>T`
                                <mwc-list-item .value="${fe[e].id}">${fe[e].label}</mwc-list-item>
                            `))}
                    </ha-select>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Action Mode Component">
                        <ha-switch
                            .checked=${!1!==this._show_action_mode}
                            .configValue=${"show_action_mode"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Recently Added Component">
                        <ha-switch
                            .checked=${!1!==this._show_recently_added}
                            .configValue=${"show_recently_added"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-formfield class="switch-wrapper" label="Show Recently Played Component">
                        <ha-switch
                            .checked=${!1!==this._show_recently_played}
                            .configValue=${"show_recently_played"}
                            @change=${this._valueChanged}></ha-switch>
                    </ha-formfield>
                </div>

                <div class="config">
                    <ha-select
                        naturalMenuWidth
                        fixedMenuPosition
                        label="Action to do when clicked"
                        @selected=${this._entityChanged}
                        @closed=${e=>e.stopPropagation()}
                        .configValue=${"action_mode"}
                        .value=${this._action_mode}>
                        ${Object.keys(_e).map((e=>T`
                                <mwc-list-item .value="${e}">${_e[e].label}</mwc-list-item>
                            `))}
                    </ha-select>
                </div>

                <div class="config">
                    <ha-textfield
                        label="Position where to add the item (if action 'Add'"
                        type="number"
                        .value=${this._add_position}
                        .configValue=${"add_position"}
                        @input=${this._valueChanged}></ha-textfield>
                </div>
            </div>
        `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_entityChanged(e){this._valueChanged(e)}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;if(this[`_${t.configValue}`]!==t.value){if(t.configValue)if(""===t.value){const e=Object.assign({},this._config);delete e[t.configValue],this._config=e}else{let e=t.value;void 0!==t.checked&&(e=t.checked),"number"==t.type&&(e=Number(e)),this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:e})}!function(e,t,i,s){s=s||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});a.detail=i,e.dispatchEvent(a)}(this,"config-changed",{config:this._config})}}static get styles(){return r`
            ha-textfield,
            ha-formfield,
            ha-select {
                display: block;
            }
            .card-config {
                display: grid;
                grid-row: auto;
                grid-column: 1fr;
                grid-gap: 5px;
            }
            .config {
                width: 100%;
            }
        `}};e([te({attribute:!1})],we.prototype,"hass",void 0),e([ie()],we.prototype,"_config",void 0),e([ie()],we.prototype,"_helpers",void 0),we=e([X("kodi-search-card-editor")],we),console.info(`%c  KODI-SEARCH-CARD\n%c  ${me("common.version")} 3.5.1    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"kodi-search-card",name:"Kodi Search Card",description:"This custom card allows you to search for media from your kodi libraries"});let ye=class extends Y{constructor(){super(...arguments),this._render_finished=!1,this._config_action_mode="play"}static async getConfigElement(){return document.createElement("kodi-search-card-editor")}static getStubConfig(){return{entity:"sensor.kodi_media_sensor_search",show_thumbnail:true,show_thumbnail_border:false,show_thumbnail_overlay:true,outline_color:"var(--primary-text-color)",album_details_sort:"date_desc",show_action_mode:true,show_recently_added:true,show_recently_played:true,action_mode:"play",add_position:1,order:be}}setConfig(e){if(!e)throw new Error(me("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=e,this.config.action_mode&&(this._config_action_mode=this.config.action_mode),document.documentElement.style.setProperty("--outline_color",this.config.outline_color?this.config.outline_color:"var(--primary-text-color)")}getCardSize(){return 12}shouldUpdate(e){return!!this.config&&function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){let e;this._render_finished=!1;const t=this.config.entity;if(t)if(this._entityState=this.hass.states[t],this._entityState)if("off"==this._entityState.state)e="Kodi is off",console.error(e);else{const e=this._entityState.attributes.meta;if(!e)return void console.error("no metadata for the sensor");if(this._json_meta="object"==typeof e?e:JSON.parse(e),0==this._json_meta.length)return void console.error("empty metadata attribute");this._service_domain=this._json_meta[0].service_domain}else e="No State for the sensor",console.error(e);else e="No Entity defined",console.error(e);const i=T`
            <ha-card
                .header=${this.config.title?this.config.title:""}
                tabindex="0"
                .label=${`Kodi Search ${this.config.entity||"No Entity Defined"}`}>
                ${e?T`<div>${e}</div>`:this._buildCardContainer()}
            </ha-card>
        `;return this._render_finished=!0,i}_buildCardContainer(){return T`<div id="card-container">
            <div>${this._buildSearchForm()}</div>
            <div>${this._buildResultContainer()}</div>
        </div>`}_buildResultContainer(){const e=this._entityState.attributes.data,t="object"==typeof e?e:JSON.parse(e);return this._json_meta[0].search&&0==t.length?T` <div id="card-container-result">${this._buildNoResultContainer()}</div>`:T` <div id="card-container-result">${this._buildDataResultContainer(t)}</div>`}_buildNoResultContainer(){return T`<div class="result-div-noresult">No result found</div>`}_buildDataResultContainer(e){const t=this.config.media_type_order?this.config.media_type_order:be;return T`
            ${t.map((t=>this._fillMediaItems(t,e)))}
            ${pe.map((t=>this._fillMediaItems(t,e)))}
        `}_fillMediaItems(e,t){const i=this._filterTypes(t,e);return i.length>0?T`<div>
                <div class="media-type-div">
                    ${this._getMediaTypeLabel(e)}
                    <ha-icon icon=${this._getMediaTypeIcon(e)}></ha-icon>
                </div>
                ${this._fillMediaItemData(e,i)}
            </div>`:T``}_fillMediaItemData(e,t){switch(e){case ge.song.id:return this._fillSongs(t);case ge.album.id:return this._fillAlbums(t);case ge.artist.id:return this._fillArtists(t);case ge.channel.id:return this._fillChannels(t);case ge.episode.id:return this._fillEpisodes(t);case ge.movie.id:return this._fillMovies(t);case ge.musicvideo.id:return this._fillMusicVideos(t);case ge.tvshow.id:return this._fillTvShows(t);case ge.seasondetail.id:return this._fillTVShowSeasonDetails(t);case ge.albumdetail.id:return this._fillAlbumDetails(t);case ge.filemusicplaylist.id:return this._fillFileMusicPlaylist(t)}return T``}_fillChannels(e){const t=e.filter((e=>"tv"==e.channeltype)),i=e.filter((e=>"radio"==e.channeltype));return T`${t.length>0?this._fillChannel(t,"tv"):""}
        ${i.length>0?this._fillChannel(i,"radio"):""}`}_fillChannel(e,t){return T`
            <div class="search-channels-channeltype">
                ${"tv"==t?"TV Channels":"Radio Channels"} &amp&amp;&amp;
                <!-- <ha-icon icon=${"tv"==t?"mdi:movie":"mdi:music"}></ha-icon> -->
            </div>

            <div class="search-channels-grid search-grid search-item-container-grid">
                ${e.map((e=>T`<div class="search-channel-grid">
                            ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-channel-cover","search-channel-cover-image","search-channel-cover-image-default",this._getActionIcon(),"mdi:movie",(()=>this._addChannel(e.channelid)))}
                            <div class="search-channel-title search-title">${e.label}</div>
                            <div class="search-channel-type search-genre">
                                ${e.channeltype} ( nr ${e.channelnumber})
                            </div>
                        </div>`))}
            </div>
        `}_fillFileMusicPlaylist(e){return T`<div class="search-filemusicplaylists-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-filemusicplaylist-grid">
                    ${this._prepareCover(null,"search-filemusicplaylist-cover","search-filemusicplaylist-cover-image","search-filemusicplaylist-cover-image-default",this._getActionIcon(),"mdi:music",(()=>this._addMusicPlaylist(e.file)))}
                    <div class="search-filemusicplaylist-label search-title">${e.label}</div>
                    <div class="search-filemusicplaylist-title">${e.file}</div>
                </div>`))}
        </div>`}_fillSongs(e){return T`<div class="search-songs-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-song-grid">
                    ${this._prepareCover(e.thumbnail,"search-song-cover","search-song-cover-image","search-song-cover-image-default",this._getActionIcon(),"mdi:music",(()=>this._addSong(e.songid)))}
                    <div class="search-song-title search-title">${e.artist} - ${e.title}</div>
                    <div class="search-song-genre search-genre">${e.genre?e.genre:"undefined"}</div>
                    <div class="search-song-album search-album">${e.album} (${e.year})</div>
                    <div class="search-song-duration search-duration">${this._formatDuration(e.duration)}</div>
                </div>`))}
        </div>`}_formatDuration(e){return new Date(1e3*e).toISOString().substring(11,19)}_fillArtists(e){return T`<div class="search-artists-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-artist-grid">
                ${this._prepareCover(e.thumbnail,"search-artist-cover","search-artist-cover-image","search-artist-cover-image-default","mdi:menu","mdi:disc",(()=>this._searchMoreOfArtist(e.artistid)))}
                <div class='search-artist-title search-title'>${e.artist}</div>
                </div>
              </div>`))}
        </div> `}_fillAlbums(e){return T`<div class="search-albums-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-album-grid">
                ${this._prepareCover(e.thumbnail,"search-album-cover","search-album-cover-image","search-album-cover-image-default",this._getActionIcon(),"mdi:disc",(()=>this._addAlbum(e.albumid)))}
                <div class="search-album-title search-title">${e.title}</div>
                <div class="search-album-artist search-artist">${e.artist+" ("+e.year+")"}</div>
                </div>
              </div>`))}
        </div> `}_fillMovies(e){return T`<div class="search-movies-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-movie-grid">
                        ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-movie-cover","search-movie-cover-image","search-movie-cover-image-default",this._getActionIcon(),"mdi:movie",(()=>this._addMovie(e.movieid)))}
                        <div class="search-movie-title search-title">${e.title}</div>
                        <div class="search-movie-genre search-genre">${e.genre} (${e.year})</div>
                    </div>`))}
        </div> `}_fillMusicVideos(e){return T`<div class="search-musicvideos-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-musicvideo-grid">
                        ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-musicvideo-cover","search-musicvideo-cover-image","search-musicvideo-cover-image-default",this._getActionIcon(),"mdi:movie",(()=>this._addMusicVideo(e.musicvideoid)))}
                        <div class="search-musicvideo-artist search-title">${e.artist}</div>
                        <div class="search-musicvideo-title">${e.title} (${e.year})</div>
                    </div>`))}
        </div> `}_fillEpisodes(e){return T`<div class="search-episodes-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-episode-grid">
                        ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-episode-cover","search-episode-cover-image","search-episode-cover-image-default",this._getActionIcon(),"mdi:movie",(()=>this._addEpisode(e.episodeid)))}
                        <div class="search-episode-title search-title">${e.title}</div>
                        <div class="search-episode-tvshow search-tvshow">
                            ${e.tvshowtitle}
                            (S${e.season.toString().padStart(2,"0")}:E${e.episode.toString().padStart(2,"0")})
                        </div>
                        <div class="search-episode-genre search-genre">${e.genre}</div>
                    </div>`))}
        </div> `}_fillTvShows(e){return T`<div class="search-tvshows-grid search-grid search-item-container-grid">
            ${e.map((e=>T`<div class="search-tvshow-grid">
                        ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-movie-cover","search-movie-cover-image","search-movie-cover-image-default","mdi:menu","mdi:movie",(()=>this._searchMoreOfTvShow(e.tvshowid)))}
                        <div class="search-tvshow-title search-title">${e.title}</div>
                        <div class="search-tvshow-genre search-genre">${e.genre} (${e.year})</div>
                    </div>`))}
        </div> `}_fillTVShowSeasonDetails(e){return T`
            <div>
                <!-- <div class="media-type-div">Season Details<ha-icon icon="mdi:movie"></ha-icon></div> -->
                ${e.map((e=>T`<div class="search-seasondetails-grid  search-grid search-item-container-grid">
                            ${this._prepareCover(e.poster&&""!=e.poster?e.poster:e.thumbnail,"search-seasondetails-cover","search-seasondetails-cover-image","search-seasondetails-cover-image-default",this._getActionIcon(),"mdi:music",(()=>this._addEpisodes(e.episodes.map((e=>e.episodeid)))))}

                            <div class="search-seasondetails-title search-title">${e.title}</div>

                            <div class="search-seasondetails-episodes">
                                ${e.episodes.map((e=>T` <div class="search-seasondetails-episode-grid">
                                        <div
                                            class="search-seasondetails-episode-track"
                                            id="episode-track-${e.episodeid}">
                                            ${e.season&&e.episode?e.season+"x"+e.episode.toString().padStart(2,"0")+".":""}
                                        </div>

                                        <div
                                            class="search-seasondetails-episode-title"
                                            id="episode-title-${e.episodeid}">
                                            ${e.title}
                                        </div>
                                        ${this._createItemDetailsActionIcon((()=>this._addEpisodes(e.episodeid)),"search-seasondetails-episode-play",["episode-title-"+e.episodeid,"episode-track-"+e.episodeid])}
                                    </div>`))}
                            </div>
                        </div>`))}
            </div>
        `}_fillAlbumDetails(e){switch(this.config.album_details_sort){case fe.date_desc.id:e.sort(((e,t)=>parseFloat(t.year)-parseFloat(e.year)));break;case fe.date_asc.id:e.sort(((e,t)=>parseFloat(e.year)-parseFloat(t.year)));break;case fe.title_asc.id:e.sort(((e,t)=>e.title.localeCompare(t.title)));break;case fe.title_desc.id:e.sort(((e,t)=>t.title.localeCompare(e.title)))}const t={};let i=0;return e.map((e=>{e.songs.map((e=>{i+=e.duration})),t[e.albumid]=i,i=0})),T`
            <div class="search-albumsdetails-grid search-grid search-item-container-grid">
                <!-- <div class="media-type-div">Album Details<ha-icon icon="mdi:disc"></ha-icon></div> -->
                ${e.map((e=>T`<div class="search-albumdetails-grid  search-grid">
                            ${this._prepareCover(e.thumbnail,"search-albumdetails-cover","search-albumdetails-cover-image","search-albumdetails-cover-image-default",this._getActionIcon(),"mdi:disc",(()=>this._addAlbum(e.albumid)))}

                            <div class="search-albumdetails-title search-title">
                                ${e.year} - ${e.title}
                            </div>
                            <div class="search-albumdetails-songs">
                                ${e.songs.map((e=>T` <div class="search-albumdetails-song-grid">
                                        <div class="search-albumdetails-song-track" id="song-track-${e.songid}">
                                            ${e.track?e.track:""}
                                        </div>
                                        <div class="search-albumdetails-song-title" id="song-title-${e.songid}">
                                            ${e.title}
                                        </div>
                                        ${this._createItemDetailsActionIcon((()=>this._addSong(e.songid)),"search-albumdetails-song-play",["song-title-"+e.songid,"song-track-"+e.songid])}
                                    </div>`))}
                            </div>
                            <div class="search-albumdetails-duration">
                                ${this._formatDuration(t[e.albumid])}
                            </div>
                        </div>`))}
            </div>
        `}_createItemDetailsActionIcon(e,t,i){const s=document.createElement("ha-icon");return s.setAttribute("icon",this._getActionIcon()),s.setAttribute("class",t),s.addEventListener("click",e),s.addEventListener("mouseover",(()=>this._highlightOver(i,!0))),s.addEventListener("mouseout",(()=>this._highlightOver(i,!1))),T`${s}`}_highlightOver(e,t){var i;for(let s=0;s<e.length;s++){const a=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById(e[s]);if(a){let e="bold";t||(e="normal"),a.style.fontWeight=e}else console.error("can't find element "+e[s])}}_prepareCover(e,t,i,s,a,r,o){const l=this.config.show_thumbnail_border?"cover-image-outline-border":"",n=document.createElement("div");n.setAttribute("class",t);const d=document.createElement("div");if(d.setAttribute("class","search-cover-container"),n.appendChild(d),this.config.show_thumbnail&&e&&""!=e){const t=document.createElement("img");t.setAttribute("src",e),t.onerror=function(){t.remove();const e=document.createElement("ha-icon");e.setAttribute("class","search-cover-image-default "+s+" "+l),e.setAttribute("icon",r),d.appendChild(e)},t.setAttribute("class",i+" search-cover-image "+l),d.appendChild(t)}else{const e=document.createElement("ha-icon");e.setAttribute("class","search-cover-image-default "+s+" "+l),e.setAttribute("icon",r),d.appendChild(e)}if(this.config.show_thumbnail_overlay){const e=document.createElement("ha-icon");e.setAttribute("class","overlay-play"),e.setAttribute("icon",a),e.addEventListener("click",o),d.appendChild(e)}else d.addEventListener("click",o);return T`${n}`}_getActionIcon(){return _e[this._config_action_mode].icon}_getMediaTypeIcon(e){return ge[e].icon}_getMediaTypeLabel(e){return ge[e].label}_filterTypes(e,t){return e.filter((e=>e.type==t))}_buildSearchForm(){return this._searchInput=document.createElement("ha-textfield"),this._searchInput.setAttribute("outlined",""),this._searchInput.setAttribute("label","Search criteria"),this._searchInput.setAttribute("class","form-button"),this._searchInput.addEventListener("keydown",(e=>{"Enter"===e.code&&this._search()})),T`
            <div id="search-form-controls-grid">
                <div class="search-form-controls-fields-grid">
                    ${this._searchInput}
                    ${this.config.show_action_mode?T`<ha-select @selected=${this._actionModeChanged} @closed=${e=>e.stopPropagation()}
                                  class="form-button"
                                  outlined
                                  label="Action mode"
                                  .value=${this._config_action_mode}>
                                  ${Object.keys(_e).map((e=>T`<mwc-list-item value=${e}
                                              >${_e[e].label}</mwc-list-item
                                          >`))}
                              </ha-select>
                          `:""}
                </div>
                <div class="search-form-controls-buttons-grid">
                    <mwc-button class="form-button" label="Search" raised @click="${this._search}" }></mwc-button>
                    <mwc-button class="form-button" label="Clear" raised @click="${this._clear}"></mwc-button>
                    ${this.config.show_recently_added?T`<mwc-button
                              class="form-button"
                              label="Recently added"
                              raised
                              @click="${this._recently_added}"></mwc-button>`:""}
                    ${this.config.show_recently_played?T` <mwc-button
                              class="form-button"
                              label="Recently played"
                              raised
                              @click="${this._recently_played}"></mwc-button>`:""}
                </div>
            </div>
        `}_actionModeChanged(e){if(this._render_finished&&e.target.value){const t=e.target.value;this._config_action_mode=t,this.render(),this.requestUpdate()}}static get styles(){return r`
            :root {
                --outline_color: "-----";
            }

            :host {
                --album-thumbnail-width: 130px;
                --song-thumbnail-width: 65px;
                --movie-thumbnail-width: 150px;
                --movie-thumbnail-ratio: 0.8;
                --musicvideo-thumbnail-width: 120px;
                --musicvideo-thumbnail-ratio: 1;
                --channel-thumbnail-width: 180px;
                --channel-thumbnail-ratio: 1.5;
                --artist-thumbnail-width: 130px;
                --episode-thumbnail-width: 180px;
                --episode-thumbnail-ratio: 1.5;
                --background-basic-color: #9b9595;
                --container-rows-gap: 10px;
                --container-main-rows-gap: 30px;
                --mdc-select-fill-color: rgba(0, 0, 0, 0);
            }

            /*
                -----------------
                ----- COMMON -----
                -----------------
              */
            .media-type-div,
            .result-div-noresult {
                font-weight: bold;
                font-size: 18px;
                text-align: right;
                border-bottom: solid;
            }

            .search-cover-container {
                position: relative;
            }

            .search-cover-container:hover .overlay-play {
                opacity: 1;
            }

            .overlay-play {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0;
                color: white;
                transition: 0.5s ease;
                text-align: center;
                --mdc-icon-size: 50px;
            }

            .search-cover-image {
                height: auto !important;
                display: block;
                justify-content: center;
            }

            .search-cover-image-default {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                color: white;
                background-color: var(--background-basic-color);
            }

            .search-title {
                font-weight: bold;
                font-size: 14px;
                vertical-align: text-top;
            }

            .search-duration {
                text-align: right;
            }
            .search-genre {
                font-style: italic;
                vertical-align: text-top;
            }

            .search-grid {
                display: grid;
                column-gap: 10px;
                row-gap: 10px;
            }

            .search-item-container-grid {
                padding: 10px;
            }

            .search-detail-highlighted {
                background: red;
            }

            .search-detail-normal {
                background: green;
            }

            #card-container {
                margin-top: 20px;
                margin-bottom: 20px;
                margin-left: 10px;
                margin-right: 10px;

                display: grid;
                grid-template-rows: auto;
                grid-template-columns: auto;
                row-gap: var(--container-main-rows-gap);
                /* row-gap: var(--container-rows-gap); */
            }

            #card-container-result {
                display: grid;
                grid-template-rows: auto;
                grid-template-columns: auto;
                row-gap: var(--container-rows-gap);
            }

            /*
                -----------------
                ----- FORM -----
                -----------------
              */
            #search-form-controls-grid {
                display: grid;
                column-gap: 10px;
                grid-template-columns: 1fr minmax(70px, 160px);
            }

            .search-form-controls-fields-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto auto;
                justify-content: center;
                align-content: center;
                row-gap: 20px;
            }

            .form-button {
                width: 100%;
                margin: 5px;
            }

            /*
            -------------------------------
            ----- FILE MUSIC PLAYLIST -----
            -------------------------------
            */
            .search-filemusicplaylists-grid {
                grid-template-columns: auto;
                grid-template-rows: auto;
            }
            
            .search-filemusicplaylist-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-auto-rows: auto;
                column-gap: 10px;
            }
            .search-filemusicplaylist-cover {
                grid-column: 1;
                grid-row: 1 / 3;
            }

            .search-filemusicplaylist-cover-image-default {
                width: var(--song-thumbnail-width);
                height: var(--song-thumbnail-width);
                --mdc-icon-size: calc(var(--song-thumbnail-width) - 30px);
            }

            .search-song-filemusicplaylist-image {
                width: var(--song-thumbnail-width);
            }

            .search-filemusicplaylist-label {
                grid-column: 2;
                grid-row: 1;
            }
            .search-filemusicplaylist-file {
                grid-column: 2;
                grid-row: 2;
            }


            /*
            -----------------
            ----- SONGS -----
            -----------------
            */

            .search-songs-grid {
                grid-template-columns: auto;
                grid-template-rows: auto;
            }

            .search-song-grid {
                display: grid;
                grid-template-columns: auto 1fr auto;
                grid-auto-rows: auto;
                column-gap: 10px;
            }

            .search-song-cover {
                grid-column: 1;
                grid-row: 1 / 5;
            }

            .search-song-cover-image {
                width: var(--song-thumbnail-width);
            }

            .search-song-title {
                grid-column: 2 / 4;
                grid-row: 1;
            }

            .search-song-genre {
                grid-column: 2 / 4;
                grid-row: 2;
            }

            .search-song-album {
                grid-column: 2 / 3;
                grid-row: 3;
            }

            .search-song-duration {
                grid-column: 3 / 4;
                grid-row: 3;
            }

            .search-song-cover-image-default {
                width: var(--song-thumbnail-width);
                height: var(--song-thumbnail-width);
                --mdc-icon-size: calc(var(--song-thumbnail-width) - 30px);
            }

            /*
                ------------------
                ----- ALBUMS -----
                ------------------
                */
            .search-albums-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--album-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-album-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto 1fr;
                row-gap: 3px;
            }

            .search-album-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-album-title {
                grid-column: 1 / 3;
                grid-row: 2;
                vertical-align: text-top;
            }

            .search-album-artist {
                grid-column: 1 / 3;
                grid-row: 3 / 4;
                vertical-align: text-top;
            }

            .search-album-cover-image {
                width: var(--album-thumbnail-width);
            }

            .search-album-cover-image-default {
                width: var(--album-thumbnail-width);
                height: var(--album-thumbnail-width);
                --mdc-icon-size: calc(var(--album-thumbnail-width) - 30px);
            }

            .search-albumdetails-cover-image-default {
            }

            /*
              -------------------
              ----- ARTISTS -----
              -------------------
              */
            .search-artists-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--artist-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-artist-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto 1fr;
                row-gap: 3px;
            }

            .search-artist-title {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-artist-cover {
                grid-column: 1;
                grid-row: 1;
            }

            .search-artist-cover-image {
                width: var(--artist-thumbnail-width);
            }

            .search-artist-cover-image-default {
                width: var(--artist-thumbnail-width);
                height: var(--artist-thumbnail-width);
                --mdc-icon-size: calc(var(--artist-thumbnail-width) - 30px);
            }

            /*
            ------------------
            ----- MOVIES -----
            ------------------
          */
            .search-movies-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--movie-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-movie-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto 1fr;
                row-gap: 3px;
            }

            .search-movie-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-movie-title {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-movie-genre {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            .search-movie-cover-image {
                width: var(--movie-thumbnail-width);
            }

            .search-movie-cover-image-default {
                width: var(--movie-thumbnail-width);
                height: calc(var(--movie-thumbnail-width) / var(--movie-thumbnail-ratio));
                --mdc-icon-size: calc(var(--movie-thumbnail-width) - 30px);
            }

            /*
                -----------------------
                ----- MUSIC VIDEO -----
                -----------------------
              */
            .search-musicvideos-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--musicvideo-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-musicvideo-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto 1fr;
                row-gap: 3px;
            }

            .search-musicvideo-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-musicvideo-artist {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-musicvideo-title {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            .search-musicvideo-genre {
                grid-column: 1 / 3;
                grid-row: 4;
            }

            .search-musicvideo-cover-image {
                width: var(--musicvideo-thumbnail-width);
            }

            .search-musicvideo-cover-image-default {
                width: var(--musicvideo-thumbnail-width);
                height: calc(var(--musicvideo-thumbnail-width) / var(--musicvideo-thumbnail-ratio));
                --mdc-icon-size: calc(var(--musicvideo-thumbnail-width) - 30px);
            }

            /*
                --------------------
                ----- CHANNEL -----
                --------------------
              */
            .search-channels-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--movie-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-channel-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto 1fr;
                row-gap: 3px;
            }

            .search-channel-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-channel-title {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-channel-type {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            .search-channel-cover-image {
                width: var(--movie-thumbnail-width);
            }

            .search-channel-cover-image-default {
                width: var(--movie-thumbnail-width);
                height: calc(var(--movie-thumbnail-width) / var(--movie-thumbnail-ratio));
                --mdc-icon-size: calc((var(--movie-thumbnail-width) / var(--movie-thumbnail-ratio)) - 30px);
            }

            .search-channels-channeltype {
                text-align: center;
                font-weight: bold;
                font-size: 18px;
                padding-top: 20px;
                text-decoration: underline overline;
            }

            /*
          --------------------
          ----- EPISODES -----
          --------------------
          */
            .search-episodes-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--episode-thumbnail-width), 1fr));
                grid-template-rows: auto auto auto 1fr;
            }

            .search-episode-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto;
                row-gap: 3px;
            }

            .search-episode-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-episode-tvshow {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            .search-episode-title {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-episode-genre {
                grid-column: 1 / 3;
                grid-row: 4;
            }

            .search-episode-cover-image {
                width: var(--episode-thumbnail-width);
            }

            .search-episode-cover-image-default {
                width: var(--episode-thumbnail-width);
                height: calc(var(--episode-thumbnail-width) / var(--episode-thumbnail-ratio));
                --mdc-icon-size: calc((var(--episode-thumbnail-width) / var(--episode-thumbnail-ratio)) - 30px);
            }

            /*
            --------------------
              ----- TV SHOWS -----
              --------------------
            */
            .search-tvshows-grid {
                grid-template-columns: repeat(auto-fill, minmax(var(--movie-thumbnail-width), 1fr));
                grid-template-rows: auto;
            }

            .search-tvshow-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-template-rows: auto auto 1fr;
                row-gap: 3px;
            }

            .search-tvshow-cover {
                grid-column: 1 / 2;
                grid-row: 1;
            }

            .search-tvshow-title {
                grid-column: 1 / 3;
                grid-row: 2;
            }

            .search-tvshow-genre {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            .search-tvshow-cover-image {
                width: var(--movie-thumbnail-width);
            }

            .search-tvshow-cover-image-default {
                width: var(--movie-thumbnail-width);
                height: var(--movie-thumbnail-width);
                --mdc-icon-size: calc(var(--movie-thumbnail-width) - 30px);
            }

            /*
              ------------------------
              ----- ALBUM DETAIL -----
              ------------------------
              */

            .search-albumsdetails-grid {
                grid-template-columns: 1fr;
                grid-auto-rows: auto;
            }

            .search-albumdetails-grid {
                grid-template-columns: auto 1fr;
                grid-auto-rows: auto;
                border-bottom: solid;
            }

            .search-albumdetails-cover {
                grid-column: 1;
                grid-row: 1;
            }

            .search-albumdetails-cover-image {
                width: var(--album-thumbnail-width);
            }

            .search-albumdetails-cover-image-default {
                width: var(--album-thumbnail-width);
                height: var(--album-thumbnail-width);
                --mdc-icon-size: calc(var(--album-thumbnail-width) - 30px);
            }

            .search-albumdetails-title {
                width: var(--album-thumbnail-width);
                grid-column: 1;
                grid-row: 2;
                text-align: right;
            }

            .search-albumdetails-duration {
                width: var(--album-thumbnail-width);
                grid-column: 1;
                grid-row: 3;
                font-style: italic;
                text-align: right;
            }

            .search-albumdetails-songs {
                grid-column: 2;
                grid-row: 1 / 5;
            }

            .search-albumdetails-song-grid {
                display: grid;
                grid-template-columns: auto 1fr 25px;
                grid-auto-rows: auto;
                grid-gap: 5px;
                margin-top: 5px;
                margin-bottom: 5px;
                margin-left: 10px;
                margin-right: 10px;
            }

            .search-albumdetails-song-track {
                grid-column: 1;
                grid-row: 1;
            }

            .search-albumdetails-song-title {
                grid-column: 2;
                grid-row: 1;
            }

            .search-albumdetails-song-play {
                grid-column: 3;
                grid-row: 1;
                font-size: 10px;
                text-align: right;
            }

            /*
                  --------------------------------
                  ----- SEASON DETAIL -----
                  --------------------------------
                */
            .search-seasondetails-grid {
                grid-template-columns: auto 1fr;
                grid-auto-rows: auto;
                border-bottom: solid;
            }

            .search-seasondetails-cover {
                grid-column: 1;
                grid-row: 1;
            }

            .search-seasondetails-cover-image {
                width: var(--album-thumbnail-width);
            }

            .search-seasondetails-cover-image-default {
                width: var(--album-thumbnail-width);
                height: var(--album-thumbnail-width);
                --mdc-icon-size: calc(var(--album-thumbnail-width) - 30px);
            }

            .search-seasondetails-title {
                width: var(--album-thumbnail-width);
                grid-column: 1;
                grid-row: 2;
                text-align: right;
            }

            .search-seasondetails-episodes {
                grid-column: 2;
                grid-row: 1 / 4;
            }

            .search-seasondetails-episode-grid {
                display: grid;
                grid-template-columns: auto 1fr auto 25px;
                grid-auto-rows: auto;
                grid-gap: 5px;
                margin-top: 5px;
                margin-bottom: 5px;
                margin-left: 10px;
                margin-right: 10px;
            }
            .search-seasondetails-episode-track {
                grid-column: 1;
                grid-row: 1;
            }

            .search-seasondetails-episode-title {
                grid-column: 2;
                grid-row: 1;
            }

            .search-seasondetails-episode-play {
                grid-column: 4;
                grid-row: 1;
                font-size: 10px;
                text-align: right;
            }

            /* OTHER */
            .song-play,
            .album-play,
            .artist-play,
            .movie-play,
            .tvshow-play,
            .albumdetails-play,
            .seasondetails-play,
            .episode-play,
            .channel-play {
                display: block;
                color: black;
            }

            .song-play:hover,
            .album-play:hover,
            .artist-play:hover,
            .movie-play:hover,
            .tvshow-play:hover,
            .albumdetails-play:hover,
            .albumdetails-song-play:hover,
            .seasondetails-play:hover,
            .seasondetails-episode-play:hover,
            .episode-play:hover,
            channel-play:hover {
                color: red;
            }

            .cover-image-outline-border {
                border: 1px solid var(--outline_color);
            }
        `}_clear(){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"clear"}),this._searchInput&&(this._searchInput.value="")}_search(){let e;this._searchInput&&(e=this._searchInput.value,this._searchInput.value="",this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"search",item:{media_type:"all",value:e}}))}_recently_added(){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"search",item:{media_type:"recently_added"}}),this._searchInput&&(this._searchInput.value="")}_recently_played(){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"search",item:{media_type:"recently_played"}}),this._searchInput&&(this._searchInput.value="")}_addMusicPlaylist(e){this._addItem("filemusicplaylist",e)}_addSong(e){this._addItem("songid",e)}_addAlbum(e){this._addItem("albumid",e)}_addMovie(e){this._addItem("movieid",e)}_addMusicVideo(e){this._addItem("musicvideoid",e)}_addEpisode(e){this._addItem("episodeid",e)}_addEpisodes(e){this._addItem("episodeid",e)}_addChannel(e){this._addItem("channelid",e)}_searchMoreOfArtist(e){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"search",item:{media_type:"artist",value:e}})}_searchMoreOfTvShow(e){this.hass.callService(this._service_domain,"call_method",{entity_id:this.config.entity,method:"search",item:{media_type:"tvshow",value:e}})}_addItem(e,t){const i=_e[this._config_action_mode].method,s={entity_id:this.config.entity,method:i,position:1};s[e.toString()]=t,"add"==i&&(s.position=this.config.add_position?this.config.add_position:0),this.hass.callService(this._service_domain,"call_method",s)}};e([te({attribute:!1})],ye.prototype,"hass",void 0),e([ie()],ye.prototype,"config",void 0),ye=e([X("kodi-search-card")],ye);export{ye as KodiSearchCard};
