_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+Voe":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/migration",function(){return n("r27Y")}])},"3Svu":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),o=n("OOn4");t.a=function(e){var t=e.text,n=Object(a.useState)(!1),c=n[0],s=n[1];return Object(r.jsx)(o.a,{text:c?"Copied!":"Copy",baseColor:"gray",onClick:function(){s(!0),navigator.clipboard.writeText(t),setTimeout((function(){return s(!1)}),2e3)},editable:!1,leftIcon:Object(r.jsx)("svg",{className:"mr-2 h-5 w-5 text-gray-500 inline",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})})})}},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},mrSG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}Object.create;Object.create},r27Y:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return F}));var r=n("z7pX"),a=n("xvhg"),o=n("nKUr"),c=n("g4pe"),s=n.n(c),i=n("q1tI"),l=n("mrSG"),u=function(e){void 0===e&&(e={});var t=Object(i.useState)(e),n=t[0],r=t[1],a=Object(i.useMemo)((function(){return{set:function(e,t){r((function(n){var r;return Object(l.a)(Object(l.a)({},n),((r={})[e]=t,r))}))},setAll:function(e){r(e)},remove:function(e){r((function(t){var n=t,r=e;n[r];return Object(l.b)(n,["symbol"===typeof r?r:r+""])}))},reset:function(){return r(e)}}}),[r]),o=Object(l.a)({get:Object(i.useCallback)((function(e){return n[e]}),[n])},a);return[n,o]},m=n("jObW"),b=n("OOn4"),d=n("cpVT");function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={ADD_COLUMNS:"AddColumnsToTable",REMOVE_COLUMNS:"RemoveColumnsFromTable",JOIN_TABLE:"CreateModelJoinTable",CUSTOM:"Custom Migration"};function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return(h=x()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&j(a,n.prototype),a}).apply(null,arguments)}function y(e){var t="function"===typeof Map?new Map:void 0;return(y=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,O(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,e)})(e)}function v(e,t){v=function(e,t){return new o(e,void 0,t)};var n=y(RegExp),r=RegExp.prototype,a=new WeakMap;function o(e,t,r){var o=n.call(this,e,t);return a.set(o,r||a.get(e)),o}function c(e,t){var n=a.get(t);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return g(o,n),o.prototype.exec=function(e){var t=r.exec.call(this,e);return t&&(t.groups=c(t,this)),t},o.prototype[Symbol.replace]=function(e,t){if("string"===typeof t){var n=a.get(this);return r[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+n[t]})))}if("function"===typeof t){var o=this;return r[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==typeof e[e.length-1]&&e.push(c(e,o)),t.apply(this,e)}))}return r[Symbol.replace].call(this,e,t)},v.apply(this,arguments)}var N=function(e){var t=e.match(v(/^Add([0-9A-Z_a-z]+)To([0-9A-Z_a-z]+)/,{columnsName:1,tableName:2}));if(t)return[p.ADD_COLUMNS,{columnsName:t.groups.columnsName,tableName:t.groups.tableName}];var n=e.match(v(/^Remove([0-9A-Z_a-z]+)From([0-9A-Z_a-z]+)/,{columnsName:1,tableName:2}));if(n)return[p.REMOVE_COLUMNS,{columnsName:n.groups.columnsName,tableName:n.groups.tableName}];var r=e.match(v(/^(Create)?([0-9A-Z_a-z]+)?JoinTable$/,{sourceTable:2}));return r?[p.JOIN_TABLE,{sourceTable:r.groups.sourceTable||null}]:[p.CUSTOM,{name:e}]},w=function(e){var t=e.initialName,n=e.onChange,r=N(t),c=Object(a.a)(r,2),s=(c[0],c[1]),i=u(Object.assign({columnsName:"",tableName:""},s)),l=Object(a.a)(i,2),m=l[0],b=l[1].set,d=function(e){var t=Object.assign(m,e);Object.entries(e).forEach((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return b(n,r)})),t.columnsName&&t.tableName&&n("Add".concat(t.columnsName,"To").concat(t.tableName))};return Object(o.jsxs)("div",{className:"pt-4",children:[Object(o.jsx)("label",{className:"block font-medium text-gray-700",children:"Name"}),Object(o.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),"Add",Object(o.jsx)("input",{"data-testid":"add-columns-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:m.columnsName,onChange:function(e){return d({columnsName:e.target.value})}}),"To",Object(o.jsx)("input",{"data-testid":"add-to-table-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Table",value:m.tableName,onChange:function(e){return d({tableName:e.target.value})}})]})},C=function(e){var t=e.initialName,n=e.onChange,r=Object(i.useState)(t),a=r[0],c=r[1],s=function(e){c(e),e&&n(e)};return Object(o.jsxs)("div",{className:"pt-4",children:[Object(o.jsx)("label",{htmlFor:"model-name-input",className:"block font-medium text-gray-700",children:"Name"}),Object(o.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),Object(o.jsx)("input",{id:"model-name-input","data-testid":"add-columns-name",className:"text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900",placeholder:"CustomMigrationName",value:a,onChange:function(e){return s(e.target.value)}})]})},_=function(e){var t=e.initialName,n=e.onChange,r=Object(i.useState)(t),a=r[0],c=r[1],s=function(e){c(e),e&&n("".concat(e,"JoinTable"))};return Object(o.jsxs)("div",{className:"pt-4",children:[Object(o.jsx)("label",{htmlFor:"migration-prefix-input",className:"block font-medium text-gray-700",children:"Name"}),Object(o.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),Object(o.jsx)("input",{id:"migration-prefix-input","data-testid":"migration-prefix",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:a,onChange:function(e){return s(e.target.value)}}),"JoinTable"]})},S=function(e){var t=e.initialName,n=e.onChange,r=N(t),c=Object(a.a)(r,2),s=(c[0],c[1]),i=u(Object.assign({columnsName:"",tableName:""},s)),l=Object(a.a)(i,2),m=l[0],b=l[1].set,d=function(e){var t=Object.assign(m,e);Object.entries(e).forEach((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return b(n,r)})),t.columnsName&&t.tableName&&n("Remove".concat(t.columnsName,"From").concat(t.tableName))};return Object(o.jsxs)("div",{className:"pt-4",children:[Object(o.jsx)("label",{className:"block font-medium text-gray-700",children:"Name"}),Object(o.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),"Remove",Object(o.jsx)("input",{"data-testid":"remove-columns-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:m.columnsName,onChange:function(e){return d({columnsName:e.target.value})}}),"From",Object(o.jsx)("input",{"data-testid":"remove-from-table-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Table",value:m.tableName,onChange:function(e){return d({tableName:e.target.value})}})]})};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E=function(e){var t=e.format,n=f(e,["format"]),r=C;switch(t){case p.ADD_COLUMNS:r=w;break;case p.REMOVE_COLUMNS:r=S;break;case p.JOIN_TABLE:r=_}return Object(o.jsx)(r,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))},k=function(e){var t=e.initialName,n=void 0===t?"":t,r=e.format,a=void 0===r?p.CUSTOM:r,c=e.onChangeName,s=e.onChangeFormat;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:"Edit Migration"}),Object(o.jsxs)("div",{className:"flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{className:"block font-medium text-gray-700",htmlFor:"migration_format",children:"Format"}),Object(o.jsx)("select",{id:"migration_format",value:a,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return s(e.target.value)},children:Object.values(p).map((function(e){return Object(o.jsx)("option",{children:e},e)}))})]}),Object(o.jsx)(E,{format:a,initialName:n,onChange:c})]})]})},M=n("3Svu"),U=n("Sp9w"),A=n("6591"),I=function(e){var t=e.initialValue,n=void 0===t?"":t,r=e.onUpdate,c=e.selectedIndex,s=n.split(":"),l=Object(a.a)(s,2),u=l[0],m=l[1],b=Object(i.useState)(u),d=b[0],f=b[1],p=Object(i.useState)(m||""),j=p[0],g=p[1],O=function(e){e.tableName&&f(e.tableName),e.indexType&&g(e.indexType);var t=Object.assign({tableName:d,indexType:j},e);t.tableName&&r("".concat(t.tableName).concat(t.indexType&&":"+t.indexType))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:["Edit Table ",c]}),Object(o.jsxs)("div",{className:"flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"attribute_name_input",className:"block font-medium text-gray-700",children:"Name"}),Object(o.jsx)("input",{id:"attribute_name_input",placeholder:"table_name",value:d,onChange:function(e){return O({tableName:e.target.value})},className:"text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"})]}),Object(o.jsxs)("div",{className:"pt-4",children:[Object(o.jsx)("label",{className:"block font-medium text-gray-700",children:"Index Type"}),Object(o.jsxs)("select",{value:j,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return O({indexType:e.target.value})},children:[Object(o.jsx)("option",{value:"",children:"-- optional --"}),["uniq","index"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))]})]})]})]})},R=function(e){var t=e.attributes,n=e.onAppend,r=e.onSelect,a=e.selectedIndex;return Object(o.jsxs)(o.Fragment,{children:[t.map((function(e,t){return Object(o.jsx)(b.a,{heading:"attribute ".concat(t),text:e,onClick:function(){return r(t)},selected:a==t,baseColor:"blue"},t)})),Object(o.jsx)(b.a,{text:"+ Attribute",baseColor:"gray",borderStyle:"dashed",onClick:n,editable:!1})]})},P=function(e){var t=e.args,n=e.onSelect,r=e.selectedIndex;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{text:t[0]||"...",heading:"table 0",onClick:function(){return n(0)},selected:0==r,baseColor:"blue"}),Object(o.jsx)(b.a,{text:t[1]||"...",heading:"table 1",onClick:function(){return n(1)},baseColor:"blue",selected:1==r})]})},D="AddExampleColumnsToExampleTable",L=N(D),G=Object(a.a)(L,1)[0];function F(){var e=Object(i.useState)(null),t=e[0],n=e[1],c=Object(i.useState)(0),l=c[0],d=c[1],f=u({format:G,name:D,arguments:["other_model:references"]}),j=Object(a.a)(f,2),g=j[0],O=j[1].set,x=["bin/rails g migration",g.name].concat(Object(r.a)(g.arguments)).filter((function(e){return!!e})).join(" "),h=function(e){"arguments"==t&&l==e?(n(null),d(0)):(n("arguments"),d(e))},y=function(e,t){var n=g.arguments.slice();n[e]=t,O("arguments",n)},v=function(e){switch(console.log(e),e){case p.JOIN_TABLE:O("arguments",["",""]);break;default:O("arguments",[])}O("format",e)};return Object(o.jsxs)("div",{children:[Object(o.jsxs)(s.a,{children:[Object(o.jsx)("title",{children:"Rails Migration Generator GUI | rails.help"}),Object(o.jsx)("meta",{name:"title",content:"Rails Generators GUI | rails.help"}),Object(o.jsx)("meta",{name:"description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),Object(o.jsx)("meta",{property:"og:type",content:"website"}),Object(o.jsx)("meta",{property:"og:url",content:"https://rails.help/"}),Object(o.jsx)("meta",{property:"og:title",content:"Rails Generators GUI | rails.help"}),Object(o.jsx)("meta",{property:"og:description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),Object(o.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(o.jsx)("meta",{property:"twitter:url",content:"https://rails.help/"}),Object(o.jsx)("meta",{property:"twitter:title",content:"Rails Generators GUI | rails.help"}),Object(o.jsx)("meta",{property:"twitter:description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),Object(o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(o.jsxs)("main",{children:[Object(o.jsx)(A.a,{}),Object(o.jsxs)("div",{className:"bg-gray-100",children:[Object(o.jsx)("div",{className:"max-w-7xl mx-auto lg:px-8",children:Object(o.jsx)("section",{className:"p-4 bg-gray-100 mt-4 flex justify-center",children:Object(o.jsxs)("code",{className:"flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0",children:[Object(o.jsx)("span",{className:"ml-2 mt-5",children:"bin/rails g migration"}),Object(o.jsx)(b.a,{heading:"migration",text:g.name,onClick:function(){return e="name",void n("name"==t?null:e);var e},selected:"name"==t,baseColor:"yellow"}),[p.ADD_COLUMNS,p.REMOVE_COLUMNS].includes(g.format)?Object(o.jsx)(R,{attributes:g.arguments,onAppend:function(){d(g.arguments.length),n("arguments"),O("arguments",g.arguments.concat([""]))},onSelect:h,selectedIndex:"arguments"==t?l:null}):p.JOIN_TABLE==g.format?Object(o.jsx)(P,{args:g.arguments,onSelect:h,selectedIndex:"arguments"==t?l:null}):null,Object(o.jsx)(M.a,{text:x})]})})}),null!=t&&Object(o.jsx)("div",{className:"max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8",children:Object(o.jsx)("div",{className:"bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden",children:function(e,t){switch(e){case"name":return Object(o.jsx)("section",{"aria-labelledby":"model_name_editor",children:Object(o.jsx)(k,{initialName:g.name,format:g.format,onChangeFormat:v,onChangeName:function(e){return O("name",e)}})});case"arguments":return[p.ADD_COLUMNS,p.REMOVE_COLUMNS].includes(g.format)?Object(o.jsxs)("section",{id:"fields","aria-labelledby":"attribute_editor",children:[Object(o.jsxs)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:["Edit Attribute ",l]}),Object(o.jsx)(m.a,{value:g.arguments[l],onUpdate:function(e){return y(t,e)},onDelete:function(){return function(e){var t=[].concat(Object(r.a)(g.arguments.slice(0,e)),Object(r.a)(g.arguments.slice(e+1)));n(null),d(0),O("arguments",t)}(t)}})]}):Object(o.jsx)("section",{id:"fields","aria-labelledby":"attribute_editor",children:Object(o.jsx)(I,{initialValue:g.arguments[l],onUpdate:function(e){return y(t,e)},selectedIndex:l})},l)}}(t,l)})})]})]}),Object(o.jsx)(U.a,{})]})}}},[["+Voe",0,2,1,3]]]);