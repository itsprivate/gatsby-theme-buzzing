(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+I+c":function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,"a",(function(){return r}))},KP9D:function(t,e,n){"use strict";var r=n("mK0O"),a=(n("mXGw"),n("Hrl7")),i=n("Wbzz"),c=n("TEah"),o=n("ghLh"),l=n.n(o),u=n("h+ft"),s=n("aD51");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,p=t.imageSource,f=t.imageAlt,g=t.location,h=t.pageType,m=t.item,b=Object(i.useStaticQuery)("1684688348"),O=b.site,j=b.avatar,v=Object(c.b)().locale,y=Object(u.d)("description",O.siteMetadata.localize,O.siteMetadata.description,v),w=e||y,z=O.siteMetadata.telegram,x=Object(u.d)("author",O.siteMetadata.localize,O.siteMetadata.author,v),P=O.siteMetadata.siteUrl,T=Object(u.d)("keywords",O.siteMetadata.localize,O.siteMetadata.keywords,v),_=j.childImageSharp.fixed.src,k=function(t){return t.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?t:l()(P,Object(i.withPrefix)(t))},D=p?k(p):null,M=f||w,S=Object(u.d)("title",O.siteMetadata.localize,O.siteMetadata.title,v),E=o+" - "+S,I={"@type":"Person",name:x},L={"@type":"ImageObject",url:k(_),"@id":l()(P,Object(i.withPrefix)("#logo")),caption:S+" Logo"},A=[{"@context":"http://schema.org","@type":"WebSite","@id":l()(P,Object(i.withPrefix)("#website")),url:Object(i.withPrefix)(P),name:S,image:L}];if("detail"===h){var W=l()(P,g.pathname),$=new Date(m.date);A.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":W,name:o,image:D}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:W,name:o,headline:o,image:{"@type":"ImageObject",url:D},author:I,publisher:d(d({},I),{},{"@type":"Organization",logo:L}),datePublished:$,description:w})}return Object(s.c)(a.b,{htmlAttributes:{lang:n||v},title:E,meta:[{name:"description",content:w},{name:"keywords",content:T.join(",")},{property:"og:title",content:o},{property:"og:description",content:w},{property:"og:type",content:"website"},{name:"twitter:creator",content:x},{name:"twitter:title",content:o},{name:"twitter:description",content:w}].concat(p?[{name:"og:image",content:D},{name:"og:image:alt",content:M},{name:"twitter:image",content:D},{name:"twitter:image:alt",content:M},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(z?[{name:"telegram:channel",content:z}]:[]).concat(r)},Object(s.c)("script",{type:"application/ld+json"},JSON.stringify(A)))}f.defaultProps={meta:[]},e.a=f},TEah:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return o.a}));n("QgHz");var r=n("Fcif"),a=n("+I+c"),i=(n("mXGw"),n("Wbzz")),c=n("nmF5"),o=n("1sD9"),l=n("aD51"),u=function(t){var e=t.to,n=t.language,u=Object(a.a)(t,["to","language"]),s=Object(o.a)(),p=s.defaultLang,d=s.locale,f=n||d;return Object(l.c)(i.Link,Object(r.a)({},u,{to:Object(c.localizedPath)(p,f,e)}))};n("JF+v")},dTlI:function(t,e){e.kebabToSnakeCase=function(t){return t.replace(/-/g,"_")};var n=function(t,e,n,r){void 0===r&&(r="zh");var a=n;if(e&&Array.isArray(e))for(var i=0;i<e.length;i++){var c=e[i];if(r===c.locale&&c[t])return a=c[t]}return a};e.t=n;e.getTitle=function(t,e){void 0===e&&(e="zh");var r=t.title,a=[];t.parent&&t.parent.localize&&(a=t.parent.localize);var i=t.provider;if("Product Hunt"===i){var c=r.split(" - "),o=c[0],l=c[1];r=o+" - "+n("tagline",a,l,e)}else if("Twitter"===i){var u=t.sharedContent,s="full_text";u&&u.title&&r.startsWith("RT @")&&(s="retweeted_status_full_text",r=u.title),r=n(s,a,r,e)}else r=n("title",a,r,e);return r};e.getSharedTitle=function(t,e){void 0===e&&(e="zh");var r=t.sharedContent;if(!r||!r.title)return null;var a=r.title,i=[];return t.parent&&t.parent.localize&&(i=t.parent.localize),a=n("quoted_status_full_text",i,a,e)};e.getExcerpt=function(t,e){void 0===e&&(e="zh");var r=t.excerpt,a=[];t.parent&&t.parent.localize&&(a=t.parent.localize);var i=t.provider;return r=n("Product Hunt"===i||"Youtube"===i?"description":"Reddit"===i?"the_new_excerpt":"excerpt",a,r,e)}},dgWG:function(t,e,n){"use strict";n.r(e);var r=n("Wbzz"),a=n("mXGw"),i=n.n(a),c=n("KP9D"),o=n("aD51");e.default=function(){return Object(o.c)(i.a.Fragment,null,Object(o.c)(c.a,{title:"404: Not found"}),Object(o.c)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},Object(o.c)("div",null,Object(o.c)("h1",null,"NOT FOUND"),Object(o.c)("p",null,"You just hit a route that doesn't exist... Please visit "," ",Object(o.c)(r.Link,{to:"/",className:"link-style"},"Homepage")))))}},ghLh:function(t,e,n){var r,a,i;i=function(){function t(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var a=t[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<t.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),e.push(a))}var i=e.join("/"),c=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=c.shift()+(c.length>0?"?":"")+c.join("&")}return function(){return t("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=i():void 0===(a="function"==typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=a)},"h+ft":function(t,e,n){"use strict";var r=n("dTlI");n.d(e,"d",(function(){return r.t})),n.d(e,"c",(function(){return r.getTitle})),n.d(e,"a",(function(){return r.getExcerpt})),n.d(e,"b",(function(){return r.getSharedTitle}))}}]);
//# sourceMappingURL=component---gatsby-theme-buzzing-src-pages-404-js-dc13defa6862f1ff0664.js.map