(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},o={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0d100599":"b8a5fbf6","chunk-585bff47":"2a0f6fef","chunk-6aaa0b82":"b7f66d6d","chunk-7d71c7fa":"f9a6c90f","chunk-1127c8d7":"0ec7f64a","chunk-2d0a4b9f":"0340321d","chunk-2d0d6049":"f8b3bd01","chunk-2d216493":"895debc6","chunk-2d228952":"985ccb5f","chunk-2d22bf80":"8ff33184","chunk-2d6c0c92":"55377ed5","chunk-3a0f142c":"358517f2"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-585bff47":1,"chunk-6aaa0b82":1,"chunk-7d71c7fa":1,"chunk-1127c8d7":1,"chunk-2d6c0c92":1,"chunk-3a0f142c":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d100599":"31d6cfe0","chunk-585bff47":"16115801","chunk-6aaa0b82":"baacfe93","chunk-7d71c7fa":"baacfe93","chunk-1127c8d7":"e0fd3c09","chunk-2d0a4b9f":"31d6cfe0","chunk-2d0d6049":"31d6cfe0","chunk-2d216493":"31d6cfe0","chunk-2d228952":"31d6cfe0","chunk-2d22bf80":"31d6cfe0","chunk-2d6c0c92":"dd23a9bb","chunk-3a0f142c":"f8e7d462"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var d=c[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){d=l[a],f=d.getAttribute("data-href");if(f===r||f===o)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],h.parentNode.removeChild(h),t(c)},h.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(h)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var l=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}o[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var h=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3d39":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],c=(t("5c0b"),t("2877")),a={},i=Object(c["a"])(a,u,o,!1,null,null,null),d=i.exports,f=(t("d3b7"),t("82ae")),l=t.n(f),h=t("2f62");r["default"].use(h["a"]);var s=new h["a"].Store({state:{loading:!1},mutations:{loading:function(e){e.loading=!0},unloading:function(e){e.loading=!1}},actions:{},modules:{}}),m=(t("90b9"),l.a.create({timeout:2e4,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"},withCredentials:!0}));m.interceptors.request.use((function(e){s.commit("loading");var n=function(){return localStorage.getItem("token")}();return n&&(e.headers.AUTH_TOKEN=n),e}),(function(e){return s.commit("unloading"),Promise.reject(e)})),m.interceptors.response.use((function(e){return s.commit("unloading"),e}),(function(e){return s.commit("unloading"),Promise.resolve(e.res)}));var p={post:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{"Content-Type":"application/json;charset=utf-8"};return m.request({method:"post",url:e,data:n,headers:t}).then((function(e){return e}))},get:function(e,n){return m.request({method:"get",url:e,params:n}).then((function(e){return e})).then((function(e){return e}))}},b=t("8c4f");r["default"].use(b["a"]);var g=[{path:"",name:"Home",meta:{title:"秦汉文化旅游导览"},component:function(){return t.e("chunk-2d6c0c92").then(t.bind(null,"7abe"))}},{path:"*",name:"Home",meta:{title:"秦汉文化旅游导览"},component:function(){return t.e("chunk-2d6c0c92").then(t.bind(null,"7abe"))}},{path:"home",name:"Home",meta:{title:"秦汉文化旅游导览"},component:function(){return t.e("chunk-2d6c0c92").then(t.bind(null,"7abe"))}},{path:"/login",name:"Login",meta:{title:"登录"},component:function(){return Promise.all([t.e("chunk-0d100599"),t.e("chunk-585bff47")]).then(t.bind(null,"9ed6"))}},{path:"/register",name:"Register",meta:{title:"注册"},component:function(){return Promise.all([t.e("chunk-0d100599"),t.e("chunk-6aaa0b82")]).then(t.bind(null,"b953"))}},{path:"/forgetPwd",name:"ForgetPwd",meta:{title:"忘记密码"},component:function(){return Promise.all([t.e("chunk-0d100599"),t.e("chunk-7d71c7fa")]).then(t.bind(null,"ac90"))}},{path:"/currency",name:"Currency",meta:{title:"货币"},component:function(){return t.e("chunk-3a0f142c").then(t.bind(null,"727a"))}},{path:"/text",name:"Text",meta:{title:"文字"},component:function(){return t.e("chunk-2d0d6049").then(t.bind(null,"7181"))}},{path:"/domain",name:"Domain",meta:{title:"疆域"},component:function(){return t.e("chunk-2d228952").then(t.bind(null,"da98"))}},{path:"/greatWall",name:"GreatWall",meta:{title:"长城"},component:function(){return t.e("chunk-2d0a4b9f").then(t.bind(null,"0856"))}},{path:"/country",name:"Country",meta:{title:"县制"},component:function(){return t.e("chunk-2d22bf80").then(t.bind(null,"f0dd"))}},{path:"/official",name:"Official",meta:{title:"官制"},component:function(){return t.e("chunk-2d216493").then(t.bind(null,"c28f"))}},{path:"/userCenter",name:"UserCenter",meta:{title:"我的"},component:function(){return t.e("chunk-1127c8d7").then(t.bind(null,"1ec0"))}}],k=new b["a"]({mode:"history",base:"/",routes:g}),v=k;k.beforeEach((function(e,n,t){e.meta.title&&(document.title=e.meta.title),t()}));var y=t("a3c5"),w=t.n(y),E=(t("b9b6"),t("0d4d"));t("bd8d"),t("3d39"),t("f1a7");r["default"].use(w.a),r["default"].use(E["a"]),r["default"].prototype.$http=p,r["default"].config.productionTip=!1,new r["default"]({router:v,store:s,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),u=t.n(r);u.a},"90b9":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return u}));t("4d63"),t("ac1f"),t("25f0"),t("53ca");var r=function(e,n,t){var r=new RegExp("^(0|86|17951)?(13[0-9]|15[012356789]|16[0-9]|17[0-8]|18[0-9]|14[5-9]|19[189]|16[6])[0-9]{8}$");n||t(new Error("请输入手机号码")),r.test(n)?t():t(new Error("请输入正确的手机号码"))},u=function(e,n,t){var r=new RegExp("(?!.!@#$%^&*,.?;/)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$");n?/[\u4E00-\u9FA5]/g.test(n)?t(new Error("密码不能输入汉字")):n.length<6||n.length>18?t(new Error("密码长度为6-18位")):r.test(n)?t():t(new Error("密码不符合要求")):t(new Error("请输入密码"))}},"9c0c":function(e,n,t){},f1a7:function(e,n){var t=16;function r(){var e=document.documentElement.clientWidth/375;document.documentElement.style.fontSize=t*Math.min(e,1)+"px"}r(),window.onresize=function(){r()}}});