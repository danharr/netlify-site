(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"i",function(){return m}),n.d(e,"j",function(){return v}),n.d(e,"a",function(){return y}),n.d(e,"o",function(){return x}),n.d(e,"e",function(){return w}),n.d(e,"f",function(){return _}),n.d(e,"c",function(){return O}),n.d(e,"n",function(){return j}),n.d(e,"h",function(){return C}),n.d(e,"p",function(){return $}),n.d(e,"k",function(){return P}),n.d(e,"m",function(){return R}),n.d(e,"d",function(){return S}),n.d(e,"b",function(){return T}),n.d(e,"g",function(){return D}),n.d(e,"l",function(){return N});n(48),n(25);var r=n(36),o=(n(88),n(126),n(127),n(27)),c=(n(129),n(131),n(132),n(135),n(63),n(43),n(5)),f=(n(67),n(26),n(14),n(35),n(61),n(15)),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach(function(e){Object(f.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}function m(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function v(t){return t.then(function(t){return t.default||t})}function y(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),h({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function x(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function O(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function j(t){return Promise.all(O(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=x(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,j(e);case 4:return t.abrupt("return",h({},e,{meta:w(e).map(function(t,n){return h({},t.options.meta,{},(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,f,l,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=B(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,f=Object(r.a)(c,2),l=f[0],d=f[1],n.route&&(e.context.route=l),n.from&&(e.context.from=d),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function P(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():R(t[0],e).then(function(){return P(t.slice(1),e)})}function R(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function S(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function T(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?L:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],d=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(d=o(l[h]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===h?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):o(l),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');path+=f.prefix+d}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=A.exec(t));){var l=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+l.length,d)path+=d[1];else{var m=t[c],v=n[2],y=n[3],x=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var j=null!=v&&null!=m&&m!==v,C="+"===_||"*"===_,k="?"===_||"*"===_,$=n[2]||f,pattern=x||w;r.push({name:y||o++,prefix:v||"",delimiter:$,optional:k,repeat:C,partial:j,asterisk:Boolean(O),pattern:pattern?I(pattern):O?".*":"[^"+M($)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function D(t,e){var n={},r=h({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return h({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var A=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function M(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,f=t.split("/"),l=(n?n+"://":"//")+f.shift(),path=f.filter(Boolean).join("/");if(2===(f=path.split("#")).length){var d=f,h=Object(r.a)(d,2);path=h[0],c=h[1]}return l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=c?"#"+c:""}},140:function(t,e,n){"use strict";var r=n(49);n.n(r).a},141:function(t,e,n){"use strict";var r=n(50);n.n(r).a},142:function(t,e,n){},143:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{sidebar:!1}},o={toggleSidebar:function(t){t.sidebar=!t.sidebar}}},18:function(t,e,n){"use strict";n(48),n(25),n(26),n(35),n(14);var r=n(15),o=(n(43),n(5)),c=(n(61),n(0)),f=n(90),l=n.n(f),d=n(65),h=n(1),m=function(){return Object(h.j)(n.e(2).then(n.bind(null,157)))},v=function(){return Object(h.j)(n.e(3).then(n.bind(null,155)))},y=function(){return Object(h.j)(n.e(4).then(n.bind(null,159)))},x=function(){return Object(h.j)(n.e(5).then(n.bind(null,156)))},w=function(){return Object(h.j)(n.e(7).then(n.bind(null,158)))},_=function(){return Object(h.j)(n.e(6).then(n.bind(null,154)))};c.default.use(d.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var O=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var j=n(91);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var k=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},n.n(j).a,{name:"NoSsr"}),$={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,f=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;data.nuxtChildDepth=l;var d=c[l]||f,h={};E.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};P.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var y=[t("router-view",data)];return r.keepAlive&&(y=[t("keep-alive",{props:r.keepAliveProps},y)]),t("transition",{props:h,on:m},y)}},E=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],P=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],R={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},S=(n(140),n(19)),T=Object(S.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,D=(n(63),n(36)),N={name:"Nuxt",components:{NuxtChild:$,NuxtError:T},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(h.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(D.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},A={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},L=(n(141),Object(S.a)(A,void 0,void 0,!1,null,null,null).exports),M=(n(142),{data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"apps",title:"Home",to:"/"},{icon:"bubble_chart",title:"About Me",to:"/about"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Dan's blog"}}}),I={_default:Object(S.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},on:{"update:miniVariant":function(e){t.miniVariant=e},"update:mini-variant":function(e){t.miniVariant=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,i){return n("v-list-tile",{key:i,attrs:{router:"",to:e.to,exact:""}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),1)],1),t._v(" "),n("v-toolbar",{attrs:{fixed:"",app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"\\"}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}})],1),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-content",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},[],!1,null,null,null).exports},B={head:{title:"Dan Harrington Blog",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js + Vuetify.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&I["_"+t]||(t="default"),this.layoutName=t,this.layout=I["_"+t],this.layout},loadLayout:function(t){return t&&I["_"+t]||(t="default"),Promise.resolve(I["_"+t])}},components:{NuxtLoading:L}},U=(n(59),n(88),n(66));c.default.use(U.a);var H={};(H=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),J(t,e)}(n(143),"store/index.js")).modules=H.modules||{};var V=H instanceof Function?H:function(){return new U.a.Store(Object.assign({strict:!1},H))};function J(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}var F=n(92),K=n.n(F);function Q(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function X(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Q(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):Q(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var z=function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof(r={dev:!0,debug:{},id:"UA-82193514-1"}).asyncID){t.next=5;break}return t.next=4,r.asyncID(e);case 4:r.id=t.sent;case 5:c.default.use(K.a,X({},{router:e.app.router},{},r)),e.$ga=c.default.$ga,n("ga",c.default.$ga);case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),W=n(93),Y=n.n(W);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}function Z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}c.default.use(Y.a),n.d(e,"b",function(){return et}),n.d(e,"a",function(){return T}),c.default.component(k.name,k),c.default.component($.name,$),c.default.component("NChild",$),c.default.component(N.name,N),c.default.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var tt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function et(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,f,l,j,path,C;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:O,routes:[{path:"/about",component:m,name:"about"},{path:"/career-vuetify-timeline-cv",component:v,name:"career-vuetify-timeline-cv"},{path:"/dreams-ps4-early-access",component:y,name:"dreams-ps4-early-access"},{path:"/first-post",component:x,name:"first-post"},{path:"/nest-outdoor-iq-review",component:w,name:"nest-outdoor-iq-review"},{path:"/",component:_,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=V(e)).$router=n,o=r.registerModule,r.registerModule=function(path,t,e){return o.call(r,path,t,Object.assign({preserveState:!0},e))},f=Z({router:n,store:r,nuxt:{defaultTransition:tt,transitions:[tt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},tt,{name:t}):Object.assign({},tt,t):tt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,f.context._errored=Boolean(t),t=t?Object(h.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},B),r.app=f,l=e?e.next:function(t){return f.router.push(t)},e?j=n.resolve(e.url).route:(path=Object(h.d)(n.options.base),j=n.resolve(path).route),t.next=13,Object(h.p)(f,{route:j,next:l,error:f.nuxt.error.bind(f),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 13:if(C=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");f[t="$"+t]=e,r[t]=f[t];var n="__nuxt_"+t+"_installed__";c.default[n]||(c.default[n]=!0,c.default.use(function(){c.default.prototype.hasOwnProperty(t)||Object.defineProperty(c.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof z){t.next=18;break}return t.next=18,z(f.context,C);case 18:t.next=21;break;case 21:t.next=24;break;case 24:return t.abrupt("return",{app:f,store:r,router:n});case 25:case"end":return t.stop()}},t)}))).apply(this,arguments)}},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n(14),n(76),n(25),n(26),n(59),n(80);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,f=t[Symbol.iterator]();!(e=(o=f.next()).done);e=!0){var l=o.value,d=l();d instanceof Promise&&d.catch(function(){}),l.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==f.return||f.return()}finally{if(n)throw r}}}}}}},64:function(t,e,n){"use strict";e.a={}},94:function(t,e,n){t.exports=n(95)},95:function(t,e,n){"use strict";n.r(e),function(t){n(67),n(76),n(25);var e=n(27),r=(n(43),n(105),n(5)),o=(n(59),n(80),n(26),n(14),n(35),n(61),n(83),n(109),n(121),n(123),n(0)),c=n(89),f=n(64),l=n(1),d=n(18),h=n(51);o.default.component(h.a.name,h.a),o.default.component("NLink",h.a),t.fetch||(t.fetch=c.a);var m,v,y=[],x=window.__NUXT__||{};Object.assign(o.default.config,{silent:!0,performance:!1});var w=o.default.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function O(t,e,n){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(l.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(l.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},f=c.statusCode||c.status||c.response&&c.response.status||500,d=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(d)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:f,message:d}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function C(t,e){return x.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function k(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return f=C(Object(l.o)(e),x.data?x.data[c]:null),r.components[o]=f,t.abrupt("return",f);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function $(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])}),!c)return Object(l.k)(o,e)}function E(t,e,n){return P.apply(this,arguments)}function P(){return(P=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,f,h,v,x,w,O,j,C,k,E,P,R,S,T,D=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?y=[]:(o=[],y=Object(l.e)(n,o).map(function(t,i){return Object(l.b)(n.matched[o[i]].path)(n.params)})),c=!1,f=function(path){n.path===path.path&&D.$loading.finish&&D.$loading.finish(),n.path!==path.path&&D.$loading.pause&&D.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(l.p)(m,{route:e,from:n,next:f.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),h=[],(v=Object(l.e)(e,h)).length){t.next=25;break}return t.next=14,$.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof d.a.layout?d.a.layout(m.context):d.a.layout);case 18:return x=t.sent,t.next=21,$.call(this,v,m.context,x);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,$.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,$.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:O=!0,t.prev=46,j=!0,C=!1,k=void 0,t.prev=50,E=v[Symbol.iterator]();case 52:if(j=(P=E.next()).done){t.next=64;break}if("function"==typeof(R=P.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,R.options.validate(m.context);case 58:if(O=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:j=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,k=t.t0;case 70:t.prev=70,t.prev=71,j||null==E.return||E.return();case 73:if(t.prev=73,!C){t.next=76;break}throw k;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(O){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(l.b)(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,D._pathChanged&&D._queryChanged||t._path!==y[i])t._dataRefresh=!0;else if(!D._pathChanged&&D._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return D._diffQuery[t]}))}if(!D._hadError&&D._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),f=o&&c?30:45;if(o){var d=Object(l.m)(t.options.asyncData,m.context).then(function(e){Object(l.a)(t,e),D.$loading.increase&&D.$loading.increase(f)});r.push(d)}if(D.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){D.$loading.increase&&D.$loading.increase(f)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return y=[],Object(l.i)(S),"function"==typeof(T=d.a.layout)&&(T=T(m.context)),t.next=103,this.loadLayout(T);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function R(t,n){Object(l.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.default.extend(t))._Ctor=t,r.components[c]=t),t})}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?d.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function T(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(l.f)(t,r),f=Object(l.e)(t,r);o.default.nextTick(function(){c.forEach(function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&f[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}),S.call(n,t)})}}function D(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function N(){return(N=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,f,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,e.store,t.next=5,Promise.all(k(v));case 5:return n=t.sent,r=new o.default(m),c=x.layout||"default",t.next=10,r.loadLayout(c);case 10:if(r.setLayout(c),f=function(){r.$mount("#__nuxt"),v.afterEach(R),v.afterEach(T.bind(r)),o.default.nextTick(function(){D(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),y=v.currentRoute.matched.map(function(t){return Object(l.b)(t.path)(v.currentRoute.params)})),r.$loading={},x.error&&r.error(x.error),v.beforeEach(O.bind(r)),v.beforeEach(E.bind(r)),!x.serverRendered){t.next=21;break}return f(),t.abrupt("return");case 21:d=function(){R(v.currentRoute,v.currentRoute),S.call(r,v.currentRoute),f()},E.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),d()});v.push(path,void 0,function(t){t&&w(t)})}else d()});case 23:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(d.b)().then(function(t){return N.apply(this,arguments)}).catch(w)}.call(this,n(20))}},[[94,8,1,9]]]);