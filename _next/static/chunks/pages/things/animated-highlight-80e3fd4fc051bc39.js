(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{5093:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/things/animated-highlight",function(){return n(681)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,u=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var u,a=(u=n(7294))&&u.__esModule?u:{default:u},s=n(6273),l=n(387),o=n(7190);var c={};function d(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),u=a.default.useMemo((function(){var t=i(s.resolveHref(r,e.href,!0),2),n=t[0],u=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):u||n}}),[r,e.href,e.as]),f=u.href,m=u.as,h=e.children,p=e.replace,v=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,y=i(o.useIntersection({rootMargin:"200px"}),2),j=y[0],q=y[1],_=a.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);a.default.useEffect((function(){var e=q&&n&&s.isLocalURL(f),t="undefined"!==typeof b?b:r&&r.locale,i=c[f+"%"+m+(t?"%"+t:"")];e&&!i&&d(r,f,m,{locale:t})}),[m,f,q,b,n,r]);var w={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,u,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:u,locale:l,scroll:a}))}(e,r,f,m,p,v,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(r,f,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:r&&r.locale,I=r&&r.isLocaleDomain&&s.getDomainLocale(m,E,r&&r.locales,r&&r.domainLocales);w.href=I||s.addBasePath(s.addLocale(m,E,r&&r.defaultLocale))}return a.default.cloneElement(t,w)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,u=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!s,c=u.useRef(),d=i(u.useState(!1),2),f=d[0],m=d[1],h=i(u.useState(t?t.current:null),2),p=h[0],v=h[1],g=u.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=o.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),o.push(n));if(t)return t;var i=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:u,elements:i}),t}(n),i=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(i);var t=o.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&o.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:n}))}),[r,p,n,f]);return u.useEffect((function(){if(!s&&!f){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),u.useEffect((function(){t&&v(t.current)}),[t]),[g,f]};var u=n(7294),a=n(9311),s="undefined"!==typeof IntersectionObserver;var l=new Map,o=[]},7178:function(e,t,n){"use strict";var r=n(5893),i=n(1664),u=n(7175),a=(n(1408),"kng.nz");t.Z=function(e){var t=e.children,n=e.index,s=e.title,l=void 0===s?"kng.nz":s;return(0,r.jsx)(u.Z,{title:l,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("header",{children:n?(0,r.jsx)("h1",{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:a})})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h2",{children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:a})})})})}),(0,r.jsx)("main",{children:t}),!n&&(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/posts",children:(0,r.jsx)("a",{children:"\u2190 Back to posts"})})})]})})}},7175:function(e,t,n){"use strict";var r=n(5893),i=n(9008);t.Z=function(e){var t=e.children,n=e.title,u=void 0===n?"kng.nz":n,a=e.metaDescription,s=void 0===a?"Personal website for a frontend developer":a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:s}),(0,r.jsx)("meta",{name:"og:title",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("title",{children:u})]}),t]})}},681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),i=n(7178),u=n(7294),a=n(2123),s=n.n(a),l=function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add(s().filled)}))},o={root:null,rootMargin:"0px",threshold:1},c=function(e){var t=e.children,n=(0,u.createRef)(),i=(0,u.useState)(1e3),a=i[0],c=i[1];return(0,u.useEffect)((function(){var e,t,r=n.current,i=null!==(t=null===r||void 0===r||null===(e=r.textContent)||void 0===e?void 0:e.length)&&void 0!==t?t:0;c(10*i);var u=new IntersectionObserver(l,o);return r&&u.observe(r),function(){r&&u.unobserve(r)}}),[n]),(0,r.jsx)("span",{ref:n,className:s().highlight,style:{transitionDuration:"".concat(a,"ms")},children:t})},d=n(604),f=n.n(d),m=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"Scroll down"})}),(0,r.jsxs)("div",{className:f().text,children:[(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque libero, consequat quis euismod eu, venenatis et est. Aliquam in mi eu nisl rhoncus ultrices. Phasellus pellentesque lacus felis, quis pellentesque ex hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis nulla id ultricies viverra. Nulla vehicula tristique felis, id efficitur ex consequat non. Phasellus vulputate vehicula condimentum. Etiam consequat nunc lorem, quis dictum nibh cursus vitae. Vestibulum sed luctus dolor. Phasellus posuere, dui a porttitor maximus, lacus dolor aliquet dui, vel luctus eros libero vel dui."}),(0,r.jsxs)("p",{children:["Aliquam enim eros, consectetur id erat sed, commodo fermentum lectus. Mauris tincidunt ante ultrices erat vehicula, eget blandit arcu euismod. Proin massa nunc, ",(0,r.jsx)(c,{children:"hendrerit sollicitudin at"}),", blandit ac lacus. Vivamus elit metus, venenatis non dolor non, blandit fermentum nunc. Nulla vitae varius nunc. Donec quam odio, eleifend eu molestie nec, sollicitudin ac orci. Curabitur nec tellus eleifend, tempus ex nec, bibendum enim. Nullam lacinia justo a ultricies auctor. Ut finibus turpis eget turpis aliquam, nec egestas dolor pharetra. Nam elementum tristique venenatis. Sed sit amet viverra quam, in posuere nibh. Quisque id nunc eget dui dignissim fermentum vitae a elit. Duis id auctor velit. Quisque rutrum eros fringilla lobortis cursus. Duis luctus quis purus in porta."]}),(0,r.jsx)("p",{children:"Pellentesque dignissim ante ac ex auctor consectetur. Pellentesque ac mollis dolor. Suspendisse sollicitudin, tortor vel cursus faucibus, sapien sem tempus nibh, a volutpat leo orci ac nisl. Maecenas lobortis molestie lacus ac ultricies. In tempus tincidunt eros, at convallis risus egestas ut. Duis dapibus bibendum augue. Nunc vestibulum nibh nisi, at varius lacus tempus vel. Cras ante sem, volutpat ac malesuada vitae, facilisis a ligula. In consequat id felis eu sagittis. Integer auctor scelerisque dictum. Pellentesque hendrerit sagittis fermentum. Praesent tempus lorem ut nulla venenatis, vitae porttitor magna commodo. Suspendisse pharetra scelerisque sem eu lacinia."}),(0,r.jsxs)("p",{children:["Aenean pulvinar felis rutrum ornare porttitor. Phasellus in dapibus lectus. Mauris faucibus, lorem non fringilla malesuada, leo dolor fermentum justo, ac vestibulum libero tellus at mauris. Vivamus finibus urna nisi, eget maximus magna dictum pharetra. Nam iaculis sem sit amet dui molestie aliquet. ",(0,r.jsx)(c,{children:"Pellentesque vehicula rhoncus leo"}),", id imperdiet neque sollicitudin ac. Proin iaculis, nibh accumsan sagittis volutpat, turpis quam eleifend ex, non cursus neque leo ut ante. In laoreet malesuada velit vitae sagittis. Donec orci erat, fermentum non dapibus at, suscipit vel lorem. Sed accumsan id purus eu semper. Proin efficitur nunc at erat porttitor posuere. Aliquam posuere posuere lectus non volutpat. Proin congue tincidunt urna, et tristique velit tincidunt vel. Duis auctor congue libero et tempus. Vivamus non commodo erat."]}),(0,r.jsxs)("p",{children:["Sedo non venenatis lectus, vel rutrum lectus. Ut neque tortor, suscipit vel cursus a, placerat bibendum neque. ",(0,r.jsx)(c,{children:"Donec ornare sit amet lectus a accumsan. Vivamus vehicula dui in sem pretium lobortis. In nec orci dignissim augue tincidunt tincidunt. Pellentesque enim felis, venenatis aliquam finibus nec, ultricies sed risus."})," Proin vulputate nisl sit amet ultrices commodo. Nullam fringilla pellentesque nisi, sed cursus augue pharetra sit amet. Nullam auctor risus at risus venenatis venenatis. "]})]})]})};m.getLayout=function(e){return(0,r.jsx)(i.Z,{children:e})};var h=m},2123:function(e){e.exports={highlight:"highlight_highlight__CIjlr",filled:"highlight_filled__JE0GQ"}},604:function(e){e.exports={text:"animated-highlight_text__jNl14"}},1408:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5093,e(e.s=t);var t}));var t=e.O();_N_E=t}]);