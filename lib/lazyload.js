!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n=e("object"==typeof exports?require("vue"):t.Vue);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=41)}({18:function(t,e,n){"use strict";function i(t){return null!==t&&"object"===(void 0===t?"undefined":d(t))}function r(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function o(t,e){if(!t||!e)return t||{};if(t instanceof Object)for(var n in e)t[n]=e[n];return t}function s(t,e){for(var n=!1,i=0,r=t.length;i<r;i++)if(e(t[i])){n=!0;break}return n}function a(t,e){if("IMG"===t.tagName&&t.getAttribute("srcset")){var n=t.getAttribute("srcset"),i=[],r=t.parentNode,o=r.offsetWidth*e,s=void 0,a=void 0,u=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),s=t.lastIndexOf(" "),s===-1?(a=t,u=999998):(a=t.substr(0,s),u=parseInt(t.substr(s+1,t.length-s-2),10)),i.push([u,a])}),i.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(e[1].indexOf(".webp",e[1].length-5)!==-1)return 1;if(t[1].indexOf(".webp",t[1].length-5)!==-1)return-1}return 0});for(var c="",l=void 0,d=i.length,f=0;f<d;f++)if(l=i[f],l[0]>=o){c=l[1];break}return c}}function u(t,e){for(var n=void 0,i=0,r=t.length;i<r;i++)if(e(t[i])){n=t[i];break}return n}function c(){var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function l(t,e){var n=null,i=0;return function(){if(!n){var r=Date.now()-i,o=this,s=arguments,a=function(){i=Date.now(),n=!1,t.apply(o,s)};r>=e?a():n=setTimeout(a,e)}}}n.d(e,"k",function(){return i}),n.d(e,"b",function(){return f}),n.d(e,"i",function(){return r}),n.d(e,"f",function(){return s}),n.d(e,"h",function(){return u}),n.d(e,"a",function(){return o}),n.d(e,"j",function(){return p}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return h}),n.d(e,"l",function(){return v}),n.d(e,"g",function(){return a});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f="undefined"!=typeof window,h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return f&&window.devicePixelRatio||t},p={on:function(t,e,n){t.addEventListener(e,n)},off:function(t,e,n){t.removeEventListener(e,n)}},v=function(t,e,n){var i=new Image;i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:t.src})},i.onerror=function(t){n(t)}}},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42);n.d(e,"default",function(){return i.a})},42:function(t,e,n){"use strict";var i=n(83),r=n(82),o=n(18);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=new i.a(e),a="2"===t.version.split(".")[0];t.prototype.$Lazyload=s,t.component("lazy-component",n.i(r.a)(s)),a?t.directive("lazy",{bind:s.add.bind(s),update:s.update.bind(s),componentUpdated:s.lazyLoadHandler.bind(s),unbind:s.remove.bind(s)}):t.directive("lazy",{bind:s.lazyLoadHandler.bind(s),update:function(t,e){n.i(o.a)(this.vm.$refs,this.vm.$els),s.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:t,oldValue:e},{context:this.vm})},unbind:function(){s.remove(this.el)}})}},82:function(t,e,n){"use strict";var i=n(18);e.a=function(t){return{props:{tag:{type:String,default:"div"}},render:function(t){return this.show===!1?t(this.tag,{attrs:{class:"cov"}}):t(this.tag,{attrs:{class:"cov"}},this.$slots.default)},data:function(){return{state:{loaded:!1},rect:{},show:!1}},mounted:function(){t.addLazyBox(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),i.b&&this.rect.top<window.innerHeight*t.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*t.options.preLoad&&this.rect.right>0},load:function(){this.show=!0}}}}},83:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(9),o=n.n(r),s=n(18),a=n(84),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",l=["scroll","wheel","mousewheel","resize","animationend","transitionend"],d=function(){function t(e){var r=this,o=e.preLoad,a=e.error,u=e.loading,d=e.attempt,f=e.silent,h=e.scale,p=e.listenEvents,v=e.hasbind,y=e.filter,b=e.adapter;i(this,t),this.ListenerQueue=[],this.options={silent:f||!0,preLoad:o||1.3,error:a||c,loading:u||c,attempt:d||3,scale:n.i(s.c)(h),ListenEvents:p||l,hasbind:v||!1,supportWebp:n.i(s.d)(),filter:y||{},adapter:b||{}},this.initEvent(),this.lazyLoadHandler=n.i(s.e)(function(){var t=!1;r.ListenerQueue.forEach(function(e){e.state.loaded||(t=e.checkInView())&&e.load()})},200)}return u(t,[{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),this.options.hasbind=!0,this.initListen(window,!0)}},{key:"add",value:function(t,e,i){var r=this;if(n.i(s.f)(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,e),o.a.nextTick(this.lazyLoadHandler);var u=this.valueFormatter(e.value),c=u.src,l=u.loading,d=u.error;o.a.nextTick(function(){var u=n.i(s.g)(t,r.options.scale);u&&(c=u);var f=Object.keys(e.modifiers)[0],h=void 0;f&&(h=i.context.$refs[f],h=h?h.$el||h:document.getElementById(f)),r.ListenerQueue.push(r.listenerFilter(new a.a({bindType:e.arg,$parent:h,el:t,loading:l,error:d,src:c,elRenderer:r.elRenderer.bind(r),options:r.options}))),r.ListenerQueue.length&&!r.options.hasbind&&(r.options.hasbind=!0,r.initListen(window,!0),h&&r.initListen(h,!0),r.lazyLoadHandler(),o.a.nextTick(function(){return r.lazyLoadHandler()}))})}},{key:"update",value:function(t,e){var i=this,r=this.valueFormatter(e.value),a=r.src,u=r.loading,c=r.error,l=n.i(s.h)(this.ListenerQueue,function(e){return e.el===t});l&&l.src!==a&&l.update({src:a,loading:u,error:c}),this.lazyLoadHandler(),o.a.nextTick(function(){return i.lazyLoadHandler()})}},{key:"remove",value:function(t){if(t){var e=n.i(s.h)(this.ListenerQueue,function(e){return e.el===t});e&&n.i(s.i)(this.ListenerQueue,e)&&e.destroy(),this.options.hasbind&&!this.ListenerQueue.length&&this.initListen(window,!1)}}},{key:"initListen",value:function(t,e){var n=this;this.options.hasbind=e,this.options.ListenEvents.forEach(function(i){return s.j[e?"on":"off"](t,i,n.lazyLoadHandler)})}},{key:"initEvent",value:function(){var t=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(e,n){t.Event.listeners[e].push(n)},this.$once=function(e,n){function i(){r.$off(e,i),n.apply(r,arguments)}var r=t;t.$on(e,i)},this.$off=function(e,i){if(!i)return void(t.Event.listeners[e]=[]);n.i(s.i)(t.Event.listeners[e],i)},this.$emit=function(e,n){t.Event.listeners[e].forEach(function(t){return t(n)})}}},{key:"elRenderer",value:function(t,e,n){var i=t.el,r=t.bindType,o=t.src;i&&(r?i.style[r]="url("+o+")":i.getAttribute("src")!==o&&i.setAttribute("src",o),i.setAttribute("lazy",e),n&&(this.$emit(e,t),this.options.adapter[e]&&this.options.adapter[e](t,this.options)))}},{key:"listenerFilter",value:function(t){return this.options.filter.webp&&this.options.supportWebp&&(t.src=this.options.filter.webp(t,this.options)),this.options.filter.customer&&(t.src=this.options.filter.customer(t,this.options)),t}},{key:"valueFormatter",value:function(t){var e=t,i=this.options.loading,r=this.options.error;return n.i(s.k)(t)&&(t.src||this.options.silent||o.a.util.warn("Vue Lazyload warning: miss src with "+t),e=t.src,i=t.loading||this.options.loading,r=t.error||this.options.error),{src:e,loading:i,error:r}}}]),t}();e.a=d},84:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=n(18),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),s={},a=function(){function t(e){var n=e.el,r=e.src,o=e.error,s=e.loading,a=e.bindType,u=e.$parent,c=e.options,l=e.elRenderer;i(this,t),this.el=n,this.src=r,this.error=o,this.loading=s,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=c,this.initState(),this.rect=n.getBoundingClientRect(),this.$parent=u,this.elRenderer=l}return o(t,[{key:"initState",value:function(){this.state={error:!1,loaded:!1,rendered:!1}}},{key:"update",value:function(t){var e=t.src,n=t.loading,i=t.error;this.src=e,this.loading=n,this.error=i,this.attempt=0,this.initState()}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"load",value:function(){var t=this;return this.attempt>this.options.attempt-1&&this.state.error?void this.options.silent:this.state.loaded||s[this.src]?this.render("loaded"):(this.render("loading",!0),this.attempt++,void n.i(r.l)({src:this.src},function(e){t.naturalHeight=e.naturalHeight,t.naturalWidth=e.naturalWidth,t.state.loaded=!0,t.state.error=!1,t.render("loaded",!0),s[t.src]=1},function(){t.state.error=!0,t.state.loaded=!1,t.render("error",!0)}))}},{key:"render",value:function(t,e){var n=void 0;switch(t){case"loading":n=this.loading;break;case"error":n=this.error;break;default:n=this.src}this.elRenderer({el:this.el,bindType:this.bindType,src:n},t,e)}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),t}();e.a=a},9:function(e,n){e.exports=t}})});