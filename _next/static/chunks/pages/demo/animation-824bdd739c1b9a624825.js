_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"+0BB":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/animation",function(){return e("kKDO")}])},"7Bpq":function(t,n,e){!function(t,n){"use strict";var e=function(t,n,e){return function(t){function n(){return t.exports=n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n.apply(this,arguments)}t.exports=n}(e={path:void 0,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}(),r=function(t){function r(n,e){var r,o=void 0===e?{ms:60}:e,i=o.background,a=o.ms;return(r=t.call(this,n,{background:i})||this).ms=a,r._stop=null,r._anim=null,r._restorePaths=[],r._stopId=0,r._repeatCount="indefinite",r}!function(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}(r,t);var o=r.prototype;return o.setAnimation=function(t,n){var e=void 0===n?{}:n,r=e.frames,o=e.repeatCount,i=e.ms;this._anim=t,this._framesNumber=r,this._repeatCount=o?""+o:"indefinite",i&&(this.ms=i)},o.stop=function(){return!!this._stop&&(this._stop(),!0)},o.restore=function(){this.paths=this._restorePaths,this.update()},o.generateFrame=function(t){return this._anim?this._anim(this._restorePaths.map((function(t){return t.clone()})),t):this.paths},o.start=function(){var t=this;this.stop(),this._registerRestorePaths();var n,e=0,r=this.ms,o=this._getFramesNumber();this._stopId=requestAnimationFrame((function i(a){if(r!==t.ms)return t.restore(),void t.start();(!n||a-n>r)&&(n=a,t.paths=t.generateFrame(e),t.update(),e=e>o?0:e+1),t._stopId=requestAnimationFrame(i)})),this._stop=function(){cancelAnimationFrame(t._stopId),t._stop=null}},o.toAnimationElement=function(){var t=this;this._stop||this._registerRestorePaths();var r=this._getFramesNumber(),o=Array(r).fill(null).map((function(n,e){return t.generateFrame(e)})),i=r*(this.ms>0?this.ms:1)+"ms",a=1/r,s="0;"+Array(r).fill(void 0).map((function(t,e){return n.roundUp((e+1)*a,4)+""})).join(";"),u=function(e,r,a,u){var C=o.map((function(t){var n=t.find((function(t){return t.attrs.id===e.attrs.id}));return u({origin:e,path:n})||a}));return C.every((function(t){return t===a}))?null:n.createSvgChildElement("animate",{dur:i,keyTimes:s,attributeName:r,repeatCount:t._repeatCount,values:[a].concat(C).join(";")})},C=this._restorePaths.map((function(t){var e=t.toElement(),r=u(t,"d",t.getCommandString(),(function(t){var n=t.origin,e=t.path;return e&&e.commands.length>0?e.getCommandString():n.commands[0].toString()}));r&&e.appendChild(r);var o=t.attrs,i=(o.id,function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(o,["id"]));return Object.entries(i).map((function(r){var o=r[0],i=r[1];if(i){var a=n.camel2kebab(o),s=u(t,a,i,(function(t){var n=t.path;return null==n?void 0:n.attrs[o]}));s&&e.appendChild(s)}})),e})),l={width:String(this.width),height:String(this.height)},c=this.background?[n.createSvgChildElement("rect",e({},l,{fill:this.background}))]:[];return n.createSvgElement({width:String(this.width),height:String(this.height)},c.concat(C))},o.downloadAnimation=function(t){n.download({data:n.svg2base64(this.toAnimationElement().outerHTML),extension:"svg",filename:t})},o._getFramesNumber=function(){return this._framesNumber&&this._framesNumber>0?this._framesNumber:this._restorePaths.reduce((function(t,n){return t+n.commands.length}),0)},o._registerRestorePaths=function(){this._restorePaths=this.clonePaths().map((function(t,n){return t.attrs.id="t"+n,t}))},r}(n.Renderer);t.SvgAnimation=r,Object.defineProperty(t,"__esModule",{value:!0})}(n,e("S95l"))},kKDO:function(t,n,e){"use strict";e.r(n);var r=e("zygG"),o=e("ERkP"),i=e.n(o),a=e("rh/l"),s=e("c7sy"),u=e("S95l"),C=e("7Bpq"),l=e("apO0"),c=i.a.createElement,d=function(t){for(var n=function(){return 5*Math.random()-2.5},e=0;e<t.length;e+=1)t[e].commands=t[e].commands.map((function(t){var e,r,o;return t.point=null===(e=t.point)||void 0===e?void 0:e.add(new u.Point(n(),n())),t.cl=null===(r=t.cl)||void 0===r?void 0:r.add(new u.Point(n(),n())),t.cr=null===(o=t.cr)||void 0===o?void 0:o.add(new u.Point(n(),n())),t}));return t},h=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722"],p=function(t,n){if(!n)return t;for(var e=0;e<t.length;e+=1)t[e].attrs.stroke=h[n%h.length],t[e].attrs.fill=h[(n+4)%h.length];return t},m=function(t,n){if(!n)return t;for(var e=[],r=0;r<t.length;r+=1){if(n<t[r].commands.length){t[r].commands=t[r].commands.slice(0,n),e.push(t[r]);break}n-=t[r].commands.length,e.push(t[r])}return e},f=function(t){var n=t.isSp,e=Object(o.useState)(n?"98vw":"49vw")[0],i=Object(o.useRef)(null),u=Object(o.useRef)(null),f=Object(o.useState)(20),g=f[0],v=f[1],b=Object(o.useCallback)((function(t){if(u.current){var n=Number(t.target.value);Number.isNaN(n)||(u.current.ms=n,v(n))}}),[]);Object(o.useEffect)((function(){u.current||i.current&&(u.current=new C.SvgAnimation(i.current,{ms:g,background:"#fff"}),u.current.parseSVGString('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="370.921875" width="370.921875"><path d="M 40.55 81.18 C 40.59 81.18 40.09 81.18 40.78 81.18 C 41.46 81.18 41.67 81.18 43.96 81.18 C 46.26 81.18 49.43 81.18 52.27 81.18 C 55.11 81.18 54.07 81.18 58.18 81.18 C 62.29 81.18 66.58 81.18 72.8 81.18 C 79.03 81.18 82.53 81.18 89.3 81.18 C 96.07 81.18 97.3 81.18 106.66 81.18 C 116.03 81.18 126.28 81.18 136.12 81.18 C 145.96 81.18 150.14 81.18 155.87 81.18 C 161.59 81.18 161.04 81.18 164.74 81.18 C 168.44 81.18 171.98 81.18 174.37 81.18 C 176.75 81.18 176.11 81.18 176.67 81.18 C 177.23 81.18 177.03 81.39 177.18 81.18 C 177.33 80.96 177.6 80.73 177.43 80.11 C 177.26 79.49 176.56 78.48 176.34 78.08" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 150.09 48.41 C 150.09 48.55 150.09 47.41 150.09 49.13 C 150.09 50.85 150.09 51.9 150.09 57.02 C 150.09 62.13 150.09 69.16 150.09 74.69 C 150.09 80.22 150.09 76.61 150.09 84.68 C 150.09 92.76 150.09 103.41 150.09 115.06 C 150.09 126.7 150.09 132.34 150.09 142.91 C 150.09 153.48 150.09 152.15 150.09 167.91 C 150.09 183.67 150.09 204.36 150.09 221.71 C 150.09 239.05 150.09 242.46 150.09 254.65 C 150.09 266.84 150.09 275.46 150.09 282.65 C 150.09 289.85 150.09 287.44 150.09 290.62 C 150.09 293.8 150.21 296.6 150.09 298.56 C 149.96 300.53 149.58 299.91 149.46 300.45 C 149.33 300.98 149.9 300.06 149.46 301.23 C 149.02 302.39 148.18 304.31 147.27 306.28 C 146.35 308.26 146.07 308.71 144.88 311.11 C 143.69 313.51 142.43 316.09 141.31 318.28 C 140.2 320.47 139.82 321.09 139.32 322.07 C 138.81 323.05 138.9 322.84 138.8 323.16 C 138.69 323.49 138.85 323.58 138.8 323.69 C 138.75 323.79 138.65 323.69 138.55 323.69 C 138.46 323.69 138.41 323.69 138.32 323.69 C 138.22 323.69 138.5 323.81 138.08 323.69 C 137.66 323.56 138.3 324.35 136.21 323.06 C 134.12 321.77 132.92 321.6 127.64 317.23 C 122.37 312.86 115.35 306.59 109.84 301.21 C 104.33 295.84 104.62 295.32 100.11 290.37 C 95.6 285.41 91.07 280.45 87.3 276.45 C 83.53 272.46 83.31 272.61 81.25 270.41 C 79.18 268.2 78.06 266.64 76.99 265.43 C 75.92 264.21 76.16 264.56 75.89 264.34 C 75.63 264.12 75.7 264.34 75.65 264.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 85.88 235.16 C 86.55 235.16 87.04 235.47 89.2 235.16 C 91.35 234.86 92.99 234.96 96.66 233.64 C 100.33 232.32 101.96 232.35 107.54 228.59 C 113.11 224.82 118.81 219.52 124.51 214.8 C 130.21 210.09 130.33 209.34 136.04 204.99 C 141.76 200.65 148.08 196.6 153.09 193.08 C 158.11 189.56 157.87 189.58 161.1 187.39 C 164.33 185.2 167.19 183.38 169.26 182.14 C 171.33 180.89 170.96 181.36 171.45 181.17 C 171.93 180.98 171.6 181.17 171.7 181.17 C 171.8 181.17 171.9 181.17 171.95 181.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 178.37 127.34 C 179.86 127.34 181.15 127.34 185.83 127.34 C 190.52 127.34 195.56 127.58 201.79 127.34 C 208.03 127.1 210.23 127.47 217.01 126.16 C 223.79 124.84 229.06 122.77 235.68 120.77 C 242.31 118.77 244.05 118.21 250.15 116.15 C 256.24 114.09 260.59 112.56 266.15 110.46 C 271.71 108.36 274.1 107.37 277.96 105.66 C 281.81 103.96 282.23 103.29 285.43 101.95 C 288.63 100.6 291.37 99.94 293.97 98.95 C 296.56 97.96 296.85 97.65 298.4 97 C 299.96 96.36 300.93 96.09 301.75 95.73 C 302.57 95.37 302.36 95.37 302.52 95.22 C 302.67 95.07 302.56 95.03 302.52 94.98 C 302.47 94.94 302.32 94.98 302.27 94.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 241.5 94.98 C 241.5 95.03 241.5 94.54 241.5 95.22 C 241.5 95.9 241.5 96.09 241.5 98.39 C 241.5 100.7 241.5 104 241.5 106.73 C 241.5 109.46 241.5 109.57 241.5 112.05 C 241.5 114.53 241.5 116.3 241.5 119.14 C 241.5 121.98 241.5 123.96 241.5 126.23 C 241.5 128.5 241.5 129.18 241.5 130.49 C 241.5 131.8 241.5 131.98 241.5 132.8 C 241.5 133.61 241.5 134.17 241.5 134.57 C 241.5 134.98 241.5 134.83 241.5 134.84 C 241.5 134.84 241.5 134.76 241.5 134.61 C 241.5 134.46 241.5 134.19 241.5 134.09" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 269.17 88.05 C 269.17 88.25 269.17 88.18 269.17 89.02 C 269.17 89.86 269.17 89.93 269.17 92.23 C 269.17 94.54 269.17 97.46 269.17 100.56 C 269.17 103.66 269.17 104.39 269.17 107.75 C 269.17 111.1 269.17 114.12 269.17 117.35 C 269.17 120.58 270.16 120.6 269.17 123.9 C 268.17 127.2 265.66 130.94 264.19 133.86 C 262.71 136.78 262.89 136.44 261.8 138.51 C 260.71 140.59 259.52 142.86 258.74 144.23 C 257.95 145.6 258.16 144.98 257.88 145.38 C 257.59 145.77 257.54 146.04 257.33 146.21 C 257.11 146.37 256.96 146.21 256.81 146.21 C 256.66 146.21 256.62 146.21 256.57 146.21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 215.92 158.91 C 215.92 159.28 215.92 159.52 215.92 160.76 C 215.92 162 215.92 161.8 215.92 165.11 C 215.92 168.42 215.92 173.28 215.92 177.31 C 215.92 181.34 215.92 181.38 215.92 185.27 C 215.92 189.15 215.92 192.71 215.92 196.74 C 215.92 200.77 215.92 199.64 215.92 205.42 C 215.92 211.19 215.92 218.68 215.92 225.61 C 215.92 232.55 215.92 233.7 215.92 240.08 C 215.92 246.47 215.75 251.64 215.92 257.54 C 216.09 263.43 215.99 265.93 216.77 269.56 C 217.55 273.19 218.46 273.39 219.82 275.68 C 221.18 277.97 222.3 279.5 223.56 281.01 C 224.81 282.52 225.36 282.68 226.09 283.24 C 226.82 283.8 226.84 283.6 227.23 283.82 C 227.61 284.04 227.79 284.24 228 284.34 C 228.21 284.44 228.16 284.34 228.26 284.34 C 228.36 284.34 228.45 284.34 228.5 284.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 211.44 186.56 C 211.58 186.56 211.05 186.56 212.14 186.56 C 213.24 186.56 212.93 186.56 216.9 186.56 C 220.87 186.56 226.44 186.67 231.99 186.56 C 237.54 186.45 238.9 186.41 244.66 186 C 250.42 185.58 255.54 185.2 260.78 184.5 C 266.02 183.8 265.64 182.99 270.86 182.48 C 276.08 181.98 280.93 182.18 286.88 181.98 C 292.82 181.78 296.74 181.69 300.57 181.5 C 304.39 181.32 303.26 181.14 306 181.05 C 308.75 180.96 311.8 181.05 314.3 181.05 C 316.8 181.05 316.99 181.05 318.48 181.05 C 319.98 181.05 320.89 181 321.77 181.05 C 322.64 181.11 322.58 181.16 322.85 181.32 C 323.12 181.47 323.05 181.63 323.11 181.84 C 323.16 182.05 323.05 182.08 323.11 182.35 C 323.16 182.62 323.18 182.55 323.36 183.18 C 323.55 183.81 323.58 183.89 324.02 185.49 C 324.45 187.09 324.9 188.26 325.54 191.19 C 326.18 194.11 326.68 196.46 327.21 200.12 C 327.75 203.79 327.7 204.62 328.2 209.51 C 328.7 214.4 329.19 218.37 329.7 224.58 C 330.21 230.79 330.42 235.48 330.73 240.55 C 331.04 245.62 331.14 246.52 331.24 249.94 C 331.34 253.35 331.24 255.44 331.24 257.62 C 331.24 259.8 331.24 259.89 331.24 260.83 C 331.24 261.78 331.24 261.83 331.24 262.35 C 331.24 262.87 331.24 263.12 331.24 263.44 C 331.24 263.76 331.24 263.81 331.24 263.96 C 331.24 264.11 331.24 263.5 331.24 264.2 C 331.24 264.89 331.24 264.87 331.24 267.41 C 331.24 269.95 331.4 273.47 331.24 276.91 C 331.07 280.36 330.64 282.61 330.41 284.64 C 330.19 286.67 330.24 286.14 330.13 287.06 C 330.01 287.98 329.95 288.81 329.84 289.25 C 329.73 289.69 329.75 289.55 329.58 289.25 C 329.42 288.95 329.37 289 329.02 287.75 C 328.67 286.49 328.06 283.94 327.82 282.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 260.1 189.45 C 260.1 189.54 260.1 189.08 260.1 189.92 C 260.1 190.75 260.1 191.45 260.1 193.61 C 260.1 195.78 260.1 197.76 260.1 200.73 C 260.1 203.7 260.1 205.72 260.1 208.46 C 260.1 211.2 260.1 211.7 260.1 214.45 C 260.1 217.21 260.1 219.92 260.1 222.23 C 260.1 224.53 260.1 223.9 260.1 225.98 C 260.1 228.05 260.1 230.07 260.1 232.59 C 260.1 235.11 260.1 236.19 260.1 238.6 C 260.1 241.01 260.1 242.49 260.1 244.65 C 260.1 246.82 260.1 247.53 260.1 249.42 C 260.1 251.31 260.1 252.85 260.1 254.09 C 260.1 255.33 260.1 255.25 260.1 255.61 C 260.1 255.96 260.1 256.39 260.1 255.86 C 260.1 255.34 260.1 253.56 260.1 252.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 222.5 222.28 C 222.54 222.28 221.84 222.28 222.73 222.28 C 223.61 222.28 224.3 222.28 226.94 222.28 C 229.57 222.28 232.38 222.28 235.91 222.28 C 239.44 222.28 240.13 222.28 244.61 222.28 C 249.09 222.28 253.38 222.28 258.31 222.28 C 263.25 222.28 265.22 222.28 269.29 222.28 C 273.37 222.28 275.27 222.28 278.7 222.28 C 282.12 222.28 283.55 222.28 286.41 222.28 C 289.28 222.28 291.05 222.28 293.01 222.28 C 294.97 222.28 294.67 222.28 296.22 222.28 C 297.77 222.28 299.28 222.28 300.75 222.28 C 302.22 222.28 302.77 222.28 303.56 222.28 C 304.35 222.28 304.32 222.28 304.7 222.28 C 305.08 222.28 305.31 222.37 305.47 222.28 C 305.62 222.18 305.64 221.9 305.47 221.81 C 305.3 221.71 304.8 221.81 304.64 221.81" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 221.03 270.27 C 221.67 270.27 221.66 270.27 224.23 270.27 C 226.81 270.27 230.52 270.27 233.91 270.27 C 237.3 270.27 237.35 270.27 241.21 270.27 C 245.07 270.27 248.63 270.27 253.21 270.27 C 257.79 270.27 260.61 270.27 264.1 270.27 C 267.6 270.27 267.47 270.27 270.68 270.27 C 273.9 270.27 276.99 270.27 280.17 270.27 C 283.36 270.27 283.78 270.27 286.62 270.27 C 289.45 270.27 291.85 270.27 294.35 270.27 C 296.85 270.27 296.95 270.27 299.11 270.27 C 301.27 270.27 303.2 270.27 305.14 270.27 C 307.09 270.27 306.99 270.27 308.83 270.27 C 310.67 270.27 312.33 270.27 314.35 270.27 C 316.37 270.27 317.47 270.2 318.92 270.27 C 320.38 270.34 320.6 270.48 321.63 270.61 C 322.66 270.75 323.28 270.8 324.07 270.93 C 324.86 271.06 324.87 271.06 325.58 271.25 C 326.3 271.43 326.96 271.62 327.66 271.85 C 328.35 272.08 328.67 272.29 329.05 272.4 C 329.44 272.51 329.36 272.35 329.57 272.4 C 329.78 272.45 329.98 272.61 330.09 272.66" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path></svg>'),_())}));var k=Object(o.useCallback)((function(t){var n,e=new FileReader;e.onload=function(t){if(t.target&&"string"===typeof t.target.result){var n=t.target.result.split(","),e=Object(r.a)(n,2),o=e[0],i=e[1];if("data:image/svg+xml;base64"===o){var a=atob(i);if(!u.current)return;u.current.parseSVGString(a),u.current.update()}}},(null===(n=t.target)||void 0===n?void 0:n.files)&&e.readAsDataURL(t.target.files[0])}),[]),w=Object(o.useCallback)((function(){u.current&&(u.current.setAnimation(d,{frames:3}),u.current.start())}),[]),_=Object(o.useCallback)((function(){u.current&&(u.current.setAnimation(m,{repeatCount:1}),u.current.start())}),[]),y=Object(o.useCallback)((function(){u.current&&(u.current.setAnimation(p,{frames:h.length}),u.current.start())}),[]),j=Object(o.useCallback)((function(){u.current&&u.current.stop()}),[]),S=Object(o.useCallback)((function(){u.current&&u.current.restore()}),[]),O=Object(o.useCallback)((function(){u.current&&u.current.downloadAnimation()}),[]);return c(l.a,null,c(a.Box,{as:"fieldset"},c(a.Flex,{justifyContent:"start",mb:2},c(s.Label,{width:.3,style:{whiteSpace:"nowrap"}},"ANIMATION MS:"),c(s.Slider,{width:.6,type:"range",min:"0",max:"500",step:"5",value:g,onChange:b}),c(s.Input,{width:"auto",type:"number",min:"0",max:"500",step:"5",value:g,onChange:b})),c(a.Flex,{flexWrap:"wrap",justifyContent:"start",mb:2},c(a.Box,null,c(a.Button,{mr:1,mb:1,onClick:w},"Shaking"),c(a.Button,{variant:"secondary",mr:1,mb:1,onClick:_},"Drawing"),c(a.Button,{variant:"secondary",mr:1,mb:1,onClick:y},"Colorful"),c(a.Button,{mr:1,mb:1,onClick:j},"Stop"),c(a.Button,{mr:1,mb:1,onClick:S},"Restore"),c(a.Button,{variant:"secondary",mr:1,mb:1,onClick:O},"Download Anmation SVG"))),c(a.Box,null,c(a.Text,null,"Svg exported by this library can be read."),c(s.Input,{type:"file",onChange:k,multiple:!0,accept:"image/*"}))),c("div",{ref:i,style:{backgroundSize:"".concat(30,"px ").concat(30,"px"),border:"1px solid #333",width:e,height:e,margin:"0 auto 0 0"}}))};f.getInitialProps=function(t){var n=t.req,e=n?n.headers["user-agent"]:navigator.userAgent;return{isSp:!e||/iPhone|Android.+Mobile/.test(e)}};n.default=f},zygG:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("HO86");function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return e}}(t,n)||Object(r.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["+0BB",0,2,1,3,4,5]]]);