(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{8171:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var e=r(926);var i=r(9147);function o(t){return function(t){if(Array.isArray(t))return(0,e.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(6666);function s(t,n,r,e,i,o,a){try{var s=t[o](a),h=s.value}catch(u){return void r(u)}s.done?n(h):Promise.resolve(h).then(e,i)}function h(t){return function(){var n=this,r=arguments;return new Promise((function(e,i){var o=t.apply(n,r);function a(t){s(o,e,i,a,h,"next",t)}function h(t){s(o,e,i,a,h,"throw",t)}a(void 0)}))}}var u=r(7162),l=r.n(u),c=r(2755),d=r(5793),p=r(5087),f=r(2784),g=r(6451),v=r(5128),b=r(4406).env.BASE_PATH||"",m=r(2322);function x(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function y(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,a.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var w=["/img_trace/cat.jpg","/img_trace/harinezumi.jpg","/img_trace/kuma.jpg","/img_trace/panda.png","/img_trace/risu.jpg","/img_trace/tanuki.jpg"].map((function(t){return"".concat(b).concat(t)})),_=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}],j=function(){var t=(0,f.useState)(w),n=t[0],r=t[1],e=(0,f.useState)(_),i=e[0],a=e[1],s=(0,f.useState)(),u=s[0],b=s[1],x=(0,f.useState)({numberOfColors:8,colorQuantCycles:3})[0],j=(0,f.useState)({})[0],M=(0,f.useState)(w[0]),C=M[0],O=M[1],k=(0,f.useState)(""),P=k[0],I=k[1],S=(0,f.useState)(),E=S[0],A=S[1],q=(0,f.useRef)(null),z=(0,f.useRef)(null),D=(0,f.useCallback)((function(t){I(t.target.value)}),[I]),L=(0,f.useCallback)((function(){u&&a(p.Palette.imageData(u,x))}),[x,a,u]),T=(0,f.useCallback)((function(){a(_)}),[a]),Z=(0,f.useCallback)((function(t){return function(){var n=i.filter((function(n,r){return r!==t}));a(n)}}),[a,i]),U=(0,f.useCallback)(h(l().mark((function t(){var n,r,e;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=u,t.t0){t.next=6;break}return t.next=5,new p.ImgLoader({corsenabled:!0}).fromUrl(C);case 5:t.t0=t.sent;case 6:if(n=t.t0,!u&&n&&b(n),n){t.next=10;break}return t.abrupt("return");case 10:r=new p.ImgTrace(y(y({},j),{},{palettes:i})),e=r.load(n),A(e),r.palettes&&a(r.palettes),t.next=18;break;case 16:t.prev=16,t.t1=t.catch(0);case 18:case"end":return t.stop()}}),t,null,[[0,16]])}))),[C,u,i,j]);(0,f.useEffect)((function(){if(z.current){var t=function(){if(z.current&&E){var t=new d.Renderer(z.current),n=z.current.getBoundingClientRect(),r=n.width,e=n.height;E.resize({width:r,height:e}),t.update(E.toJson())}};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[E]);var N=(0,f.useCallback)((function(t){return function(){O(t),n.includes(t)||r([].concat(o(n),[t]))}}),[O,n]),Q=(0,f.useCallback)((function(){E&&(0,d.download)(E)}),[E]);return(0,f.useEffect)((function(){q.current&&(q.current.onload=function(){q.current&&new p.ImgLoader({corsenabled:!0}).fromImageElement(q.current,b)})}),[b]),(0,m.jsxs)(v.Z,{children:[(0,m.jsxs)(g.kC,{justifyContent:"start",flexWrap:"wrap",children:[(0,m.jsxs)(g.xu,{mb:3,children:[(0,m.jsx)(g.zx,{mr:2,mb:2,onClick:L,children:"Load Image Palette!"}),(0,m.jsx)(g.zx,{mr:2,mb:2,onClick:T,children:"GrayScale Palette!"}),(0,m.jsx)(g.kC,{justifyContent:"start",py:"2px",px:"0",children:i.sort((function(t,n){return t.r+t.g+t.b>n.r+n.g+n.b?-1:1})).map((function(t,n){return(0,m.jsx)("div",{style:{width:30,height:30,margin:2,position:"relative",backgroundColor:"rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat(t.a/255,")")},children:(0,m.jsx)("div",{style:{position:"absolute",background:"#fff",bottom:2,left:2,width:8,lineHeight:"8px",textAlign:"center",fontSize:3,cursor:"pointer"},onMouseUp:Z(n),children:"x"})},n)}))})]}),(0,m.jsxs)(g.xu,{mb:3,children:[(0,m.jsx)(g.zx,{mr:2,mb:2,variant:"secondary",onClick:U,children:"Image Trace!"}),E&&(0,m.jsx)(g.zx,{mr:2,mb:2,onClick:Q,children:"Download"}),(0,m.jsxs)(g.kC,{justifyContent:"start",flexWrap:"wrap",children:[(0,m.jsx)(g.xu,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"],children:(0,m.jsx)(g.Ee,{width:"100%",ref:q,crossOrigin:"anonymous",src:C,alt:""})}),(0,m.jsx)(g.xu,{width:["80vw","80vw","30vw"],height:["80vw","80vw","30vw"],children:(0,m.jsx)("div",{style:{width:"100%",height:"100%"},ref:z})})]})]})]}),(0,m.jsxs)(g.xu,{as:"fieldset",children:[(0,m.jsx)(g.X6,{children:"Select Image"}),(0,m.jsxs)(g.xu,{children:[(0,m.jsx)(c.II,{type:"text",placeholder:"input image url",value:P,onChange:D}),(0,m.jsx)(g.zx,{onClick:N(P),children:"Load image url"})]}),(0,m.jsx)(g.kC,{flexWrap:"wrap",children:n.map((function(t,n){return(0,m.jsx)(g.Zb,{width:"256px",children:(0,m.jsx)(g.Ee,{src:t,alt:t,onClick:N(t)})},n)}))})]})]})}},8931:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/img-trace",function(){return r(8171)}])},5087:function(t,n,r){!function(t,n){"use strict";function r(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function e(){return(e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}var i=function(t){var n=t.width*t.height;if(!(t.data.length<4*n))return t;for(var r=new Uint8ClampedArray(4*n),i=0;i<n;i++)r[4*i]=t.data[3*i],r[4*i+1]=t.data[3*i+1],r[4*i+2]=t.data[3*i+2],r[4*i+3]=255;return e({},t,{data:r})},o=[[.27901,.44198,.27901],[.135336,.228569,.272192,.228569,.135336],[.086776,.136394,.178908,.195843,.178908,.136394,.086776],[.063327,.093095,.122589,.144599,.152781,.144599,.122589,.093095,.063327],[.049692,.069304,.089767,.107988,.120651,.125194,.120651,.107988,.089767,.069304,.049692]],a=function(){function t(t){var n=t.radius,e=t.delta;r(this,"radius",void 0),r(this,"delta",void 0),this.radius=null!=n?n:0,this.delta=null!=e?e:20}return t.prototype.apply=function(t){var n=i(t),r=new Uint8ClampedArray(n.data),e=Math.floor(this.radius);if(e<1)return n;e>o.length&&(e=o.length);var a=Math.abs(this.delta);a>1024&&(a=1024);for(var s=o[e-1],h=0;h<n.height;h++)for(var u=0;u<n.width;u++){for(var l=0,c=0,d=0,p=0,f=0,g=-e;g<e+1;g++)if(u+g>0&&u+g<n.width){var v=4*(h*n.width+u+g);l+=n.data[v]*s[g+e],c+=n.data[v+1]*s[g+e],d+=n.data[v+2]*s[g+e],p+=n.data[v+3]*s[g+e],f+=s[g+e]}var b=4*(h*n.width+u);r[b]=Math.floor(l/f),r[b+1]=Math.floor(c/f),r[b+2]=Math.floor(d/f),r[b+3]=Math.floor(p/f)}for(var m=new Uint8ClampedArray(r),x=0;x<n.height;x++)for(var y=0;y<n.width;y++){for(var w=0,_=0,j=0,M=0,C=0,O=-e;O<e+1;O++)if(x+O>0&&x+O<n.height){var k=4*((x+O)*n.width+y);w+=m[k]*s[O+e],_+=m[k+1]*s[O+e],j+=m[k+2]*s[O+e],M+=m[k+3]*s[O+e],C+=s[O+e]}var P=4*(x*n.width+y);r[P]=Math.floor(w/C),r[P+1]=Math.floor(_/C),r[P+2]=Math.floor(j/C),r[P+3]=Math.floor(M/C)}for(var I=0;I<n.height;I++)for(var S=0;S<n.width;S++){var E=4*(I*n.width+S);Math.abs(r[E]-n.data[E])+Math.abs(r[E+1]-n.data[E+1])+Math.abs(r[E+2]-n.data[E+2])+Math.abs(r[E+3]-n.data[E+3])>a&&(r[E]=n.data[E],r[E+1]=n.data[E+1],r[E+2]=n.data[E+2],r[E+3]=n.data[E+3])}return new ImageData(r,n.width,n.height)},t}(),s=function(){function t(t){var n;r(this,"corsenabled",void 0),this.corsenabled=null==(n=t.corsenabled)||n}var n=t.prototype;return n.fromUrl=function(t,n){var r=this,e=function(n,e){var i=new Image;r.corsenabled&&(i.crossOrigin="Anonymous"),i.onload=function(){r.fromImageElement(i,n)},i.onerror=function(t){e?e(t):console.error(t)},i.src=t};if(!n)return new Promise(e);e(n)},n.fromImageElement=function(t,n){var r=function(n,r){var e=document.createElement("canvas");e.width=t.naturalWidth||t.width,e.height=t.naturalHeight||t.height;var i=e.getContext("2d");null==i||i.drawImage(t,0,0);var o=null==i?void 0:i.getImageData(0,0,e.width,e.height);if(!o){if(r)return void r("error canvas context.");throw"error canvas context."}n(o)};if(!n)return new Promise(r);r(n)},t}(),h=function(){function t(){}return t.imageData=function(t,n){for(var r=void 0===n?{}:n,e=r.numberOfColors||16,o=r.colorQuantCycles||3,a=i(t),s=this._deterministic(a,e),h=[],u=0;u<o;u++){if(u>0)for(var l=0;l<s.length;l++)h[l].n>0&&(s[l]={r:Math.floor(h[l].r/h[l].n),g:Math.floor(h[l].g/h[l].n),b:Math.floor(h[l].b/h[l].n),a:Math.floor(h[l].a/h[l].n)});h=Array.from({length:s.length},(function(){return{r:0,g:0,b:0,a:0,n:0}}));for(var c=0;c<a.height;c++)for(var d=function(t){var n=4*(c*a.width+t),r=1024,e=s.reduce((function(t,e,i){var o=Math.abs(e.r-a.data[n])+Math.abs(e.g-a.data[n+1])+Math.abs(e.b-a.data[n+2])+Math.abs(e.a-a.data[n+3]);return o<r?(r=o,i):t}),0);h[e].r+=a.data[n],h[e].g+=a.data[n+1],h[e].b+=a.data[n+2],h[e].a+=a.data[n+3],h[e].n+=1},p=0;p<a.width;p++)d(p)}return s},t._deterministic=function(t,n){for(var r=[],e=Math.ceil(Math.sqrt(n)),i=Math.ceil(n/e),o=t.width/(e+1),a=t.height/(i+1),s=0;s<i;s++)for(var h=0;h<e&&r.length!==n;h++){var u=4*Math.floor((s+1)*a*t.width+(h+1)*o);r.push({r:t.data[u],g:t.data[u+1],b:t.data[u+2],a:t.data[u+3]})}return r},t.number=function(t){if(void 0===t&&(t=16),t<8)return this.grey(t);for(var n=[],r=Math.floor(Math.pow(t,1/3)),e=Math.floor(255/(r-1)),i=0;i<r;i+=1)for(var o=0;o<r;o+=1)for(var a=0;a<r;a+=1)n.push({r:i*e,g:o*e,b:a*e,a:255});for(var s=t-r*r*r,h=0;h<s;h++)n.push({r:Math.floor(255*Math.random()),g:Math.floor(255*Math.random()),b:Math.floor(255*Math.random()),a:Math.floor(255*Math.random())});return n},t.grey=function(t){void 0===t&&(t=16);for(var n=[],r=Math.floor(255/(t-1)),e=0;e<t;e++)n.push({r:e*r,g:e*r,b:e*r,a:255});return n},t}(),u=0,l=1,c=2,d=3,p=4,f=5,g=6,v=7,b=8,m=-1,x=[[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[13,3,0,1],[13,2,-1,0],[7,1,0,-1],[7,0,1,0]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[0,3,0,1],[0,2,-1,0],[-1,-1,-1,-1],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[0,1,0,-1],[-1,-1,-1,-1],[0,3,0,1]],[[11,1,0,-1],[14,0,1,0],[14,3,0,1],[11,2,-1,0]],[[-1,-1,-1,-1],[0,0,1,0],[0,3,0,1],[-1,-1,-1,-1]],[[0,0,1,0],[-1,-1,-1,-1],[0,2,-1,0],[-1,-1,-1,-1]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[0,1,0,-1],[0,0,1,0]],[[0,1,0,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[0,2,-1,0]],[[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]]],y=[{r:0,g:0,b:0,a:255},{r:50,g:50,b:50,a:255},{r:100,g:100,b:100,a:255},{r:150,g:150,b:150,a:255},{r:200,g:200,b:200,a:255}],w=function(){function t(t){var n,i,o,a,s;void 0===t&&(t={}),r(this,"ltres",void 0),r(this,"qtres",void 0),r(this,"rightangleenhance",void 0),r(this,"pathOmit",void 0),r(this,"commandOmit",void 0),r(this,"pathAttrs",void 0),r(this,"palettes",void 0),this.ltres=null!=(n=t.ltres)?n:1,this.qtres=null!=(i=t.qtres)?i:1,this.rightangleenhance=null==(o=t.rightangleenhance)||o,this.pathOmit=null!=(a=t.pathOmit)?a:8,this.commandOmit=null!=(s=t.commandOmit)?s:0,this.pathAttrs=e({strokeWidth:"1"},t.pathAttrs||{}),this.palettes=t.palettes||y}var o=t.prototype;return o.load=function(t){for(var r=i(t),e=this._colorQuantization(r),o=[],a=0;a<this.palettes.length;a++){var s=this._edgeDetection(e,a),h=this._pathScan(s),u=this._interpolation(h).map(this._tracePath.bind(this));o.push(u)}var l=this._createPaths(o);return new n.Svg({width:e[0].length-2,height:e.length-2}).addPath(l)},o._colorQuantization=function(t){var n=this;return Array.from({length:t.height+2},(function(r,e){return Array.from({length:t.width+2},(function(r,i){if(0===i||i===t.width+1||0===e||e===t.height+1)return-1;var o=i-1,a=4*((e-1)*t.width+o);return n._findPaletteIndex({r:t.data[a],g:t.data[a+1],b:t.data[a+2],a:t.data[a+3]})}))}))},o._findPaletteIndex=function(t){var n=t.r,r=t.g,e=t.b,i=t.a,o=1024;return this.palettes.reduce((function(t,a,s){var h=Math.abs(a.r-n)+Math.abs(a.g-r)+Math.abs(a.b-e)+Math.abs(a.a-i);return h<o?(o=h,s):t}),0)},o._edgeDetection=function(t,n){for(var r=[],e=t.length,i=t[0].length,o=0;o<e;o++){r[o]=[];for(var a=0;a<i;a++)r[o][a]=0===o||0===a?0:(t[o-1][a-1]===n?1:0)+(t[o-1][a]===n?2:0)+(t[o][a-1]===n?8:0)+(t[o][a]===n?4:0)}return r},o._pointpoly=function(t,n){for(var r=!1,e=0,i=n.length-1;e<n.length;i=e++)r=n[e].y>t.y!=n[i].y>t.y&&t.x<(n[i].x-n[e].x)*(t.y-n[e].y)/(n[i].y-n[e].y)+n[e].x?!r:r;return r},o._pathScan=function(t){for(var n=t[0].length,r=t.length,e=[],i=0,o=0;o<r;o++)for(var a=0;a<n;a++){var s=t[o][a];if(4===s||11===s){var h=a,u=o,l=1,c=0,d=!1;for(e[i]={points:[],boundingbox:[h,u,h,u],holechildren:[],isholepath:!1};!d;){e[i].points[c]={x:h-1,y:u-1,direction:m},h-1<e[i].boundingbox[0]&&(e[i].boundingbox[0]=h-1),h-1>e[i].boundingbox[2]&&(e[i].boundingbox[2]=h-1),u-1<e[i].boundingbox[1]&&(e[i].boundingbox[1]=u-1),u-1>e[i].boundingbox[3]&&(e[i].boundingbox[3]=u-1);var p=x[t[u][h]][l];if(t[u][h]=p[0],l=p[1],h+=p[2],u+=p[3],h-1===e[i].points[0].x&&u-1===e[i].points[0].y)if(d=!0,e[i].points.length<this.pathOmit)e.pop();else{if(11===s){e[i].isholepath=!0;for(var f=0,g=[-1,-1,n+1,r+1],v=0;v<i;v++)!e[v].isholepath&&this._boundingboxincludes(e[v].boundingbox,e[i].boundingbox)&&this._boundingboxincludes(g,e[v].boundingbox)&&this._pointpoly(e[i].points[0],e[v].points)&&(f=v,g=e[v].boundingbox);e[f].holechildren.push(i)}i++}c++}}}return e},o._boundingboxincludes=function(t,n){return t[0]<n[0]&&t[1]<n[1]&&t[2]>n[2]&&t[3]>n[3]},o._interpolation=function(t){for(var n=[],r=0,e=0,i=0,o=0,a=0;a<t.length;a++){n[a]={points:[],boundingbox:t[a].boundingbox,holechildren:t[a].holechildren,isholepath:t[a].isholepath};for(var s=t[a].points.length,h=0;h<s;h++)r=(h+1)%s,e=(h+2)%s,i=(h-1+s)%s,o=(h-2+s)%s,this.rightangleenhance&&this._testrightangle(t[a],o,i,h,r,e)&&(n[a].points.length>0&&(n[a].points[n[a].points.length-1].direction=this._getdirection(n[a].points[n[a].points.length-1].x,n[a].points[n[a].points.length-1].y,t[a].points[h].x,t[a].points[h].y)),n[a].points.push({x:t[a].points[h].x,y:t[a].points[h].y,direction:this._getdirection(t[a].points[h].x,t[a].points[h].y,(t[a].points[h].x+t[a].points[r].x)/2,(t[a].points[h].y+t[a].points[r].y)/2)})),n[a].points.push({x:(t[a].points[h].x+t[a].points[r].x)/2,y:(t[a].points[h].y+t[a].points[r].y)/2,direction:this._getdirection(t[a].points[h].x+t[a].points[r].x,t[a].points[h].y+t[a].points[r].y,t[a].points[r].x+t[a].points[e].x,t[a].points[r].y+t[a].points[e].y)})}return n},o._testrightangle=function(t,n,r,e,i,o){return t.points[e].x===t.points[n].x&&t.points[e].x===t.points[r].x&&t.points[e].y===t.points[i].y&&t.points[e].y===t.points[o].y||t.points[e].y===t.points[n].y&&t.points[e].y===t.points[r].y&&t.points[e].x===t.points[i].x&&t.points[e].x===t.points[o].x},o._getdirection=function(t,n,r,e){return t<r?n<e?l:v:t>r?n<e?d:n>e?f:p:n<e?c:n>e?g:b},o._tracePath=function(t){for(var r=0,e=[],i=[];r<t.points.length;){for(var o=t.points[r].direction,a=m,s=r+1;(t.points[s].direction===o||t.points[s].direction===a||-1===a)&&s<t.points.length-1;)t.points[s].direction!==o&&a===m&&(a=t.points[s].direction||u),s++;s===t.points.length-1?(e.push.apply(e,this._fitseq(t,r,0)),i.push.apply(i,this._fitseq(t,r,0,!0)),r=t.points.length):(e.push.apply(e,this._fitseq(t,r,s)),i.push.apply(i,this._fitseq(t,r,s,!0)),r=s)}var h=[new n.Command("M",[t.points[0].x,t.points[0].y])].concat(e,[new n.Command("Z")]);return i.reverse(),{commands:h,holeCommands:[new n.Command("M",i[i.length-1].value.slice(0,2))].concat(i,[new n.Command("Z")]),holechildren:t.holechildren,isholepath:t.isholepath}},o._fitseq=function(t,r,e,i){var o=this.ltres,a=this.qtres;if(e>t.points.length||e<0)return[];var s,h,u,l=r,c=0,d=!0,p=e-r;p<0&&(p+=t.points.length);for(var f=(t.points[e].x-t.points[r].x)/p,g=(t.points[e].y-t.points[r].y)/p,v=(r+1)%t.points.length;v!=e;){var b=v-r;b<0&&(b+=t.points.length),s=t.points[r].x+f*b,h=t.points[r].y+g*b,(u=(t.points[v].x-s)*(t.points[v].x-s)+(t.points[v].y-h)*(t.points[v].y-h))>o&&(d=!1),u>c&&(l=v,c=u),v=(v+1)%t.points.length}if(d)return[new n.Command("L",i?[t.points[r].x,t.points[r].y]:[t.points[e].x,t.points[e].y])];var m=l;d=!0,c=0;var x=(m-r)/p,y=(1-x)*(1-x),w=2*(1-x)*x,_=x*x,j=(y*t.points[r].x+_*t.points[e].x-t.points[m].x)/-w,M=(y*t.points[r].y+_*t.points[e].y-t.points[m].y)/-w;for(v=r+1;v!=e;)w=2*(1-(x=(v-r)/p))*x,_=x*x,s=(y=(1-x)*(1-x))*t.points[r].x+w*j+_*t.points[e].x,h=y*t.points[r].y+w*M+_*t.points[e].y,(u=(t.points[v].x-s)*(t.points[v].x-s)+(t.points[v].y-h)*(t.points[v].y-h))>a&&(d=!1),u>c&&(l=v,c=u),v=(v+1)%t.points.length;if(d)return[new n.Command("Q",[j,M,t.points[e].x,t.points[e].y])];var C=m;return this._fitseq(t,r,C,i).concat(this._fitseq(t,C,e,i))},o._complementCommand=function(t,n){for(var r=t[n],e=[],i=0;i<r.holechildren.length;i++)e.push.apply(e,t[r.holechildren[i]].holeCommands);return e},o._createPaths=function(t){for(var r=[],i=0;i<t.length;i++)for(var o=0;o<t[i].length;o++){var a=t[i],s=a[o];if(!(s.isholepath||s.commands.length<this.commandOmit)){var h=this.palettes[i],u="rgb("+h.r+", "+h.g+", "+h.b+")",l=new n.Path(e({},this.pathAttrs,{stroke:u,fill:u,opacity:String(h.a/255)}));l.addCommand([].concat(s.commands,this._complementCommand(a,o))),r.push(l)}}return r},t}();t.Blur=a,t.ImgLoader=s,t.ImgTrace=w,t.Palette=h,Object.defineProperty(t,"__esModule",{value:!0})}(n,r(5793))}},function(t){t.O(0,[99,243,774,888,179],(function(){return n=8931,t(t.s=n);var n}));var n=t.O();_N_E=n}]);