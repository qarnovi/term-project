(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0fda9c06":"4c067eec","chunk-6199d4fa":"f678494e","chunk-b637a926":"dea931df"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0fda9c06":1,"chunk-6199d4fa":1,"chunk-b637a926":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fda9c06":"3bb2cbfb","chunk-6199d4fa":"d0f22e89","chunk-b637a926":"990bddfc"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/term-project/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ac":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav",class:"nav-bar"},a=Object(r["g"])("Home"),c=Object(r["g"])(" | "),u=Object(r["g"])("Resume"),i=Object(r["g"])(" | "),l=Object(r["g"])("Hobbies"),s=Object(r["g"])(" | "),d=Object(r["g"])("Contact Me");function f(e,t){var n=Object(r["x"])("router-link"),f=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["h"])(n,{to:"/"},{default:Object(r["D"])((function(){return[a]})),_:1}),c,Object(r["h"])(n,{to:"/resume"},{default:Object(r["D"])((function(){return[u]})),_:1}),i,Object(r["h"])(n,{to:"/hobbies"},{default:Object(r["D"])((function(){return[l]})),_:1}),s,Object(r["h"])(n,{to:"/contact"},{default:Object(r["D"])((function(){return[d]})),_:1})]),Object(r["h"])(f)],64)}n("e381");var b=n("6b0d"),h=n.n(b);const p={},m=h()(p,[["render",f]]);var j=m,g=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O=n("b0be"),v=n.n(O),y=Object(r["e"])("header",null,[Object(r["e"])("div",{class:"header-wrap"},[Object(r["e"])("h1",null,"Surhon Juraholov"),Object(r["e"])("h2",null,"Software Development Engineer in Test")])],-1),w=Object(r["e"])("table",null,[Object(r["e"])("tbody",null,[Object(r["e"])("tr",null,[Object(r["e"])("td",null,[Object(r["e"])("picture",null,[Object(r["e"])("img",{src:v.a,alt:"software engineer"})])]),Object(r["e"])("td",null,[Object(r["e"])("h2",null,"About me"),Object(r["e"])("p",null," My name is Surhon and I live in Winchester MA. I currently work at UKG as QA Test Automation Engineer. Next step in my career goals is to become a full-stack developer and MS CIS with Web Application subconcentration will help me achive my goals. I am three classes away from my graduation right now. "),Object(r["e"])("p",null," I am married and we have two beautiful daughters. I enjoy spending time with my family after work and on the weekends. I help my oldest dauther with her math homework from Russian School of Math (RSM) and attending RSM. Both of my daughters go to swimming and gymnastics classes and they enjoy each of the sessions. ")])])])],-1);function k(e,t,n,o,a,c){return Object(r["q"])(),Object(r["d"])(r["a"],null,[y,w],64)}var S={name:"Home",components:{}};n("cf19");const _=h()(S,[["render",k]]);var x=_,A=[{path:"/",name:"Home",component:x},{path:"/resume",name:"Resume",component:function(){return n.e("chunk-b637a926").then(n.bind(null,"1ba2"))}},{path:"/hobbies",name:"Hobbies",component:function(){return n.e("chunk-6199d4fa").then(n.bind(null,"048b"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-0fda9c06").then(n.bind(null,"b8fa"))}}],E=Object(g["a"])({history:Object(g["b"])("/term-project/"),routes:A}),M=E,C=n("5502"),P=Object(C["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(j).use(P).use(M).mount("#app")},9975:function(e,t,n){},b0be:function(e,t,n){e.exports=n.p+"img/expertise_960.8acfddbc.jpg"},cf19:function(e,t,n){"use strict";n("01ac")},e381:function(e,t,n){"use strict";n("9975")}});
//# sourceMappingURL=app.3a665b62.js.map