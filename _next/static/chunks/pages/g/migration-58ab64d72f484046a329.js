(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{3574:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(7131),r=n(9056),o=n(9008),s=n(7294);var i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.create;Object.create;var l=function(e){void 0===e&&(e={});var t=(0,s.useState)(e),n=t[0],a=t[1],r=(0,s.useMemo)((function(){return{set:function(e,t){a((function(n){var a;return i(i({},n),((a={})[e]=t,a))}))},setAll:function(e){a(e)},remove:function(e){a((function(t){var n=t,a=e;n[a];return function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(n,["symbol"===typeof a?a:a+""])}))},reset:function(){return a(e)}}}),[a]),o=i({get:(0,s.useCallback)((function(e){return n[e]}),[n])},r);return[n,o]},c=n(1593),u=n(4673),m=n(2809);function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f={ADD_COLUMNS:"AddColumnsToTable",REMOVE_COLUMNS:"RemoveColumnsFromTable",JOIN_TABLE:"CreateModelJoinTable",CUSTOM:"Custom Migration"};function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function b(){b=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,a,r){var o=new RegExp(e,a);return t.set(o,r||t.get(e)),p(o,n.prototype)}function a(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){return t[n]=e[a[n]],t}),Object.create(null))}return g(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);return n&&(n.groups=a(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"===typeof r){var o=t.get(this);return e[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"===typeof r){var s=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!==typeof e[e.length-1]&&(e=[].slice.call(e)).push(a(e,s)),r.apply(this,e)}))}return e[Symbol.replace].call(this,n,r)},b.apply(this,arguments)}var x=function(e){var t=e.match(b(/^Add([0-9A-Z_a-z]+)To([0-9A-Z_a-z]+)/,{columnsName:1,tableName:2}));if(t)return[f.ADD_COLUMNS,{columnsName:t.groups.columnsName,tableName:t.groups.tableName}];var n=e.match(b(/^Remove([0-9A-Z_a-z]+)From([0-9A-Z_a-z]+)/,{columnsName:1,tableName:2}));if(n)return[f.REMOVE_COLUMNS,{columnsName:n.groups.columnsName,tableName:n.groups.tableName}];var a=e.match(b(/^(Create)?([0-9A-Z_a-z]+)?JoinTable$/,{sourceTable:2}));return a?[f.JOIN_TABLE,{sourceTable:a.groups.sourceTable||null}]:[f.CUSTOM,{name:e}]},h=n(5893),y=function(e){var t=e.initialName,n=e.onChange,a=x(t),o=(0,r.Z)(a,2),s=(o[0],o[1]),i=l(Object.assign({columnsName:"",tableName:""},s)),c=(0,r.Z)(i,2),u=c[0],m=c[1].set,d=function(e){var t=Object.assign(u,e);Object.entries(e).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return m(n,a)})),t.columnsName&&t.tableName&&n("Add".concat(t.columnsName,"To").concat(t.tableName))};return(0,h.jsxs)("div",{className:"pt-4",children:[(0,h.jsx)("label",{className:"block font-medium text-gray-700",children:"Name"}),(0,h.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),"Add",(0,h.jsx)("input",{"data-testid":"add-columns-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:u.columnsName,onChange:function(e){return d({columnsName:e.target.value})}}),"To",(0,h.jsx)("input",{"data-testid":"add-to-table-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Table",value:u.tableName,onChange:function(e){return d({tableName:e.target.value})}})]})},j=function(e){var t=e.initialName,n=e.onChange,a=(0,s.useState)(t),r=a[0],o=a[1],i=function(e){o(e),e&&n(e)};return(0,h.jsxs)("div",{className:"pt-4",children:[(0,h.jsx)("label",{htmlFor:"model-name-input",className:"block font-medium text-gray-700",children:"Name"}),(0,h.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),(0,h.jsx)("input",{id:"model-name-input","data-testid":"add-columns-name",className:"text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900",placeholder:"CustomMigrationName",value:r,onChange:function(e){return i(e.target.value)}})]})},N=function(e){var t=e.initialName,n=e.onChange,a=(0,s.useState)(t),r=a[0],o=a[1],i=function(e){o(e),e&&n("".concat(e,"JoinTable"))};return(0,h.jsxs)("div",{className:"pt-4",children:[(0,h.jsx)("label",{htmlFor:"migration-prefix-input",className:"block font-medium text-gray-700",children:"Name"}),(0,h.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),(0,h.jsx)("input",{id:"migration-prefix-input","data-testid":"migration-prefix",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:r,onChange:function(e){return i(e.target.value)}}),"JoinTable"]})},v=function(e){var t=e.initialName,n=e.onChange,a=x(t),o=(0,r.Z)(a,2),s=(o[0],o[1]),i=l(Object.assign({columnsName:"",tableName:""},s)),c=(0,r.Z)(i,2),u=c[0],m=c[1].set,d=function(e){var t=Object.assign(u,e);Object.entries(e).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return m(n,a)})),t.columnsName&&t.tableName&&n("Remove".concat(t.columnsName,"From").concat(t.tableName))};return(0,h.jsxs)("div",{className:"pt-4",children:[(0,h.jsx)("label",{className:"block font-medium text-gray-700",children:"Name"}),(0,h.jsx)("aside",{className:"text-sm text-gray-500",children:"CamelCased"}),"Remove",(0,h.jsx)("input",{"data-testid":"remove-columns-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Columns",value:u.columnsName,onChange:function(e){return d({columnsName:e.target.value})}}),"From",(0,h.jsx)("input",{"data-testid":"remove-from-table-name",className:"mt-1 mx-2 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm",placeholder:"Table",value:u.tableName,onChange:function(e){return d({tableName:e.target.value})}})]})},O=["format"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=function(e){var t=e.format,n=d(e,O),a=j;switch(t){case f.ADD_COLUMNS:a=y;break;case f.REMOVE_COLUMNS:a=v;break;case f.JOIN_TABLE:a=N}return(0,h.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))},_=function(e){var t=e.initialName,n=void 0===t?"":t,a=e.format,r=void 0===a?f.CUSTOM:a,o=e.onChangeName,s=e.onChangeFormat;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:"Edit Migration"}),(0,h.jsxs)("div",{className:"flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{className:"block font-medium text-gray-700",htmlFor:"migration_format",children:"Format"}),(0,h.jsx)("select",{id:"migration_format",value:r,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return s(e.target.value)},children:Object.values(f).map((function(e){return(0,h.jsx)("option",{children:e},e)}))})]}),(0,h.jsx)(w,{format:r,initialName:n,onChange:o})]})]})},S=n(6909),T=n(4429),E=n(8126),k=function(e){var t=e.initialValue,n=void 0===t?"":t,a=e.onUpdate,o=e.selectedIndex,i=n.split(":"),l=(0,r.Z)(i,2),c=l[0],u=l[1],m=(0,s.useState)(c),d=m[0],f=m[1],p=(0,s.useState)(u||""),g=p[0],b=p[1],x=function(e){e.tableName&&f(e.tableName),e.indexType&&b(e.indexType);var t=Object.assign({tableName:d,indexType:g},e);t.tableName&&a("".concat(t.tableName).concat(t.indexType&&":"+t.indexType))};return(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:["Edit Table ",o]}),(0,h.jsxs)("div",{className:"flex flex-col justify-between mt-4 space-y-6 divide-y divide-gray-100",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"attribute_name_input",className:"block font-medium text-gray-700",children:"Name"}),(0,h.jsx)("input",{id:"attribute_name_input",placeholder:"table_name",value:d,onChange:function(e){return x({tableName:e.target.value})},className:"text-input focus:outline-none focus:ring-gray-900 focus:border-gray-900"})]}),(0,h.jsxs)("div",{className:"pt-4",children:[(0,h.jsx)("label",{className:"block font-medium text-gray-700",children:"Index Type"}),(0,h.jsxs)("select",{value:g,className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",onChange:function(e){return x({indexType:e.target.value})},children:[(0,h.jsx)("option",{value:"",children:"-- optional --"}),["uniq","index"].map((function(e){return(0,h.jsx)("option",{value:e,children:e},e)}))]})]})]})]})},Z=n(906),M=function(e){var t=e.attributes,n=e.onAppend,a=e.onSelect,r=e.selectedIndex;return(0,h.jsxs)(h.Fragment,{children:[t.map((function(e,t){return(0,h.jsx)(u.Z,{heading:"attribute ".concat(t),text:e,onClick:function(){return a(t)},selected:r==t,baseColor:"blue"},t)})),(0,h.jsx)(u.Z,{text:"+ Attribute",baseColor:"gray",borderStyle:"dashed",onClick:n,editable:!1})]})},U=function(e){var t=e.args,n=e.onSelect,a=e.selectedIndex;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Z,{text:t[0]||"...",heading:"table 0",onClick:function(){return n(0)},selected:0==a,baseColor:"blue"}),(0,h.jsx)(u.Z,{text:t[1]||"...",heading:"table 1",onClick:function(){return n(1)},baseColor:"blue",selected:1==a})]})},A="AddExampleColumnsToExampleTable",I=x(A),R=(0,r.Z)(I,1)[0];function P(){var e=(0,s.useState)(null),t=e[0],n=e[1],i=(0,s.useState)(0),m=i[0],d=i[1],p=l({format:R,name:A,arguments:["other_model:references"]}),g=(0,r.Z)(p,2),b=g[0],x=g[1].set,y=["bin/rails g migration",b.name].concat((0,a.Z)(b.arguments)).filter((function(e){return!!e})).join(" "),j=function(e){"arguments"==t&&m==e?(n(null),d(0)):(n("arguments"),d(e))},N=function(e,t){var n=b.arguments.slice();n[e]=t,x("arguments",n)},v=function(e){switch(console.log(e),e){case f.JOIN_TABLE:x("arguments",["",""]);break;default:x("arguments",[])}x("format",e)};return(0,h.jsxs)("div",{children:[(0,h.jsxs)(o.default,{children:[(0,h.jsx)("title",{children:"Rails Migration Generator GUI | rails.help"}),(0,h.jsx)("meta",{name:"title",content:"Rails Generators GUI | rails.help"}),(0,h.jsx)("meta",{name:"description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),(0,h.jsx)("meta",{property:"og:type",content:"website"}),(0,h.jsx)("meta",{property:"og:url",content:"https://wasabigeek.github.io/railshelp/"}),(0,h.jsx)("meta",{property:"og:title",content:"Rails Generators GUI | rails.help"}),(0,h.jsx)("meta",{property:"og:description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),(0,h.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,h.jsx)("meta",{property:"twitter:url",content:"https://wasabigeek.github.io/railshelp/"}),(0,h.jsx)("meta",{property:"twitter:title",content:"Rails Generators GUI | rails.help"}),(0,h.jsx)("meta",{property:"twitter:description",content:"Can't remember the args for Rails generators? Us too, so we made a GUI. Go forth and generate!"}),(0,h.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,h.jsxs)("main",{children:[(0,h.jsx)(E.Z,{}),(0,h.jsx)(Z.X,{title:"Migration Generator"}),(0,h.jsxs)("div",{className:"bg-gray-100",children:[(0,h.jsx)("div",{className:"max-w-7xl mx-auto lg:px-8",children:(0,h.jsx)("section",{className:"p-6 bg-gray-100 mt-4 flex justify-center",children:(0,h.jsxs)("code",{className:"flex flex-wrap items-center space-x-2 space-y-5 pb-4 pt-0",children:[(0,h.jsx)("span",{className:"ml-2 mt-5",children:"bin/rails g migration"}),(0,h.jsx)(u.Z,{heading:"migration",text:b.name,onClick:function(){return e="name",void n("name"==t?null:e);var e},selected:"name"==t,baseColor:"yellow"}),[f.ADD_COLUMNS,f.REMOVE_COLUMNS].includes(b.format)?(0,h.jsx)(M,{attributes:b.arguments,onAppend:function(){d(b.arguments.length),n("arguments"),x("arguments",b.arguments.concat([""]))},onSelect:j,selectedIndex:"arguments"==t?m:null}):f.JOIN_TABLE==b.format?(0,h.jsx)(U,{args:b.arguments,onSelect:j,selectedIndex:"arguments"==t?m:null}):null,(0,h.jsx)(S.Z,{text:y})]})})}),null!=t&&(0,h.jsx)("div",{className:"max-w-7xl mx-auto pb-10 lg:pb-12 lg:px-8",children:(0,h.jsx)("div",{className:"bg-white py-6 px-4 sm:p-6 shadow sm:rounded-md sm:overflow-hidden",children:function(e,t){switch(e){case"name":return(0,h.jsx)("section",{"aria-labelledby":"model_name_editor",children:(0,h.jsx)(_,{initialName:b.name,format:b.format,onChangeFormat:v,onChangeName:function(e){return x("name",e)}})});case"arguments":return[f.ADD_COLUMNS,f.REMOVE_COLUMNS].includes(b.format)?(0,h.jsxs)("section",{id:"fields","aria-labelledby":"attribute_editor",children:[(0,h.jsxs)("h2",{className:"text-xl leading-6 font-medium text-gray-900",children:["Edit Attribute ",m]}),(0,h.jsx)(c.Z,{value:b.arguments[m],onUpdate:function(e){return N(t,e)},onDelete:function(){return function(e){var t=[].concat((0,a.Z)(b.arguments.slice(0,e)),(0,a.Z)(b.arguments.slice(e+1)));n(null),d(0),x("arguments",t)}(t)}})]}):(0,h.jsx)("section",{id:"fields","aria-labelledby":"attribute_editor",children:(0,h.jsx)(k,{initialValue:b.arguments[m],onUpdate:function(e){return N(t,e)},selectedIndex:m})},m)}}(t,m)})})]})]}),(0,h.jsx)(T.Z,{})]})}},7768:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/migration",function(){return n(3574)}])}},function(e){e.O(0,[68,980,774,888,179],(function(){return t=7768,e(e.s=t);var t}));var t=e.O();_N_E=t}]);