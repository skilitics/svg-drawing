(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{5128:function(t,e,n){"use strict";var i,r=n(1171),s=n(1628),a=n(7729),o=n(9097),h=n(2784),u=n(6451),l=n(4149),d=n(2322),c=(0,l.createGlobalStyle)(i||(i=(0,r.Z)(["\n body, * {\n   margin: 0;\n   box-sizing: border-box;\n }\n\n  a {\n    color: initial;\n    text-decoration: initial;\n  }\n"]))),v=function(){return(0,d.jsx)(u.xu,{bg:"#fafafa",py:"8px",px:"16px",children:(0,d.jsxs)(u.kC,{justifyContent:"space-between",children:[(0,d.jsx)(u.xu,{width:.3,children:(0,d.jsx)(o.default,{href:"/",children:(0,d.jsx)("a",{children:(0,d.jsx)(u.xv,{fontSize:3,as:"h1",style:{whiteSpace:"nowrap"},children:"svg-drawing"})})})}),(0,d.jsxs)(u.kC,{as:"nav",alignContent:"center",width:.6,children:[(0,d.jsx)(o.default,{href:"/",children:(0,d.jsx)("a",{children:(0,d.jsx)(u.xv,{mr:2,children:"drawing"})})}),(0,d.jsx)(u.xv,{mr:2,children:(0,d.jsx)(o.default,{href:"/demo/animation",children:(0,d.jsx)("a",{children:"animation"})})}),(0,d.jsx)(u.xv,{mr:2,children:(0,d.jsx)(o.default,{href:"/demo/img-trace",children:(0,d.jsx)("a",{children:"img-trace"})})})]}),(0,d.jsx)(u.xu,{width:.1,style:{textAlign:"right"},children:(0,d.jsx)(u.rU,{color:"#000",href:"https://github.com/kmkzt/svg-drawing",children:(0,d.jsx)(s.X,{size:"24"})})})]})})};e.Z=function(t){var e=t.children,n=t.title,i=void 0===n?"":n;return(0,d.jsxs)(h.Fragment,{children:[(0,d.jsx)(a.default,{children:(0,d.jsx)("title",{children:"svg-drawing ".concat(i)})}),(0,d.jsx)(c,{}),(0,d.jsx)(v,{}),(0,d.jsx)(u.xu,{py:"12px",px:["2vw","2vw","5vw"],children:e})]})}},5793:function(t,e){!function(t){"use strict";function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},s=function(t,e){return void 0===e&&(e=2),+t.toFixed(e)},a=function(t){return t.replace(/-([a-z])/g,(function(t,e){return e.toUpperCase()}))},o=function(t,e){return Math.trunc(t)===Math.trunc(e)},h=function(t){return t!=t},u=["d"],l=function(){function t(t,n){e(this,"x",void 0),e(this,"y",void 0),this.x=t,this.y=n}var n=t.prototype;return n.toVector=function(){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),e=Math.atan2(this.y,this.x);return new v(t,e)},n.scale=function(e){return new t(this.x*e,this.y*e)},n.add=function(e){return new t(this.x+e.x,this.y+e.y)},n.sub=function(e){return new t(this.x-e.x,this.y-e.y)},n.eql=function(t){return this.x===t.x&&this.y===t.y},n.clone=function(){return new t(this.x,this.y)},t}(),d={MOVE:"M",MOVE_RELATIVE:"m",LINE:"L",LINE_RELATIVE:"l",CURVE:"C",CURVE_RELATIVE:"c",CLOSE:"Z",HORIZONTAL:"H",HORIZONTAL_RELATIVE:"h",VERTICAL:"V",VERTICAL_RELATIVE:"v",ARC_CURVE:"A",ARC_CURVE_RELATIVE:"a",QUADRATIC_CURVE:"Q",QUADRATIC_CURVE_RELATIVE:"q"},c=function(){function t(t,n){void 0===n&&(n=[]),e(this,"type",void 0),e(this,"value",void 0),this.value=n,this.type=t}var n,r,a,o=t.prototype;return o.toString=function(){return this.type===d.CLOSE?d.CLOSE:this.type+" "+this.value.map((function(t){return s(t)})).join(" ")},o.scale=function(e){return new t(this.type,this.value.map((function(t){return t*e})))},o.clone=function(){return new t(this.type,this.value.slice())},n=t,(r=[{key:"cr",get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(2,4),e=t[0],n=t[1];return new l(e,n)}},set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(2,1,t.x),this.value.splice(3,1,t.y)))}},{key:"cl",get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(0,2),e=t[0],n=t[1];return new l(e,n)}},set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(0,1,t.x),this.value.splice(1,1,t.y)))}},{key:"point",get:function(){var t=this.value.slice(this.value.length-2);return 2===t.length?new l(t[0],t[1]):void 0},set:function(t){t&&(this.value.splice(this.value.length-2,1,t.x),this.value.splice(this.value.length-1,1,t.y))}}])&&i(n.prototype,r),a&&i(n,a),t}(),v=function(){function t(t,n){e(this,"angle",void 0),e(this,"value",void 0),this.value=t,this.angle=n}var n=t.prototype;return n.toPoint=function(){var t=Math.cos(this.angle)*this.value,e=Math.sin(this.angle)*this.value;return new l(t,e)},n.scale=function(e){return new t(this.value*e,this.angle)},t}(),f=function(){function t(t){var n=void 0===t?{}:t,i=n.d,r=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(n,u);e(this,"attrs",void 0),e(this,"commands",void 0),this.attrs=r,this.commands=[],i&&this.parseCommandString(i)}var i=t.prototype;return i.scale=function(t){return this.commands=this.commands.map((function(e){return e.scale(t)})),this.attrs.strokeWidth=String(t*+(this.attrs.strokeWidth||0)),this},i.addCommand=function(t){var e;return Array.isArray(t)?(e=this.commands).push.apply(e,t):this.commands.push(t),this},i.getCommandString=function(){return 0===this.commands.length?"":this.commands.map((function(t,e){return t.toString()})).join(" ").trim()},i.parseCommandString=function(t){this.commands=[];for(var e=null,n=[],i=t.split(" "),r=function(t){return Object.values(d).includes(t)?t:null},s=0;s<i.length;s+=1){var a=r(i[s]);if(a){if(!e){e=a;continue}this.commands.push(new c(e,n)),e=a,n=[]}else{if(h(+i[s]))return;n.push(+i[s])}}null!==e&&this.commands.push(new c(e,n))},i.parsePathElement=function(t){for(var e=0;e<t.attributes.length;e+=1){var i,r=t.attributes.item(e);r&&r.value&&("d"!==r.name?this.attrs=n({},this.attrs,((i={})[a(r.name)]=r.value,i)):this.parseCommandString(r.value))}return this},i.toJson=function(){return n({},this.attrs,{d:this.getCommandString()})},i.clone=function(){var e=new t(this.attrs);return this.commands.map((function(t){e.commands.push(t.clone())})),e},t}(),p=function(){function t(t){var n=t.width,i=t.height,r=t.background;e(this,"paths",void 0),e(this,"width",void 0),e(this,"height",void 0),e(this,"background",void 0),this.paths=[],this.width=n,this.height=i,this.background=r}var n=t.prototype;return n.resize=function(t){var e=t.width,n=t.height;this.scalePath(e/this.width),this.width=e,this.height=n},n.scalePath=function(t){if(1!==t)for(var e=0;e<this.paths.length;e+=1)this.paths[e].scale(t);return this},n.addPath=function(t){var e;return Array.isArray(t)?(e=this.paths).push.apply(e,t):this.paths.push(t),this},n.clonePaths=function(){return this.paths.map((function(t){return t.clone()}))},n.updatePath=function(t,e){var n=e||this.paths.length-1;return n<0&&this.paths.push(t),this.paths[n]=t,this},n.toJson=function(){return{width:this.width,height:this.height,background:this.background,paths:this.paths.map((function(t){return t.toJson()}))}},n.copy=function(t){return this.paths=t.clonePaths(),t.width&&this.width&&this.scalePath(this.width/t.width),this},n.parseSVGString=function(t){var e=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");return e?this.parseSVGElement(e):(this.paths=[],this)},n.parseSVGElement=function(t){var e=[];t.querySelectorAll("path").forEach((function(t){var n=(new f).parsePathElement(t);0!==n.commands.length&&e.push(n)})),this.paths=e;var n=Number(t.getAttribute("width"));return n&&this.width&&this.scalePath(this.width/n),this},t}(),m=function(){function t(t){var n=(void 0===t?{}:t).ratio;e(this,"ratio",void 0),this.ratio=null!=n?n:.2}var n=t.prototype;return n._controlPoint=function(t,e,n){var i=new l(t.x,t.y),r=new l(e.x,e.y),s=new l(n.x,n.y).sub(i).toVector().scale(this.ratio).toPoint(),a=r.add(s);return[a.x,a.y]},n.bezierCurve=function(t,e,n,i){var r=[].concat(this._controlPoint(t,e,n),this._controlPoint(i,n,e),[n.x,n.y]);return new c(d.CURVE,r)},n.lineCommands=function(t){return t.map((function(t,e){return new c(0===e?d.MOVE:d.LINE,[t.x,t.y])}))},n.bezierCurveCommands=function(t){var e=[];if(t.length<3)return this.lineCommands(t);for(var n=0;n<t.length;n+=1)0!==n?e.push(this.bezierCurve(t[n-2<0?0:n-2],t[n-1],t[n],n<t.length-1?t[n+1]:t[n])):e.push(new c(d.MOVE,[t[n].x,t[n].y]));return e},t}(),w="http://www.w3.org/2000/svg",g=function(t,e){var n=document.createElementNS(w,"svg");return n.setAttributeNS(null,"version","1.1"),n.setAttribute("xmlns",w),n.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),Object.keys(t).sort().map((function(e){n.setAttribute(e,t[e])})),e.map((function(t){n.appendChild(t)})),n},_=function(t,e){var n=document.createElementNS(w,t);return Object.keys(e).sort().map((function(t){n.setAttribute(t,e[t])})),n},y=function(t){var e=Object.entries(t).reduce((function(t,e,i){var s,a=e[0],o=e[1];return o?n({},t,((s={})[r(a)]=o,s)):t}),{});return _("path",e)},E=function(t){var e=t.width,i=t.height,r=t.background,s=t.paths,a={width:String(e),height:String(i)},o=r?[_("rect",n({},a,{fill:r}))]:[];return g(a,[].concat(o,s.map(y)))},b=function(){function t(t,e){var n=(void 0===e?{}:e).background;this.el=t;var i=t.getBoundingClientRect(),r=i.width,s=i.height;t.appendChild(E({background:n,width:r,height:s,paths:[]}))}return t.prototype.update=function(t){this.el.replaceChild(E(t),this.el.childNodes[0])},t}(),x=function(t){return C(E(t).outerHTML)},C=function(t){return"data:image/svg+xml;base64,"+btoa(t)},L={png:"image/png",jpg:"image/jpeg",svg:"image/svg+xml"},P=function(t){for(var e=t.data,n=t.extension,i=t.filename,r=atob(e.replace(/^.*,/,"")),s=new Uint8Array(r.length),a=0;a<r.length;a+=1)s[a]=r.charCodeAt(a);var o=i||Date.now()+"."+n,h=new Blob([s.buffer],{type:L[n]});if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(h,o);else if(window.URL&&window.URL.createObjectURL){var u=document.createElement("a");u.download=o,u.href=window.URL.createObjectURL(h),document.body.appendChild(u),u.click(),document.body.removeChild(u)}else window.open(e,"_blank")},j={extension:"svg"},S=function(t,e,i){void 0===e&&(e=j),void 0===i&&(i=P);var r=n({},j,e),s=r.filename,a=r.extension,o=x(t.toJson());if("svg"!==a){var h=t.width,u=t.height,l=t.background,d=new Image;d.addEventListener("load",(function(){var t=document.createElement("canvas");t.setAttribute("width",String(h)),t.setAttribute("height",String(u));var e=t.getContext("2d");e&&((l||"jpg"===a)&&(e.fillStyle=l||"#fff",e.fillRect(0,0,h,u)),e.drawImage(d,0,0),i("png"===a?{data:t.toDataURL("image/png"),extension:"png"}:{data:t.toDataURL("image/jpeg"),extension:"jpg"}))}),!1),d.src=o}else i({data:o,extension:"svg",filename:s})},k=function(t){void 0===t&&(t=!0);try{var e=function(){return null};return addEventListener("testPassive",e,{passive:t}),removeEventListener("testPassive",e),{passive:t}}catch(t){return!1}},R={pointer:{start:["pointerdown"],move:["pointermove"],end:["pointerleave","pointercancel"],frameout:["pointerup"]},touch:{start:["touchstart"],move:["touchmove"],end:["touchend"],frameout:["touchcancel"]},mouse:{start:["mousedown"],move:["mousemove"],end:["mouseleave","mouseout"],frameout:["mouseup"]}},O=function(){function t(t,n){var i=n.end,r=n.start,s=n.move;this._el=t,e(this,"_clearEventList",void 0),e(this,"_listenerOption",void 0),e(this,"_left",void 0),e(this,"_top",void 0),e(this,"end",void 0),e(this,"start",void 0),e(this,"move",void 0),this.end=i,this.start=r,this.move=s,this._clearEventList=[],this._listenerOption=k(!1);var a=t.getBoundingClientRect(),o=a.left,h=a.top;this._left=o,this._top=h,this._handleStart=this._handleStart.bind(this),this._handleMove=this._handleMove.bind(this),this._handleEnd=this._handleEnd.bind(this)}var n=t.prototype;return n.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},n.on=function(){this.off(),this._setupCoordinatesListener(),window.PointerEvent?this._setupDrawListener("pointer"):this._setupDrawListener("mouse"),"ontouchstart"in window&&this._setupDrawListener("touch")},n._handleStart=function(t){t.preventDefault(),this.start()},n._handleEnd=function(t){t.preventDefault(),this.end()},n._handleMove=function(t){if(t.preventDefault(),t instanceof TouchEvent){var e=t.touches[0];this.move({x:e.clientX-this._left,y:e.clientY-this._top,pressure:e.force})}else t instanceof PointerEvent?this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:t.pressure}):t instanceof MouseEvent&&this.move({x:t.clientX-this._left,y:t.clientY-this._top,pressure:null==t?void 0:t.pressure})},n._setupDrawListener=function(t){var e,n=this,i=R[t],r=i.start,s=i.move,a=i.end,o=i.frameout,h=r.map((function(t){return n._el.addEventListener(t,n._handleStart,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleStart)}})),u=s.map((function(t){return n._el.addEventListener(t,n._handleMove,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleMove)}})),l=a.map((function(t){return n._el.addEventListener(t,n._handleEnd,n._listenerOption),function(){return n._el.removeEventListener(t,n._handleEnd)}})),d=o.map((function(t){return addEventListener(t,n._handleEnd,n._listenerOption),function(){return removeEventListener(t,n._handleEnd)}}));(e=this._clearEventList).push.apply(e,h.concat(u,l,d))},n._setupCoordinatesListener=function(){var t=this,e=function(e){var n=t._el.getBoundingClientRect(),i=n.left,r=n.top;t._left=i,t._top=r};addEventListener("scroll",e),this._el.addEventListener("resize",e),this._clearEventList.push((function(){removeEventListener("scroll",e),t._el.removeEventListener("resize",e)}))},t}(),A=function(){function t(t,n){var i=n.resize;this._el=t,e(this,"_clearEventList",void 0),e(this,"resize",void 0),this.resize=i,this._clearEventList=[]}var n=t.prototype;return n.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},n.on=function(){this.off(),this._setupListerner()},n._setupListerner=function(){var t=this;if(window.ResizeObserver){var e=new window.ResizeObserver((function(e){var n=e[0];t.resize(n.contentRect)}));e.observe(this._el),this._clearEventList.push((function(){return e.disconnect()}))}else{var n=function(){t.resize(t._el.getBoundingClientRect())};addEventListener("resize",n),this._clearEventList.push((function(){return removeEventListener("resize",n)}))}},t}();function z(t,e,n){var i,r,s;void 0===n&&(n={});var a=null,o=0,h=function(){o=!1===n.leading?0:Date.now(),a=null,s=t.apply(i,r),a||(i=null,r=null)},u=function(){a&&(clearTimeout(a),a=null)};return function(){var l=Date.now();o||!1!==n.leading||(o=l);var d=e-(l-o);i=this;for(var c=arguments.length,v=new Array(c),f=0;f<c;f++)v[f]=arguments[f];return r=v,d<=0||d>e?(u(),o=l,s=t.apply(i,r),a||(i=null,r=null)):a||!1===n.trailing||(a=setTimeout(h,d)),s}}var M=function(){function t(t,n){var i=void 0===n?{}:n,r=i.penColor,s=i.penWidth,a=i.curve,o=i.close,h=i.delay,u=i.fill,l=i.background;this.el=t,e(this,"penColor",void 0),e(this,"penWidth",void 0),e(this,"fill",void 0),e(this,"curve",void 0),e(this,"close",void 0),e(this,"delay",void 0),e(this,"svg",void 0),e(this,"convert",void 0),e(this,"renderer",void 0),e(this,"drawHandler",void 0),e(this,"resizeHandler",void 0),e(this,"_drawPath",void 0),e(this,"_drawPoints",void 0),e(this,"_drawMoveThrottle",void 0),this.penColor=null!=r?r:"#000",this.penWidth=null!=s?s:1,this.curve=null==a||a,this.close=null!=o&&o,this.delay=null!=h?h:0,this.fill=null!=u?u:"none";var d=t.getBoundingClientRect(),c=d.width,v=d.height;this._drawPath=null,this._drawPoints=[],this.svg=new p({width:c,height:v,background:l}),this.renderer=new b(t,{background:l}),this.convert=new m,this._resize=this._resize.bind(this),this.resizeHandler=new A(t,{resize:this._resize}),this.drawStart=this.drawStart.bind(this),this.drawMove=this.drawMove.bind(this),this._drawMoveThrottle=z(this.drawMove,this.delay),this.drawEnd=this.drawEnd.bind(this),this.drawHandler=new O(t,{start:this.drawStart,move:this._drawMoveThrottle,end:this.drawEnd}),this.on()}var n=t.prototype;return n.update=function(){this.renderer.update(this.svg.toJson())},n.clear=function(){var t=this.svg.paths;return this.svg.paths=[],this.update(),t},n.undo=function(){var t=this.svg.paths.pop();return this.update(),t},n.changeDelay=function(t){this.delay=t,this.drawHandler.move=z(this.drawMove,this.delay),this.drawHandler.on()},n.on=function(){this.drawHandler.on(),this.resizeHandler.on()},n.off=function(){this.drawHandler.off(),this.resizeHandler.off()},n.drawStart=function(){this._drawPath||(this._drawPath=this._createDrawPath(),this.svg.addPath(this._drawPath))},n.drawMove=function(t){this._drawPath&&(this._addDrawPoint(t),(this._drawPath.attrs.strokeWidth&&+this._drawPath.attrs.strokeWidth!==this.penWidth||this._drawPath.attrs.stroke!==this.penColor)&&(this._drawPath=this._createDrawPath(),this._addDrawPoint(t),this.svg.addPath(this._drawPath)),this.update())},n.drawEnd=function(){this._drawPath=null,this.update()},n._createCommand=function(){this._drawPath&&(this.curve?this._drawPath.commands=this.convert.bezierCurveCommands(this._drawPoints):this._drawPath.commands=this.convert.lineCommands(this._drawPoints),this.close&&this._drawPath.commands.push(new c(d.CLOSE)))},n._addDrawPoint=function(t){this._drawPoints.push(t),this._createCommand()},n._createDrawPath=function(){return this._resize(this.el.getBoundingClientRect()),this._drawPoints=[],new f({stroke:this.penColor,strokeWidth:String(this.penWidth),fill:this.fill,strokeLinecap:this.curve?"round":"mitter",strokeLinejoin:this.curve?"round":"square"})},n._resize=function(t){var e=t.width,n=t.height;o(this.svg.width,e)||(this.svg.resize({width:e,height:n}),this.update())},n.download=function(t){S(this.svg,t)},t}();t.COMMAND_TYPE=d,t.Command=c,t.Convert=m,t.DrawHandler=O,t.Path=f,t.Point=l,t.Renderer=b,t.ResizeHandler=A,t.Svg=p,t.SvgDrawing=M,t.Vector=v,t.camel2kebab=r,t.createSvgChildElement=_,t.createSvgElement=g,t.download=S,t.downloadBlob=P,t.getPassiveOptions=k,t.isAlmostSameNumber=o,t.isNaN=h,t.kebab2camel=a,t.mimeTypeMap=L,t.pathObjectToElement=y,t.roundUp=s,t.svg2base64=C,t.svgObjectToElement=E,t.throttle=z,t.toBase64=x,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);