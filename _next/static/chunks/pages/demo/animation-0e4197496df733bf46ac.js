(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{3649:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m}});var i=e(2867),r=e(2755),s=e(8624),a=e(5793),o=e(2784),u=e(6451),h=e(5128),c=e(2322),l=function(t){for(var n=function(){return 5*Math.random()-2.5},e=0;e<t.length;e+=1)t[e].commands=t[e].commands.map((function(t){var e,i,r;return t.point=null===(e=t.point)||void 0===e?void 0:e.add(new a.Point(n(),n())),t.cl=null===(i=t.cl)||void 0===i?void 0:i.add(new a.Point(n(),n())),t.cr=null===(r=t.cr)||void 0===r?void 0:r.add(new a.Point(n(),n())),t}));return t},d=["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722"],C=function(t,n){if(!n)return t;for(var e=0;e<t.length;e+=1)t[e].attrs.stroke=d[n%d.length],t[e].attrs.fill=d[(n+4)%d.length];return t},p=function(t,n){if(!n)return t;for(var e=[],i=0;i<t.length;i+=1){if(n<t[i].commands.length){t[i].commands=t[i].commands.slice(0,n),e.push(t[i]);break}n-=t[i].commands.length,e.push(t[i])}return e},f=function(t){t.isSp;var n=(0,o.useRef)(null),e=(0,o.useRef)(null),a=(0,o.useState)(20),f=a[0],m=a[1],v=(0,o.useCallback)((function(t){if(e.current){var n=Number(t.target.value);Number.isNaN(n)||(e.current.ms=n,m(n))}}),[]);(0,o.useEffect)((function(){e.current||n.current&&(e.current=new s.SvgAnimation(n.current,{ms:f,background:"#fff"}),e.current.svg.parseSVGString('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="370.921875" width="370.921875"><path d="M 40.55 81.18 C 40.59 81.18 40.09 81.18 40.78 81.18 C 41.46 81.18 41.67 81.18 43.96 81.18 C 46.26 81.18 49.43 81.18 52.27 81.18 C 55.11 81.18 54.07 81.18 58.18 81.18 C 62.29 81.18 66.58 81.18 72.8 81.18 C 79.03 81.18 82.53 81.18 89.3 81.18 C 96.07 81.18 97.3 81.18 106.66 81.18 C 116.03 81.18 126.28 81.18 136.12 81.18 C 145.96 81.18 150.14 81.18 155.87 81.18 C 161.59 81.18 161.04 81.18 164.74 81.18 C 168.44 81.18 171.98 81.18 174.37 81.18 C 176.75 81.18 176.11 81.18 176.67 81.18 C 177.23 81.18 177.03 81.39 177.18 81.18 C 177.33 80.96 177.6 80.73 177.43 80.11 C 177.26 79.49 176.56 78.48 176.34 78.08" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 150.09 48.41 C 150.09 48.55 150.09 47.41 150.09 49.13 C 150.09 50.85 150.09 51.9 150.09 57.02 C 150.09 62.13 150.09 69.16 150.09 74.69 C 150.09 80.22 150.09 76.61 150.09 84.68 C 150.09 92.76 150.09 103.41 150.09 115.06 C 150.09 126.7 150.09 132.34 150.09 142.91 C 150.09 153.48 150.09 152.15 150.09 167.91 C 150.09 183.67 150.09 204.36 150.09 221.71 C 150.09 239.05 150.09 242.46 150.09 254.65 C 150.09 266.84 150.09 275.46 150.09 282.65 C 150.09 289.85 150.09 287.44 150.09 290.62 C 150.09 293.8 150.21 296.6 150.09 298.56 C 149.96 300.53 149.58 299.91 149.46 300.45 C 149.33 300.98 149.9 300.06 149.46 301.23 C 149.02 302.39 148.18 304.31 147.27 306.28 C 146.35 308.26 146.07 308.71 144.88 311.11 C 143.69 313.51 142.43 316.09 141.31 318.28 C 140.2 320.47 139.82 321.09 139.32 322.07 C 138.81 323.05 138.9 322.84 138.8 323.16 C 138.69 323.49 138.85 323.58 138.8 323.69 C 138.75 323.79 138.65 323.69 138.55 323.69 C 138.46 323.69 138.41 323.69 138.32 323.69 C 138.22 323.69 138.5 323.81 138.08 323.69 C 137.66 323.56 138.3 324.35 136.21 323.06 C 134.12 321.77 132.92 321.6 127.64 317.23 C 122.37 312.86 115.35 306.59 109.84 301.21 C 104.33 295.84 104.62 295.32 100.11 290.37 C 95.6 285.41 91.07 280.45 87.3 276.45 C 83.53 272.46 83.31 272.61 81.25 270.41 C 79.18 268.2 78.06 266.64 76.99 265.43 C 75.92 264.21 76.16 264.56 75.89 264.34 C 75.63 264.12 75.7 264.34 75.65 264.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 85.88 235.16 C 86.55 235.16 87.04 235.47 89.2 235.16 C 91.35 234.86 92.99 234.96 96.66 233.64 C 100.33 232.32 101.96 232.35 107.54 228.59 C 113.11 224.82 118.81 219.52 124.51 214.8 C 130.21 210.09 130.33 209.34 136.04 204.99 C 141.76 200.65 148.08 196.6 153.09 193.08 C 158.11 189.56 157.87 189.58 161.1 187.39 C 164.33 185.2 167.19 183.38 169.26 182.14 C 171.33 180.89 170.96 181.36 171.45 181.17 C 171.93 180.98 171.6 181.17 171.7 181.17 C 171.8 181.17 171.9 181.17 171.95 181.17" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 178.37 127.34 C 179.86 127.34 181.15 127.34 185.83 127.34 C 190.52 127.34 195.56 127.58 201.79 127.34 C 208.03 127.1 210.23 127.47 217.01 126.16 C 223.79 124.84 229.06 122.77 235.68 120.77 C 242.31 118.77 244.05 118.21 250.15 116.15 C 256.24 114.09 260.59 112.56 266.15 110.46 C 271.71 108.36 274.1 107.37 277.96 105.66 C 281.81 103.96 282.23 103.29 285.43 101.95 C 288.63 100.6 291.37 99.94 293.97 98.95 C 296.56 97.96 296.85 97.65 298.4 97 C 299.96 96.36 300.93 96.09 301.75 95.73 C 302.57 95.37 302.36 95.37 302.52 95.22 C 302.67 95.07 302.56 95.03 302.52 94.98 C 302.47 94.94 302.32 94.98 302.27 94.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 241.5 94.98 C 241.5 95.03 241.5 94.54 241.5 95.22 C 241.5 95.9 241.5 96.09 241.5 98.39 C 241.5 100.7 241.5 104 241.5 106.73 C 241.5 109.46 241.5 109.57 241.5 112.05 C 241.5 114.53 241.5 116.3 241.5 119.14 C 241.5 121.98 241.5 123.96 241.5 126.23 C 241.5 128.5 241.5 129.18 241.5 130.49 C 241.5 131.8 241.5 131.98 241.5 132.8 C 241.5 133.61 241.5 134.17 241.5 134.57 C 241.5 134.98 241.5 134.83 241.5 134.84 C 241.5 134.84 241.5 134.76 241.5 134.61 C 241.5 134.46 241.5 134.19 241.5 134.09" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 269.17 88.05 C 269.17 88.25 269.17 88.18 269.17 89.02 C 269.17 89.86 269.17 89.93 269.17 92.23 C 269.17 94.54 269.17 97.46 269.17 100.56 C 269.17 103.66 269.17 104.39 269.17 107.75 C 269.17 111.1 269.17 114.12 269.17 117.35 C 269.17 120.58 270.16 120.6 269.17 123.9 C 268.17 127.2 265.66 130.94 264.19 133.86 C 262.71 136.78 262.89 136.44 261.8 138.51 C 260.71 140.59 259.52 142.86 258.74 144.23 C 257.95 145.6 258.16 144.98 257.88 145.38 C 257.59 145.77 257.54 146.04 257.33 146.21 C 257.11 146.37 256.96 146.21 256.81 146.21 C 256.66 146.21 256.62 146.21 256.57 146.21" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 215.92 158.91 C 215.92 159.28 215.92 159.52 215.92 160.76 C 215.92 162 215.92 161.8 215.92 165.11 C 215.92 168.42 215.92 173.28 215.92 177.31 C 215.92 181.34 215.92 181.38 215.92 185.27 C 215.92 189.15 215.92 192.71 215.92 196.74 C 215.92 200.77 215.92 199.64 215.92 205.42 C 215.92 211.19 215.92 218.68 215.92 225.61 C 215.92 232.55 215.92 233.7 215.92 240.08 C 215.92 246.47 215.75 251.64 215.92 257.54 C 216.09 263.43 215.99 265.93 216.77 269.56 C 217.55 273.19 218.46 273.39 219.82 275.68 C 221.18 277.97 222.3 279.5 223.56 281.01 C 224.81 282.52 225.36 282.68 226.09 283.24 C 226.82 283.8 226.84 283.6 227.23 283.82 C 227.61 284.04 227.79 284.24 228 284.34 C 228.21 284.44 228.16 284.34 228.26 284.34 C 228.36 284.34 228.45 284.34 228.5 284.34" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 211.44 186.56 C 211.58 186.56 211.05 186.56 212.14 186.56 C 213.24 186.56 212.93 186.56 216.9 186.56 C 220.87 186.56 226.44 186.67 231.99 186.56 C 237.54 186.45 238.9 186.41 244.66 186 C 250.42 185.58 255.54 185.2 260.78 184.5 C 266.02 183.8 265.64 182.99 270.86 182.48 C 276.08 181.98 280.93 182.18 286.88 181.98 C 292.82 181.78 296.74 181.69 300.57 181.5 C 304.39 181.32 303.26 181.14 306 181.05 C 308.75 180.96 311.8 181.05 314.3 181.05 C 316.8 181.05 316.99 181.05 318.48 181.05 C 319.98 181.05 320.89 181 321.77 181.05 C 322.64 181.11 322.58 181.16 322.85 181.32 C 323.12 181.47 323.05 181.63 323.11 181.84 C 323.16 182.05 323.05 182.08 323.11 182.35 C 323.16 182.62 323.18 182.55 323.36 183.18 C 323.55 183.81 323.58 183.89 324.02 185.49 C 324.45 187.09 324.9 188.26 325.54 191.19 C 326.18 194.11 326.68 196.46 327.21 200.12 C 327.75 203.79 327.7 204.62 328.2 209.51 C 328.7 214.4 329.19 218.37 329.7 224.58 C 330.21 230.79 330.42 235.48 330.73 240.55 C 331.04 245.62 331.14 246.52 331.24 249.94 C 331.34 253.35 331.24 255.44 331.24 257.62 C 331.24 259.8 331.24 259.89 331.24 260.83 C 331.24 261.78 331.24 261.83 331.24 262.35 C 331.24 262.87 331.24 263.12 331.24 263.44 C 331.24 263.76 331.24 263.81 331.24 263.96 C 331.24 264.11 331.24 263.5 331.24 264.2 C 331.24 264.89 331.24 264.87 331.24 267.41 C 331.24 269.95 331.4 273.47 331.24 276.91 C 331.07 280.36 330.64 282.61 330.41 284.64 C 330.19 286.67 330.24 286.14 330.13 287.06 C 330.01 287.98 329.95 288.81 329.84 289.25 C 329.73 289.69 329.75 289.55 329.58 289.25 C 329.42 288.95 329.37 289 329.02 287.75 C 328.67 286.49 328.06 283.94 327.82 282.99" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 260.1 189.45 C 260.1 189.54 260.1 189.08 260.1 189.92 C 260.1 190.75 260.1 191.45 260.1 193.61 C 260.1 195.78 260.1 197.76 260.1 200.73 C 260.1 203.7 260.1 205.72 260.1 208.46 C 260.1 211.2 260.1 211.7 260.1 214.45 C 260.1 217.21 260.1 219.92 260.1 222.23 C 260.1 224.53 260.1 223.9 260.1 225.98 C 260.1 228.05 260.1 230.07 260.1 232.59 C 260.1 235.11 260.1 236.19 260.1 238.6 C 260.1 241.01 260.1 242.49 260.1 244.65 C 260.1 246.82 260.1 247.53 260.1 249.42 C 260.1 251.31 260.1 252.85 260.1 254.09 C 260.1 255.33 260.1 255.25 260.1 255.61 C 260.1 255.96 260.1 256.39 260.1 255.86 C 260.1 255.34 260.1 253.56 260.1 252.98" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 222.5 222.28 C 222.54 222.28 221.84 222.28 222.73 222.28 C 223.61 222.28 224.3 222.28 226.94 222.28 C 229.57 222.28 232.38 222.28 235.91 222.28 C 239.44 222.28 240.13 222.28 244.61 222.28 C 249.09 222.28 253.38 222.28 258.31 222.28 C 263.25 222.28 265.22 222.28 269.29 222.28 C 273.37 222.28 275.27 222.28 278.7 222.28 C 282.12 222.28 283.55 222.28 286.41 222.28 C 289.28 222.28 291.05 222.28 293.01 222.28 C 294.97 222.28 294.67 222.28 296.22 222.28 C 297.77 222.28 299.28 222.28 300.75 222.28 C 302.22 222.28 302.77 222.28 303.56 222.28 C 304.35 222.28 304.32 222.28 304.7 222.28 C 305.08 222.28 305.31 222.37 305.47 222.28 C 305.62 222.18 305.64 221.9 305.47 221.81 C 305.3 221.71 304.8 221.81 304.64 221.81" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path><path d="M 221.03 270.27 C 221.67 270.27 221.66 270.27 224.23 270.27 C 226.81 270.27 230.52 270.27 233.91 270.27 C 237.3 270.27 237.35 270.27 241.21 270.27 C 245.07 270.27 248.63 270.27 253.21 270.27 C 257.79 270.27 260.61 270.27 264.1 270.27 C 267.6 270.27 267.47 270.27 270.68 270.27 C 273.9 270.27 276.99 270.27 280.17 270.27 C 283.36 270.27 283.78 270.27 286.62 270.27 C 289.45 270.27 291.85 270.27 294.35 270.27 C 296.85 270.27 296.95 270.27 299.11 270.27 C 301.27 270.27 303.2 270.27 305.14 270.27 C 307.09 270.27 306.99 270.27 308.83 270.27 C 310.67 270.27 312.33 270.27 314.35 270.27 C 316.37 270.27 317.47 270.2 318.92 270.27 C 320.38 270.34 320.6 270.48 321.63 270.61 C 322.66 270.75 323.28 270.8 324.07 270.93 C 324.86 271.06 324.87 271.06 325.58 271.25 C 326.3 271.43 326.96 271.62 327.66 271.85 C 328.35 272.08 328.67 272.29 329.05 272.4 C 329.44 272.51 329.36 272.35 329.57 272.4 C 329.78 272.45 329.98 272.61 330.09 272.66" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"></path></svg>'),b())}));var g=(0,o.useCallback)((function(t){var n,r=new FileReader;r.onload=function(t){if(t.target&&"string"===typeof t.target.result){var n=t.target.result.split(","),r=(0,i.Z)(n,2),s=r[0],a=r[1];if("data:image/svg+xml;base64"===s){var o=atob(a);if(!e.current)return;e.current.svg.parseSVGString(o),e.current.update()}}},null!==(n=t.target)&&void 0!==n&&n.files&&r.readAsDataURL(t.target.files[0])}),[]),w=(0,o.useCallback)((function(){e.current&&(e.current.setAnimation(l,{frames:3}),e.current.start())}),[]),b=(0,o.useCallback)((function(){e.current&&(e.current.setAnimation(p,{repeatCount:1}),e.current.start())}),[]),y=(0,o.useCallback)((function(){e.current&&(e.current.setAnimation(C,{frames:d.length}),e.current.start())}),[]),k=(0,o.useCallback)((function(){e.current&&e.current.stop()}),[]),_=(0,o.useCallback)((function(){e.current&&e.current.restore()}),[]),x=(0,o.useCallback)((function(){e.current&&e.current.download()}),[]);return(0,c.jsxs)(h.Z,{children:[(0,c.jsxs)(u.xu,{as:"fieldset",children:[(0,c.jsxs)(u.kC,{justifyContent:"start",mb:2,children:[(0,c.jsx)(r.__,{width:.3,style:{whiteSpace:"nowrap"},children:"ANIMATION MS:"}),(0,c.jsx)(r.iR,{width:.6,type:"range",min:"0",max:"500",step:"5",value:f,onChange:v}),(0,c.jsx)(r.II,{width:"auto",type:"number",min:"0",max:"500",step:"5",value:f,onChange:v})]}),(0,c.jsx)(u.kC,{flexWrap:"wrap",justifyContent:"start",mb:2,children:(0,c.jsxs)(u.xu,{children:[(0,c.jsx)(u.zx,{mr:1,mb:1,onClick:w,children:"Shaking"}),(0,c.jsx)(u.zx,{variant:"secondary",mr:1,mb:1,onClick:b,children:"Drawing"}),(0,c.jsx)(u.zx,{variant:"secondary",mr:1,mb:1,onClick:y,children:"Colorful"}),(0,c.jsx)(u.zx,{mr:1,mb:1,onClick:k,children:"Stop"}),(0,c.jsx)(u.zx,{mr:1,mb:1,onClick:_,children:"Restore"}),(0,c.jsx)(u.zx,{variant:"secondary",mr:1,mb:1,onClick:x,children:"Download Anmation SVG"})]})}),(0,c.jsxs)(u.xu,{children:[(0,c.jsx)(u.xv,{children:"Svg exported by this library can be read."}),(0,c.jsx)(r.II,{type:"file",onChange:g,multiple:!0,accept:"image/*"})]})]}),(0,c.jsx)(u.xu,{width:["96vw","96vw","40vw"],height:["96vw","96vw","40vw"],children:(0,c.jsx)("div",{ref:n,style:{backgroundSize:"".concat(30,"px ").concat(30,"px"),border:"1px solid #333",width:"100%",height:"100%",margin:"0 auto 0 0"}})})]})};f.getInitialProps=function(t){var n=t.req,e=n?n.headers["user-agent"]:navigator.userAgent;return{isSp:!e||/iPhone|Android.+Mobile/.test(e)}};var m=f},5749:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/animation",function(){return e(3649)}])},8624:function(t,n){!function(t){"use strict";function n(){return(n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},r=function(t,n){return void 0===n&&(n=2),+t.toFixed(n)},s="http://www.w3.org/2000/svg",a=function(t,n){var e=document.createElementNS(s,"svg");return e.setAttributeNS(null,"version","1.1"),e.setAttribute("xmlns",s),e.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),Object.keys(t).sort().map((function(n){e.setAttribute(n,t[n])})),n.map((function(t){e.appendChild(t)})),e},o=function(t,n){var e=document.createElementNS(s,t);return Object.keys(n).sort().map((function(t){e.setAttribute(t,n[t])})),e},u=function(t){var n=Object.entries(t).reduce((function(t,n,e){var r,s=n[0],a=n[1];return a?Object.assign(Object.assign({},t),((r={})[i(s)]=a,r)):t}),{});return o("path",n)},h=function(t){var n=t.width,e=t.height,i=t.background,r=t.paths,s={width:String(n),height:String(e)},h=i?[o("rect",Object.assign(Object.assign({},s),{fill:i}))]:[];return a(s,[].concat(h,r.map(u)))},c=function(){function t(t,n){var e=(void 0===n?{}:n).background;this.el=t;var i=t.getBoundingClientRect(),r=i.width,s=i.height;t.appendChild(h({background:e,width:r,height:s,paths:[]}))}return t.prototype.update=function(t){this.el.replaceChild(h(t),this.el.childNodes[0])},t}(),l={png:"image/png",jpg:"image/jpeg",svg:"image/svg+xml"},d=function(){function t(t,n){var e=n.resize;this._el=t,this.resize=e,this._clearEventList=[]}var n=t.prototype;return n.off=function(){this._clearEventList.map((function(t){return t()})),this._clearEventList=[]},n.on=function(){this.off(),this._setupListerner()},n._setupListerner=function(){var t=this;if(window.ResizeObserver){var n=new window.ResizeObserver((function(n){var e=n[0];t.resize(e.contentRect)}));n.observe(this._el),this._clearEventList.push((function(){return n.disconnect()}))}else{var e=function(){t.resize(t._el.getBoundingClientRect())};addEventListener("resize",e),this._clearEventList.push((function(){return removeEventListener("resize",e)}))}},t}();function C(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(e[i[r]]=t[i[r]])}return e},f=function(){function t(t,n){this.x=t,this.y=n}var n=t.prototype;return n.toVector=function(){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)),n=Math.atan2(this.y,this.x);return new g(t,n)},n.scale=function(n){return new t(this.x*n,this.y*n)},n.add=function(n){return new t(this.x+n.x,this.y+n.y)},n.sub=function(n){return new t(this.x-n.x,this.y-n.y)},n.eql=function(t){return this.x===t.x&&this.y===t.y},n.clone=function(){return new t(this.x,this.y)},t}(),m={MOVE:"M",MOVE_RELATIVE:"m",LINE:"L",LINE_RELATIVE:"l",CURVE:"C",CURVE_RELATIVE:"c",CLOSE:"Z",HORIZONTAL:"H",HORIZONTAL_RELATIVE:"h",VERTICAL:"V",VERTICAL_RELATIVE:"v",ARC_CURVE:"A",ARC_CURVE_RELATIVE:"a",QUADRATIC_CURVE:"Q",QUADRATIC_CURVE_RELATIVE:"q"},v=function(){function t(t,n){void 0===n&&(n=[]),this.value=n,this.type=t}var n,e,i,s=t.prototype;return s.toString=function(){return this.type===m.CLOSE?m.CLOSE:this.type+" "+this.value.map((function(t){return r(t)})).join(" ")},s.scale=function(n){return new t(this.type,this.value.map((function(t){return t*n})))},s.clone=function(){return new t(this.type,this.value.slice())},n=t,(e=[{key:"cr",get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(2,4),n=t[0],e=t[1];return new f(n,e)}},set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(2,1,t.x),this.value.splice(3,1,t.y)))}},{key:"cl",get:function(){if(("C"===this.type||"c"===this.type)&&6===this.value.length){var t=this.value.slice(0,2),n=t[0],e=t[1];return new f(n,e)}},set:function(t){t&&("C"!==this.type&&"c"!==this.type||6!==this.value.length||(this.value.splice(0,1,t.x),this.value.splice(1,1,t.y)))}},{key:"point",get:function(){var t=this.value.slice(this.value.length-2);return 2===t.length?new f(t[0],t[1]):void 0},set:function(t){t&&(this.value.splice(this.value.length-2,1,t.x),this.value.splice(this.value.length-1,1,t.y))}}])&&C(n.prototype,e),i&&C(n,i),t}(),g=function(){function t(t,n){this.value=t,this.angle=n}var n=t.prototype;return n.toPoint=function(){var t=Math.cos(this.angle)*this.value,n=Math.sin(this.angle)*this.value;return new f(t,n)},n.scale=function(n){return new t(this.value*n,this.angle)},t}(),w=function(){function t(t){void 0===t&&(t={});var n=t.d,e=p(t,["d"]);this.attrs=e,this.commands=[],n&&this.parseCommandString(n)}var n=t.prototype;return n.scale=function(t){return this.commands=this.commands.map((function(n){return n.scale(t)})),this.attrs.strokeWidth=String(t*+(this.attrs.strokeWidth||0)),this},n.addCommand=function(t){var n;return Array.isArray(t)?(n=this.commands).push.apply(n,t):this.commands.push(t),this},n.getCommandString=function(){return 0===this.commands.length?"":this.commands.map((function(t,n){return t.toString()})).join(" ").trim()},n.parseCommandString=function(t){this.commands=[];for(var n,e=null,i=[],r=t.split(" "),s=function(t){return Object.values(m).includes(t)?t:null},a=0;a<r.length;a+=1){var o=s(r[a]);if(o){if(!e){e=o;continue}this.commands.push(new v(e,i)),e=o,i=[]}else{if((n=+r[a])!=n)return;i.push(+r[a])}}null!==e&&this.commands.push(new v(e,i))},n.parsePathElement=function(t){for(var n=0;n<t.attributes.length;n+=1){var e,i=t.attributes.item(n);i&&i.value&&("d"!==i.name?this.attrs=Object.assign(Object.assign({},this.attrs),((e={})[(r=i.name,r.replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()})))]=i.value,e)):this.parseCommandString(i.value))}var r;return this},n.toJson=function(){return Object.assign(Object.assign({},this.attrs),{d:this.getCommandString()})},n.clone=function(){var n=new t(this.attrs);return this.commands.map((function(t){n.commands.push(t.clone())})),n},t}(),b=function(){function t(t){var n=t.width,e=t.height,i=t.background;this.paths=[],this.width=n,this.height=e,this.background=i}var n=t.prototype;return n.resize=function(t){var n=t.width,e=t.height;this.scalePath(n/this.width),this.width=n,this.height=e},n.scalePath=function(t){if(1!==t)for(var n=0;n<this.paths.length;n+=1)this.paths[n].scale(t);return this},n.addPath=function(t){var n;return Array.isArray(t)?(n=this.paths).push.apply(n,t):this.paths.push(t),this},n.clonePaths=function(){return this.paths.map((function(t){return t.clone()}))},n.updatePath=function(t,n){var e=n||this.paths.length-1;return e<0&&this.paths.push(t),this.paths[e]=t,this},n.toJson=function(){return{width:this.width,height:this.height,background:this.background,paths:this.paths.map((function(t){return t.toJson()}))}},n.copy=function(t){return this.paths=t.clonePaths(),t.width&&this.width&&this.scalePath(this.width/t.width),this},n.parseSVGString=function(t){var n=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");return n?this.parseSVGElement(n):(this.paths=[],this)},n.parseSVGElement=function(t){var n=[];t.querySelectorAll("path").forEach((function(t){var e=(new w).parsePathElement(t);0!==e.commands.length&&n.push(e)})),this.paths=n;var e=Number(t.getAttribute("width"));return e&&this.width&&this.scalePath(this.width/e),this},t}(),y=["id"],k=function(){function t(t,n){var i=void 0===n?{ms:60}:n,r=i.background,s=i.ms;e(this,"ms",void 0),e(this,"_stopId",void 0),e(this,"_stopAnimation",void 0),e(this,"_anim",void 0),e(this,"_restorePaths",void 0),e(this,"_framesNumber",void 0),e(this,"svg",void 0),e(this,"renderer",void 0),e(this,"resizeHandler",void 0),e(this,"_repeatCount",void 0),this.ms=s,this._stopAnimation=null,this._anim=null,this._restorePaths=[],this._stopId=0,this._repeatCount="indefinite";var a=t.getBoundingClientRect(),o=a.width,u=a.height;this.svg=new b({width:o,height:u,background:r}),this.renderer=new c(t,{background:r}),this._resize=this._resize.bind(this),this.resizeHandler=new d(t,{resize:this._resize}),this.resizeHandler.on()}var s=t.prototype;return s.setAnimation=function(t,n){var e=void 0===n?{}:n,i=e.frames,r=e.repeatCount,s=e.ms;this._anim=t,this._framesNumber=i,this._repeatCount=r?""+r:"indefinite",s&&(this.ms=s)},s.stop=function(){return!!this._stopAnimation&&(this._stopAnimation(),this.restore(),!0)},s.restore=function(){this.svg.paths=this._restorePaths,this.update()},s.generateFrame=function(t){return this._anim?this._anim(this._restorePaths.map((function(t){return t.clone()})),t):this.svg.paths},s.start=function(){this.stop(),this._registerRestorePaths(),this._startAnimation()},s._startAnimation=function(){var t,n=this,e=0,i=this.ms,r=this._getFramesNumber();this._stopId=requestAnimationFrame((function s(a){if(i!==n.ms)return n.restore(),void n.start();(!t||a-t>i)&&(t=a,n.svg.paths=n.generateFrame(e),n.update(),e=e>r?0:e+1),n._stopId=requestAnimationFrame(s)})),this._stopAnimation=function(){cancelAnimationFrame(n._stopId),n._stopAnimation=null}},s.update=function(){this.renderer.update(this.svg.toJson())},s.toElement=function(){var t=this;this._stopAnimation||this._registerRestorePaths();var e=this._getFramesNumber(),s=Array(e).fill(null).map((function(n,e){return t.generateFrame(e)})),h=e*(this.ms>0?this.ms:1)+"ms",c=1/e,l="0;"+Array(e).fill(void 0).map((function(t,n){return r((n+1)*c,4)+""})).join(";"),d=function(n,e,i,r){var a=s.map((function(t){var e=t.find((function(t){return t.attrs.id===n.attrs.id}));return r({origin:n,path:e})||i}));return a.every((function(t){return t===i}))?null:o("animate",{dur:h,keyTimes:l,attributeName:e,repeatCount:t._repeatCount,values:[i].concat(a).join(";")})},C=this._restorePaths.map((function(t){var n=u(t.toJson()),e=d(t,"d",t.getCommandString(),(function(t){var n=t.origin,e=t.path;return e&&e.commands.length>0?e.getCommandString():n.commands[0].toString()}));e&&n.appendChild(e);var r=t.attrs;r.id;var s=function(t,n){if(null==t)return{};var e,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)e=s[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(r,y);return Object.entries(s).map((function(e){var r=e[0],s=e[1];if(s){var a=i(r),o=d(t,a,s,(function(t){var n=t.path;return null==n?void 0:n.attrs[r]}));o&&n.appendChild(o)}})),n})),p={width:String(this.svg.width),height:String(this.svg.height)},f=this.svg.background?[o("rect",n({},p,{fill:this.svg.background}))]:[];return a({width:String(this.svg.width),height:String(this.svg.height)},f.concat(C))},s.download=function(t){var n;!function(t){for(var n=t.data,e=t.extension,i=t.filename,r=atob(n.replace(/^.*,/,"")),s=new Uint8Array(r.length),a=0;a<r.length;a+=1)s[a]=r.charCodeAt(a);var o=i||Date.now()+"."+e,u=new Blob([s.buffer],{type:l[e]});if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(u,o);else if(window.URL&&window.URL.createObjectURL){var h=document.createElement("a");h.download=o,h.href=window.URL.createObjectURL(u),document.body.appendChild(h),h.click(),document.body.removeChild(h)}else window.open(n,"_blank")}({data:(n=this.toElement().outerHTML,"data:image/svg+xml;base64,"+btoa(n)),extension:"svg",filename:t})},s._getFramesNumber=function(){return this._framesNumber&&this._framesNumber>0?this._framesNumber:this._restorePaths.reduce((function(t,n){return t+n.commands.length}),0)},s._registerRestorePaths=function(){this._restorePaths=this.svg.clonePaths().map((function(t,n){return t.attrs.id="t"+n,t}))},s._resize=function(t){var n=t.width,e=t.height;this.stop(),this.svg.resize({width:n,height:e}),this.start()},t}();t.SvgAnimation=k,Object.defineProperty(t,"__esModule",{value:!0})}(n)},2867:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});var i=e(9147);function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var i,r,s=[],a=!0,o=!1;try{for(e=e.call(t);!(a=(i=e.next()).done)&&(s.push(i.value),!n||s.length!==n);a=!0);}catch(u){o=!0,r=u}finally{try{a||null==e.return||e.return()}finally{if(o)throw r}}return s}}(t,n)||(0,i.Z)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(t){t.O(0,[99,243,774,888,179],(function(){return n=5749,t(t.s=n);var n}));var n=t.O();_N_E=n}]);