(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2c6j":function(e,t,c){"use strict";var r=c("Wbzz"),a=c("Cini"),i=c("1Gva"),n=c("u6UW"),l=c.n(n),o=c("NSuf"),s=c("R8iU"),b=c("cz2p"),u=c("Ntue"),d=(c("aD51"),function(){return Object(a.c)(b.b.h4,null,Object(a.c)(u.a,null,"Tags"))});t.a=function(e){var t=e.basePath,c=e.group;return Object(a.c)(i.a,{"data-test":"tags-container"},Object(a.c)(d,null),Object(a.c)(i.b,{sx:{mb:3,flexWrap:"wrap"}},c.map((function(e,c){var i=e.fieldValue,n=e.totalCount;return Object(a.c)(o.a,{key:"tag-list-"+c,count:n,to:Object(r.withPrefix)(Object(s.join)(t,"/tags/"+l()(i)))},i)}))))}},"3U6x":function(e,t,c){"use strict";var r=c("Cini"),a=c("cz2p");c("aD51");t.a=function(e){var t=e.children;return Object(r.c)(a.b.div,{as:"aside"},t)}},"6nfR":function(e,t,c){"use strict";c.r(t);var r=c("U5Rv"),a=c("zf6M"),i=c("gnrY"),n=c("2c6j"),l=c("clao"),o=c("mXGw"),s=c("yeXd"),b=c("Wbzz"),u=c("Cini"),d=c("1Gva"),m=c("cz2p"),p=c("TEah"),x=c("Ntue"),h=c("aD51"),f=function(e){var t=e.to,c=e.children;return Object(u.c)(d.d,{as:p.a,to:t,sx:{color:"textMuted",fontStyle:"italic","::before":{content:'"#"'},mr:2}},Object(u.c)("span",null,Object(u.c)(x.a,{ns:"translation-tag"},c)))},j=c("u6UW"),g=c.n(j),O=c("Vyzz"),v=c("R8iU"),w=function(e){var t=e.item.excerpt;return t?Object(u.c)(m.b.p,{itemProp:"description","data-test":"item-excerpt",sx:{whiteSpace:"pre-line",mt:0}},t):null},k=function(e){var t=e.to,c=e.children;return Object(u.c)(d.d,{as:p.a,sx:{color:"textMuted",display:"inline-block",flexShrink:0},to:t,"data-test":"item-date"},c)},S=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.date)},y=function(e){var t=e.item;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(S,{item:t}))},M=function(e){var t=e.item,c=t.slug,r=t.title;return Object(u.c)(d.d,{"data-test":"item-title",sx:{color:"text"},as:p.a,to:c},Object(u.c)(m.b.h3,{itemProp:"name",sx:{fontWeight:"normal"}},r))},z=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(O.a,e),r&&Object(u.c)(M,e),Object(u.c)(w,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(y,e))},C=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.datetime)},R=function(e){var t=e.item;return Object(u.c)(d.d,{"data-test":"item-source",sx:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",display:"inline-block",flexShrink:1},href:t.url,target:"_blank",rel:"noopener noreferrer"},Object(u.c)(x.a,null,"View on ",t.provider))},W=function(e){var t=e.item;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(C,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(R,{item:t}))},A=c("5EGp"),I=c.n(A),P=c("y6Mt"),_=function(e){var t=e.name,c=e.screenName,r=e.avatar,a=e.avatarRemote;return t&&c?Object(u.c)(d.b,null,Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/"+c,"data-test":"author-image-container"},null!=r&&r.childImageSharp?Object(u.c)(I.a,{fixed:r.childImageSharp.fixed,alt:t+" avatar",css:Object(P.a)({mr:2,mb:0,width:"48px",minWidth:"48px",borderRadius:"full"})}):Object(u.c)(m.b.img,{alt:t+" avatar",sx:{mr:2,mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},src:a})),Object(u.c)(d.d,{target:"_blank","data-text":"item-author",rel:"noopener noreferrer",href:"https://twitter.com/"+c},Object(u.c)(d.a,{sx:{fontWeight:"bold"}},Object(u.c)(d.g,{itemProp:"author",sx:{color:"text"}},t)),Object(u.c)(d.g,{sx:{color:"textMuted",fontSize:0}},"@",c))):null},L=c("bTM+"),F=function(e){var t=e.to;return Object(u.c)("div",{sx:{flex:1,position:"relative"}},Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",href:t,sx:{position:"absolute",right:0,top:0}},Object(u.c)("svg",{sx:{width:"25px",height:"25px",color:L.a,fill:"currentcolor"},viewBox:"0 0 24 24"},Object(u.c)("g",null,Object(u.c)("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"})))))},T=c("iAWP"),N=function(){return Object(u.c)("div",null,Object(u.c)("svg",{sx:{width:"14px",fill:"currentcolor"},viewBox:"0 0 24 24"},Object(u.c)("g",null,Object(u.c)("path",{d:"M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"}))))},Z=function(e){var t=e.name,c=e.screenName,r=e.avatar,a=e.avatarRemote;return t&&c?Object(u.c)(d.b,{sx:{alignItems:"center"}},Object(u.c)(d.d,{href:"https://twitter.com/"+c,"data-test":"author-image-container"},null!=r&&r.childImageSharp?Object(u.c)(I.a,{fixed:r.childImageSharp.fixed,alt:t+" avatar",css:Object(P.a)({mr:2,mb:-2,width:"20px",minWidth:"20px",borderRadius:"full"})}):Object(u.c)(m.b.img,{alt:t+" avatar",sx:{mr:2,mb:-1,width:"20px",minWidth:"20px",borderRadius:"full"},src:a})),Object(u.c)(d.d,{sx:{display:"flex",alignItems:"center"},href:"https://twitter.com/"+c},Object(u.c)(d.a,{sx:{fontWeight:"bold"}},Object(u.c)(d.g,{sx:{color:"text",mr:1}},t)),Object(u.c)(d.g,{sx:{color:"textMuted",fontSize:0}},"@",c))):null},D=c("9pJi"),G=c("h+ft"),B=function(e){var t=e.item,c=e.pageContext.locale,r=Object(D.a)(Object(G.c)(t,c));return Object(u.c)(d.a,{sx:{fontSize:1,py:2,whiteSpace:"pre-line"}},r)},H=function(e){var t=e.item,c=e.pageContext.locale,r=Object(D.a)(Object(G.b)(t,c));return Object(u.c)(d.a,{sx:{fontSize:1,py:2,whiteSpace:"pre-line"}},r)},U=function(e){var t=e.item,c=t.author,r=t.authorSlug,a=t.authorImage,i=t.authorImageRemote,n=t.sharedContent,l=t.title,s=t.url,b=n&&l.startsWith("RT @"),m=n&&!b;return Object(u.c)(o.Fragment,null,b&&Object(u.c)(d.b,{sx:{color:"textMuted",mb:1,fontSize:0,alignItems:"center"}},Object(u.c)(d.b,{sx:{mr:2,mb:-1,width:"48px",justifyContent:"flex-end"}},Object(u.c)(N,null)),Object(u.c)(d.g,null,"Retweeted")),Object(u.c)(d.b,null,Object(u.c)(_,{name:c,screenName:r,avatar:a,avatarRemote:i}),Object(u.c)(F,{to:s})),Object(u.c)("div",null,Object(u.c)(B,e),Object(u.c)(T.a,{item:t}),m&&Object(u.c)("div",{itemType:"https://schema.org/Quotation",itemScope:!0,sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",mb:2}},Object(u.c)("div",{sx:{p:3}},Object(u.c)(Z,{name:n.author,screenName:n.authorSlug,avatar:n.authorImage,avatarRemote:n.authorImageRemote}),Object(u.c)(H,e)),Object(u.c)(T.a,{item:{image:n.image,imageAlt:"quote image",excerpt:n.title,imageRemote:n.imageRemote}}))))},V=function(e){var t=e.item,c=e.basePath,r=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],py:4}},Object(u.c)(U,e),r&&r.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},r&&r.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(W,e))},E=function(e){var t,c,r,a=e.item;return null!=a&&null!==(t=a.image)&&void 0!==t&&t.childImageSharp||a.imageRemote?Object(u.c)(d.a,{"data-test":"item-hero-container",sx:{py:null!=a&&null!==(c=a.image)&&void 0!==c&&c.childImageSharp||a.imageRemote?2:0,textAlign:"center"}},Object(u.c)(d.d,{href:a.imageRemote},null!=a&&null!==(r=a.image)&&void 0!==r&&r.childImageSharp?Object(u.c)(I.a,{fluid:a.image.childImageSharp.fluid,alt:a.imageAlt?a.imageAlt:a.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}):a.imageRemote&&Object(u.c)(m.b.img,{alt:a.imageAlt,sx:{maxHeight:"lg"},src:a.imageRemote}))):null},Y=function(){return Object(u.c)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",sx:{height:"24px",width:"24px"}},Object(u.c)("g",null,Object(u.c)("circle",{fill:"#FF4500",cx:"10",cy:"10",r:"10"}),Object(u.c)("path",{fill:"#FFF",d:"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"})))},J=function(){return Object(u.c)("svg",{className:"ztLeQJcDYVKbL9h94QtI_",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",sx:{height:"10px",mr:"3px",width:"10px",fill:"textMuted"}},Object(u.c)("g",null,Object(u.c)("path",{d:"M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"})))},Q=["","k","M","G","T","P","E"];var X=function(e){var t=e.item,c=t.channelUrl,r=t.channel,a=t.author,i=t.authorUrl,n=t.originalUrl,l=t.score;return r&&a?Object(u.c)(d.b,{sx:{alignItems:"center",fontSize:0}},Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{mr:2,mt:2,flexShrink:0},href:n,"data-test":"author-image-container"},Object(u.c)(Y,null)),Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"text",flexShrink:0},href:c},"r/"+r),Object(u.c)("span",{sx:{mx:1,color:"textMuted",fontWeight:"bold",flexShrink:0}},"·"),Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},href:i},""+a),Object(u.c)("span",{sx:{display:"inline-block",mx:1,color:"textMuted",fontWeight:"bold",flexShrink:0}},"·"),Object(u.c)(m.b.div,{as:"span",sx:{display:"inline-block",flexShrink:0}},Object(u.c)(J,null)),Object(u.c)(m.b.div,{as:"span",sx:{color:"textMuted",display:"inline-block",flexShrink:0}},""+function(e){var t=Math.log10(e)/3|0;if(0===t)return e;var c=Q[t];return(e/Math.pow(10,3*t)).toFixed(1)+c}(l))):null},$=function(e){var t=e.item,c=e.pageContext.locale,r=t.url;return Object(u.c)(d.d,{sx:{color:"text"},href:r,target:"_blank",rel:"noopener noreferrer"},Object(u.c)(m.b.h3,{sx:{fontSize:2,fontWeight:"medium"}},Object(G.c)(t,c)))},K=function(e){var t=e.item,c=e.pageContext.locale;return Object(u.c)(m.b.p,{sx:{mt:0,whiteSpace:"pre-line"}},Object(G.a)(t,c))},q=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.datetime)},ee=function(){return Object(u.c)("svg",{viewBox:"0 0 24 24",sx:{width:"24px",height:"24px",fill:"textMuted"}},Object(u.c)("g",null,Object(u.c)("path",{d:"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"}),Object(u.c)("path",{d:"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"})))},te=function(e){var t=e.item,c=e.pageContext.locale,r=t.title,a=t.url,i=[];t.parent&&t.parent.localize&&(i=t.parent.localize),r=Object(G.d)("title",i,r,c);var n=function(){navigator.share?navigator.share({title:r,url:t.url}).then((function(){console.log("Thanks for sharing!")})).catch(console.error):console.log("Not support share yet")};return Object(u.c)("footer",{sx:{display:"flex",justifyContent:"space-between"}},Object(u.c)(d.b,null,Object(u.c)(q,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(R,{item:t})),Object(u.c)(d.b,null,Object(u.c)("div",{className:"a2a_kit share-this","data-a2a-title":r,"data-a2a-url":a,role:"button",tabIndex:0,onKeyDown:function(e){13===e.keyCode&&n()},onClick:n,sx:{cursor:"pointer"}},Object(u.c)("a",{className:"share-button",href:"#!"},Object(u.c)(ee,null)))))},ce=c("3d5S"),re=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags,i=t.video;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(X,e),r&&Object(u.c)($,e),Object(u.c)(E,e),Object(u.c)(ce.a,e),i&&i.url&&Object(u.c)("br",null),Object(u.c)(K,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(te,e))},ae=function(e){var t,c,r,a=e.item;return null!=a&&null!==(t=a.image)&&void 0!==t&&t.childImageSharp||a.imageRemote?Object(u.c)(d.a,{sx:{py:null!=a&&null!==(c=a.image)&&void 0!==c&&c.childImageSharp||a.imageRemote?2:0,textAlign:"center"},"data-test":"item-hero-container"},Object(u.c)(d.d,{href:a.imageRemote},null!=a&&null!==(r=a.image)&&void 0!==r&&r.childImageSharp?Object(u.c)(I.a,{fluid:a.image.childImageSharp.fluid,alt:a.imageAlt?a.imageAlt:a.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}):a.imageRemote&&Object(u.c)(m.b.img,{alt:a.imageAlt,sx:{maxHeight:"lg"},src:a.imageRemote}))):null},ie=function(e){var t=e.item.excerpt;return t?Object(u.c)(m.b.p,{"data-test":"item-excerpt",itemProp:"description",sx:{whiteSpace:"pre-line",mt:0}},t):null},ne=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.datetime)},le=function(e){var t=e.item;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(ne,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(R,{item:t}))};var oe=function(e){var t=e.item,c=e.pageContext.locale,r=t.title,a=t.url,i=[];t.parent&&t.parent.localize&&(i=t.parent.localize);var n=Object(G.d)("title",i,r,c),l=a;return Object(u.c)(d.d,{"data-test":"item-title",sx:{color:"text"},href:l},Object(u.c)(m.b.h3,{sx:{fontWeight:"normal",fontSize:"1.15rem"}},n," ",a&&Object(u.c)("span",{sx:{color:"textMuted",fontSize:"0.9rem"}},"(",function(e){return-1!==(e=e.replace(/(https?:\/\/)?(www.)?/i,"")).indexOf("/")?e.split("/")[0]:e}(a),")")))},se=function(e){e.to;return Object(u.c)("svg",{id:"hn-logo",viewBox:"0 0 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet",sx:{height:"24px",width:"24px"}},Object(u.c)("g",null,Object(u.c)("circle",{fill:"#FB651E",cx:"128",cy:"128",r:"128"}),Object(u.c)("path",{d:"M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z",fill:"#FFFFFF"})))},be=["","k","M","G","T","P","E"];var ue=function(e){var t=e.item,c=t.author,r=t.authorUrl,a=t.url,i=t.score;return c?Object(u.c)(d.b,{sx:{alignItems:"center",fontSize:0}},Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{mr:2,mt:2,flexShrink:0},href:a,"data-test":"author-image-container"},Object(u.c)(se,null)),Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer","data-test":"item-author",sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},href:r},""+c),Object(u.c)("span",{sx:{display:"inline-block",mx:1,color:"textMuted",fontWeight:"bold",flexShrink:0}},"·"),Object(u.c)(m.b.div,{as:"span",sx:{display:"inline-block",flexShrink:0}},Object(u.c)(J,null)),Object(u.c)(m.b.div,{as:"span",sx:{color:"textMuted",display:"inline-block",flexShrink:0}},""+function(e){var t=Math.log10(e)/3|0;if(0===t)return e;var c=be[t];return(e/Math.pow(10,3*t)).toFixed(1)+c}(i))):null},de=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(ue,e),Object(u.c)(ae,e),r&&Object(u.c)(oe,e),Object(u.c)(ie,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(le,e))},me=function(e){var t,c,r,a=e.item;return null!=a&&null!==(t=a.image)&&void 0!==t&&t.childImageSharp||a.imageRemote?Object(u.c)(d.a,{sx:{py:null!=a&&null!==(c=a.image)&&void 0!==c&&c.childImageSharp||a.imageRemote?2:0,textAlign:"center"},"data-test":"item-hero-container"},Object(u.c)(d.d,{href:a.imageRemote,"data-test":"item-hero"},null!=a&&null!==(r=a.image)&&void 0!==r&&r.childImageSharp?Object(u.c)(I.a,{"data-test":"item-hero-image",fluid:a.image.childImageSharp.fluid,alt:a.imageAlt?a.imageAlt:a.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}):a.imageRemote&&Object(u.c)(m.b.img,{"data-test":"item-hero-image",alt:a.imageAlt,sx:{maxHeight:"lg"},src:a.imageRemote}))):null},pe=function(){return Object(u.c)("svg",{sx:{width:"24px",height:"24px"},viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg"},Object(u.c)("g",{fill:"none",fillRule:"evenodd"},Object(u.c)("path",{d:"M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20",fill:"#DA552F"}),Object(u.c)("path",{d:"M22.667 20H17v-6h5.667a3 3 0 010 6m0-10H13v20h4v-6h5.667a7 7 0 100-14",fill:"#FFF"})))},xe=function(){return Object(u.c)("svg",{className:"ztLeQJcDYVKbL9h94QtI_",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",sx:{height:"10px",mr:"3px",width:"10px",fill:"textMuted"}},Object(u.c)("g",null,Object(u.c)("path",{d:"M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"})))},he=["","k","M","G","T","P","E"];var fe=function(e){var t=e.item,c=t.author,r=t.authorUrl,a=t.score,i=t.phUrl;return c?Object(u.c)(d.b,{sx:{alignItems:"center",fontSize:0,pb:2}},Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{mr:2,mt:2,flexShrink:0},href:i,"data-test":"author-image-container"},Object(u.c)(pe,null)),Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer","data-test":"item-author",sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},href:r},""+c),Object(u.c)("span",{sx:{display:"inline-block",mx:1,color:"textMuted",fontWeight:"bold",flexShrink:0}},"·"),Object(u.c)(m.b.div,{as:"span",sx:{display:"inline-block",flexShrink:0}},Object(u.c)(xe,null)),Object(u.c)(m.b.div,{as:"span",sx:{color:"textMuted",display:"inline-block",flexShrink:0}},""+function(e){var t=Math.log10(e)/3|0;if(0===t)return e;var c=he[t];return(e/Math.pow(10,3*t)).toFixed(1)+c}(a))):null},je=function(e){var t=e.item,c=e.pageContext.locale,r=t.url;return Object(u.c)(d.d,{sx:{color:"text"},href:r,target:"_blank",rel:"noopener noreferrer"},Object(u.c)(m.b.h3,{sx:{fontWeight:"normal"}},Object(G.c)(t,c)))},ge=function(e){var t=e.item,c=e.pageContext.locale,r=t.excerpt;if(!r)return null;var a=[];t.parent&&t.parent.localize&&(a=t.parent.localize);var i=Object(G.d)("description",a,r,c);return Object(u.c)(m.b.p,{"data-test":"item-excerpt",sx:{whiteSpace:"pre-line",color:"textMuted"}},i)},Oe=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.datetime)},ve=function(e){var t=e.item;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(Oe,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(R,{item:t}))},we=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(fe,e),Object(u.c)(me,e),Object(u.c)(ce.a,e),r&&Object(u.c)(je,e),Object(u.c)(ge,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(ve,e))},ke=function(e){var t,c,r,a=e.item;return null!=a&&null!==(t=a.image)&&void 0!==t&&t.childImageSharp||a.imageRemote?Object(u.c)(d.a,{"data-test":"item-hero-container",sx:{py:null!=a&&null!==(c=a.image)&&void 0!==c&&c.childImageSharp||a.imageRemote?2:0,textAlign:"center"}},Object(u.c)(d.d,{href:a.imageRemote},null!=a&&null!==(r=a.image)&&void 0!==r&&r.childImageSharp?Object(u.c)(I.a,{"data-test":"item-hero",fluid:a.image.childImageSharp.fluid,alt:a.imageAlt?a.imageAlt:a.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}):a.imageRemote&&Object(u.c)(m.b.img,{"data-test":"item-hero",alt:a.imageAlt,sx:{maxHeight:"lg"},src:a.imageRemote}))):null},Se=function(e){var t=e.item.excerpt;return t?Object(u.c)(m.b.p,{itemProp:"description","data-test":"item-excerpt",sx:{whiteSpace:"pre-line",mt:0}},t):null},ye=function(e){var t=e.item;return Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"textMuted",display:"inline-block",flexShrink:0},href:t.url},t.datetime)},Me=function(e){var t=e.item,c=t.channelUrl,r=t.channel;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(ye,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),c?Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},href:c},Object(u.c)(x.a,{ns:"translation-tag"},r)):Object(u.c)("span",{sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"}},Object(u.c)(x.a,{ns:"translation-tag"},r)))},ze=function(e){var t=e.item,c=e.pageContext.locale,r=t.url;return Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"text"},href:r},Object(u.c)(m.b.h3,{sx:{fontWeight:"normal",fontSize:"1.15rem"}},Object(G.c)(t,c)))},Ce=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(ke,e),r&&Object(u.c)(ze,e),Object(u.c)(Se,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(Me,e))},Re=function(){return Object(u.c)("svg",{enableBackground:"new 0 0 1000 1000",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",sx:{width:"24px",height:"24px"}},Object(u.c)("path",{d:"m500 1000c-276.1 0-500-223.9-500-500 0-276.1 223.9-500 500-500 276.1 0 500 223.9 500 500 0 276.1-223.9 500-500 500z",fill:"#FF0000"}),Object(u.c)("path",{d:"m818.2 339.1c-7.6-28.8-30.1-51.4-58.7-59.1-51.8-14-259.4-14-259.4-14s-207.7 0-259.4 14c-28.6 7.7-51.1 30.3-58.7 59.1-14 52.1-14 160.9-14 160.9s0 108.8 13.9 160.9c7.6 28.8 30.1 51.4 58.7 59.1 51.8 14 259.4 14 259.4 14s207.7 0 259.4-14c28.6-7.7 51.1-30.3 58.7-59.1 13.9-52.1 13.9-160.9 13.9-160.9s0-108.8-13.8-160.9zm-386.1 259.6v-197.4l173.5 98.7z",fill:"#fff"}))},We=function(){return Object(u.c)("svg",{viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",sx:{height:"10px",mr:"3px",position:"relative",width:"10px",fill:"textMuted"}},Object(u.c)("g",null,Object(u.c)("path",{d:"M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"})))},Ae=function(){return Object(u.c)("svg",{viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true",sx:{height:"12px",mr:"3px",top:"1px",position:"relative",width:"12px",fill:"textMuted"}},Object(u.c)("path",{fillRule:"evenodd",d:"M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"}))},Ie=["","k","M","G","T","P","E"];function Pe(e){var t=Math.log10(e)/3|0;if(0===t)return e;var c=Ie[t];return(e/Math.pow(10,3*t)).toFixed(1)+c}var _e=function(e){var t=e.item,c=t.author,r=t.channelUrl,a=t.score,i=t.url,n=t.views;return c?Object(u.c)(d.b,{sx:{alignItems:"center",fontSize:0,pb:2}},Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{mr:2,mt:2,flexShrink:0},href:i,"data-test":"author-image-container"},Object(u.c)(Re,null)),Object(u.c)(d.d,{target:"_blank",rel:"noopener noreferrer",sx:{color:"textMuted",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},href:r},""+c),Object(u.c)("span",{sx:{width:"8px"}}),Object(u.c)(m.b.div,{as:"span",sx:{display:"inline-block",flexShrink:0}},Object(u.c)(We,null)),Object(u.c)(m.b.div,{as:"span",sx:{color:"textMuted",display:"inline-block",flexShrink:0}},""+Pe(a)),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(m.b.div,{as:"span",sx:{display:"inline-block",flexShrink:0}},Object(u.c)(Ae,null)),Object(u.c)(m.b.div,{as:"span",sx:{color:"textMuted",display:"inline-block",flexShrink:0}},""+Pe(n))):null},Le=function(e){var t=e.item,c=e.pageContext.locale,r=t.url;return Object(u.c)(d.d,{sx:{color:"text"},href:r},Object(u.c)(m.b.h3,{sx:{fontWeight:"normal",fontSize:"1.15rem"}},Object(G.c)(t,c)))},Fe=c("FoDk"),Te=c.n(Fe);var Ne=function(e){var t=e.item,c=e.pageContext.locale,r=t.excerpt;if(!r)return null;var a,i=r;return a=Object(G.a)(t,c),i=Te()([{regex:/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,fn:function(e,t){return Object(u.c)(d.d,{key:e,href:"https://www.youtube.com/hashtag/"+t[1]},Object(u.c)("span",null," #",t[1]))}},{regex:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,fn:function(e,t){return Object(u.c)(d.d,{key:e,href:""+t[0]},Object(u.c)("span",null," ",t[0]))}}])(a),Object(u.c)(m.b.p,{sx:{whiteSpace:"pre-line",color:"textMuted"}},i)},Ze=function(e){var t=e.item;return Object(u.c)(k,{to:t.slug},t.datetime)},De=function(e){var t=e.item;return Object(u.c)("footer",{sx:{display:"flex"}},Object(u.c)(Ze,{item:t}),Object(u.c)("span",{sx:{color:"textMuted",display:"inline-block",mx:1,flexShrink:0}},"·"),Object(u.c)(R,{item:t}))},Ge=function(e){var t=e.item,c=e.basePath,r=t.title,a=t.tags;return Object(u.c)(d.a,{sx:{borderRadius:"default",overflow:"hidden",wordWrap:"break-word",borderWidth:1,borderStyle:"solid",borderColor:"muted",px:[3,4],pt:3,pb:4}},Object(u.c)(_e,e),Object(u.c)(ce.a,e),r&&Object(u.c)(Le,e),Object(u.c)(Ne,e),a&&a.length>0&&Object(u.c)(m.b.div,{"data-test":"item-tags",sx:{display:"flex",flexWrap:"wrap",pb:3}},a&&a.map((function(e){return Object(u.c)(f,{to:Object(b.withPrefix)(Object(v.join)(c,"tags/"+g()(e))),key:"tag-"+e},e)}))),Object(u.c)(De,e))},Be=function(e){var t=e.item;if(t.__typename===s.f){var c=t.provider;if(c===s.g)return Object(h.c)(V,e);if(c===s.d)return Object(h.c)(re,e);if(c===s.a)return Object(h.c)(de,e);if(c===s.b)return Object(h.c)(we,e);if(c===s.e)return Object(h.c)(Ce,e);if(c===s.h)return Object(h.c)(Ge,e)}return Object(h.c)(z,e)},He=function(e){return Object(u.c)(m.b.div,{as:"article","data-test":"item-container","data-index":e.index,itemScope:!0,itemType:"https://schema.org/Article https://schema.org/itemListElement",sx:{paddingBottom:5}},Object(u.c)(Be,e))},Ue=c("Z6D4");var Ve=c("3U6x"),Ee=c("Y2Vl"),Ye=c("NMOc"),Je=function(e){var t=e.location,c=e.data,o=e.pageContext,s=o.basePath,b=o.pageType,m=c.allBlogPost.nodes,p=c.site.siteMetadata,x=c.tagsGroup.group,h=p.social,f=p.title,j=p.menuLinks;return Object(u.c)(r.a,{basePath:s,location:t,menuLinks:j,title:f,pageType:b,pageContext:o,siteMetadata:p},Object(u.c)(Ee.a,{location:t,pageContext:o,siteMetadata:p}),Object(u.c)(Ue.a,{pageContext:o}),Object(u.c)(d.c,{gap:[null,null,3,4],columns:[1,1,"2fr 1fr"]},Object(u.c)("main",{sx:{minWidth:0}},Object(u.c)("section",{"data-test":"list-container",itemScope:!0,itemType:"https://schema.org/ItemList"},Object(u.c)("link",{href:"https://schema.org/ItemListOrderDescending"}),Object(u.c)("meta",{itemProp:"numberOfItems",content:m.length}),m.map((function(e,t){return Object(u.c)(He,{key:"item-box-"+t,index:t,basePath:s,item:e,pageContext:o})}))),Object(u.c)(Ye.a,{pageContext:o})),Object(u.c)(Ve.a,null,Object(u.c)(i.a,{basePath:s}),Object(u.c)(n.a,{basePath:s,group:x}),Object(u.c)(l.a,{siteMetadata:p,links:h}))),Object(u.c)(a.a,null))};t.default=Je},"9pJi":function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var r=c("XIhL"),a=c.n(r),i=c("Cini"),n=c("1Gva"),l=c("FoDk"),o=c.n(l),s=c("bTM+"),b=(c("aD51"),s.a);function u(e){return o()([{regex:/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,fn:function(e,t){return Object(i.c)(n.d,{sx:{color:b},href:"https://twitter.com/"+t[1],key:e},Object(i.c)("span",null," @",t[1]))}},{regex:/(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,fn:function(e,t){return Object(i.c)(n.d,{sx:{color:b},key:e,href:"https://twitter.com/hashtag/"+t[1]},Object(i.c)("span",null," #",t[1]))}},{regex:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,fn:function(e,t){return Object(i.c)(n.d,{sx:{color:b},key:e,href:""+t[0]},Object(i.c)("span",null," ",t[0]))}},{regex:/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,fn:function(e,t){return Object(i.c)(a.a,{tag:"span",sx:{"> img":{width:"1.2rem",ml:"0.2rem",mr:"0.075rem",mb:"-0.2rem"}},key:e},t[1])}}])(e)}},Vyzz:function(e,t,c){"use strict";var r=c("5EGp"),a=c.n(r),i=c("Cini"),n=c("1Gva");c("aD51");t.a=function(e){var t,c,r=e.item;return Object(i.c)(n.a,{"data-test":"item-hero-container",sx:{py:null!=r&&null!==(t=r.image)&&void 0!==t&&t.childImageSharp?2:0}},(null==r||null===(c=r.image)||void 0===c?void 0:c.childImageSharp)&&Object(i.c)(a.a,{"data-text":"item-hero",itemProp:"image",fluid:r.image.childImageSharp.fluid,alt:r.imageAlt?r.imageAlt:r.excerpt}))}},Y2Vl:function(e,t,c){"use strict";c("mXGw");var r=c("KP9D"),a=c("BJ7Q"),i=c("h+ft"),n=c("aD51");t.a=function(e){var t=e.pageContext,c=e.siteMetadata,l=t.pageType,o=t.tag,s=t.currentPage,b=t.date,u=s,d=Object(i.d)("description",c.localize,c.description,t.locale),m="",p=Object(i.d)("title",c.localize,c.title,t.locale);if("tag"===l){var x=a.a.t("translation-tag__::::__"+o);d=x,m=a.a.t("See all posts about {{tag}} at {{siteTitle}}",{tag:x,siteTitle:p})}else if("issues"===l)d=a.a.t("Weekly Selection"),m=a.a.t("{{siteTitle}} selects the most popular content for you each week",{siteTitle:p});else if("issue"===l){var h=" · "+b;d=a.a.t("Weekly Selection")+"-"+a.a.t("Issue {{issueNumber}}","Issue "+u,{issueNumber:u})+h,m=a.a.t("Click to view Issue {{issueNumber}} of {{siteTitle}}",{siteTitle:p,issueNumber:u})}return Object(n.c)(r.a,{title:d,description:m})}},Z6D4:function(e,t,c){"use strict";var r=c("Cini"),a=c("cz2p"),i=c("1Gva"),n=c("Wbzz"),l=c("TEah"),o=c("Ntue"),s=c("R8iU"),b=c.n(s);c("aD51");t.a=function(e){var t=e.pageContext,c=t.pageType,s=t.tag,u=t.basePath,d=t.currentPage,m=t.date,p=d;if("tag"===c)return Object(r.c)(a.b.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},Object(r.c)(i.d,{sx:{color:"text"},as:l.a,to:Object(n.withPrefix)(u)},Object(r.c)(o.a,null,"All posts")),Object(r.c)("span",{sx:{color:"textMuted"}}," / "),Object(r.c)("span",{sx:{color:"textMuted"}},Object(r.c)(o.a,{ns:"translation-tag"},s)),d>1&&Object(r.c)("span",{sx:{color:"textMuted"}}," / "),d>1&&Object(r.c)("span",{sx:{color:"textMuted"}},Object(r.c)(o.a,{page:d},"page ",{page:p})));var x="Latest",h=u;"issues"!==c&&"issue"!==c||(x="Weekly Selection",h=b.a.join(u,"issues"));var f=p;return Object(r.c)(a.b.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},d>1?Object(r.c)(i.d,{sx:{color:"text"},as:l.a,to:Object(n.withPrefix)(h)},Object(r.c)(o.a,null,x)):Object(r.c)(o.a,null,x),(d>1||"issue"===c)&&Object(r.c)("span",{sx:{color:"textMuted"}}," / "),(d>1||"issue"===c)&&Object(r.c)("span",{sx:{color:"textMuted"}},"issue"===c?Object(r.c)(o.a,{page:d},"Issue ",{issueNumber:f}):Object(r.c)(o.a,{page:d},"page ",{page:p})),"issue"===c?Object(r.c)("span",{sx:{color:"textMuted"}}," · "+m):null)}},"bTM+":function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var r="rgb(27, 149, 224)"},clao:function(e,t,c){"use strict";var r=c("Fcif"),a=c("Cini"),i=c("1Gva"),n=c("cz2p"),l=c("Ntue"),o=(c("aD51"),function(){return Object(a.c)(n.b.h4,null,Object(a.c)(l.a,null,"Links"))});t.a=function(e){var t=e.links;return Object(a.c)(i.a,{"data-test":"links-container"},Object(a.c)(o,null),Object(a.c)(n.b.ul,null,t?t.map((function(e,t){var c={};return e.external&&(c.target="_blank",c.rel="noopener noreferrer"),Object(a.c)("li",{key:"links-"+t},Object(a.c)(i.d,Object(r.a)({},c,{href:e.url}),e.name))})):null))}},iAWP:function(e,t,c){"use strict";var r=c("5EGp"),a=c.n(r),i=c("Cini"),n=c("1Gva"),l=c("cz2p");c("aD51");t.a=function(e){var t,c,r,o=e.item;return null!=o&&null!==(t=o.image)&&void 0!==t&&t.childImageSharp||o.imageRemote?Object(i.c)(n.a,{"data-test":"item-hero-container",sx:{py:null!=o&&null!==(c=o.image)&&void 0!==c&&c.childImageSharp||o.imageRemote?2:0,textAlign:"center"}},Object(i.c)(n.d,{href:o.imageRemote},null!=o&&null!==(r=o.image)&&void 0!==r&&r.childImageSharp?Object(i.c)(a.a,{fluid:o.image.childImageSharp.fluid,alt:o.imageAlt?o.imageAlt:o.excerpt,sx:{maxHeight:"lg"},imgStyle:{objectFit:"contain"}}):o.imageRemote&&Object(i.c)(l.b.img,{alt:o.imageAlt,sx:{maxHeight:"lg"},src:o.imageRemote}))):null}},yeXd:function(e,t,c){"use strict";c.d(t,"g",(function(){return r})),c.d(t,"d",(function(){return a})),c.d(t,"a",(function(){return i})),c.d(t,"b",(function(){return n})),c.d(t,"e",(function(){return l})),c.d(t,"h",(function(){return o})),c.d(t,"f",(function(){return s})),c.d(t,"c",(function(){return b}));var r="Twitter",a="Reddit",i="Hacker News",n="Product Hunt",l="Google News",o="Youtube",s="SocialMediaPost",b="MdxBlogPost"},zf6M:function(e,t,c){"use strict";c("mXGw");var r=c("y6Mt"),a=c("1Gva"),i=c("aD51");t.a=function(){return Object(i.c)("footer",{css:Object(r.a)({mt:4,pt:3,textAlign:"center"})},"© ",(new Date).getFullYear(),Object(i.c)(a.d,{sx:{ml:4,mr:2},"data-test":"main-site-link",href:"https://www.buzzing.cc"},"Buzzing.cc"),Object(i.c)(a.d,{sx:{mx:2,color:"textMuted"},"data-test":"privacy-link",href:"https://www.buzzing.cc/privacy"},"Privacy"),Object(i.c)(a.d,{sx:{mx:2,color:"textMuted"},"data-test":"terms-link",href:"https://www.buzzing.cc/terms"},"Terms of Service")," ")}}}]);
//# sourceMappingURL=component---gatsby-theme-buzzing-src-gatsby-theme-timeline-templates-posts-query-js-32313f794c6c8cb62a04.js.map