(()=>{"use strict";var e,r,t,a,o,n={},d={};function i(e){var r=d[e];if(void 0!==r)return r.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=n,i.c=d,e=[],i.O=(r,t,a,o)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){t=e[u][0],a=e[u][1],o=e[u][2];for(var d=!0,f=0;f<t.length;f++)(!1&o||n>=o)&&Object.keys(i.O).every((e=>i.O[e](t[f])))?t.splice(f--,1):(d=!1,o<n&&(n=o));if(d){e.splice(u--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var d=2&a&&e;"object"==typeof d&&!~r.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,i.d(o,n),o},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>"assets/js/"+({17:"b5d444f3",48:"a94703ab",98:"a7bd4aaa",184:"0b46e8e7",401:"17896441",567:"22dd74f7",579:"a6e0a6ed",647:"5e95c892",686:"0fafd334",742:"aba21aa0",749:"0276bb65",924:"fb5046e1",934:"282d1385"}[e]||e)+"."+{17:"338bb44f",48:"3e04a164",98:"0d9e74a0",184:"438d69dd",237:"89684c8c",401:"76b9bf88",567:"2f626267",579:"8b213bd6",647:"c5fca54b",686:"a39aa0f5",742:"8654868f",749:"8a5f2401",924:"bf959453",934:"d6dd8a4c"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="research:",i.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var d,f;if(void 0!==t)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+t){d=l;break}}d||(f=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",o+t),d.src=e),a[e]=[r];var s=(r,t)=>{d.onerror=d.onload=null,clearTimeout(b);var o=a[e];if(delete a[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=s.bind(null,d.onerror),d.onload=s.bind(null,d.onload),f&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",i.gca=function(e){return e={17896441:"401",b5d444f3:"17",a94703ab:"48",a7bd4aaa:"98","0b46e8e7":"184","22dd74f7":"567",a6e0a6ed:"579","5e95c892":"647","0fafd334":"686",aba21aa0:"742","0276bb65":"749",fb5046e1:"924","282d1385":"934"}[e]||e,i.p+i.u(e)},(()=>{var e={354:0,869:0};i.f.j=(r,t)=>{var a=i.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(354|869)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=i.p+i.u(r),d=new Error;i.l(n,(t=>{if(i.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",d.name="ChunkLoadError",d.type=o,d.request=n,a[1](d)}}),"chunk-"+r,r)}},i.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],d=t[1],f=t[2],c=0;if(n.some((r=>0!==e[r]))){for(a in d)i.o(d,a)&&(i.m[a]=d[a]);if(f)var u=f(i)}for(r&&r(t);c<n.length;c++)o=n[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},t=self.webpackChunkresearch=self.webpackChunkresearch||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();