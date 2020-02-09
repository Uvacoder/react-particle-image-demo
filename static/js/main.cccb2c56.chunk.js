(this["webpackJsonpreact-particle-image-demo"]=this["webpackJsonpreact-particle-image-demo"]||[]).push([[0],{139:function(t,e,n){"use strict";n.r(e);var r,i=n(0),o=n.n(i),a=n(18),c=n.n(a),u=(n(83),n(61)),s=n(31),l=n(12),f=n(5),h=n(72),p=n(45),d=n.n(p),v=function(t){var e=t.open,n=t.children,r=d.a.sidebar;return e&&(r=r+" "+d.a.open),o.a.createElement("div",{className:r},n)},g=n(2),y=function(t){var e=t.open,n=t.className,r=Object(g.a)(t,["open","className"]),i="hamburger hamburger--elastic";return e&&(i+=" is-active"),n&&(i+=" ".concat(n)),o.a.createElement("button",Object.assign({},r,{className:i,type:"button"}),o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner"})))},m=n(28),b=n(46),_=function(t){var e=t.text,n=t.arrowPlacement,r=t.arrowDirection,a=t.color,c=void 0===a?"white":a,u=t.width,s=void 0===u?80:u,l=Object(g.a)(t,["text","arrowPlacement","arrowDirection","color","width"]),f=Object(i.useState)(!1),h=Object(m.a)(f,2),p=h[0],d=h[1];return o.a.createElement("div",Object.assign({},l,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center",width:s}}),"left"===n&&o.a.createElement(b.a,{angle:"left"===r?-90:90,length:s,color:c,style:{width:p?s:0,transition:"width .3s"}}),o.a.createElement("span",{style:{margin:0}},e),"right"===n&&o.a.createElement(b.a,{angle:"left"===r?-90:90,length:s,color:c,style:{width:p?s:0,transition:"width .3s"}}))},w=n(68),j=n.n(w),x=n(148),O=n(30),E=n.n(O),P=function(t){var e=t.values,n=t.onChange,r=Object(i.useCallback)(j()(n,25),[n]);return o.a.createElement("div",{className:E.a.root},o.a.createElement("div",{className:E.a.header},"Controls"),o.a.createElement("div",{className:E.a.controls},o.a.createElement("p",null,"Entropy"),o.a.createElement(x.a,{"aria-label":"Entropy",min:0,max:100,value:e.entropy,onChange:function(t,e){return r("entropy",e)}}),o.a.createElement("p",null,"Scale"),o.a.createElement(x.a,{"aria-label":"Scale",min:.5,max:1.5,step:.1,value:e.scale,onChange:function(t,e){return r("scale",e)}}),o.a.createElement("p",null,"Number of Particles"),o.a.createElement(x.a,{"aria-label":"Number of Particles",min:1e3,max:6e3,step:500,value:e.numParticles,onChange:function(t,e){return r("numParticles",e)}})))},F=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=String(t);return r.length>=e?r:new Array(e-r.length+1).join(n)+r},S=n(3),D=n.n(S),M=Math.min(Math.max(window.innerWidth/1300,.5),.85),C=["logo512.png","coffee.png","color-wheel.jpeg"],k=(r={},Object(l.a)(r,"logo512.png",{radius:function(){return(1.4*Math.random()+.5)*M},mass:function(){return 40},filter:function(t){var e=t.x,n=t.y;return t.image.get(e,n).b>50},color:function(){return"#61dafb"},friction:function(){return.15},initialPosition:function(t){var e=t.canvasDimensions;return new f.a(e.width/2,e.height/2)}}),Object(l.a)(r,"coffee.png",{radius:function(){return(1.4*Math.random()+.5)*M},mass:function(){return 80},filter:function(t){var e=t.x,n=t.y,r=t.image.get(e,n);return(r.r+r.g+r.b)/3/255*r.a/255<.9},color:function(t){t.x,t.y,t.image;return"white"},friction:function(){return.15},initialPosition:function(t){var e=t.canvasDimensions;return new f.a(e.width/2,e.height/2)}}),Object(l.a)(r,"color-wheel.jpeg",{radius:function(t){var e=t.x,n=t.y,r=t.image;return(new f.a(r.getWidth()/2,r.getHeight()/2).subtract(new f.a(e,n)).getMagnitude()/200+.1)*M},mass:function(){return 50},filter:function(t){var e=t.x,n=t.y,r=t.image.get(e,n);return(r.r+r.g+r.b)/3/255*r.a/255<.8},color:function(t){t.x,t.y,t.image;return"orange"},friction:function(){return.23},initialVelocity:function(t){t.image;return new f.a(1e3*(Math.random()-.5),1e3*(Math.random()-1))}}),r),A=function(){var t=Object(i.useState)(0),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(!1),c=Object(s.a)(a,2),p=c[0],d=c[1],g=Object(i.useState)({entropy:20,scale:M,numParticles:4500}),m=Object(s.a)(g,2),b=m[0],w=m[1],j=C[n];return o.a.createElement("div",{className:D.a.content,onScroll:function(t){t.stopPropagation(),t.preventDefault()}},o.a.createElement("div",{className:D.a.header},o.a.createElement("p",{className:D.a.title},"PARTICLE IMAGE"),o.a.createElement(y,{className:D.a.hamburger,onClick:function(){return d((function(t){return!t}))},open:p})),o.a.createElement(v,{open:p},o.a.createElement("div",{className:D.a.sidebar},o.a.createElement(P,{values:b,onChange:function(t,e){w((function(n){return Object(u.a)({},n,Object(l.a)({},t,e))}))}}))),o.a.createElement(h.a,{handleWidth:!0,handleHeight:!0},(function(t){var e=t.width,n=t.height;return e&&n?o.a.createElement(f.b,{key:"".concat(b.numParticles),backgroundColor:"rgb(31, 31, 31)",src:j,maxParticles:b.numParticles,height:n,width:e,particleOptions:k[j],scale:b.scale,entropy:b.entropy,mouseMoveForce:function(t,e){return f.c.disturbance(t,e,6)},touchMoveForce:function(t,e){return f.c.disturbance(t,e,6)},mouseDownForce:function(t,e){return f.c.disturbance(t,e,50)}}):o.a.createElement("div",null)})),o.a.createElement("div",{className:D.a.footer},o.a.createElement("p",{className:D.a.imgInfo},F(C.indexOf(j)+1,2)," / ",F(C.length,2)),o.a.createElement("div",{className:D.a.nav},o.a.createElement(_,{onClick:function(){r((function(t){return 0===t?C.length-1:(t-1)%C.length}))},className:D.a.navArrow,arrowPlacement:"left",arrowDirection:"left",text:"PREV"}),o.a.createElement(_,{onClick:function(){r((function(t){return(t+1)%C.length}))},className:D.a.navArrow,arrowPlacement:"right",arrowDirection:"right",text:"NEXT"})),o.a.createElement("a",{href:"https://github.com/malerba118/react-particle-image",target:"_blank",rel:"noopener noreferrer",className:D.a.links},"GITHUB")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},3:function(t,e,n){t.exports={content:"App_content__3La4L",hamburger:"App_hamburger__2yIw2",title:"App_title__-GfWs clickable",header:"App_header__3ZZ1n flex-row",footer:"App_footer__29Fsv flex-row",imgInfo:"App_imgInfo__3hU9-",nav:"App_nav__1_46_",navArrow:"App_navArrow__zzZjt clickable",links:"App_links__h6CZe clickable",sidebar:"App_sidebar__1l9Om"}},30:function(t,e,n){t.exports={root:"Controls_root__siV-e",header:"Controls_header__1ABvE text-md",controls:"Controls_controls__3dV4Y"}},45:function(t,e,n){t.exports={sidebar:"Sidebar_sidebar__1aNKU",open:"Sidebar_open__2VOmW"}},5:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return k})),n.d(e,"c",(function(){return Q}));var r=n(0),i=n.n(r),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function a(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function u(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function s(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function l(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t}var f="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};var h="Expected a function",p=NaN,d="[object Symbol]",v=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,_="object"==typeof f&&f&&f.Object===Object&&f,w="object"==typeof self&&self&&self.Object===Object&&self,j=_||w||Function("return this")(),x=Object.prototype.toString,O=Math.max,E=Math.min,P=function(){return j.Date.now()};function F(t,e,n){var r,i,o,a,c,u,s=0,l=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError(h);function d(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function v(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-s>=o}function g(){var t=P();if(v(t))return y(t);c=setTimeout(g,function(t){var n=e-(t-u);return f?E(n,o-(t-s)):n}(t))}function y(t){return c=void 0,p&&r?d(t):(r=i=void 0,a)}function m(){var t=P(),n=v(t);if(r=arguments,i=this,u=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(g,e),l?d(t):a}(u);if(f)return c=setTimeout(g,e),d(u)}return void 0===c&&(c=setTimeout(g,e)),a}return e=D(e)||0,S(n)&&(l=!!n.leading,o=(f="maxWait"in n)?O(D(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),m.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=i=c=void 0},m.flush=function(){return void 0===c?a:y(P())},m}function S(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function D(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&x.call(t)==d}(t))return p;if(S(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=S(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(v,"");var n=y.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):g.test(t)?p:+t}var M,C=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(h);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),F(t,e,{leading:r,maxWait:e,trailing:i})},k=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},t.prototype.divideScalar=function(t){return this.x=this.x/t,this.y=this.y/t,this},t.prototype.multiplyScalar=function(t){return this.x=this.x*t,this.y=this.y*t,this},t.prototype.getMagnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.getAngle=function(){return Math.atan2(this.y,this.x)},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.toUnit=function(){var t=this.getMagnitude();return t?this.clone().divideScalar(t):this.clone()},t.from=function(e,n){return new t(n*Math.cos(e),n*Math.sin(e))},t.sum=function(e){var n=new t(0,0);return e.forEach((function(t){n.add(t)})),n},t}(),A=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,c=1/0,u=9007199254740991,s="[object Arguments]",l="[object Array]",h="[object Boolean]",p="[object Date]",d="[object Error]",v="[object Function]",g="[object GeneratorFunction]",y="[object Map]",m="[object Number]",b="[object Object]",_="[object RegExp]",w="[object Set]",j="[object String]",x="[object Symbol]",O="[object ArrayBuffer]",E="[object DataView]",P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,F=/^\w*$/,S=/^\./,D=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,M=/\\(\\)?/g,C=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A[s]=A[l]=A[O]=A[h]=A[E]=A[p]=A[d]=A[v]=A[y]=A[m]=A[b]=A[_]=A[w]=A[j]=A["[object WeakMap]"]=!1;var T="object"==typeof f&&f&&f.Object===Object&&f,R="object"==typeof self&&self&&self.Object===Object&&self,I=T||R||Function("return this")(),W=e&&!e.nodeType&&e,N=W&&t&&!t.nodeType&&t,H=N&&N.exports===W&&T.process,U=function(){try{return H&&H.binding("util")}catch(t){}}(),$=U&&U.isTypedArray;function L(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function B(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function V(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function G(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function X(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var Y,Q,Z=Array.prototype,q=Function.prototype,J=Object.prototype,K=I["__core-js_shared__"],tt=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),et=q.toString,nt=J.hasOwnProperty,rt=J.toString,it=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=I.Symbol,at=I.Uint8Array,ct=J.propertyIsEnumerable,ut=Z.splice,st=ot?ot.isConcatSpreadable:void 0,lt=(Y=Object.keys,Q=Object,function(t){return Y(Q(t))}),ft=Gt(I,"DataView"),ht=Gt(I,"Map"),pt=Gt(I,"Promise"),dt=Gt(I,"Set"),vt=Gt(I,"WeakMap"),gt=Gt(Object,"create"),yt=ee(ft),mt=ee(ht),bt=ee(pt),_t=ee(dt),wt=ee(vt),jt=ot?ot.prototype:void 0,xt=jt?jt.valueOf:void 0,Ot=jt?jt.toString:void 0;function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ft(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=t?t.length:0;for(this.__data__=new Ft;++e<n;)this.add(t[e])}function Dt(t){this.__data__=new Pt(t)}function Mt(t,e){var n=oe(t)||ie(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!nt.call(t,o)||i&&("length"==o||Qt(o,r))||n.push(o);return n}function Ct(t,e){for(var n=t.length;n--;)if(re(t[n][0],e))return n;return-1}Et.prototype.clear=function(){this.__data__=gt?gt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(gt){var n=e[t];return n===i?void 0:n}return nt.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return gt?void 0!==e[t]:nt.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=gt&&void 0===e?i:e,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0)&&(n==e.length-1?e.pop():ut.call(e,n,1),!0)},Pt.prototype.get=function(t){var e=this.__data__,n=Ct(e,t);return n<0?void 0:e[n][1]},Pt.prototype.has=function(t){return Ct(this.__data__,t)>-1},Pt.prototype.set=function(t,e){var n=this.__data__,r=Ct(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Ft.prototype.clear=function(){this.__data__={hash:new Et,map:new(ht||Pt),string:new Et}},Ft.prototype.delete=function(t){return zt(this,t).delete(t)},Ft.prototype.get=function(t){return zt(this,t).get(t)},Ft.prototype.has=function(t){return zt(this,t).has(t)},Ft.prototype.set=function(t,e){return zt(this,t).set(t,e),this},St.prototype.add=St.prototype.push=function(t){return this.__data__.set(t,i),this},St.prototype.has=function(t){return this.__data__.has(t)},Dt.prototype.clear=function(){this.__data__=new Pt},Dt.prototype.delete=function(t){return this.__data__.delete(t)},Dt.prototype.get=function(t){return this.__data__.get(t)},Dt.prototype.has=function(t){return this.__data__.has(t)},Dt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Pt){var i=r.__data__;if(!ht||i.length<n-1)return i.push([t,e]),this;r=this.__data__=new Ft(i)}return r.set(t,e),this};var kt,At,Tt=(kt=function(t,e){return t&&Rt(t,e,pe)},function(t,e){if(null==t)return t;if(!ae(t))return kt(t,e);for(var n=t.length,r=At?n:-1,i=Object(t);(At?r--:++r<n)&&!1!==e(i[r],r,i););return t});var Rt=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),c=a.length;c--;){var u=a[t?c:++i];if(!1===n(o[u],u,o))break}return e}}();function It(t,e){for(var n=0,r=(e=Zt(e,t)?[e]:Bt(e)).length;null!=t&&n<r;)t=t[te(e[n++])];return n&&n==r?t:void 0}function Wt(t,e){return null!=t&&e in Object(t)}function Nt(t,e,n,r,i){return t===e||(null==t||null==e||!se(t)&&!le(e)?t!==t&&e!==e:function(t,e,n,r,i,c){var u=oe(t),f=oe(e),v=l,g=l;u||(v=(v=Xt(t))==s?b:v);f||(g=(g=Xt(e))==s?b:g);var P=v==b&&!z(t),F=g==b&&!z(e),S=v==g;if(S&&!P)return c||(c=new Dt),u||he(t)?Vt(t,e,n,r,i,c):function(t,e,n,r,i,c,u){switch(n){case E:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case O:return!(t.byteLength!=e.byteLength||!r(new at(t),new at(e)));case h:case p:case m:return re(+t,+e);case d:return t.name==e.name&&t.message==e.message;case _:case j:return t==e+"";case y:var s=G;case w:var l=c&a;if(s||(s=X),t.size!=e.size&&!l)return!1;var f=u.get(t);if(f)return f==e;c|=o,u.set(t,e);var v=Vt(s(t),s(e),r,i,c,u);return u.delete(t),v;case x:if(xt)return xt.call(t)==xt.call(e)}return!1}(t,e,v,n,r,i,c);if(!(i&a)){var D=P&&nt.call(t,"__wrapped__"),M=F&&nt.call(e,"__wrapped__");if(D||M){var C=D?t.value():t,k=M?e.value():e;return c||(c=new Dt),n(C,k,r,i,c)}}if(!S)return!1;return c||(c=new Dt),function(t,e,n,r,i,o){var c=i&a,u=pe(t),s=u.length,l=pe(e).length;if(s!=l&&!c)return!1;var f=s;for(;f--;){var h=u[f];if(!(c?h in e:nt.call(e,h)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var d=!0;o.set(t,e),o.set(e,t);var v=c;for(;++f<s;){h=u[f];var g=t[h],y=e[h];if(r)var m=c?r(y,g,h,e,t,o):r(g,y,h,t,e,o);if(!(void 0===m?g===y||n(g,y,r,i,o):m)){d=!1;break}v||(v="constructor"==h)}if(d&&!v){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return o.delete(t),o.delete(e),d}(t,e,n,r,i,c)}(t,e,Nt,n,r,i))}function Ht(t){return!(!se(t)||function(t){return!!tt&&tt in t}(t))&&(ce(t)||z(t)?it:C).test(ee(t))}function Ut(t){return"function"==typeof t?t:null==t?de:"object"==typeof t?oe(t)?function(t,e){if(Zt(t)&&qt(e))return Jt(te(t),e);return function(n){var r=function(t,e,n){var r=null==t?void 0:It(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){e=Zt(e,t)?[e]:Bt(e);var r,i=-1,o=e.length;for(;++i<o;){var a=te(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}if(r)return r;return!!(o=t?t.length:0)&&ue(o)&&Qt(a,o)&&(oe(t)||ie(t))}(t,e,Wt)}(n,t):Nt(e,r,void 0,o|a)}}(t[0],t[1]):function(t){var e=function(t){var e=pe(t),n=e.length;for(;n--;){var r=e[n],i=t[r];e[n]=[r,i,qt(i)]}return e}(t);if(1==e.length&&e[0][2])return Jt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,r){var i=n.length,c=i,u=!r;if(null==t)return!c;for(t=Object(t);i--;){var s=n[i];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<c;){var l=(s=n[i])[0],f=t[l],h=s[1];if(u&&s[2]){if(void 0===f&&!(l in t))return!1}else{var p=new Dt;if(r)var d=r(f,h,l,t,e,p);if(!(void 0===d?Nt(h,f,r,o|a,p):d))return!1}}return!0}(n,t,e)}}(t):function(t){return Zt(t)?(e=te(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return It(e,t)}}(t);var e}(t)}function $t(t){if(!function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||J;return t===n}(t))return lt(t);var e=[];for(var n in Object(t))nt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Lt(t,e){var n=-1,r=ae(t)?Array(t.length):[];return Tt(t,(function(t,i,o){r[++n]=e(t,i,o)})),r}function Bt(t){return oe(t)?t:Kt(t)}function Vt(t,e,n,r,i,c){var u=i&a,s=t.length,l=e.length;if(s!=l&&!(u&&l>s))return!1;var f=c.get(t);if(f&&c.get(e))return f==e;var h=-1,p=!0,d=i&o?new St:void 0;for(c.set(t,e),c.set(e,t);++h<s;){var v=t[h],g=e[h];if(r)var y=u?r(g,v,h,e,t,c):r(v,g,h,t,e,c);if(void 0!==y){if(y)continue;p=!1;break}if(d){if(!V(e,(function(t,e){if(!d.has(e)&&(v===t||n(v,t,r,i,c)))return d.add(e)}))){p=!1;break}}else if(v!==g&&!n(v,g,r,i,c)){p=!1;break}}return c.delete(t),c.delete(e),p}function zt(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Gt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ht(n)?n:void 0}var Xt=function(t){return rt.call(t)};function Yt(t){return oe(t)||ie(t)||!!(st&&t&&t[st])}function Qt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Zt(t,e){if(oe(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!fe(t))||(F.test(t)||!P.test(t)||null!=e&&t in Object(e))}function qt(t){return t===t&&!se(t)}function Jt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(ft&&Xt(new ft(new ArrayBuffer(1)))!=E||ht&&Xt(new ht)!=y||pt&&"[object Promise]"!=Xt(pt.resolve())||dt&&Xt(new dt)!=w||vt&&"[object WeakMap]"!=Xt(new vt))&&(Xt=function(t){var e=rt.call(t),n=e==b?t.constructor:void 0,r=n?ee(n):void 0;if(r)switch(r){case yt:return E;case mt:return y;case bt:return"[object Promise]";case _t:return w;case wt:return"[object WeakMap]"}return e});var Kt=ne((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(fe(t))return Ot?Ot.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}(e);var n=[];return S.test(t)&&n.push(""),t.replace(D,(function(t,e,r,i){n.push(r?i.replace(M,"$1"):e||t)})),n}));function te(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-c?"-0":e}function ee(t){if(null!=t){try{return et.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function ne(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(r);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a),a};return n.cache=new(ne.Cache||Ft),n}function re(t,e){return t===e||t!==t&&e!==e}function ie(t){return function(t){return le(t)&&ae(t)}(t)&&nt.call(t,"callee")&&(!ct.call(t,"callee")||rt.call(t)==s)}ne.Cache=Ft;var oe=Array.isArray;function ae(t){return null!=t&&ue(t.length)&&!ce(t)}function ce(t){var e=se(t)?rt.call(t):"";return e==v||e==g}function ue(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function se(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function le(t){return!!t&&"object"==typeof t}function fe(t){return"symbol"==typeof t||le(t)&&rt.call(t)==x}var he=$?function(t){return function(e){return t(e)}}($):function(t){return le(t)&&ue(t.length)&&!!A[rt.call(t)]};function pe(t){return ae(t)?Mt(t):$t(t)}function de(t){return t}t.exports=function(t,e){return function t(e,n,r,i,o){var a=-1,c=e.length;for(r||(r=Yt),o||(o=[]);++a<c;){var u=e[a];n>0&&r(u)?n>1?t(u,n-1,r,i,o):B(o,u):i||(o[o.length]=u)}return o}(function(t,e){return(oe(t)?L:Lt)(t,Ut(e))}(t,e),1)}})),T=function(){function t(t,e){void 0===e&&(e={}),this.particles=[],this.particleForces=[],this.subverses=[],this.parent=t,this.options=e}return t.prototype.createSubverse=function(){var e=new t(this,this.options);return this.subverses.push(e),e},t.prototype.removeSubverse=function(t){this.subverses=this.subverses.filter((function(e){return e!==t}))},t.prototype.addParticle=function(t){this.particles.push(t)},t.prototype.removeParticle=function(t){this.particles=this.particles.filter((function(e){return e!==t}))},t.prototype.getParticles=function(){return this.particles.concat(A(this.subverses,(function(t){return t.getParticles()})))},t.prototype.addParticleForce=function(t){this.particleForces.push(t)},t.prototype.removeParticleForce=function(t){this.particleForces=this.particleForces.filter((function(e){return e!==t}))},t.prototype.getParticleForces=function(){return this.parent?this.parent.getParticleForces().concat(this.particleForces):this.particleForces},t.prototype.enforceBounds=function(t,e){t.position.x>e.right?(t.position.x=e.right,t.velocity.x*=-1):t.position.x<e.left&&(t.position.x=e.left,t.velocity.x*=-1),t.position.y>e.bottom?(t.position.y=e.bottom,t.velocity.y*=-1):t.position.y<e.top&&(t.position.y=e.top,t.velocity.y*=-1)},t.prototype.applyForces=function(t,e){var n=e.map((function(e){return e(t)})),r=k.sum(n).divideScalar(t.mass);t.position.add(t.velocity),t.velocity.add(r)},t.prototype.tick=function(){var t=this,e=this.getParticleForces();this.particles.forEach((function(n){t.applyForces(n,e),t.options.bounds&&t.enforceBounds(n,t.options.bounds)})),this.subverses.forEach((function(t){return t.tick()}))},t}(),R={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1}};!function(t){t.Creating="Creating",t.Created="Created",t.Dying="Dying",t.Dead="Dead"}(M||(M={}));var I=function(t){function e(e){var n=void 0===e?{}:e,r=n.bounds,i=n.frameRate,o=void 0===i?30:i,a=n.creationDuration,c=void 0===a?500:a,u=n.deathDuration,s=void 0===u?500:u,l=n.creationTimingFn,f=void 0===l?R.easeInQuad:l,h=n.deathTimingFn,p=void 0===h?R.easeInQuad:h,d=n.onStateChange,v=t.call(this,null,{bounds:r})||this;return v.health=0,v.creationRate=1,v.deathRate=1,v.setFrameRate(o),v.setCreationDuration(c),v.setDeathDuration(s),v.creationTimingFn=f,v.deathTimingFn=p,v.onStateChange=d,v.setState(M.Creating),v}return a(e,t),e.prototype.setState=function(t){var e;this.state=t,null===(e=this.onStateChange)||void 0===e||e.call(this,t,this)},e.prototype.applyGrowth=function(t){t.perceivedRadius=t.radius*this.creationTimingFn(this.health)},e.prototype.applyDecay=function(t){t.perceivedRadius=t.radius*this.deathTimingFn(this.health)},e.prototype.setCreationDuration=function(t){this.creationDuration=t,this.creationRate=1e3/(this.creationDuration*this.frameRate)},e.prototype.setDeathDuration=function(t){this.deathDuration=t,this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.setFrameRate=function(t){this.frameRate=t,this.creationRate=1e3/(this.creationDuration*this.frameRate),this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.setOnStateChange=function(t){this.onStateChange=t},e.prototype.die=function(){var t=this;return this.setState(M.Dying),new Promise((function(e){t.resolveDeath=e}))},e.prototype.tick=function(){var e=this;this.state===M.Creating?(this.health=Math.min(this.health+this.creationRate,1),this.getParticles().forEach((function(t){e.applyGrowth(t)})),1===this.health&&this.setState(M.Created)):this.state===M.Dying&&(this.health=Math.max(this.health-this.deathRate,0),this.getParticles().forEach((function(t){e.applyDecay(t)})),0===this.health&&(this.setState(M.Dead),this.resolveDeath())),t.prototype.tick.call(this)},e}(T),W=function(t){var e=void 0===t?{}:t,n=e.radius,r=void 0===n?1:n,i=e.friction,o=void 0===i?10:i,a=e.mass,c=void 0===a?100:a,u=e.position,s=void 0===u?new k(0,0):u,l=e.velocity,f=void 0===l?new k(0,0):l,h=e.color,p=void 0===h?"black":h,d=e.growthRate,v=void 0===d?.05:d,g=e.decayRate,y=void 0===g?.05:g;this.perceivedRadius=0,this.radius=r,this.friction=o,this.mass=c,this.position=s,this.velocity=f,this.color=p,this.growthRate=v,this.decayRate=y},N=function(){};function H(t){var e=new Image;e.crossOrigin="Anonymous";var n=new Promise((function(t,n){e.onload=function(){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var i=r.getContext("2d");if(!i)return n(new Error("Could not get canvas context"));i.drawImage(e,0,0,e.width,e.height,0,0,r.width,r.height);var o=i.getImageData(0,0,r.width,r.height).data;i.clearRect(0,0,r.width,r.height);for(var a=[],c=0;c<o.length-1;){var u=c/4%r.width,s=Math.floor(c/4/r.width);a[s]||(a[s]=[]),a[s][u]={r:o[c],g:o[c+1],b:o[c+2],a:o[c+3]},c+=4}t(new q(a))},e.onerror=n}));return e.src=t,n}var U=2*Math.PI,$=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.clientX-n.left)/(n.right-n.left)*e.width,y:(t.clientY-n.top)/(n.bottom-n.top)*e.height}},L=function(t,e){var n=this;void 0===e&&(e=30),this.setFps=function(t){n.delay=1e3/t,n.time=null,n.frame=-1},this.start=function(){n.rafId||(n.rafId=requestAnimationFrame(n.loop))},this.stop=function(){n.rafId&&(cancelAnimationFrame(n.rafId),n.rafId=null,n.time=null,n.frame=-1)},this.loop=function(t){null===n.time&&(n.time=t);var e=Math.floor((t-n.time)/n.delay);e>n.frame&&(n.frame=e,n.callback({time:t,frame:n.frame})),n.rafId=requestAnimationFrame(n.loop)},this.delay=1e3/e,this.time=null,this.frame=-1,this.callback=t},B=function(t){function e(e){var n=t.call(this)||this;return n.canvas=e,n}return a(e,t),e.prototype.context=function(){return this.canvas.getContext("2d")},e.prototype.height=function(){return this.canvas.height},e.prototype.width=function(){return this.canvas.width},e.prototype.clear=function(){var t;null===(t=this.context())||void 0===t||t.clearRect(0,0,this.width(),this.height())},e.prototype.drawParticles=function(t,e){var n=this.context();n&&(n.fillStyle=e,n.beginPath(),t.forEach((function(t){n.moveTo(t.position.x+t.radius,t.position.y),n.arc(t.position.x,t.position.y,t.perceivedRadius,0,U)})),n.fill())},e.prototype.drawFrame=function(t){var e=this;this.clear();var n,r=t.getParticles(),i=(n=function(t){return t.color},r.reduce((function(t,e){var r=n(e);return t[r]||(t[r]=[]),t[r].push(e),t}),{}));Object.keys(i).forEach((function(t){e.drawParticles(i[t],t)}))},e}(N),V=function(){function t(t,e,n){var r=this;void 0===e&&(e=null);var i=(void 0===n?{}:n).frameRate,o=void 0===i?30:i;this.id=null,this.start=function(){r.animator.start()},this.stop=function(){r.animator.stop()},this.loop=function(){r.universe&&(r.renderer.drawFrame(r.universe),r.universe.tick())},this.universe=e,this.renderer=t,this.animator=new L(this.loop,o)}return t.prototype.setUniverse=function(t){this.universe=t},t}();function z(t,e,n){return void 0===n&&(n=1),function(r){return new k(t,e).subtract(r.position).multiplyScalar(n)}}function G(t){return function(){return new k(Math.random()-.5,Math.random()-.5).multiplyScalar(t)}}var X,Y=function(t){var e=Math.min(Math.max(t.friction,0),1);return 0===t.velocity.getMagnitude()?new k(0,0):t.velocity.clone().multiplyScalar(-e*t.mass)},Q=Object.freeze({blackHole:z,disturbance:function(t,e,n){return void 0===n&&(n=1),function(r){var i=new k(t,e);return i.subtract(r.position).multiplyScalar(-1),i.divideScalar((12^i.getMagnitude())/(n+.001)+.01),i}},entropy:G,friction:Y}),Z=function(t){var e=this;this.setScale=function(t){e.scale=t},this.setCanvasWidth=function(t){e.canvasWidth=t},this.setCanvasHeight=function(t){e.canvasHeight=t},this.getParticleForce=function(){return function(t){var n=e.getPixelPosition();return z(n.x,n.y)(t)}},this.getPixelPosition=function(){var t=e.pixelX*e.scale+e.canvasWidth/2-e.imageWidth*e.scale/2,n=e.pixelY*e.scale+e.canvasHeight/2-e.imageHeight*e.scale/2;return new k(t,n)},this.pixelX=t.pixelX,this.pixelY=t.pixelY,this.scale=t.scale,this.imageWidth=t.imageWidth,this.imageHeight=t.imageHeight,this.canvasWidth=t.canvasWidth,this.canvasHeight=t.canvasHeight},q=function(){function t(t){this.array=t,this.updateWidth(),this.updateHeight()}return t.prototype.updateWidth=function(){this.width=Math.min.apply(Math,l(this.array.map((function(t){return t.length}))))},t.prototype.updateHeight=function(){this.height=this.array.length},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.get=function(t,e){return this.array[e][t]},t.prototype.set=function(t,e,n){this.array[e]||(this.array[e]=[]),this.array[e][t]=n,this.updateWidth(),this.updateHeight()},t.prototype.slice=function(e,n){var r=s(e,2),i=r[0],o=r[1],a=s(n,2),c=a[0],u=a[1];return new t(this.array.slice(c,u).map((function(t){return t.slice(i,o)})))},t.prototype.forEach=function(t){this.array.forEach((function(e,n){e.forEach((function(e,r){t(e,r,n)}))}))},t}(),J=function(t){var e,n,r,i,o=t.url,a=t.maxParticles,c=t.particleOptions,s=t.scale,f=t.canvasDimensions,h=t.creationTimingFn,p=t.deathTimingFn,d=t.creationDuration,v=t.deathDuration,g=t.onUniverseStateChange;return e=void 0,n=void 0,i=function(){var t,e,n,r,i,y,m,b,_,w,j,x,O,E,P,F,S,D,M;return u(this,(function(u){switch(u.label){case 0:return[4,H(o)];case 1:for(t=u.sent(),e=t.getHeight(),n=t.getWidth(),r=e*n,i=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(l(Array(r).keys())),y=0,m=new I({creationTimingFn:h,deathTimingFn:p,creationDuration:d,deathDuration:v,onStateChange:g}),b=[],a=Math.min(r,a);y<a&&i.length;)_=i.pop()||0,w=_%n,j=Math.floor(_/n),c.filter({x:w,y:j,image:t})&&(x=m.createSubverse(),O=new Z({pixelX:w,pixelY:j,scale:s,imageHeight:t.getHeight(),imageWidth:t.getWidth(),canvasWidth:f.width,canvasHeight:f.height}),b.push(O),x.addParticleForce(O.getParticleForce()),E=c.color({x:w,y:j,image:t}),P=c.radius({x:w,y:j,image:t}),F=c.friction({x:w,y:j,image:t}),S=c.mass({x:w,y:j,image:t}),D=c.initialPosition({x:w,y:j,image:t,finalPosition:O.getPixelPosition(),canvasDimensions:f}),M=c.initialVelocity({x:w,y:j,image:t}),x.addParticle(new W({radius:P,mass:S,color:E,friction:F,position:D,velocity:M})),y+=1);return[2,{universe:m,pixelManagers:b}]}}))},new((r=void 0)||(r=Promise))((function(t,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function c(t){try{u(i.throw(t))}catch(e){o(e)}}function u(e){e.done?t(e.value):new r((function(t){t(e.value)})).then(a,c)}u((i=i.apply(e,n||[])).next())}))},K=function(t){var e=t.universe,n=t.duration,i=void 0===n?100:n,o=s(Object(r.useState)(null),2),a=o[0],c=o[1];return Object(r.useEffect)((function(){return function(){c(null)}}),[e]),Object(r.useEffect)((function(){if(e&&a){e.addParticleForce(a);var t=window.setTimeout((function(){e.removeParticleForce(a),c(null)}),i);return function(){window.clearTimeout(t),e.removeParticleForce(a)}}}),[e,a,i]),[a,c]};!function(t){t.Loading="Loading",t.Loaded="Loaded",t.Error="Error"}(X||(X={}));var tt={filter:function(){return!0},radius:function(){return 1},mass:function(){return 50},color:function(){return"white"},friction:function(){return.15},initialPosition:function(t){return t.finalPosition},initialVelocity:function(){return new k(0,0)}};e.b=function(t){var e=t.src,n=t.height,o=void 0===n?400:n,a=t.width,u=void 0===a?400:a,l=t.scale,f=void 0===l?1:l,h=t.maxParticles,p=void 0===h?5e3:h,d=t.entropy,v=void 0===d?20:d,g=t.backgroundColor,y=void 0===g?"#222":g,m=t.particleOptions,b=void 0===m?{}:m,_=t.mouseMoveForce,w=t.touchMoveForce,j=t.mouseDownForce,x=t.mouseMoveForceDuration,O=void 0===x?100:x,E=t.touchMoveForceDuration,P=void 0===E?100:E,F=t.mouseDownForceDuration,S=void 0===F?100:F,D=t.creationTimingFn,M=t.creationDuration,k=t.deathTimingFn,A=t.deathDuration,T=t.onUniverseStateChange,R=t.onImageStateChange,I=t.style,W=void 0===I?{}:I,N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["src","height","width","scale","maxParticles","entropy","backgroundColor","particleOptions","mouseMoveForce","touchMoveForce","mouseDownForce","mouseMoveForceDuration","touchMoveForceDuration","mouseDownForceDuration","creationTimingFn","creationDuration","deathTimingFn","deathDuration","onUniverseStateChange","onImageStateChange","style"]),H=s(Object(r.useState)(),2),U=H[0],L=H[1],z=s(Object(r.useState)(),2),Q=z[0],Z=z[1],q=Object(r.useRef)(),et=Object(r.useRef)(),nt=s(Object(r.useState)([]),2),rt=nt[0],it=nt[1],ot=c(c({},tt),b);Object(r.useEffect)((function(){if(U){var t=new B(U),e=new V(t);return q.current=e,e.start(),function(){return e.stop()}}}),[U]),Object(r.useEffect)((function(){var t,n;if(U){var r={width:U.width,height:U.height},i=null===(t=Q)||void 0===t?void 0:t.die(),o=J({url:e,maxParticles:p,particleOptions:ot,scale:f,canvasDimensions:r,creationTimingFn:D,creationDuration:M,deathTimingFn:k,deathDuration:A,onUniverseStateChange:T});null===(n=R)||void 0===n||n(X.Loading),o.then((function(){var t;null===(t=R)||void 0===t||t(X.Loaded)})).catch((function(){var t;null===(t=R)||void 0===t||t(X.Error)})),Promise.all([o,i]).then((function(t){var e,n=s(t,1)[0],r=n.universe,i=n.pixelManagers;it(i),r.addParticleForce(Y),null===(e=q.current)||void 0===e||e.setUniverse(r),Z(r)})).catch((function(){}))}}),[U,e]),Object(r.useEffect)((function(){var t;null===(t=Q)||void 0===t||t.setOnStateChange(T)}),[Q,T]);var at=Object(r.useCallback)(C((function(t){rt.forEach((function(e){e.setScale(t)}))}),50),[rt]),ct=Object(r.useCallback)(C((function(t){rt.forEach((function(e){e.setCanvasWidth(t)}))}),50),[rt]),ut=Object(r.useCallback)(C((function(t){rt.forEach((function(e){e.setCanvasHeight(t)}))}),50),[rt]);Object(r.useEffect)((function(){at(f)}),[f,at]),Object(r.useEffect)((function(){ct(u)}),[u,ct]),Object(r.useEffect)((function(){ut(o)}),[o,ut]),Object(r.useEffect)((function(){var t,e=G(v);return null===(t=Q)||void 0===t||t.addParticleForce(e),et.current=e,function(){var t;null===(t=Q)||void 0===t||t.removeParticleForce(e)}}),[v,U,Q]);var st=s(K({universe:Q,duration:O}),2),lt=(st[0],st[1]),ft=s(K({universe:Q,duration:P}),2),ht=(ft[0],ft[1]),pt=s(K({universe:Q,duration:S}),2),dt=(pt[0],pt[1]);return i.a.createElement("canvas",c({},N,{onMouseMove:function(t){var e,n;if(_){var r=$(t);lt((function(){return _(r.x,r.y)}))}null===(n=(e=N).onMouseMove)||void 0===n||n.call(e,t)},onTouchMove:function(t){var e,n;if(w){var r=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.touches[0].clientX-n.left)/(n.right-n.left)*e.width,y:(t.touches[0].clientY-n.top)/(n.bottom-n.top)*e.height}}(t);ht((function(){return w(r.x,r.y)}))}null===(n=(e=N).onTouchMove)||void 0===n||n.call(e,t)},onMouseDown:function(t){var e,n;if(j){var r=$(t);dt((function(){return j(r.x,r.y)}))}null===(n=(e=N).onMouseDown)||void 0===n||n.call(e,t)},height:o,width:u,style:c({backgroundColor:y,touchAction:"none"},W),ref:function(t){var e;(null===(e=t)||void 0===e?void 0:e.getContext("2d"))&&L(t)}}))}}).call(this,n(20))},76:function(t,e,n){t.exports=n(139)},83:function(t,e,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.cccb2c56.chunk.js.map