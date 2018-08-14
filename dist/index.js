module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var r=e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};e.stripBasename=function(t,e){return r(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var a=e.indexOf("?");return-1!==a&&(n=e.substr(a),e=e.substr(0,a)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.locationsAreEqual=e.createLocation=void 0;var r=i(n(12)),o=i(n(13)),a=n(0);function i(t){return t&&t.__esModule?t:{default:t}}var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.createLocation=function(t,e,n,o){var i=void 0;"string"==typeof t?(i=(0,a.parsePath)(t)).state=e:(void 0===(i=u({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==e&&void 0===i.state&&(i.state=e));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(i.key=n),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=(0,r.default)(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,o.default)(t.state,e.state)}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.history=e.resolve=e.navigate=e.listen=e.current=e.setRoutes=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(t){return t&&t.__esModule?t:{default:t}}(n(10)),a=n(11);var i=[],u={},c=(0,a.createBrowserHistory)();function s(){for(var t=0;t<i.length;t++){var e=i[t].path.exec(c.location.pathname);if(e)return r({},i[t],{path:c.location.pathname,params:f(i[t],e)})}return null}function f(t,e){var n={};return t.params.forEach(function(t,r){return n[t.name]=e[r+1]}),n}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=u[t];return n?n.resolve(r({},n.nullParams,e)):t}e.setRoutes=function(t){i=[],u={},t.forEach(function(t){var e=function(t){var e=[],n={},a=t.path?t.path.toString():"/:path*",i=(0,o.default)(a,e),u=o.default.compile(a);return e.forEach(function(t){return t.optional||(n[t.name]="null")}),r({},t,{path:i,resolve:u,params:e,nullParams:n})}(t);i.push(e),u[e.name]||(u[e.name]=e)})},e.current=s,e.listen=function(t){c.listen(function(){return t(s())})},e.navigate=function(t,e){var n=l(t,e);c.location.pathname!==n&&c.push(n)},e.resolve=l,e.history=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(n(2));e.default=function(){var t=null,e=[];return{setPrompt:function(e){return(0,r.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,a){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,a):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),a(!0)):a(!1!==i)}else a(!0)},appendListener:function(t){var n=!0,r=function(){n&&t.apply(void 0,arguments)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,n)})}}}},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,a,i,u){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,u],f=0;(c=new Error(e.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.history=e.navigate=e.Link=e.Router=void 0;var r=i(n(9)),o=i(n(17)),a=n(3);function i(t){return t&&t.__esModule?t:{default:t}}e.Router=o.default,e.Link=r.default,e.navigate=a.navigate,e.history=a.history},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(n(5)),a=n(3);function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,u=Array(o),c=0;c<o;c++)u[c]=arguments[c];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.onClick=function(t){t.preventDefault(),(0,a.navigate)(r.props.to,r.props)},i(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.PureComponent),r(e,[{key:"render",value:function(){return o.default.createElement("a",{href:(0,a.resolve)(this.props.to,this.props),onClick:this.onClick},this.props.children)}}]),e}();e.default=u},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=p,t.exports.parse=u,t.exports.compile=function(t,e){return c(u(t,e))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=d;var o="/",a="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function u(t,e){for(var n,r=[],u=0,c=0,l="",d=e&&e.delimiter||o,p=e&&e.delimiters||a,h=!1;null!==(n=i.exec(t));){var v=n[0],y=n[1],m=n.index;if(l+=t.slice(c,m),c=m+v.length,y)l+=y[1],h=!0;else{var g="",b=t[c],w=n[2],P=n[3],O=n[4],x=n[5];if(!h&&l.length){var E=l.length-1;p.indexOf(l[E])>-1&&(g=l[E],l=l.slice(0,E))}l&&(r.push(l),l="",h=!1);var S=""!==g&&void 0!==b&&b!==g,_="+"===x||"*"===x,j="?"===x||"*"===x,L=g||d,k=P||O;r.push({name:w||u++,prefix:g,delimiter:L,optional:j,repeat:_,partial:S,pattern:k?f(k):"[^"+s(L)+"]+?"})}}return(l||c<t.length)&&r.push(l+t.substr(c)),r}function c(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===r(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=r&&r.encode||encodeURIComponent,i=0;i<t.length;i++){var u=t[i];if("string"!=typeof u){var c,s=n?n[u.name]:void 0;if(Array.isArray(s)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===s.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(c=a(s[f],u),!e[i].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===f?u.prefix:u.delimiter)+c}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(c=a(String(s),u),!e[i].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function f(t){return t.replace(/([=!:$/()])/g,"\\$1")}function l(t){return t&&t.sensitive?"":"i"}function d(t,e,n){for(var r=(n=n||{}).strict,i=!1!==n.end,u=s(n.delimiter||o),c=n.delimiters||a,f=[].concat(n.endsWith||[]).map(s).concat("$").join("|"),d="",p=0===t.length,h=0;h<t.length;h++){var v=t[h];if("string"==typeof v)d+=s(v),p=h===t.length-1&&c.indexOf(v[v.length-1])>-1;else{var y=s(v.prefix),m=v.repeat?"(?:"+v.pattern+")(?:"+y+"(?:"+v.pattern+"))*":v.pattern;e&&e.push(v),v.optional?v.partial?d+=y+"("+m+")?":d+="(?:"+y+"("+m+"))?":d+=y+"("+m+")"}}return i?(r||(d+="(?:"+u+")?"),d+="$"===f?"$":"(?="+f+")"):(r||(d+="(?:"+u+"(?="+f+"))?"),p||(d+="(?="+u+"|"+f+")")),new RegExp("^"+d,l(n))}function p(t,e,n){return t instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,e):Array.isArray(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(p(t[o],e,n).source);return new RegExp("(?:"+r.join("|")+")",l(n))}(t,e,n):function(t,e,n){return d(u(t,n),e,n)}(t,e,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createPath=e.parsePath=e.locationsAreEqual=e.createLocation=e.createMemoryHistory=e.createHashHistory=e.createBrowserHistory=void 0;var r=n(1);Object.defineProperty(e,"createLocation",{enumerable:!0,get:function(){return r.createLocation}}),Object.defineProperty(e,"locationsAreEqual",{enumerable:!0,get:function(){return r.locationsAreEqual}});var o=n(0);Object.defineProperty(e,"parsePath",{enumerable:!0,get:function(){return o.parsePath}}),Object.defineProperty(e,"createPath",{enumerable:!0,get:function(){return o.createPath}});var a=c(n(14)),i=c(n(15)),u=c(n(16));function c(t){return t&&t.__esModule?t:{default:t}}e.createBrowserHistory=a.default,e.createHashHistory=i.default,e.createMemoryHistory=u.default},function(t,e,n){"use strict";function r(t){return"/"===t.charAt(0)}function o(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t&&t.split("/")||[],a=e&&e.split("/")||[],i=t&&r(t),u=e&&r(e),c=i||u;if(t&&r(t)?a=n:n.length&&(a.pop(),a=a.concat(n)),!a.length)return"/";var s=void 0;if(a.length){var f=a[a.length-1];s="."===f||".."===f||""===f}else s=!1;for(var l=0,d=a.length;d>=0;d--){var p=a[d];"."===p?o(a,d):".."===p?(o(a,d),l++):l&&(o(a,d),l--)}if(!c)for(;l--;l)a.unshift("..");!c||""===a[0]||a[0]&&r(a[0])||a.unshift("");var h=a.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t)};e.default=function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,r){return t(e,n[r])});var r=void 0===e?"undefined":o(e);if(r!==(void 0===n?"undefined":o(n)))return!1;if("object"===r){var a=e.valueOf(),i=n.valueOf();if(a!==e||i!==n)return t(a,i);var u=Object.keys(e),c=Object.keys(n);return u.length===c.length&&u.every(function(r){return t(e[r],n[r])})}return!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=f(n(2)),a=f(n(6)),i=n(1),u=n(0),c=f(n(4)),s=n(7);function f(t){return t&&t.__esModule?t:{default:t}}var l="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t)},d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},p=function(){try{return window.history.state||{}}catch(t){return{}}};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(s.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,s.supportsHistory)(),r=!(0,s.supportsPopStateOnHashChange)(),f=t.forceRefresh,h=void 0!==f&&f,v=t.getUserConfirmation,y=void 0===v?s.getConfirmation:v,m=t.keyLength,g=void 0===m?6:m,b=t.basename?(0,u.stripTrailingSlash)((0,u.addLeadingSlash)(t.basename)):"",w=function(t){var e=t||{},n=e.key,r=e.state,a=window.location,c=a.pathname+a.search+a.hash;return(0,o.default)(!b||(0,u.hasBasename)(c,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+c+'" to begin with "'+b+'".'),b&&(c=(0,u.stripBasename)(c,b)),(0,i.createLocation)(c,r,n)},P=function(){return Math.random().toString(36).substr(2,g)},O=(0,c.default)(),x=function(t){d(U,t),U.length=e.length,O.notifyListeners(U.location,U.action)},E=function(t){(0,s.isExtraneousPopstateEvent)(t)||j(w(t.state))},S=function(){j(w(p()))},_=!1,j=function(t){_?(_=!1,x()):O.confirmTransitionTo(t,"POP",y,function(e){e?x({action:"POP",location:t}):L(t)})},L=function(t){var e=U.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(_=!0,T(o))},k=w(p()),M=[k.key],A=function(t){return b+(0,u.createPath)(t)},T=function(t){e.go(t)},H=0,R=function(t){1===(H+=t)?((0,s.addEventListener)(window,"popstate",E),r&&(0,s.addEventListener)(window,"hashchange",S)):0===H&&((0,s.removeEventListener)(window,"popstate",E),r&&(0,s.removeEventListener)(window,"hashchange",S))},C=!1,U={length:e.length,action:"POP",location:k,createHref:A,push:function(t,r){(0,o.default)(!("object"===(void 0===t?"undefined":l(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,i.createLocation)(t,r,P(),U.location);O.confirmTransitionTo(a,"PUSH",y,function(t){if(t){var r=A(a),i=a.key,u=a.state;if(n)if(e.pushState({key:i,state:u},null,r),h)window.location.href=r;else{var c=M.indexOf(U.location.key),s=M.slice(0,-1===c?0:c+1);s.push(a.key),M=s,x({action:"PUSH",location:a})}else(0,o.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,r){(0,o.default)(!("object"===(void 0===t?"undefined":l(t))&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,i.createLocation)(t,r,P(),U.location);O.confirmTransitionTo(a,"REPLACE",y,function(t){if(t){var r=A(a),i=a.key,u=a.state;if(n)if(e.replaceState({key:i,state:u},null,r),h)window.location.replace(r);else{var c=M.indexOf(U.location.key);-1!==c&&(M[c]=a.key),x({action:"REPLACE",location:a})}else(0,o.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:T,goBack:function(){return T(-1)},goForward:function(){return T(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=O.setPrompt(t);return C||(R(1),C=!0),function(){return C&&(C=!1,R(-1)),e()}},listen:function(t){var e=O.appendListener(t);return R(1),function(){R(-1),e()}}};return U}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(2)),o=s(n(6)),a=n(1),i=n(0),u=s(n(4)),c=n(7);function s(t){return t&&t.__esModule?t:{default:t}}var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+(0,i.stripLeadingSlash)(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:i.stripLeadingSlash,decodePath:i.addLeadingSlash},slash:{encodePath:i.addLeadingSlash,decodePath:i.addLeadingSlash}},d=function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},p=function(t){var e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.default)(c.canUseDOM,"Hash history needs a DOM");var e=window.history,n=(0,c.supportsGoWithoutReloadUsingHash)(),s=t.getUserConfirmation,h=void 0===s?c.getConfirmation:s,v=t.hashType,y=void 0===v?"slash":v,m=t.basename?(0,i.stripTrailingSlash)((0,i.addLeadingSlash)(t.basename)):"",g=l[y],b=g.encodePath,w=g.decodePath,P=function(){var t=w(d());return(0,r.default)(!m||(0,i.hasBasename)(t,m),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+m+'".'),m&&(t=(0,i.stripBasename)(t,m)),(0,a.createLocation)(t)},O=(0,u.default)(),x=function(t){f(B,t),B.length=e.length,O.notifyListeners(B.location,B.action)},E=!1,S=null,_=function(){var t=d(),e=b(t);if(t!==e)p(e);else{var n=P(),r=B.location;if(!E&&(0,a.locationsAreEqual)(r,n))return;if(S===(0,i.createPath)(n))return;S=null,j(n)}},j=function(t){E?(E=!1,x()):O.confirmTransitionTo(t,"POP",h,function(e){e?x({action:"POP",location:t}):L(t)})},L=function(t){var e=B.location,n=T.lastIndexOf((0,i.createPath)(e));-1===n&&(n=0);var r=T.lastIndexOf((0,i.createPath)(t));-1===r&&(r=0);var o=n-r;o&&(E=!0,H(o))},k=d(),M=b(k);k!==M&&p(M);var A=P(),T=[(0,i.createPath)(A)],H=function(t){(0,r.default)(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)},R=0,C=function(t){1===(R+=t)?(0,c.addEventListener)(window,"hashchange",_):0===R&&(0,c.removeEventListener)(window,"hashchange",_)},U=!1,B={length:e.length,action:"POP",location:A,createHref:function(t){return"#"+b(m+(0,i.createPath)(t))},push:function(t,e){(0,r.default)(void 0===e,"Hash history cannot push state; it is ignored");var n=(0,a.createLocation)(t,void 0,void 0,B.location);O.confirmTransitionTo(n,"PUSH",h,function(t){if(t){var e=(0,i.createPath)(n),o=b(m+e);if(d()!==o){S=e,function(t){window.location.hash=t}(o);var a=T.lastIndexOf((0,i.createPath)(B.location)),u=T.slice(0,-1===a?0:a+1);u.push(e),T=u,x({action:"PUSH",location:n})}else(0,r.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),x()}})},replace:function(t,e){(0,r.default)(void 0===e,"Hash history cannot replace state; it is ignored");var n=(0,a.createLocation)(t,void 0,void 0,B.location);O.confirmTransitionTo(n,"REPLACE",h,function(t){if(t){var e=(0,i.createPath)(n),r=b(m+e);d()!==r&&(S=e,p(r));var o=T.indexOf((0,i.createPath)(B.location));-1!==o&&(T[o]=e),x({action:"REPLACE",location:n})}})},go:H,goBack:function(){return H(-1)},goForward:function(){return H(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=O.setPrompt(t);return U||(C(1),U=!0),function(){return U&&(U=!1,C(-1)),e()}},listen:function(t){var e=O.appendListener(t);return C(1),function(){C(-1),e()}}};return B}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=c(n(2)),a=n(0),i=n(1),u=c(n(4));function c(t){return t&&t.__esModule?t:{default:t}}var s="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t)},f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l=function(t,e,n){return Math.min(Math.max(t,e),n)};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getUserConfirmation,n=t.initialEntries,r=void 0===n?["/"]:n,c=t.initialIndex,d=void 0===c?0:c,p=t.keyLength,h=void 0===p?6:p,v=(0,u.default)(),y=function(t){f(O,t),O.length=O.entries.length,v.notifyListeners(O.location,O.action)},m=function(){return Math.random().toString(36).substr(2,h)},g=l(d,0,r.length-1),b=r.map(function(t){return"string"==typeof t?(0,i.createLocation)(t,void 0,m()):(0,i.createLocation)(t,void 0,t.key||m())}),w=a.createPath,P=function(t){var n=l(O.index+t,0,O.entries.length-1),r=O.entries[n];v.confirmTransitionTo(r,"POP",e,function(t){t?y({action:"POP",location:r,index:n}):y()})},O={length:b.length,action:"POP",location:b[g],index:g,entries:b,createHref:w,push:function(t,n){(0,o.default)(!("object"===(void 0===t?"undefined":s(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r=(0,i.createLocation)(t,n,m(),O.location);v.confirmTransitionTo(r,"PUSH",e,function(t){if(t){var e=O.index+1,n=O.entries.slice(0);n.length>e?n.splice(e,n.length-e,r):n.push(r),y({action:"PUSH",location:r,index:e,entries:n})}})},replace:function(t,n){(0,o.default)(!("object"===(void 0===t?"undefined":s(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r=(0,i.createLocation)(t,n,m(),O.location);v.confirmTransitionTo(r,"REPLACE",e,function(t){t&&(O.entries[O.index]=r,y({action:"REPLACE",location:r}))})},go:P,goBack:function(){return P(-1)},goForward:function(){return P(1)},canGo:function(t){var e=O.index+t;return e>=0&&e<O.entries.length},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return v.setPrompt(t)},listen:function(t){return v.appendListener(t)}};return O}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(t){return t&&t.__esModule?t:{default:t}}(n(5)),a=n(3);var i=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.getRouteProp=function(){return{name:n.state.route.name,path:n.state.route.path,params:n.state.route.params}},(0,a.setRoutes)(t.routes),n.state={route:(0,a.current)()},n.unlisten=(0,a.listen)(function(t){return n.setState({route:t})}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.PureComponent),r(e,[{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"render",value:function(){return this.state.route?o.default.createElement(this.state.route.component,{route:this.getRouteProp()}):null}}]),e}();e.default=i}]);