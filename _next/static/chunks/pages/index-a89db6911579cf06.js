(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6038)}])},6038:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var n=i(2322),r=i(6577),o=i.n(r),a=i(3619),l=i.n(a),s={src:"/_next/static/media/logo.a1755a73.svg",height:91,width:140,blurWidth:0,blurHeight:0};function c(){let e=e=>{let{target:t}=e;t.classList.toggle(l().vertical)};return(0,n.jsxs)("div",{className:l().info,children:[(0,n.jsx)(o(),{src:s,alt:"GC Logo",onClick:t=>e(t)}),(0,n.jsxs)("h1",{hidden:!0,children:["Gianluca Cirone ",(0,n.jsx)("strong",{children:"Technology"})]}),(0,n.jsxs)("a",{href:"https://www.linkedin.com/in/gianlucacirone",children:["Get in touch with ",(0,n.jsx)("span",{children:"Gianluca"})]})]})}},6421:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(9419).Z,r=i(3903).Z,o=i(199).Z,a=i(5154).Z,l=o(i(2784)),s=r(i(501)),c=i(4799),d=i(2422),u=i(9910);i(186);var f=r(i(5381));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,r,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:w,unoptimized:b,loader:_,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:E,setShowAltText:j,onLoad:S,onError:C}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,{loading:p,width:o,height:r,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n({},d,u)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,v,h,y,x,E,b))},[v,h,y,x,E,C,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,y,x,E,b)},onError:e=>{j(!0),"blur"===h&&E(!0),C&&C(e)}})))}),w=l.forwardRef((e,t)=>{let i,r;var o,{src:m,sizes:w,unoptimized:b=!1,priority:_=!1,loading:y,className:x,quality:E,width:j,height:S,fill:C,style:z,onLoad:k,onLoadingComplete:P,placeholder:R="empty",blurDataURL:O,layout:M,objectFit:I,objectPosition:N,lazyBoundary:L,lazyRoot:A}=e,G=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=l.useContext(u.ImageConfigContext),B=l.useMemo(()=>{let e=g||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[T]),D=G,F=D.loader||f.default;delete D.loader;let W="__next_img_default"in F;if(W){if("custom"===B.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:i}=t,n=a(t,["config"]);return e(n)}}if(M){"fill"===M&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(z=n({},z,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!w&&(w=t)}let q="",V=p(j),Z=p(S);if("object"==typeof(o=m)&&(h(o)||void 0!==o.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,O=O||e.blurDataURL,q=e.src,!C){if(V||Z){if(V&&!Z){let t=V/e.width;Z=Math.round(e.height*t)}else if(!V&&Z){let t=Z/e.height;V=Math.round(e.width*t)}}else V=e.width,Z=e.height}}let H=!_&&("lazy"===y||void 0===y);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,H=!1),B.unoptimized&&(b=!0),W&&m.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(b=!0);let[U,X]=l.useState(!1),[J,Y]=l.useState(!1),$=p(E),K=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:N}:{},J?{}:{color:"transparent"},z),Q="blur"===R&&O&&!U?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:Z,blurWidth:i,blurHeight:r,blurDataURL:O,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[d]})}}({config:B,src:m,unoptimized:b,width:V,quality:$,sizes:w,loader:F}),et=m,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},en=l.useRef(k);l.useEffect(()=>{en.current=k},[k]);let er=l.useRef(P);l.useEffect(()=>{er.current=P},[P]);let eo=n({isLazy:H,imgAttributes:ee,heightInt:Z,widthInt:V,qualityInt:$,className:x,imgStyle:K,blurStyle:Q,loading:y,config:B,fill:C,unoptimized:b,placeholder:R,loader:F,srcString:et,onLoadRef:en,onLoadingCompleteRef:er,setBlurComplete:X,setShowAltText:Y},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4799:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o,objectFit:a}=e,l=n||t,s=r||i,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},5381:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3619:function(e){e.exports={info:"index_info__VXeMP","logo-enter":"index_logo-enter__H66rS",vertical:"index_vertical___dSac","fade-in":"index_fade-in__P32La"}},6577:function(e,t,i){e.exports=i(6421)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7314)}),_N_E=e.O()}]);