_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"0skS":function(t,n,e){"use strict";e.r(n);var i=e("lEbO");var r=e("HO86");function a(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=e("VtSi"),s=e.n(o);function h(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t,n,e,i,r,a,o){try{var s=t[a](o),h=s.value}catch(u){return void e(u)}s.done?n(h):Promise.resolve(h).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function o(t){u(a,i,r,o,s,"next",t)}function s(t){u(a,i,r,o,s,"throw",t)}o(void 0)}))}}var l=e("ERkP"),d=e.n(l),p=e("rh/l"),f=e("c7sy"),v=e("S95l"),g=e("p6XQ"),m=e("apO0"),w=e("Skfd"),b=d.a.createElement;function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?y(Object(e),!0).forEach((function(n){h(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var x=["/img_trace/cat.jpg","/img_trace/harinezumi.jpg","/img_trace/kuma.jpg","/img_trace/panda.png","/img_trace/risu.jpg","/img_trace/tanuki.jpg"].map((function(t){return"".concat(w.a).concat(t)})),E=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}];n.default=function(){var t=Object(l.useState)(x),n=t[0],e=t[1],i=Object(l.useState)(E),r=i[0],o=i[1],h=Object(l.useState)(),u=h[0],d=h[1],w=Object(l.useState)({numberOfColors:8,colorQuantCycles:3})[0],y=Object(l.useState)({})[0],C=Object(l.useState)(x[0]),O=C[0],P=C[1],M=Object(l.useState)(""),S=M[0],L=M[1],j=Object(l.useState)(),k=j[0],A=j[1],R=Object(l.useRef)(null),I=Object(l.useRef)(null),D=Object(l.useCallback)((function(t){L(t.target.value)}),[L]),z=Object(l.useCallback)((function(){u&&o(g.Palette.imageData(u,w))}),[w,o,u]),T=Object(l.useCallback)((function(){o(E)}),[o]),V=Object(l.useCallback)((function(t){return function(){var n=r.filter((function(n,e){return e!==t}));o(n)}}),[o,r]),B=Object(l.useCallback)(c(s.a.mark((function t(){var n,e,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=u,t.t0){t.next=6;break}return t.next=5,new g.ImgLoader({corsenabled:!0}).fromUrl(O);case 5:t.t0=t.sent;case 6:if(n=t.t0,!u&&n&&d(n),n){t.next=10;break}return t.abrupt("return");case 10:e=new g.ImgTrace(_(_({},y),{},{palettes:r})),i=e.load(n),A(i),e.palettes&&o(e.palettes),t.next=18;break;case 16:t.prev=16,t.t1=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])}))),[O,u,r,y]);Object(l.useEffect)((function(){if(I.current){var t=function(){if(I.current&&k){var t=new v.Renderer(I.current),n=I.current.getBoundingClientRect(),e=n.width,i=n.height;k.resize({width:e,height:i}),t.update(k.toJson())}};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[k]);var U=Object(l.useCallback)((function(t){return function(){P(t),n.includes(t)||e([].concat(a(n),[t]))}}),[P,n]),H=Object(l.useCallback)((function(){k&&Object(v.download)(k)}),[k]);return Object(l.useEffect)((function(){R.current&&(R.current.onload=function(){R.current&&new g.ImgLoader({corsenabled:!0}).fromImageElement(R.current,d)})}),[d]),b(m.a,null,b(p.Flex,{justifyContent:"start",flexWrap:"wrap"},b(p.Box,{mb:3},b(p.Button,{mr:2,mb:2,onClick:z},"Load Image Palette!"),b(p.Button,{mr:2,mb:2,onClick:T},"GrayScale Palette!"),b(p.Flex,{justifyContent:"start",py:"2px",px:"0"},r.sort((function(t,n){return t.r+t.g+t.b>n.r+n.g+n.b?-1:1})).map((function(t,n){return b("div",{key:n,style:{width:30,height:30,margin:2,position:"relative",backgroundColor:"rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat(t.a/255,")")}},b("div",{style:{position:"absolute",background:"#fff",bottom:2,left:2,width:8,lineHeight:"8px",textAlign:"center",fontSize:3,cursor:"pointer"},onMouseUp:V(n)},"x"))})))),b(p.Box,{mb:3},b(p.Button,{mr:2,mb:2,variant:"secondary",onClick:B},"Image Trace!"),k&&b(p.Button,{mr:2,mb:2,onClick:H},"Download"),b(p.Flex,{justifyContent:"start",flexWrap:"wrap"},b(p.Box,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"]},b(p.Image,{width:"100%",ref:R,crossOrigin:"anonymous",src:O,alt:""})),b(p.Box,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"]},b("div",{style:{width:"100%",height:"100%"},ref:I}))))),b(p.Box,{as:"fieldset"},b(p.Heading,null,"Select Image"),b(p.Box,null,b(f.Input,{type:"text",placeholder:"input image url",value:S,onChange:D}),b(p.Button,{onClick:U(S)},"Load image url")),b(p.Flex,{flexWrap:"wrap"},n.map((function(t,n){return b(p.Card,{key:n,width:"256px"},b(p.Image,{src:t,alt:t,onClick:U(t)}))})))))}},S95l:function(t,n,e){!function(t){"use strict";function n(){return e=n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},n.apply(this,arguments)}var e=n,i=e,r=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},a=function(t,n){return void 0===n&&(n=2),+t.toFixed(n)},o=function(t){return t.replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()}))},s=function(t,n){return Math.trunc(t)===Math.trunc(n)},h=function(t){return t!=t},u="http://www.w3.org/2000/svg",c=function(t,n){var e=document.createElementNS(u,"svg");return e.setAttributeNS(null,"version","1.1"),e.setAttribute("xmlns",u),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),Object.keys(t).sort().map((function(n){e.setAttribute(n,t[n])})),n.map((function(t){e.appendChild(t)})),e},l=function(t,n){var e=document.createElementNS(u,t);return Object.keys(n).sort().map((function(t){e.setAttribute(t,n[t])})),e},d=function(t){var n=Object.entries(t).reduce((function(t,n,e){var a,o=n[0],s=n[1];return s?i({},t,((a={})[r(o)]=s,a)):t}),{});return l("path",n)},p=function(t){var n=t.width,e=t.height,r=t.background,a=t.paths,o={width:String(n),height:String(e)},s=r?[l("rect",i({},o,{fill:r}))]:[];return c(o,[].concat(s,a.map(d)))},f=function(){function t(t,n){var e=(void 0===n?{}:n).background;this.el=t;var i=t.getBoundingClientRect(),r=i.width,a=i.height;t.appendChild(p({background:e,width:r,height:a,paths:[]}))}return t.prototype.update=function(t){this.el.replaceChild(p(t),this.el.childNodes[0])},t}(),v=function(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r};function g(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(t,n,e){return n&&g(t.prototype,n),e&&g(t,e),t},w=function(){function t(t,n){this.x=t,this.y=n}var n=t.prototype;return n.toVector=function(){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),n=Math.atan2(this.y,this.x);return new _(t,n)},n.scale=function(n){return new t(this.x*n,this.y*n)},n.add=function(n){return new t(this.x+n.x,this.y+n.y)},n.sub=function(n){return new t(this.x-n.x,this.y-n.y)},n.eql=function(t){return this.x===t.x&&this.y===t.y},n.clone=function(){return new t(this.x,this.y)},t}(),b={MOVE:"M",MOVE_RELATIVE:"m",LINE:"L",LINE_RELATIVE:"l",CURVE:"C",CURVE_RELATIVE:"c",CLOSE:"Z",HORIZONTAL:"H",HORIZONTAL_RELATIVE:"h",VERTICAL:"V",VERTICAL_RELATIVE:"v",ARC_CURVE:"A",ARC_CURVE_RELATIVE:"a",QUADRATIC_CURVE:"Q",QUADRATIC_CURVE_RELATIVE:"q"},y=function(){function t(t,n){void 0===n&&(n=[]),this.value=n,this.type=t}var n=t.prototype;return n.toString=function(){return this.type===b.CLOSE?b.CLOSE:this.type+" "+this.value.map((function(t){return a(t)})).join(" ")},n.scale=function(n){return new t(this.type,this.value.map((function(t){return t*n})))},n.clone=function(){return new t(this.type,this.value.slice())},m(t,[{key:"cr",set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(2,1,t.x),this.value.splice(3,1,t.y)))},get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(2,4),n=t[0],e=t[1];return new w(n,e)}}},{key:"cl",set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(0,1,t.x),this.value.splice(1,1,t.y)))},get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(0,2),n=t[0],e=t[1];return new w(n,e)}}},{key:"point",set:function(t){t&&(this.value.splice(this.value.length-2,1,t.x),this.value.splice(this.value.length-1,1,t.y))},get:function(){var t=this.value.slice(this.value.length-2);return 2===t.length?new w(t[0],t[1]):void 0}}]),t}(),_=function(){function t(t,n){this.value=t,this.angle=n}var n=t.prototype;return n.toPoint=function(){var t=Math.cos(this.angle)*this.value,n=Math.sin(this.angle)*this.value;return new w(t,n)},n.scale=function(n){return new t(this.value*n,this.angle)},t}(),x=function(){function t(t){var n=void 0===t?{}:t,e=n.d,i=v(n,["d"]);this.attrs=i,this.commands=[],e&&this.parseCommandString(e)}var n=t.prototype;return n.scale=function(t){return this.commands=this.commands.map((function(n){return n.scale(t)})),this.attrs.strokeWidth=String(t*+(this.attrs.strokeWidth||0)),this},n.addCommand=function(t){var n;return Array.isArray(t)?(n=this.commands).push.apply(n,t):this.commands.push(t),this},n.getCommandString=function(){return 0===this.commands.length?"":this.commands.map((function(t,n){return t.toString()})).join(" ").trim()},n.parseCommandString=function(t){this.commands=[];for(var n=null,e=[],i=t.split(" "),r=function(t){return Object.values(b).includes(t)?t:null},a=0;a<i.length;a+=1){var o=r(i[a]);if(o){if(!n){n=o;continue}this.commands.push(new y(n,e)),n=o,e=[]}else{if(h(+i[a]))return;e.push(+i[a])}}null!==n&&this.commands.push(new y(n,e))},n.parsePathElement=function(t){for(var n=0;n<t.attributes.length;n+=1){var e,r=t.attributes.item(n);r&&r.value&&("d"!==r.name?this.attrs=i({},this.attrs,((e={})[o(r.name)]=r.value,e)):this.parseCommandString(r.value))}return this},n.toJson=function(){return i({},this.attrs,{d:this.getCommandString()})},n.clone=function(){var n=new t(this.attrs);return this.commands.map((function(t){n.commands.push(t.clone())})),n},t}(),E=function(){function t(t){var n=t.width,e=t.height,i=t.background;this.paths=[],this.width=n,this.height=e,this.background=i}var n=t.prototype;return n.resize=function(t){var n=t.width,e=t.height;this.scalePath(n/this.width),this.width=n,this.height=e},n.scalePath=function(t){if(1!==t)for(var n=0;n<this.paths.length;n+=1)this.paths[n].scale(t);return this},n.addPath=function(t){var n;return Array.isArray(t)?(n=this.paths).push.apply(n,t):this.paths.push(t),this},n.clonePaths=function(){return this.paths.map((function(t){return t.clone()}))},n.updatePath=function(t,n){var e=n||this.paths.length-1;return e<0&&this.paths.push(t),this.paths[e]=t,this},n.toJson=function(){return{width:this.width,height:this.height,background:this.background,paths:this.paths.map((function(t){return t.toJson()}))}},n.copy=function(t){return this.paths=t.clonePaths(),t.width&&this.width&&this.scalePath(this.width/t.width),this},n.parseSVGString=function(t){var n=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");return n?this.parseSVGElement(n):(this.paths=[],this)},n.parseSVGElement=function(t){var n=[];t.querySelectorAll("path").forEach((function(t){var e=(new x).parsePathElement(t);0!==e.commands.length&&n.push(e)})),this.paths=n;var e=Number(t.getAttribute("width"));return e&&this.width&&this.scalePath(this.width/e),this},t}(),C=function(){function t(t){var n=(void 0===t?{}:t).ratio;this.ratio=null!=n?n:.2}var n=t.prototype;return n._controlPoint=function(t,n,e){var i=new w(t.x,t.y),r=new w(n.x,n.y),a=new w(e.x,e.y).sub(i).toVector().scale(this.ratio).toPoint(),o=r.add(a);return[o.x,o.y]},n.bezierCurve=function(t,n,e,i){var r=[].concat(this._controlPoint(t,n,e),this._controlPoint(i,e,n),[e.x,e.y]);return new y(b.CURVE,r)},n.lineCommands=function(t){return t.map((function(t,n){return new y(0===n?b.MOVE:b.LINE,[t.x,t.y])}))},n.bezierCurveCommands=function(t){var n=[];if(t.length<3)return this.lineCommands(t);for(var e=0;e<t.length;e+=1)0!==e?n.push(this.bezierCurve(t[e-2<0?0:e-2],t[e-1],t[e],e<t.length-1?t[e+1]:t[e])):n.push(new y(b.MOVE,[t[e].x,t[e].y]));return n},t}();function O(t,n,e){var i,r,a;void 0===e&&(e={});var o=null,s=0,h=function(){s=!1===e.leading?0:Date.now(),o=null,a=t.apply(i,r),o||(i=null,r=null)},u=function(){o&&(clearTimeout(o),o=null)};return function(){var c=Date.now();s||!1!==e.leading||(s=c);var l=n-(c-s);i=this;for(var d=arguments.length,p=new Array(d),f=0;f<d;f++)p[f]=arguments[f];return r=p,l<=0||l>n?(u(),s=c,a=t.apply(i,r),o||(i=null,r=null)):o||!1===e.trailing||(o=setTimeout(h,l)),a}}var P=function(t){void 0===t&&(t=!0);try{var n=function(){return null};return addEventListener("testPassive",n,{passive:t}),removeEventListener("testPassive",n),{passive:t}}catch(t){return!1}},M={pointer:{start:["pointerdown"],move:["pointermove"],end:["pointerleave","pointercancel"],frameout:["pointerup"]},touch:{start:["touchstart"],move:["touchmove"],end:["touchend"],frameout:["touchcancel"]},mouse:{start:["mousedown"],move:["mousemove"],end:["mouseleave","mouseout"],frameout:["mouseup"]}},S=function(){function t(t,n){var e=n.end,i=n.start,r=n.move;this._el=t,this.end=e,this.start=i,this.move=r,this._clearEventList=[],this._listenerOption=P(!1);var a=t.getBoundingClientRect(),o=a.left,s=a.top;this._left=o,this._top=s,this._handleStart=this._handleStart.bind(this),this._handleMove=this._handleMove.bind(this),this._handleEnd=this._handleEnd.bind(this)}var n=t.prototype;return n.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},n.on=function(){this.off(),this._setupCoordinatesListener(),window.PointerEvent?this._setupDrawListener("pointer"):this._setupDrawListener("mouse"),"ontouchstart"in window&&this._setupDrawListener("touch")},n._handleStart=function(t){t.preventDefault(),this.start()},n._handleEnd=function(t){t.preventDefault(),this.end()},n._handleMove=function(t){if(t.preventDefault(),t instanceof TouchEvent){var n=t.touches[0];this.move({x:n.clientX-this._left,y:n.clientY-this._top,pressure:n.force})}else t instanceof PointerEvent?this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:t.pressure}):t instanceof MouseEvent&&this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:null==t?void 0:t.pressure})},n._setupDrawListener=function(t){var n,e=this,i=M[t],r=i.start,a=i.move,o=i.end,s=i.frameout,h=r.map((function(t){return e._el.addEventListener(t,e._handleStart,e._listenerOption),function(){return e._el.removeEventListener(t,e._handleStart)}})),u=a.map((function(t){return e._el.addEventListener(t,e._handleMove,e._listenerOption),function(){return e._el.removeEventListener(t,e._handleMove)}})),c=o.map((function(t){return e._el.addEventListener(t,e._handleEnd,e._listenerOption),function(){return e._el.removeEventListener(t,e._handleEnd)}})),l=s.map((function(t){return addEventListener(t,e._handleEnd,e._listenerOption),function(){return removeEventListener(t,e._handleEnd)}}));(n=this._clearEventList).push.apply(n,h.concat(u,c,l))},n._setupCoordinatesListener=function(){var t=this,n=function(n){var e=t._el.getBoundingClientRect(),i=e.left,r=e.top;t._left=i,t._top=r};addEventListener("scroll",n),this._el.addEventListener("resize",n),this._clearEventList.push((function(){removeEventListener("scroll",n),t._el.removeEventListener("resize",n)}))},t}(),L=function(){function t(t,n){var e=n.resize;this._el=t,this.resize=e,this._clearEventList=[]}var n=t.prototype;return n.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},n.on=function(){this.off(),this._setupListerner()},n._setupListerner=function(){var t=this;if(window.ResizeObserver){var n=new window.ResizeObserver((function(n){var e=n[0];t.resize(e.contentRect)}));n.observe(this._el),this._clearEventList.push((function(){return n.disconnect()}))}else{var e=function(){t.resize(t._el.getBoundingClientRect())};addEventListener("resize",e),this._clearEventList.push((function(){return removeEventListener("resize",e)}))}},t}(),j=function(t){return k(p(t).outerHTML)},k=function(t){return"data:image/svg+xml;base64,"+btoa(t)},A={png:"image/png",jpg:"image/jpeg",svg:"image/svg+xml"},R=function(t){for(var n=t.data,e=t.extension,i=t.filename,r=atob(n.replace(/^.*,/,"")),a=new Uint8Array(r.length),o=0;o<r.length;o+=1)a[o]=r.charCodeAt(o);var s=i||Date.now()+"."+e,h=new Blob([a.buffer],{type:A[e]});if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(h,s);else if(window.URL&&window.URL.createObjectURL){var u=document.createElement("a");u.download=s,u.href=window.URL.createObjectURL(h),document.body.appendChild(u),u.click(),document.body.removeChild(u)}else window.open(n,"_blank")},I={extension:"svg"},D=function(t,n,e){void 0===n&&(n=I),void 0===e&&(e=R);var r=i({},I,n),a=r.filename,o=r.extension,s=j(t.toJson());if("svg"!==o){var h=t.width,u=t.height,c=t.background,l=new Image;l.addEventListener("load",(function(){var t=document.createElement("canvas");t.setAttribute("width",String(h)),t.setAttribute("height",String(u));var n=t.getContext("2d");n&&((c||"jpg"===o)&&(n.fillStyle=c||"#fff",n.fillRect(0,0,h,u)),n.drawImage(l,0,0),e("png"===o?{data:t.toDataURL("image/png"),extension:"png"}:{data:t.toDataURL("image/jpeg"),extension:"jpg"}))}),!1),l.src=s}else e({data:s,extension:"svg",filename:a})},z=function(){function t(t,n){var e=void 0===n?{}:n,i=e.penColor,r=e.penWidth,a=e.curve,o=e.close,s=e.delay,h=e.fill,u=e.background;this.el=t,this.penColor=null!=i?i:"#000",this.penWidth=null!=r?r:1,this.curve=null==a||a,this.close=null!=o&&o,this.delay=null!=s?s:0,this.fill=null!=h?h:"none";var c=t.getBoundingClientRect(),l=c.width,d=c.height;this._drawPath=null,this._drawPoints=[],this.svg=new E({width:l,height:d,background:u}),this.renderer=new f(t,{background:u}),this.convert=new C,this._resize=this._resize.bind(this),this.resizeHandler=new L(t,{resize:this._resize}),this.drawStart=this.drawStart.bind(this),this.drawMove=this.drawMove.bind(this),this._drawMoveThrottle=O(this.drawMove,this.delay),this.drawEnd=this.drawEnd.bind(this),this.drawHandler=new S(t,{start:this.drawStart,move:this._drawMoveThrottle,end:this.drawEnd}),this.on()}var n=t.prototype;return n.update=function(){this.renderer.update(this.svg.toJson())},n.clear=function(){var t=this.svg.paths;return this.svg.paths=[],this.update(),t},n.undo=function(){var t=this.svg.paths.pop();return this.update(),t},n.changeDelay=function(t){this.delay=t,this.drawHandler.move=O(this.drawMove,this.delay),this.drawHandler.on()},n.on=function(){this.drawHandler.on(),this.resizeHandler.on()},n.off=function(){this.drawHandler.off(),this.resizeHandler.off()},n.drawStart=function(){this._drawPath||(this._drawPath=this._createDrawPath(),this.svg.addPath(this._drawPath))},n.drawMove=function(t){this._drawPath&&(this._addDrawPoint(t),(this._drawPath.attrs.strokeWidth&&+this._drawPath.attrs.strokeWidth!==this.penWidth||this._drawPath.attrs.stroke!==this.penColor)&&(this._drawPath=this._createDrawPath(),this._addDrawPoint(t),this.svg.addPath(this._drawPath)),this.update())},n.drawEnd=function(){this._drawPath=null,this.update()},n._createCommand=function(){this._drawPath&&(this.curve?this._drawPath.commands=this.convert.bezierCurveCommands(this._drawPoints):this._drawPath.commands=this.convert.lineCommands(this._drawPoints),this.close&&this._drawPath.commands.push(new y(b.CLOSE)))},n._addDrawPoint=function(t){this._drawPoints.push(t),this._createCommand()},n._createDrawPath=function(){return this._resize(this.el.getBoundingClientRect()),this._drawPoints=[],new x({stroke:this.penColor,strokeWidth:String(this.penWidth),fill:this.fill,strokeLinecap:this.curve?"round":"mitter",strokeLinejoin:this.curve?"round":"square"})},n._resize=function(t){var n=t.width,e=t.height;s(this.svg.width,n)||(this.svg.resize({width:n,height:e}),this.update())},n.download=function(t){D(this.svg,t)},t}();t.COMMAND_TYPE=b,t.Command=y,t.Convert=C,t.DrawHandler=S,t.Path=x,t.Point=w,t.Renderer=f,t.ResizeHandler=L,t.Svg=E,t.SvgDrawing=z,t.Vector=_,t.camel2kebab=r,t.createSvgChildElement=l,t.createSvgElement=c,t.download=D,t.downloadBlob=R,t.getPassiveOptions=P,t.isAlmostSameNumber=s,t.isNaN=h,t.kebab2camel=o,t.mimeTypeMap=A,t.pathObjectToElement=d,t.roundUp=a,t.svg2base64=k,t.svgObjectToElement=p,t.throttle=O,t.toBase64=j,Object.defineProperty(t,"__esModule",{value:!0})}(n)},Skfd:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var i=t.env.BASE_PATH||""}).call(this,e("F63i"))},VtSi:function(t,n,e){t.exports=e("3yYM")},p6XQ:function(t,n,e){!function(t,n){"use strict";function e(){return i=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},e.apply(this,arguments)}var i=e,r=i,a=function(t){var n=t.width*t.height;if(!(t.data.length<4*n))return t;for(var e=new Uint8ClampedArray(4*n),i=0;i<n;i++)e[4*i]=t.data[3*i],e[4*i+1]=t.data[3*i+1],e[4*i+2]=t.data[3*i+2],e[4*i+3]=255;return r({},t,{data:e})},o=[[.27901,.44198,.27901],[.135336,.228569,.272192,.228569,.135336],[.086776,.136394,.178908,.195843,.178908,.136394,.086776],[.063327,.093095,.122589,.144599,.152781,.144599,.122589,.093095,.063327],[.049692,.069304,.089767,.107988,.120651,.125194,.120651,.107988,.089767,.069304,.049692]],s=function(){function t(t){var n=t.radius,e=t.delta;this.radius=null!=n?n:0,this.delta=null!=e?e:20}return t.prototype.apply=function(t){var n=a(t),e=new Uint8ClampedArray(n.data),i=Math.floor(this.radius);if(i<1)return n;i>o.length&&(i=o.length);var r=Math.abs(this.delta);r>1024&&(r=1024);for(var s=o[i-1],h=0;h<n.height;h++)for(var u=0;u<n.width;u++){for(var c=0,l=0,d=0,p=0,f=0,v=-i;v<i+1;v++)if(u+v>0&&u+v<n.width){var g=4*(h*n.width+u+v);c+=n.data[g]*s[v+i],l+=n.data[g+1]*s[v+i],d+=n.data[g+2]*s[v+i],p+=n.data[g+3]*s[v+i],f+=s[v+i]}var m=4*(h*n.width+u);e[m]=Math.floor(c/f),e[m+1]=Math.floor(l/f),e[m+2]=Math.floor(d/f),e[m+3]=Math.floor(p/f)}for(var w=new Uint8ClampedArray(e),b=0;b<n.height;b++)for(var y=0;y<n.width;y++){for(var _=0,x=0,E=0,C=0,O=0,P=-i;P<i+1;P++)if(b+P>0&&b+P<n.height){var M=4*((b+P)*n.width+y);_+=w[M]*s[P+i],x+=w[M+1]*s[P+i],E+=w[M+2]*s[P+i],C+=w[M+3]*s[P+i],O+=s[P+i]}var S=4*(b*n.width+y);e[S]=Math.floor(_/O),e[S+1]=Math.floor(x/O),e[S+2]=Math.floor(E/O),e[S+3]=Math.floor(C/O)}for(var L=0;L<n.height;L++)for(var j=0;j<n.width;j++){var k=4*(L*n.width+j);Math.abs(e[k]-n.data[k])+Math.abs(e[k+1]-n.data[k+1])+Math.abs(e[k+2]-n.data[k+2])+Math.abs(e[k+3]-n.data[k+3])>r&&(e[k]=n.data[k],e[k+1]=n.data[k+1],e[k+2]=n.data[k+2],e[k+3]=n.data[k+3])}return new ImageData(e,n.width,n.height)},t}(),h=function(){function t(t){var n;this.corsenabled=null==(n=t.corsenabled)||n}var n=t.prototype;return n.fromUrl=function(t,n){var e=this,i=function(n,i){var r=new Image;e.corsenabled&&(r.crossOrigin="Anonymous"),r.onload=function(){e.fromImageElement(r,n)},r.onerror=function(t){i?i(t):console.error(t)},r.src=t};if(!n)return new Promise(i);i(n)},n.fromImageElement=function(t,n){var e=function(n,e){var i=document.createElement("canvas");i.width=t.naturalWidth||t.width,i.height=t.naturalHeight||t.height;var r=i.getContext("2d");null==r||r.drawImage(t,0,0);var a=null==r?void 0:r.getImageData(0,0,i.width,i.height);if(!a){if(e)return void e("error canvas context.");throw"error canvas context."}n(a)};if(!n)return new Promise(e);e(n)},t}(),u=function(){function t(){}return t.imageData=function(t,n){for(var e=void 0===n?{}:n,i=e.numberOfColors||16,r=e.colorQuantCycles||3,o=a(t),s=this._deterministic(o,i),h=[],u=0;u<r;u++){if(u>0)for(var c=0;c<s.length;c++)h[c].n>0&&(s[c]={r:Math.floor(h[c].r/h[c].n),g:Math.floor(h[c].g/h[c].n),b:Math.floor(h[c].b/h[c].n),a:Math.floor(h[c].a/h[c].n)});h=Array.from({length:s.length},(function(){return{r:0,g:0,b:0,a:0,n:0}}));for(var l=0;l<o.height;l++)for(var d=function(t){var n=4*(l*o.width+t),e=1024,i=s.reduce((function(t,i,r){var a=Math.abs(i.r-o.data[n])+Math.abs(i.g-o.data[n+1])+Math.abs(i.b-o.data[n+2])+Math.abs(i.a-o.data[n+3]);return a<e?(e=a,r):t}),0);h[i].r+=o.data[n],h[i].g+=o.data[n+1],h[i].b+=o.data[n+2],h[i].a+=o.data[n+3],h[i].n+=1},p=0;p<o.width;p++)d(p)}return s},t._deterministic=function(t,n){for(var e=[],i=Math.ceil(Math.sqrt(n)),r=Math.ceil(n/i),a=t.width/(i+1),o=t.height/(r+1),s=0;s<r;s++)for(var h=0;h<i&&e.length!==n;h++){var u=4*Math.floor((s+1)*o*t.width+(h+1)*a);e.push({r:t.data[u],g:t.data[u+1],b:t.data[u+2],a:t.data[u+3]})}return e},t.number=function(t){if(void 0===t&&(t=16),t<8)return this.grey(t);for(var n=[],e=Math.floor(Math.pow(t,1/3)),i=Math.floor(255/(e-1)),r=0;r<e;r+=1)for(var a=0;a<e;a+=1)for(var o=0;o<e;o+=1)n.push({r:r*i,g:a*i,b:o*i,a:255});for(var s=t-e*e*e,h=0;h<s;h++)n.push({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:Math.floor(255*Math.random())});return n},t.grey=function(t){void 0===t&&(t=16);for(var n=[],e=Math.floor(255/(t-1)),i=0;i<t;i++)n.push({r:i*e,g:i*e,b:i*e,a:255});return n},t}(),c=0,l=1,d=2,p=3,f=4,v=5,g=6,m=7,w=8,b=-1,y=[[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[13,3,0,1],[13,2,-1,0],[7,1,0,-1],[7,0,1,0]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[11,1,0,-1],[14,0,1,0],[14,3,0,1],[11,2,-1,0]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]]],_=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}],x=function(){function t(t){var n,e,i,a,o;void 0===t&&(t={}),this.ltres=null!=(n=t.ltres)?n:1,this.qtres=null!=(e=t.qtres)?e:1,this.rightangleenhance=null==(i=t.rightangleenhance)||i,this.pathOmit=null!=(a=t.pathOmit)?a:8,this.commandOmit=null!=(o=t.commandOmit)?o:0,this.pathAttrs=r({strokeWidth:"1"},t.pathAttrs||{}),this.palettes=t.palettes||_}var e=t.prototype;return e.load=function(t){for(var e=a(t),i=this._colorQuantization(e),r=[],o=0;o<this.palettes.length;o++){var s=this._edgeDetection(i,o),h=this._pathScan(s),u=this._interpolation(h).map(this._tracePath.bind(this));r.push(u)}var c=this._createPaths(r);return new n.Svg({width:i[0].length-2,height:i.length-2}).addPath(c)},e._colorQuantization=function(t){var n=this;return Array.from({length:t.height+2},(function(e,i){return Array.from({length:t.width+2},(function(e,r){if(0===r||r===t.width+1||0===i||i===t.height+1)return-1;var a=r-1,o=4*((i-1)*t.width+a);return n._findPaletteIndex({r:t.data[o],g:t.data[o+1],b:t.data[o+2],a:t.data[o+3]})}))}))},e._findPaletteIndex=function(t){var n=t.r,e=t.g,i=t.b,r=t.a,a=1024;return this.palettes.reduce((function(t,o,s){var h=Math.abs(o.r-n)+Math.abs(o.g-e)+Math.abs(o.b-i)+Math.abs(o.a-r);return h<a?(a=h,s):t}),0)},e._edgeDetection=function(t,n){for(var e=[],i=t.length,r=t[0].length,a=0;a<i;a++){e[a]=[];for(var o=0;o<r;o++)e[a][o]=0===a||0===o?0:(t[a-1][o-1]===n?1:0)+(t[a-1][o]===n?2:0)+(t[a][o-1]===n?8:0)+(t[a][o]===n?4:0)}return e},e._pointpoly=function(t,n){for(var e=!1,i=0,r=n.length-1;i<n.length;r=i++)e=n[i].y>t.y!=n[r].y>t.y&&t.x<(n[r].x-n[i].x)*(t.y-n[i].y)/(n[r].y-n[i].y)+n[i].x?!e:e;return e},e._pathScan=function(t){for(var n=t[0].length,e=t.length,i=[],r=0,a=0;a<e;a++)for(var o=0;o<n;o++){var s=t[a][o];if(4===s||11===s){var h=o,u=a,c=1,l=0,d=!1;for(i[r]={points:[],boundingbox:[h,u,h,u],holechildren:[],isholepath:!1};!d;){i[r].points[l]={x:h-1,y:u-1,direction:b},h-1<i[r].boundingbox[0]&&(i[r].boundingbox[0]=h-1),h-1>i[r].boundingbox[2]&&(i[r].boundingbox[2]=h-1),u-1<i[r].boundingbox[1]&&(i[r].boundingbox[1]=u-1),u-1>i[r].boundingbox[3]&&(i[r].boundingbox[3]=u-1);var p=y[t[u][h]][c];if(t[u][h]=p[0],c=p[1],h+=p[2],u+=p[3],h-1===i[r].points[0].x&&u-1===i[r].points[0].y)if(d=!0,i[r].points.length<this.pathOmit)i.pop();else{if(11===s){i[r].isholepath=!0;for(var f=0,v=[-1,-1,n+1,e+1],g=0;g<r;g++)!i[g].isholepath&&this._boundingboxincludes(i[g].boundingbox,i[r].boundingbox)&&this._boundingboxincludes(v,i[g].boundingbox)&&this._pointpoly(i[r].points[0],i[g].points)&&(f=g,v=i[g].boundingbox);i[f].holechildren.push(r)}r++}l++}}}return i},e._boundingboxincludes=function(t,n){return t[0]<n[0]&&t[1]<n[1]&&t[2]>n[2]&&t[3]>n[3]},e._interpolation=function(t){for(var n=[],e=0,i=0,r=0,a=0,o=0;o<t.length;o++){n[o]={points:[],boundingbox:t[o].boundingbox,holechildren:t[o].holechildren,isholepath:t[o].isholepath};for(var s=t[o].points.length,h=0;h<s;h++)e=(h+1)%s,i=(h+2)%s,r=(h-1+s)%s,a=(h-2+s)%s,this.rightangleenhance&&this._testrightangle(t[o],a,r,h,e,i)&&(n[o].points.length>0&&(n[o].points[n[o].points.length-1].direction=this._getdirection(n[o].points[n[o].points.length-1].x,n[o].points[n[o].points.length-1].y,t[o].points[h].x,t[o].points[h].y)),n[o].points.push({x:t[o].points[h].x,y:t[o].points[h].y,direction:this._getdirection(t[o].points[h].x,t[o].points[h].y,(t[o].points[h].x+t[o].points[e].x)/2,(t[o].points[h].y+t[o].points[e].y)/2)})),n[o].points.push({x:(t[o].points[h].x+t[o].points[e].x)/2,y:(t[o].points[h].y+t[o].points[e].y)/2,direction:this._getdirection(t[o].points[h].x+t[o].points[e].x,t[o].points[h].y+t[o].points[e].y,t[o].points[e].x+t[o].points[i].x,t[o].points[e].y+t[o].points[i].y)})}return n},e._testrightangle=function(t,n,e,i,r,a){return t.points[i].x===t.points[n].x&&t.points[i].x===t.points[e].x&&t.points[i].y===t.points[r].y&&t.points[i].y===t.points[a].y||t.points[i].y===t.points[n].y&&t.points[i].y===t.points[e].y&&t.points[i].x===t.points[r].x&&t.points[i].x===t.points[a].x},e._getdirection=function(t,n,e,i){return t<e?n<i?l:m:t>e?n<i?p:n>i?v:f:n<i?d:n>i?g:w},e._tracePath=function(t){for(var e=0,i=[],r=[];e<t.points.length;){for(var a=t.points[e].direction,o=b,s=e+1;(t.points[s].direction===a||t.points[s].direction===o||-1===o)&&s<t.points.length-1;)t.points[s].direction!==a&&o===b&&(o=t.points[s].direction||c),s++;s===t.points.length-1?(i.push.apply(i,this._fitseq(t,e,0)),r.push.apply(r,this._fitseq(t,e,0,!0)),e=t.points.length):(i.push.apply(i,this._fitseq(t,e,s)),r.push.apply(r,this._fitseq(t,e,s,!0)),e=s)}var h=[new n.Command("M",[t.points[0].x,t.points[0].y])].concat(i,[new n.Command("Z")]);return r.reverse(),{commands:h,holeCommands:[new n.Command("M",r[r.length-1].value.slice(0,2))].concat(r,[new n.Command("Z")]),holechildren:t.holechildren,isholepath:t.isholepath}},e._fitseq=function(t,e,i,r){var a=this.ltres,o=this.qtres;if(i>t.points.length||i<0)return[];var s,h,u,c=e,l=0,d=!0,p=i-e;p<0&&(p+=t.points.length);for(var f=(t.points[i].x-t.points[e].x)/p,v=(t.points[i].y-t.points[e].y)/p,g=(e+1)%t.points.length;g!=i;){var m=g-e;m<0&&(m+=t.points.length),s=t.points[e].x+f*m,h=t.points[e].y+v*m,(u=(t.points[g].x-s)*(t.points[g].x-s)+(t.points[g].y-h)*(t.points[g].y-h))>a&&(d=!1),u>l&&(c=g,l=u),g=(g+1)%t.points.length}if(d)return[new n.Command("L",r?[t.points[e].x,t.points[e].y]:[t.points[i].x,t.points[i].y])];var w=c;d=!0,l=0;var b=(w-e)/p,y=(1-b)*(1-b),_=2*(1-b)*b,x=b*b,E=(y*t.points[e].x+x*t.points[i].x-t.points[w].x)/-_,C=(y*t.points[e].y+x*t.points[i].y-t.points[w].y)/-_;for(g=e+1;g!=i;)_=2*(1-(b=(g-e)/p))*b,x=b*b,s=(y=(1-b)*(1-b))*t.points[e].x+_*E+x*t.points[i].x,h=y*t.points[e].y+_*C+x*t.points[i].y,(u=(t.points[g].x-s)*(t.points[g].x-s)+(t.points[g].y-h)*(t.points[g].y-h))>o&&(d=!1),u>l&&(c=g,l=u),g=(g+1)%t.points.length;if(d)return[new n.Command("Q",[E,C,t.points[i].x,t.points[i].y])];var O=w;return this._fitseq(t,e,O,r).concat(this._fitseq(t,O,i,r))},e._complementCommand=function(t,n){for(var e=t[n],i=[],r=0;r<e.holechildren.length;r++)i.push.apply(i,t[e.holechildren[r]].holeCommands);return i},e._createPaths=function(t){for(var e=[],i=0;i<t.length;i++)for(var a=0;a<t[i].length;a++){var o=t[i],s=o[a];if(!(s.isholepath||s.commands.length<this.commandOmit)){var h=this.palettes[i],u="rgb("+h.r+", "+h.g+", "+h.b+")",c=new n.Path(r({},this.pathAttrs,{stroke:u,fill:u,opacity:String(h.a/255)}));c.addCommand([].concat(s.commands,this._complementCommand(o,a))),e.push(c)}}return e},t}();t.Blur=s,t.ImgLoader=h,t.ImgTrace=x,t.Palette=u,Object.defineProperty(t,"__esModule",{value:!0})}(n,e("S95l"))},yrxl:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/img-trace",function(){return e("0skS")}])}},[["yrxl",0,2,1,3,4]]]);