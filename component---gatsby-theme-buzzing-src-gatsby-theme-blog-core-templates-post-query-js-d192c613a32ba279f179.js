(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Sw5":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"0T8T":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=i(n("mXGw")),o=i(n("W0B4"));function i(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(c,t);var e,n,o,i=s(c);function c(){return a(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(e.prototype,n),o&&u(e,o),c}(r.default.Component);e.CommentEmbed=p,p.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},p.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},"0qAl":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"5WRv":function(t,e,n){var r=n("iNmH"),o=n("Qatm"),i=n("Zhxd"),c=n("kluZ");t.exports=function(t){return r(t)||o(t)||i(t)||c()}},"8lrx":function(t,e,n){var r=n("uUj8"),o=n("5WRv"),i=n("OvAC"),c=n("PE9J");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=n("mXGw"),s=n("/FXl").mdx,f=n("U+ow").useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=c(t,["scope","children"]),a=f(e),d=l.useMemo((function(){if(!n)return null;var t=u({React:l,mdx:s},a),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return l.createElement(d,u({},i))}},EbQ0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,c=function(){r=null,n||t.apply(o,i)},a=n&&!r;window.clearTimeout(r),r=setTimeout(c,e),a&&t.apply(o,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var r,o=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var u=r.value;if("object"===i(e[u])){if(t(e[u],n[u]))return!0}else if(e[u]!==n[u]&&!a(e[u]))return!0}}catch(l){o.e(l)}finally{o.f()}return!1};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},"F0t+":function(t,e,n){"use strict";n.r(e);var r=n("mXGw"),o=n.n(r),i=n("U5Rv"),c=n("Cini"),a=n("y6Mt"),u=n("cz2p"),l=n("Wbzz"),s=n("u6UW"),f=n.n(s),d=n("NSuf"),p=n("4SKe"),b=n("R8iU"),m=n("enbY"),h=n("aD51"),y=function(t){var e=t.item,n={shortname:t.config.shortname,config:{identifier:e.slug,title:e.title}};return Object(c.c)(u.b.div,{sx:{pt:3}},Object(c.c)(m.DiscussionEmbed,n))},g=n("7L9N");var O={name:"i9qxj8",styles:".utterances{max-width:100%;}"},v=function(t){function e(e){var n;return(n=t.call(this,e)||this).commentBox=o.a.createRef(),n}Object(g.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this.props.config||{},e={theme:t.theme||"github-light",repo:t.repo,issueTerm:t.issueTerm,label:t.label},n=document.createElement("script");n.setAttribute("src","https://utteranc.es/client.js"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("async",!0),n.setAttribute("theme",e.theme),n.setAttribute("issue-term",e.issueTerm||"pathname"),e.repo&&n.setAttribute("repo",e.repo),e.label&&n.setAttribute("label",e.label),this.commentBox.current.appendChild(n)},n.render=function(){return Object(c.c)(u.b.div,null,Object(c.c)(h.a,{styles:O}),Object(c.c)("div",{ref:this.commentBox}))},e}(r.Component),j=n("TEah"),w=n("1Gva"),x=n("h+ft"),C=function(t){var e=t.previous,n=t.next,r=t.item,o=t.pageContext.locale,i=r.title;if(!e&&!n)return null;var a="";if(e){a=e.title;var u=[];e.parent&&e.parent.localize&&(u=e.parent.localize),a="PhPost"===e.__typename?i+" - "+Object(x.e)("tagline",u,e.tagline,o):"TweetPost"===e.__typename?Object(x.e)("full_text",u,a,o):Object(x.e)("title",u,a,o)}var l="";if(n){l=n.title;var s=[];n.parent&&n.parent.localize&&(s=n.parent.localize),l="PhPost"===n.__typename?i+" - "+Object(x.e)("tagline",s,n.tagline,o):"TweetPost"===n.__typename?Object(x.e)("full_text",s,l,o):Object(x.e)("title",s,l,o)}return Object(c.c)(w.b,{as:"ul",sx:{flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,pt:3,pb:3,fontSize:2}},Object(c.c)("li",null,e&&Object(c.c)(w.d,{as:j.a,to:e.slug,rel:"prev"},"← ",a)),Object(c.c)("li",null,n&&Object(c.c)(w.d,{as:j.a,to:n.slug,rel:"next"},l," →")))},S=n("gnrY"),_=function(t){var e=t.item,n=t.basePath,r=Object(p.a)(),o=e.tags,i=r.disqus,s=r.utterances;return Object(c.c)("footer",{css:Object(a.a)({pt:3,pb:4})},o&&o.length>0&&Object(c.c)(u.b.div,{sx:{display:"flex",flexWrap:"wrap",mb:3,fontSize:2}},o&&o.map((function(t){return Object(c.c)(d.a,{to:Object(l.withPrefix)(Object(b.join)(n||"/","tags/"+f()(t))),key:"tag-"+t},t)}))),Object(c.c)(S.a,{basePath:n}),Object(c.c)(C,t),i&&i.shortname&&Object(c.c)(y,{config:i,item:e}),s&&s.repo&&Object(c.c)(v,{config:s,item:e}))},k=n("yeXd"),P=n("jRwh"),R=n("Vyzz"),F=function(t){return Object(h.c)(u.b.h1,t)},D=n("Fcif"),E=function(t){return Object(c.c)(u.b.p,Object(D.a)({"data-test":"detail-post-date",sx:{color:"textMuted",mb:2}},t))},I=function(t){var e=t.item;return Object(c.c)("article",null,Object(c.c)("header",null,Object(c.c)(E,null,e.date),Object(c.c)(R.a,{post:e}),Object(c.c)(F,{sx:{mb:4,mt:3}},e.title)),Object(c.c)("section",{sx:{fontSize:"1.125rem",img:{maxWidth:"full",margin:"0 auto",display:"block",pb:4}}},Object(c.c)(P.MDXRenderer,null,e.body)))},q=n("9pJi"),A=n("iAWP"),T=function(t){var e=t.item,n=e.url,r=e.datetime,o=e.author,i=e.authorSlug,a=Object(q.a)(e.title);return Object(c.c)(u.b.div,{sx:{maxWidth:"550px",fontSize:2}},Object(c.c)(u.b.blockquote,{className:"twitter-tweet"},Object(c.c)(u.b.p,null,a),Object(c.c)(A.a,{item:e}),"— ",o," (@",i,")"," ",Object(c.c)(w.d,{href:n},r)))},M=function(t){var e=t.item,n=e.url,r=e.title,o=e.channel,i=e.channelUrl;return Object(c.c)("article",null,Object(c.c)(u.b.div,{sx:{"& > blockquote":function(t){return t.styles.blockquote},"& > div > div":{margin:"0 !important"}}},Object(c.c)("blockquote",{className:"reddit-card"},Object(c.c)(w.d,{href:n},r),Object(c.c)("br",null),"from",Object(c.c)(w.d,{href:i}," /r/"+o))))},U=function(t){var e=t.item,n=e.url,r=e.datetime,o=e.author,i=e.thirdPartyId;return Object(c.c)(u.b.root,null,Object(c.c)("div",null,Object(c.c)("div",{className:"hn-card","data-id":i},Object(c.c)(u.b.blockquote,null,Object(c.c)(u.b.p,null,e.title),"— ",o," "," ",Object(c.c)(w.d,{href:n},r)))))},W=function(t){var e=t.item;return Object(c.c)("article",null,Object(c.c)("header",null,Object(c.c)(E,null,e.date),Object(c.c)(R.a,{post:e}),Object(c.c)(F,{sx:{mb:4,mt:3}},e.title)),Object(c.c)("section",{sx:{fontSize:"1.125rem",img:{maxWidth:"full",margin:"0 auto",display:"block",pb:4}}},e.body))},z=function(t){var e=t.item,n=e.thirdPartyId,o=e.title,i=e.excerpt,a=e.url,l=e.author,s=e.authorUrl,f=Object(r.useState)(!0),d=f[0],p=f[1];return Object(c.c)("article",null,Object(c.c)("div",null,d&&Object(c.c)(u.b.blockquote,null,Object(c.c)(w.d,{href:a,sx:{fontSize:2}},o),Object(c.c)("p",null,i),"—",Object(c.c)(w.d,{href:s},l))),Object(c.c)("div",null,Object(c.c)("div",{sx:{position:"relative",pb:"81%"}},Object(c.c)("iframe",{title:o,src:"https://cards.producthunt.com/cards/posts/"+n+"?v=1",width:"100%",height:"100%",sx:{position:"absolute",top:0,left:0},frameBorder:"0",scrolling:"no",allowFullScreen:!0,onLoad:function(){p(!1)}}))))},G=function(t){var e=t.item.url;return Object(r.useEffect)((function(){setTimeout((function(){window.location.replace(e)}),10)}),[e]),Object(c.c)(u.b.root,null,Object(c.c)("div",{sx:{overflowWrap:"break-word",pb:6}},Object(c.c)("span",null,"Opening "),Object(c.c)(w.d,{sx:{fontSize:0},href:e},e)))},B=n("pEMF"),Q=n.n(B),X=function(t){var e=t.item.video;return e&&e.url?Object(c.c)("div",{sx:{pb:0}},Object(c.c)("div",{sx:{position:"relative",pb:"56.25%"}},Object(c.c)(Q.a,{controls:!0,sx:{position:"absolute",top:0,left:0},width:"100%",height:"100%",url:e.url}))):null},N=function(t){var e=t.item,n=e.originalUrl,r=e.author;return Object(c.c)("article",null,Object(c.c)(u.b.div,{sx:{"& > blockquote":function(t){return t.styles.blockquote},"& > div > div":{margin:"0 !important"}}},Object(c.c)("blockquote",{className:"instagram-media","data-instgrm-captioned":!0,"data-instgrm-permalink":n,"data-instgrm-version":13,style:{background:"#FFF",border:0,borderRadius:3,boxShadow:"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",margin:1,maxWidth:540,minWidth:326,padding:0,width:"calc(100% - 2px)"}},Object(c.c)("div",{style:{padding:16}},Object(c.c)("a",{href:n,style:{background:"#FFFFFF",lineHeight:0,padding:"0 0",textAlign:"center",textDecoration:"none",width:"100%"},target:"_blank",rel:"noreferrer"},Object(c.c)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:40,marginRight:14,width:40}}),Object(c.c)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center"}},Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:100}}),Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:60}}))),Object(c.c)("div",{style:{padding:"19% 0"}}),Object(c.c)("div",{style:{display:"block",height:50,margin:"0 auto 12px",width:50}},Object(c.c)("svg",{width:"50px",height:"50px",viewBox:"0 0 60 60",version:"1.1",xmlns:"https://www.w3.org/2000/svg",xmlnsXlink:"https://www.w3.org/1999/xlink"},Object(c.c)("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},Object(c.c)("g",{transform:"translate(-511.000000, -20.000000)",fill:"#000000"},Object(c.c)("g",null,Object(c.c)("path",{d:"M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"})))))),Object(c.c)("div",{style:{paddingTop:8}},Object(c.c)("div",{style:{color:"#3897f0",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:550,lineHeight:18}},"在 Instagram 查看这篇帖子")),Object(c.c)("div",{style:{padding:"12.5% 0"}}),Object(c.c)("div",{style:{display:"flex",flexDirection:"row",marginBottom:14,alignItems:"center"}},Object(c.c)("div",null,Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",height:"12.5px",transform:"rotate(-45deg) translateX(3px) translateY(1px)",width:"12.5px",flexGrow:0,marginRight:14,marginLeft:2}}),Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})),Object(c.c)("div",{style:{marginLeft:8}},Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:"50%",flexGrow:0,height:20,width:20}}),Object(c.c)("div",{style:{width:0,height:0,borderTop:"2px solid transparent",borderLeft:"6px solid #f4f4f4",borderBottom:"2px solid transparent",transform:"translateX(16px) translateY(-4px) rotate(30deg)"}})),Object(c.c)("div",{style:{marginLeft:"auto"}},Object(c.c)("div",{style:{width:0,borderTop:"8px solid #F4F4F4",borderRight:"8px solid transparent",transform:"translateY(16px)"}}),Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",flexGrow:0,height:12,width:16,transform:"translateY(-4px)"}}),Object(c.c)("div",{style:{width:0,height:0,borderTop:"8px solid #F4F4F4",borderLeft:"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}}))),Object(c.c)("div",{style:{display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"center",marginBottom:24}},Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,marginBottom:6,width:224}}),Object(c.c)("div",{style:{backgroundColor:"#F4F4F4",borderRadius:4,flexGrow:0,height:14,width:144}}))),Object(c.c)("p",{style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,lineHeight:17,marginBottom:0,marginTop:8,overflow:"hidden",padding:"8px 0 7px",textAlign:"center",textOverflow:"ellipsis",whiteSpace:"nowrap"}},Object(c.c)("a",{href:n,style:{color:"#c9c8cd",fontFamily:"Arial,sans-serif",fontSize:14,fontStyle:"normal",fontWeight:"normal",lineHeight:17,textDecoration:"none"},target:"_blank",rel:"noreferrer"},"@",r," 分享的帖子"))))))},Y=function(t){var e=t.item;if(e.__typename===k.g){var n=e.provider;return n===k.h?Object(c.c)(T,t):n===k.e?Object(c.c)(M,t):n===k.a?Object(c.c)(U,t):n===k.c?Object(c.c)(z,t):n===k.f?Object(c.c)(G,t):n===k.i?Object(c.c)(X,t):n===k.b?Object(c.c)(N,t):Object(c.c)(W,t)}return e.__typename===k.d?Object(c.c)(I,t):Object(c.c)(W,t)},L=function(t){var e=t.item,n=t.pageContext.locale;return Object(c.c)("div",null,Object(c.c)(u.b.blockquote,{sx:{fontSize:2}},Object(x.c)(e,n)),Object(c.c)(Y,t))},H=n("KP9D"),V=function(t){var e=t.item,n=t.location,r=t.pageContext.locale,o=e.provider,i=e.excerpt,c=e.title,a=[];if(e.parent&&e.parent.localize&&(a=e.parent.localize),o===k.c){var u=c.split(" - ");c=u[0]+" - "+Object(x.e)("tagline",a,e.tagline,r)}else c=o===k.h?Object(x.e)("full_text",a,c,r):Object(x.e)("title",a,c,r);return(i=o===k.e?Object(x.e)("the_new_excerpt",a,e.parent.the_new_excerpt,r):Object(x.e)("description",a,i,r))||(i=c),Object(h.c)("div",null,Object(h.c)(H.a,{title:c,description:i,imageSource:e.imageRemote?e.imageRemote:"",imageAlt:e.imageAlt,pageType:"detail",item:e,location:n}))},J=function(t){var e,n=t.data,r=n.blogPost,o=n.previous,c=n.next,a=n.site.siteMetadata,u=t.location,l=t.pageContext,s=a.title,f=a.menuLinks,d=r,p=(null==d||null===(e=d.fields)||void 0===e?void 0:e.basePath)||"/";return Object(h.c)(i.a,{basePath:p,menuLinks:f,location:u,title:s,pageType:"detail",pageContext:l,siteMetadata:a},Object(h.c)(V,{location:u,pageContext:l,item:d,siteMetadata:a}),Object(h.c)("main",null,Object(h.c)(L,{item:d,pageContext:l,location:u}),Object(h.c)(_,{previous:o,next:c,basePath:p,item:d,pageContext:l})))};e.default=J},Qatm:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},WI9V:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},Zhxd:function(t,e,n){var r=n("+Sw5");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},dduQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=c(n("mXGw")),o=c(n("W0B4")),i=n("EbQ0");function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,o,c=d(a);function a(){return l(this,a),c.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),m.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&s(e.prototype,n),o&&s(e,o),a}(r.default.Component);e.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},enbY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var r=n("jtQP"),o=n("0T8T"),i=n("dduQ"),c={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=c},iNmH:function(t,e,n){var r=n("+Sw5");t.exports=function(t){if(Array.isArray(t))return r(t)}},jRwh:function(t,e,n){var r=n("8lrx");t.exports={MDXRenderer:r}},jtQP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=c(n("mXGw")),o=c(n("W0B4")),i=n("EbQ0");function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,o,c=f(a);function a(){return u(this,a),c.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?b():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&l(e.prototype,n),o&&l(e,o),a}(r.default.Component);e.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},kluZ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(t,e,n){var r=n("WI9V"),o=n("0qAl");function i(e,n,c){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i}}]);
//# sourceMappingURL=component---gatsby-theme-buzzing-src-gatsby-theme-blog-core-templates-post-query-js-d192c613a32ba279f179.js.map