_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),l=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var u=f[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var d=o.props[u],p=r[u]||new Set;"name"===u&&i||!p.has(d)?(p.add(d),r[u]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var b=m;t.default=b},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n("nKUr"),o=n("g4pe"),a=n.n(o),i=n("q1tI"),c=n("vRNQ"),l=n.n(c);function s(e){if(Array.isArray(e))return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return s(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||d(e,t)||f()}var m=function(e){var t=e.value,n=e.onChange;return Object(r.jsxs)("div",{className:"mt-2",children:[Object(r.jsx)("label",{htmlFor:"limit_input",className:"text-sm font-normal text-gray-700",children:"Limit"}),Object(r.jsx)("input",{id:"limit_input",type:"number",min:"0",step:"1",value:t.replace(/{|}/g,""),className:"text-input",onChange:function(e){return n(e.target.value?"{".concat(e.target.value,"}"):"")}})]})},b=function(e){var t=e.value,n=e.onChange;return Object(r.jsxs)("div",{className:"flex space-x-2 items-center mt-2",children:[Object(r.jsx)("input",{id:"polymorphic_checkbox",type:"checkbox",checked:"{polymorphic}"==t,onChange:function(e){return n(e.target.checked?"{polymorphic}":"")}}),Object(r.jsx)("label",{htmlFor:"polymorphic_checkbox",className:"font-normal text-gray-700",children:"polymorphic?"})]})};function x(e){return s(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||f()}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.text;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.text=n}var t,n,r;return t=e,(n=[{key:"split",value:function(){var e,t=x(this.text.split(/({[a-z0-9|,]+})/));return[t[0],null!==(e=t.slice(1)[0])&&void 0!==e?e:""]}}])&&h(t.prototype,n),r&&h(t,r),e}();var v=function(e){var t=e.value,n=e.onChange,o=p(t.replace(/{|}/g,"").split(","),2),a=o[0],i=o[1],c=function(e){var t=Object.assign({precision:a,scale:i},e);n("{".concat(t.precision,",").concat(t.scale,"}"))};return Object(r.jsxs)("div",{className:"flex w-full justify-between space-x-2 mt-2",children:[Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("label",{className:"text-sm font-normal text-gray-700",htmlFor:"precision_input",children:"Precision"}),Object(r.jsx)("input",{id:"precision_input",type:"number",value:a,className:"text-input",onChange:function(e){return c({precision:e.target.value})}})]}),Object(r.jsxs)("div",{className:"flex-1",children:[Object(r.jsx)("label",{className:"text-sm font-normal text-gray-700",htmlFor:"scale_input",children:"Scale"}),Object(r.jsx)("input",{id:"scale_input",type:"number",value:i,className:"text-input",onChange:function(e){return c({scale:e.target.value})}})]})]})},y=function(e){var t=e.type,n=e.config,o=e.onChange;switch(t){case"references":return Object(r.jsx)(b,{value:n,onChange:o});case"integer":case"string":case"text":case"binary":return Object(r.jsx)(m,{value:n,onChange:o});case"decimal":return Object(r.jsx)(v,{value:n,onChange:o});default:return null}};function g(e){var t=e.value,n=e.onChange,o=p(new j({text:t}).split(),2),a=o[0],i=o[1],c=function(e){var t=e.newType,r=e.newConfig;n("".concat(t||a).concat(null!==r&&void 0!==r?r:i))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"block font-medium text-gray-700",htmlFor:"field_type",children:"Field Type"}),Object(r.jsx)("aside",{className:"text-sm text-gray-500",children:"Mostly the SQL column type, with some exceptions."}),Object(r.jsxs)("select",{id:"field_type",value:a,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return c({newType:e.target.value,newConfig:""})},children:[Object(r.jsx)("option",{disabled:!0,value:"",children:"-- required --"}),["primary_key","float","boolean","date","time","datetime","references","digest","token","integer","string","text","binary","decimal"].map((function(e){return Object(r.jsx)("option",{children:e},e)}))]}),Object(r.jsx)(y,{type:a,config:i,onChange:function(e){return c({newConfig:e})}})]})}function O(e){var t=e.value,n=e.onUpdate,o=e.onDelete,a=p(t.split(":"),3),i=a[0],c=a[1],l=void 0===c?"":c,s=a[2],u=void 0===s?"":s,d=function(e){var t=Object.assign({fieldName:i,fieldType:l,indexType:u},e);n([t.fieldName,t.fieldType,t.indexType].filter((function(e){return!!e})).join(":"))};return Object(r.jsxs)("div",{className:"flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"attribute_name_input",className:"block font-medium text-gray-700",children:"Name"}),Object(r.jsx)("input",{id:"attribute_name_input",placeholder:"field_name",value:i,onChange:function(e){return d({fieldName:e.target.value})},className:"text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"})]}),Object(r.jsx)("div",{className:"pt-4",children:Object(r.jsx)(g,{value:l,onChange:function(e){return d({fieldType:e})}})}),Object(r.jsxs)("div",{className:"pt-4",children:[Object(r.jsx)("label",{className:"block font-medium text-gray-700",children:"Index Type"}),Object(r.jsxs)("select",{value:u,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return d({indexType:e.target.value})},children:[Object(r.jsx)("option",{value:"",children:"-- optional --"}),["uniq","index"].map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))]})]}),Object(r.jsx)("div",{className:"pt-4",children:Object(r.jsx)("button",{onClick:o,className:"bg-white border border-red-300 rounded-md shadow-sm py-2 px-6 inline-flex justify-center text-sm font-medium text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",children:"Delete"})})]})}function w(e){var t=e.heading,n=e.text,o=e.onClick,a=e.baseColor,i=void 0===a?"green":a,c=e.borderStyle,l=void 0===c?"solid":c,s=e.editable,u=void 0===s||s,d=e.leftIcon;return Object(r.jsxs)("button",{className:"\n        relative py-1 pl-3 pr-2 border border-".concat(l," border-").concat(i,"-400 rounded-md bg-").concat(i,"-100 text-").concat(i,"-800 cursor-pointer break-all\n        hover:bg-").concat(i,"-200\n      "),onClick:o,children:[Object(r.jsx)("span",{className:"absolute left-1 -top-4 text-xs px-1 text-".concat(i,"-500"),children:t}),Object(r.jsxs)("span",{className:"flex items-center",children:[d||Object(r.jsx)("svg",{className:"h-5 w-0"}),Object(r.jsx)("span",{children:n||"......"}),u&&Object(r.jsx)("svg",{className:"ml-1 h-5 w-5 text-".concat(i,"-500 inline"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"})})]})]})}var _=function(e){var t=e.value,n=e.onChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:"Edit Model"}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("label",{htmlFor:"model-name-input",className:"block font-medium text-gray-700",children:"Name"}),Object(r.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased or under_scored"}),Object(r.jsx)("input",{id:"model-name-input",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"ModelName",value:t,onChange:function(e){return n(e.target.value)}})]})]})};function C(){var e,t=Object(i.useState)("ExampleModel"),n=t[0],o=t[1],c=Object(i.useState)(!1),s=c[0],u=c[1],d=Object(i.useState)(null),f=d[0],p=d[1],m=Object(i.useState)(!1),b=m[0],x=m[1],h=Object(i.useState)(["other_model:references{polymorphic}:uniq"]),j=h[0],v=h[1],y=function(e){u(!1),p(null==f||e!=f?e:null)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Rails Generators GUI | GuideRails"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("main",{children:[Object(r.jsx)("div",{className:"max-w-7xl mx-auto lg:py-8 lg:px-8 pb-8",children:Object(r.jsx)("div",{className:"relative pt-16 sm:pt-24 lg:pt-32",children:Object(r.jsx)("div",{className:"mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"text-base font-semibold tracking-wider text-cyan-600 uppercase",children:"GuideRails"}),Object(r.jsx)("p",{className:"mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl",children:"The missing GUI for Rails Generators."})]})})})}),Object(r.jsxs)("div",{className:"bg-gray-100",children:[Object(r.jsx)("div",{className:"max-w-7xl mx-auto lg:px-8",children:Object(r.jsx)("section",{className:"p-4 bg-gray-100 mt-4 flex justify-center",children:Object(r.jsxs)("code",{className:"flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0",children:[Object(r.jsx)("span",{className:"ml-2 mt-5",children:"bin/rails g model"}),Object(r.jsx)(w,{heading:"model",text:n,onClick:function(){p(null),u(!s)},baseColor:"yellow"}),j.map((function(e,t){return Object(r.jsx)(w,{heading:"attribute ".concat(t),text:e,onClick:function(){return y(t)},baseColor:"blue"},t)})),Object(r.jsx)(w,{text:"+ Attribute",baseColor:"gray",borderStyle:"dashed",onClick:function(){y(j.length),v(j.concat([""]))},editable:!1}),Object(r.jsx)(w,{text:b?"Copied!":"Copy",baseColor:"gray",onClick:function(){var e="bin/rails g model ".concat(n," ").concat(j.join(" "));x(!0),navigator.clipboard.writeText(e),setTimeout((function(){return x(!1)}),2e3)},editable:!1,leftIcon:Object(r.jsx)("svg",{className:"mr-2 h-5 w-5 text-gray-500 inline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})})})]})})}),(s||null!=f)&&Object(r.jsx)("div",{className:"max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8",children:Object(r.jsxs)("div",{className:"bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden",children:[s&&Object(r.jsx)("section",{"aria-labelledby":"model_name_editor",children:Object(r.jsx)(_,{value:n,onChange:o})}),null!=f&&Object(r.jsxs)("section",{id:"fields","aria-labelledby":"attribute_editor",children:[Object(r.jsxs)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:["Edit Attribute ",f]}),Object(r.jsx)(O,{value:j[f],onUpdate:(e=f,function(t){var n=j.slice();n[e]=t,v(n)}),onDelete:function(){return function(e){var t=j.slice();t.splice(e,1),p(null),v(t)}(f)}})]})]})})]})]}),Object(r.jsxs)("footer",{className:l.a.footer,children:["a project by\xa0",Object(r.jsx)("a",{href:"https://www.wasabigeek.com",target:"_blank",rel:"noopener noreferrer",children:"wasabigeek"})]})]})}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),l=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},g4pe:function(e,t,n){e.exports=n("8Kt/")},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);