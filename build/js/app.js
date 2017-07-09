/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
$(document).ready(function() {

;(function(win,doc,callback){'use strict';callback=callback||function(){};function detach(){if(doc.addEventListener){doc.removeEventListener('DOMContentLoaded',completed);}else{doc.detachEvent('onreadystatechange',completed);}}function completed(){if(doc.addEventListener||event.type==='load'||doc.readyState==='complete'){detach();callback(window,window.jQuery);}}function init(){if (doc.addEventListener){doc.addEventListener('DOMContentLoaded',completed);}else{doc.attachEvent('onreadystatechange',completed);}}init();})(window,document,function(win,$){
	$(document).ready(function() {
	
	
	//replace here
	
		;(function($) {

	'use strict';

	var
		ua = navigator.userAgent,
		div = document.createElement('div'),

		ie = ua.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),

		prefix = ['Webkit', 'Moz', 'O'],
		transition = 'transition',
		transform = 'transform',
		requestanimationframe = 'requestAnimationFrame',
		cancelanimationframe = 'CancelAnimationFrame',

		transforms = {
			translate3d: 'translate3d(0px, 0px, 0px)',
			translate: 'translate(0px, 0px)',
			scale3d: 'scale3d(1, 1, 1)',
			scale: 'scale(1, 1)'
		},

		browser = $.browser,
		support = $.support,
		version, i;


	if ( !browser ) {
		$.browser = browser = {};
	}
	browser.local = !(/^http:\/\//).test(location.href);
	browser.firefox = (/firefox/i).test(ua);
	browser.webkit = (/applewebkit/i).test(ua);
	browser.chrome = (/chrome/i).test(ua);
	browser.opera = (/opera/i).test(ua);
	browser.ios = (/ip(ad|hone|od)/i).test(ua);
	browser.android = (/android/i).test(ua);
	browser.safari = browser.webkit && !browser.chrome;

	support.touch = browser.ios || browser.android || (document.ontouchstart !== undefined && document.ontouchstart !== null);
	browser.mobile = support.touch && ( browser.ios || browser.android );

	for ( i in browser ) {
		if( !browser[i] ) {
			delete browser[i];
		}
	}
	browser.os = (navigator.appVersion).match(/(mac|win|linux)/i);
	browser.os = ( browser.os )? browser.os[1].toLowerCase() : '';
	
	if ( browser.ios || browser.android ) {
		version = ua.match(/applewebkit\/([0-9.]+)/i);
		if ( version && version.length > 1 ) {
			browser.webkitversion = version[1];
		}
		if ( browser.ios ) {
			version = ua.match(/version\/([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.ios = version[1];
			}
		} else if ( browser.android ) {
			version = ua.match(/android ([0-9.]+)/i);
			if ( version && version.length > 1 ) {
				browser.android = parseInt(version[1].replace(/\./g, ''));
			}
		}
	}

	support.svgimage = true;
	support.pointerevents = true;
	if ( ie ) {
		browser.ie = ie = parseInt( ie[1] || ie[2] );
		if ( 9 > ie ) {
			browser.oldie = true;
		} else if ( 9 == ie ) {
			prefix.push('ms');
		}
		if ( 11 > ie ) {
			support.pointerevents = false;
		}
		if ( 9 > ie ) {
			support.svgimage = false;
		}
	}

	support.pushstate = !!history.pushState;
	support.mediaquery = typeof(window.matchMedia) == 'function' || !browser.oldie;
	support.video = document.createElement('video').canPlayType !== undefined;
	support.backgroundsize = 'backgroundSize' in div.style;
	if ( support.backgroundsize ) {
		div.style.backgroundSize = 'cover';
		support.backgroundsize = div.style.backgroundSize == 'cover';
	}
	try {
		div.style.background = 'rgba(0, 0, 0, 0)';
		support.rgba = div.style.background == 'rgba(0, 0, 0, 0)';
	} catch(e) {
		support.rgba = false;
	}
	support.canvas = document.createElement('canvas');
	support.canvas = support.canvas.getContext && support.canvas.getContext('2d');

	if ( div.style[transform] != undefined ) {
		support.transform = transform;
	} else {
		transform = 'Transform';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transform] !== undefined ) {
				support.transform = prefix[i]+transform;
				break;
			}
		}
	}
	if ( support.transform ) {
		transform = support.transform;
		for ( i in transforms ) {
			div.style[transform] = '';
			div.style[transform] = transforms[i];
			support[i] = div.style[transform];
		}
		if ( browser.ie && 10 > browser.ie ) {
		}
		if ( browser.android && 430 > browser.android ) {
		}
	}
	if ( div.style[transition] != undefined ) {
		support.transition = transition;
	} else {
		transition = 'Transition';
		for ( i = 0; i < 4; i++ ) {
			if ( div.style[prefix[i]+transition] !== undefined ) {
				support.transition = prefix[i]+transition;
				break;
			}
		}
	}
	if ( window[requestanimationframe] ) {
		support.requestanimationframe = true;
	} else {
		requestanimationframe = 'RequestAnimationFrame';
		for ( i = 0; i < 4; i++ ) {
			if ( window[prefix[i]+requestanimationframe] !== undefined ) {
				window.requestAnimationFrame = window[prefix[i]+requestanimationframe];
				window.cancelAnimationFrame = window[prefix[i]+cancelanimationframe];
				support.requestanimationframe = true;
				break;
			}
		}
	}
	if ( !support.requestanimationframe ) {
		window.requestAnimationFrame = (function() {
			var lasttime = 0;
			return function(callback) {
				var currenttime = gettime();
				var timetocall = Math.max(0, 16-(currenttime-lasttime));
				lasttime = currenttime+timetocall;
				return setTimeout(function() { callback(currenttime+timetocall); }, timetocall);
			}
		})();
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		}
	}
	$._cookie = {
		set: function(name, value, term, path, domain) {
			var cookieset = name + '=' + value + ';',
				expdate;
			if ( term ) {
				expdate = new Date();
				expdate.setTime( expdate.getTime()+term*1000*60*60*24 ); 
				cookieset += 'expires=' + expdate.toGMTString() + ';';
			}
			if ( path ) {
				cookieset += 'path=' + path + ';';
			}
			if ( domain ) {
				cookieset += 'domain=' + domain + ';';
			}
			document.cookie = cookieset;
		},
		get: function(name) {
			var match = ( document.cookie || ' ' ).match( new RegExp(name+' *= *([^;]+)') );
			return ( match )? match[1] : null;
		}
	};
	$._query = {
		parse: (function() {
			var matches, i, max;
			function resetdata(v) {
				if ( v ) {
					v = decodeURIComponent(v).replace(/\+/g, ' ');
					if ( v.indexOf(',') != -1 ) {
						v = v.split(',');
						for ( i = 0, max = v.length; i < max; i++ ) {
							v[i] = resetdata(v[i]);
						}
					} else if ( expint.test(v) ) {
						v = parseFloat(v);
					}
				}
				return v;
			}
			return function(query) {
				var rv = {};
				query = ( (/^#/).test(query) )? query.substring(query.lastIndexOf('#')+1)
						: ( !query || (/\?/).test(query) )? ( query || location.href ).split('?')[1]
						: query;
				if ( query ) {
					query = query.split('#')[0];
					while ( matches = expqueries.exec(query) ) {
						rv[matches[1]] = resetdata(matches[2]);
					}
					return rv;
				} else {
					return false;
				}
			}
		})(),
		make: function(data) {
			var key, newdata, datatype = typeof(data);
			if ( datatype == 'string' ) {
				return data;
			} else if ( datatype == 'object' ) {
				newdata = [];
				for ( key in data ) {
					newdata.push( key +'='+ encodeURIComponent(data[key]));
				}
				return newdata.join('&');
			}
		}
	};

	var easings = {
			linear : function(t,b,c,d){return c*t/d+b;},
			easeInQuad : function(t,b,c,d){return c*(t/=d)*t+b;},
			easeOutQuad : function(t,b,c,d){return -c*(t/=d)*(t-2)+b;},
			easeInOutQuad : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return -c/2*((--t)*(t-2)-1)+b;},
			easeOutInQuad : function(t,b,c,d){if(t < d/2)return easings.easeOutQuad(t*2,b,c/2,d);return easings.easeInQuad((t*2)-d,b+c/2,c/2,d);},
			easeInCubic : function(t,b,c,d){return c*(t/=d)*t*t+b;},
			easeOutCubic : function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},
			easeInOutCubic : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},
			easeOutInCubic : function(t,b,c,d){if(t<d/2)return easings.easeOutCubic(t*2,b,c/2,d);return easings.easeInCubic((t*2)-d,b+c/2,c/2,d);},
			easeInQuart : function(t,b,c,d){return c*(t/=d)*t*t*t+b;},
			easeOutQuart : function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},
			easeInOutQuart : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return -c/2*((t-=2)*t*t*t-2)+b;},
			easeOutInQuart : function(t,b,c,d){if(t<d/2)return easings.easeOutQuart(t*2,b,c/2,d);return easings.easeInQuart((t*2)-d,b+c/2,c/2,d);},
			easeInQuint : function(t,b,c,d){return c*(t/=d)*t*t*t*t+b;},
			easeOutQuint : function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},
			easeInOutQuint : function(t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},
			easeOutInQuint : function(t,b,c,d){if(t<d/2)return easings.easeOutQuint(t*2,b,c/2,d);return easings.easeInQuint((t*2)-d,b+c/2,c/2,d);},
			easeInSine : function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},
			easeOutSine : function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},
			easeInOutSine : function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},
			easeOutInSine : function(t,b,c,d){if(t<d/2)return easings.easeOutSine(t*2,b,c/2,d);return easings.easeInSine((t*2)-d,b+c/2,c/2,d);},
			easeInExpo : function(t,b,c,d){return (t==0)? b : c*Math.pow(2,10*(t/d-1))+b-c*0.001;},
			easeOutExpo : function(t,b,c,d){return (t==d)? b+c : c*1.001*(-Math.pow(2,-10*t/d)+1)+b;},
			easeInOutExpo : function(t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b-c*0.0005;return c/2*1.0005*(-Math.pow(2,-10*--t)+2)+b;},
			easeOutInExpo : function(t,b,c,d){if(t<d/2)return easings.easeOutExpo(t*2,b,c/2,d);return easings.easeInExpo((t*2)-d,b+c/2,c/2,d);},
			easeInCirc : function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},
			easeOutCirc : function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},
			easeInOutCirc : function(t,b,c,d){if((t/=d/2)<1)return -c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},
			easeOutInCirc : function(t,b,c,d){if (t<d/2)return easings.easeOutCirc(t*2,b,c/2,d);return easings.easeInCirc((t*2)-d,b+c/2,c/2,d);},
			easeInElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},
			easeOutElastic : function(t,b,c,d,a,p){if(!t)return b;if((t/=d)==1)return b+c;var s,p=(!p||typeof(p)!='number')? d*.3 : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);return (a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);},
			easeInOutElastic : function(t,b,c,d,a,p){if(t==0)return b;if((t/=d/2)==2)return b+c;var s,p=d*(.3*1.5),a=0;var s,p=(!p||typeof(p)!='number')? d*(.3*1.5) : p,a=(!a||typeof(a)!='number')? 0 : a;if(!a||a<Math.abs(c)){a=c;s=p/4;}else s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return -.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},
			easeOutInElastic : function(t,b,c,d,a,p){if (t<d/2)return easings.easeOutElastic(t*2,b,c/2,d,a,p);return easings.easeInElastic((t*2)-d,b+c/2,c/2,d,a,p);},
			easeInBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*(t/=d)*t*((s+1)*t-s)+b;},
			easeOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},
			easeInOutBack : function(t,b,c,d,s){var s=(!s||typeof(s)!='number')? 1.70158 : s;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},
			easeOutInBack : function(t,b,c,d,s){if(t<d/2)return easings.easeOutBack(t*2,b,c/2,d,s);return easings.easeInBack((t*2)-d,b+c/2,c/2,d,s);},
			easeInBounce : function(t,b,c,d){return c-easings.easeOutBounce(d-t,0,c,d)+b;},
			easeOutBounce : function(t,b,c,d){if((t/=d)<(1/2.75))return c*(7.5625*t*t)+b;else if(t<(2/2.75))return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;else if(t<(2.5/2.75))return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;else return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;},
			easeInOutBounce : function(t,b,c,d){if(t<d/2)return easings.easeInBounce(t*2,0,c,d)*.5+b;else return easings.easeOutBounce(t*2-d,0,c,d)*.5+c*.5+b;},
			easeOutInBounce : function(t,b,c,d){if(t<d/2)return easings.easeOutBounce(t*2,b,c/2,d);return easings.easeInBounce((t*2)-d,b+c/2,c/2,d);}
		},
		easing,

		cubicbeziers = {
			linear: '0.250, 0.250, 0.750, 0.750',
			ease: '0.250, 0.100, 0.250, 1.000',
			'ease-in': '0.420, 0.000, 1.000, 1.000',
			'ease-out': '0.000, 0.000, 0.580, 1.000',
			'ease-in-out': '0.420, 0.000, 0.580, 1.000',
			easeInQuad: '0.550, 0.085, 0.680, 0.530',
			easeInCubic: '0.550, 0.055, 0.675, 0.190',
			easeInQuart: '0.895, 0.030, 0.685, 0.220',
			easeInQuint: '0.755, 0.050, 0.855, 0.060',
			easeInSine: '0.470, 0.000, 0.745, 0.715',
			easeInExpo: '0.950, 0.050, 0.795, 0.035',
			easeInCirc: '0.600, 0.040, 0.980, 0.335',
			easeInBack: '0.600, -0.280, 0.735, 0.045',
			easeOutQuad: '0.250, 0.460, 0.450, 0.940',
			easeOutCubic: '0.215, 0.610, 0.355, 1.000',
			easeOutQuart: '0.165, 0.840, 0.440, 1.000',
			easeOutQuint: '0.230, 1.000, 0.320, 1.000',
			easeOutSine: '0.390, 0.575, 0.565, 1.000',
			easeOutExpo: '0.190, 1.000, 0.220, 1.000',
			easeOutCirc: '0.075, 0.820, 0.165, 1.000',
			easeOutBack: '0.175, 0.885, 0.320, 1.275',
			easeInOutQuad: '0.455, 0.030, 0.515, 0.955',
			easeInOutCubic: '0.645, 0.045, 0.355, 1.000',
			easeInOutQuart: '0.770, 0.000, 0.175, 1.000',
			easeInOutQuint: '0.860, 0.000, 0.070, 1.000',
			easeInOutSine: '0.445, 0.050, 0.550, 0.950',
			easeInOutExpo: '1.000, 0.000, 0.000, 1.000',
			easeInOutCirc: '0.785, 0.135, 0.150, 0.860',
			easeInOutBack: '0.680, -0.550, 0.265, 1.550'
		};

	for ( easing in easings ) {
		$.easing[easing] = (function(easingname) {
			return function(x, t, b, c, d) {
				return easings[easingname](t, b, c, d);
			}
		})(easing);
	}
	var
		poorbrowser = browser.ie && 9 > browser.ie,

		expint = /^-?[0-9\.]+$/,
		exprgb = /rgba?\(/,
		expisbody = /body/i,
		expiscolor = /color/i,
		expgetrgb = /rgba?\(([0-9]+), *([0-9]+), *([0-9]+)/,
		expqueries = /([^=&]+)=?([^=&]*)/g,

		transitionname = support.transition,
		transitionable = !!transitionname,
		transitionendnames = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd',

		gettime = function() {
			return new Date().getTime();
		},

		isobject = $.isPlainObject,

		color = {
			getcode: function(target, property) {
				return this.tohex.apply( null, this.torgb( target, property, style.get(target, property) ) );
			},
			torgb: function(target, property, v) {
				var temp;
				if ( v == 'transparent' || v == 'rgba(0, 0, 0, 0)' ) {
					while ( !expisbody.test(target.nodeName) ) {
						target = target.parentNode;
						temp = style.get(target, property);
						if ( temp != 'transparent' && temp != 'rgba(0, 0, 0, 0)' ) {
							return this.torgb(target, property, temp);
						}
					}
					return [ 255, 255, 255 ];
				} else if ( v.match(exprgb) ) {
					v = v.match(expgetrgb);
					return [ parseInt(v[1]), parseInt(v[2]), parseInt(v[3]) ];
				} else {
					if ( v.length>5 ) {
						v = [ v.substr(1, 2), v.substr(3, 2), v.substr(5, 2) ];
					} else {
						v = [ v.substr(1, 1), v.substr(2, 1), v.substr(3, 1) ];
						v = [ v[0]+v[0], v[1]+v[1], v[2]+v[2] ];
					}
					return [
						parseInt( ( eval('0x'+v[0]) ).toString(10) ),
						parseInt( ( eval('0x'+v[1]) ).toString(10) ),
						parseInt( ( eval('0x'+v[2]) ).toString(10) )
					];
				}
			},
			tohex: function() {
				var temp, i = 0, rv = '';
				for ( ; i < 3; i++ ) {
					temp = Math.max( Math.min(255, arguments[i]), 0 ).toString(16);
					rv += ( 2 > temp.length )? '0'+temp : temp;
				}
				return '#'+rv;
			}
		},

		style = (function() {

			var
				supporttransform = support.transform,
				transforms = ['translate3d', 'translate', 'scale3d', 'scale', 'skew', 'skewX', 'skewY', 'rotate', 'rotateX', 'rotateY', 'rotateZ'],
				nex = '[e0-9\-\.]+', pxex = '(?:px)?', vex = '(?:(?:px|deg))?', xyzex = /(X|Y|Z)$/,
				expressions = {
					isxyztarget: /^(scale|scale3d|translate|translate3d)$/,
					nopx: /(zIndex)/
				},
				is3dtransform = /3d/, istranslate = /^translate/,
				isscale = /^scale/, isrotate = /^rotate/,
				isx = /X$/, isy = /Y$/,
				isstupidbrowser = browser.ie == 9,
				i = 0, max = transforms.length;

			for ( ; i < max; i++ ) {
				expressions[transforms[i]] = [
					new RegExp(transforms[i] + '\\(('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +'(?:, ('+ nex +')'+ vex +')?)?'),
					new RegExp('('+transforms[i] + '\\()'+ nex + vex)
				];
				if ( !isrotate.test(transforms[i]) ) {
					expressions[transforms[i]][2] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', )'+ nex + vex),
					expressions[transforms[i]][3] = new RegExp('('+transforms[i] + '\\('+ nex + vex +', '+ nex + vex +', )'+ nex + vex);
				}
			}

			function istransform(property) {
				property = css3(property);
				if ( (/^(matrix|translate|scale|rotate|skew|perspective)/).test(property) ) {
					return true;
				}
				return false;
			}

			function isxyztarget(property) {
				var check = property.match(expressions.isxyztarget);
				return ( check )? check[1] : false;
			}

			function issvg(target) {
				return window.SVGElement && target instanceof SVGElement;
			}

			function css3(property) {
				if ( istranslate.test(property) ) {
					if ( !support.translate ) {
						return (/X$/).test(property)? 'left' : 'top';
					} else if ( is3dtransform.test(property) && !support.translate3d ) {
						return property.replace('3d', '');
					}
				} else if ( isscale.test(property) ) {
					if ( is3dtransform.test(property) && !support.scale3d ) {
						return property.replace('3d', '');
					}
				}
				return property;
			}

			function ie9scale(target, property, value) {
				var temp = target.style[supporttransform].match(expressions.scale[0]),
					x, y;
				if ( !temp ) {
					return 1;
				} else {
					x = parseFloat(temp[1]);
					y = ( temp[2] !== undefined )? parseFloat(temp[2]) : x;
					if ( value !== undefined ) {
						if ( isx.test(property) ) {
							x = value;
						} else {
							y = value;
						}
						target.style[supporttransform] = target.style[supporttransform].replace(expressions.scale[0], 'scale('+ x +', '+ y);
					} else {
						return ( isx.test(property) )? x : y;
					}
				}
			}

			function get(target, property) {
				var rv, transform, xyz;
				property = css3(property);
				if ( istransform(property) ) {
					xyz = isxyztarget(property);
					if ( xyz ) {
						return get(target, xyz+'X');
					}
					transform = property;
					property = supporttransform;
				}
				if ( property == 'opacity' && !support.opacity ){
					property = 'filter';
				} else if ( property == 'scrollTop' ) {
					return target.scrollTop;
				}
				rv = (target) ? (issvg(target) && target.attributes[property]) ? parseInt(target.attributes[property].value) :
						(!target.style)? target[property] :
						(target.style[property])? target.style[property] :
							(target.currentStyle)? target.currentStyle[property] :
								document.defaultView.getComputedStyle(target, null)[property] : 0;
				if ( transform && supporttransform ) {
					xyz = transform.match(xyzex);
					xyz = ( xyz )? xyz[0] : '';
					if ( isrotate.test(transform) ) {
						rv = rv.match(expressions[transform][0]);
						return (!rv)? 0 : parseFloat(rv[1]);
					} else if ( isstupidbrowser && isscale.test(transform) ) {
						return ie9scale(target, transform);
					} else if( rv ) {
						rv = rv.match( expressions[transform.replace(xyzex, '')][0] );
						return (!rv)? ( isscale.test(transform) )? 1 : 0 : parseFloat(rv[( xyz == 'X' )? 1 : ( xyz == 'Y' )? 2 : 3]);
					}
				}
				if ( property == 'opacity' ) {
					return parseFloat(rv);
				}
				if ( property == 'filter' ) {
					rv = rv.match(/alpha *\( *opacity *[=:] *([0-9\.]+) *\)/i);
					rv = (rv)? parseFloat(rv[1]) : 1;
					return (rv || rv===0)? rv/100 : 1;

				}
				return (rv=='auto')? 0 : ((/(pt|px)$/).test(rv))? parseInt(rv) : rv;
			}

			function set(target, property, value) {
				var i, exist, transform, xyz;
				if ( typeof(property) == 'object' ) {
					for ( i in property) {
						style.set(target, i, property[i]);
					}
					return;
				}
				if ( value !== undefined ) {
					if ( issvg(target) && target.attributes[property] ) {
						target.attributes[property].value = value;
					} else if ( !target.style ) {
						target[property] = value;
					} else {
						property = css3(property);
						if ( istransform(property) && supporttransform ) {
							xyz = isxyztarget(property);
							if ( xyz ) {
								set(target, xyz+'X', value);
								set(target, xyz+'Y', value);
								set(target, xyz+'Z', value);
								return;
							}
							exist = target.style[supporttransform] || style.get(target, supporttransform);
							if (exist.indexOf('(') == -1) {
								exist = '';
							}
							if ( isrotate.test(property) ) {
								if ( !expressions[property][0].test(exist) ) {
									exist += property+'(0)';
								}
								target.style[supporttransform] = exist.replace(expressions[property][1], '$1'+ value +'deg');
							} else {
								transform = property.replace(xyzex, '');
								if ( !expressions[transform][0].test(exist) ) {
									exist += support[transform];
								}
								if ( isstupidbrowser && isscale.test(property) ) {
									ie9scale(target, property, value);
								} else {
									target.style[supporttransform] = exist.replace(
										expressions[transform][isx.test(property)? 1 : isy.test(property)? 2 : 3],
										'$1'+ value + ( isscale.test(transform)? '' : 'px' )
									);
								}
							}
						} else if ( property == 'opacity' ) {
							if ( !support.opacity ) {
								target.style.filter = ( value === '' )? '' : 'alpha(opacity='+(value*100)+')';
							} else {
								target.style.opacity = value;
							}
						} else if ( property == 'scrollTop' ) {
							target.scrollTop = value;
						} else {
							try {
								target.style[property] = ( value && !isNaN(value) && !expressions.nopx.test(property) )? value+'px' : value;
							} catch(e) {
								window.console && console.log(e.message+'('+target + ' : id="'+ target.id +'", class="'+ target.className +'", property="'+ property +'", value : "'+ value +'")');
							}

						}
					}
				}
			}

			return { get: get, set: set, istransform: istransform };

		})(),

		ani = (function() {

			var tweens = [],

				_fps = 60, _time = 1, _easing = 'easeOutCubic',

				nowframe = 0,
				totalframes = 0,
				starttime = 0,
				playing = false,

				getstyle = style.get, setstyle = style.set,

				torgb = color.torgb, tocolorcode = color.tohex,

				istransform = style.istransform,
				issplitxyztarget = style.issplitxyztarget,

				timer = null,
				timerdelay = 1000/_fps,

				isemptytween,

				i, max;

			function set(target, property, _option) {

				if ( !target ) {
					return;
				}

				if ( target.constructor == Array ) {
					for ( i = 0, max = target.length; i < max; i++ ) {
						set(target[i], property, _option);
					}
					return;
				}

				var tween,
					option = _option || {},
					time = option.time || _time,
					frames = Math.round( _fps*time ),
					delay = Math.round( _fps*( option.delay || 0 ) ),
					easing = option.easing || _easing,
					p, rounding, fromcolor, tocolor, rgb, i, temp,
					values = {};

				for ( p in property ) {
					rounding = ( option.rounding === false || p == 'opacity' )? false : !istransform(p);
					if ( property[p].constructor == Array ) {
						values[p] = property[p];
						frames = Math.max(frames, Math.round( _fps*values[p].length/_fps ));
					} else if ( expiscolor.test(p) ) {
						fromcolor = torgb(target, p, getstyle(target, p));
						tocolor = torgb(target, p, property[p]);
						rgb = [];
						for ( i = 0; i < 3; i++ ) {
							rgb[i] = getvalues(p, fromcolor[i], tocolor[i], frames, easing, true);
						}
						values[p] = [];
						for ( i = 0; i < frames; i++ ) {
							values[p][i] = tocolorcode(rgb[0][i], rgb[1][i], rgb[2][i]);
						}
					} else {
						values[p] = getvalues(p, getstyle(target, p), property[p], frames, easing, rounding);
					}
				}

				stop(target, property);

				tweens.push({
					el: target,
					vs: values,
					sf: option.bystep ? -1-delay : nowframe + delay,
					tf: frames,
					bs: option.bystep,
					es: option.onstart,
					eu: option.onupdate,
					ee: option.onend,
					lp: option.loop
				});

				totalframes = Math.max( totalframes, nowframe + delay + frames + _fps );

				if ( !playing ) {
					starttime = gettime();
					timer = window.requestAnimationFrame(action);
					playing = true;
				}

			}

			function stop(target, property, _jumptoend) {

				var i = 0, max = tweens.length,
					tween, p, properties;

				if ( property ) {
					if ( typeof(property) != 'string' ) {
						properties = [];
						for ( p in property ) {
							properties.push(p);
						}
						properties = properties.join(' ')+' ';
					} else {
						properties = property+' ';
					}
				}

				isemptytween = true;
				for ( ; i < max; i++ ) {
					tween = tweens[i];
					if ( tween && tween.el == target ) {
						if ( property ) {
							for ( p in tween.vs ) {
								if ( properties.indexOf(p+' ') != -1 ) {
									if ( _jumptoend ) {
										setstyle(tween.el, p, tween.vs[p][tween.tf-1]);
									}
									delete tween.vs[p];
								} else {
									isemptytween = false;
								}
							}
						}
						if ( isemptytween ) {
							if ( _jumptoend ) {
								jumptoend(tweens[i]);
							}
							tweens[i] = null;
						}
					}
				}

			}

			function jumptoend(tween) {
				var p, lastframe = tween.tf-1;
				for ( p in tween.vs ) {
					setstyle(tween.el, p, tween.vs[p][lastframe]);
				}
				tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', lastframe, lastframe) );
				tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', lastframe, lastframe) );
			}

			function sprite(target, framewidth, totalframe, property, time, loop) {
				var currentframe, temp = { };
				totalframe--;
				function onupdate(e) {
					var frame = Math.round(totalframe*e.v);
					if ( currentframe != frame ) {
						style.set(target, property, -framewidth*frame);
						currentframe = frame;
					}
				}
				function play() {
					_stop();
					set(temp, { v: 1 }, { time: time, loop: loop, rounding: false, easing: 'linear', onupdate: onupdate });
				}
				function _stop() {
					stop(temp);
					currentframe = -1;
					temp.v = 0;
				}
				return { play: play, stop: _stop }
			}

			function action() {
				nowframe = Math.floor( ( gettime()-starttime ) / timerdelay );
				if ( totalframes > nowframe ) {
					setproperties(nowframe);
					timer = window.requestAnimationFrame(action);
				} else {
					window.cancelAnimationFrame(timer);
					setproperties(totalframes);
					nowframe = totalframes = 0;
					tweens = [];
					playing = false;
				}
			}

			function setproperties(step) {

				var tween, mystep, myframes,
					p, i = 0, max = tweens.length;

				for ( ; i < max; i++ ) {

					tween = tweens[i];

					if ( tween && step >= tween.sf ) {

						myframes = tween.tf-1;

						if (tween.bs) {
							mystep = tween.sf = tween.sf+1;
						} else {
							mystep = Math.min( myframes, step-tween.sf );
						}

						if (mystep > -1) {

							if ( tween.es ) {
								tween.es.call( tween.el, geteventvalue(tween, 'start', 0, myframes) );
								delete tween.es;
							}

							if (!tweens[i]) {
								continue;
							}

							for ( p in tween.vs ) {
								setstyle(tween.el, p, tween.vs[p][mystep]);
							}

							tween.eu && tween.eu.call( tween.el, geteventvalue(tween, 'update', mystep, myframes) );

							if ( mystep == myframes ) {
								tween.ee && tween.ee.call( tween.el, geteventvalue(tween, 'end', mystep, myframes) );
								if ( tween.lp ) {
									tween.sf = tween.bs ? -1 : nowframe;
									totalframes += tweens[i].tf+_fps;
									if ( tween.lp == 'yoyo' ) {
										for ( p in tween.vs ) {
											tween.vs[p].reverse();
										}
									}
								} else {
									tweens[i] = null;
								}
							}
						}

					}
				}

			}

			function geteventvalue(tween, type, step, totalstep) {
				var values = tween.vs,
					eventvalue = { type: type, percent: step/totalstep },
					p;
				for ( p in values ) {
					eventvalue[p] = values[p][step];
				}
				return eventvalue;
			}

			function getvalues(property, from, to, totalframe, easing, rounding) {
				var nv, rv = [], gap = to-from, i = 0;
				totalframe--;
				for ( ; i <= totalframe; i++ ) {
					nv = easings[easing](i, from, gap, totalframe);
					rv.push( ( rounding )? Math.round(nv) : nv );
				}
				return rv;
			}

			return { set: set, stop: stop, sprite: sprite, getvalues: getvalues };

		})();


	$.fn._css = function(property, value) {
		var p;
		if ( isobject(property) ) {
			for ( p in property ) {
				this._css(p, property[p]);
			}
		} else if ( value !== undefined ) {
			this.each(function() {
				style.set(this, property, value);
			});
		} else {
			return style.get(this[0], property);
		}
		return this;
	}

	$.fn._animate = function(properties, d, e, c) {
		var delaybase, options = assignanimationoptions(d, e, c);
		if (options.autodelay) {
			delaybase = options.delay;
		}
		return this.each(function(i) {
			if (i) {
				options.step = options.complete = null;
			}
			if (delaybase) {
				options.delay = i*delaybase;
			}
			ani.set(this, properties, options);
		});
	}

	$.fn._spriteanimation = function sprite(framewidth, totalframe, property, time, loop) {
		return this.each(function(i) {
			$(this).data('spriteanimation', ani.sprite(this, framewidth, totalframe, property, time, loop));
		});
	}

	$._getanimationvalues = ani.getvalues;

	$.fn._stop = function(property, jumptoend) {
		if ( property === true || property === false ) {
			jumptoend = property;
			property = null;
		}
		return this._css(transitionname, '').each(function() {
			ani.stop(this, property, jumptoend);
		});
	}

	$.fn._transition = function(properties, d, e, c) {
		var $target = this,
			options = assignanimationoptions(d, e, c),
			p, setting, onend, onendfired;
		if ( transitionable ) {
			setting = [];
			for ( p in properties ) {
				if ( style.istransform(p) ) {
					p = support.transform;
				}
				setting.push([killcamels(p), ' ', options.time, 's ', (options.delay)? options.delay+'s ' : '', 'cubic-bezier(', ( cubicbeziers[options.easing] || cubicbeziers.ease ), ')'].join(''));
			}
			setting = setting.join(',');
			onend = options.onend;
			options.onend = function() {
				if ( !onendfired ) {
					$target.css(transitionname, '').unbind(transitionendnames, options.onend);
					setTimeout(function() {
						onend && onend.call($target[0]);
					}, 0);
					onendfired = true;
				}
			}
			setTimeout(function() {
				$target.each(function() {
					$(this).css(transitionname, setting)._css(properties).bind(transitionendnames, options.onend);
				});
			}, 0);
			return this;
		} else {
			return this.each(function() {
				ani.set(this, properties, options);
			});
		}
	}

	$.fn._fill = function($area, sizes) {
		return this.each(function() {
			filling(this, $area, sizes);
		});
	}

	$.fn.decideClass = function(classname, condition) {
		return this[condition ? 'addClass' : 'removeClass'](classname);
	}

	function filling(target, $area, _sizes) {

		if ( !$area ) {
			$area = $(target.parentNode);
		}
		if ( !$area.length ) {
			return false;
		}

		var position,
			sizes = _sizes || {},
			targetwidth = sizes.width || target.offsetWidth, targetheight = sizes.height || target.offsetHeight,
			areawidth = sizes.areawidth || $area[0].offsetWidth, areaheight = sizes.areaheight || $area[0].offsetHeight,
			rate, newwidth, newheight, marginleft, margintop;

		if (!targetwidth || !targetheight || !areawidth || !areaheight) {
			return false;
		}

		position = $area._css('backgroundPosition');
		if ( position ) {
			position = position.split(' ');
			position[0] = position[0] == 'center' ? 0.5 : position[0].indexOf('%') != -1 ? parseInt(position[0])/100 : 0;
			position[1] = position[1] == 'center' ? 0.5 : position[1].indexOf('%') != -1 ? parseInt(position[1])/100 : 0;
		}

		rate = ( targetwidth > targetheight )? areaheight/targetheight : areawidth/targetwidth;
		rate = ( areaheight > Math.round(targetheight*rate) )? areaheight/targetheight : ( areawidth > targetwidth*rate )? areawidth/targetwidth : rate;

		newwidth = Math.max(areawidth, Math.round(targetwidth*rate));
		newheight = Math.max(areaheight, Math.round(targetheight*rate));

		if (position) {
			if (position[0]) {
				marginleft = (areawidth-newwidth)*position[0];
			}
			if (position[1]) {
				margintop = (areaheight-newheight)*position[1];
			}
		}

		$(target).css({
			width: newwidth,
			height: newheight,
			marginLeft: marginleft || '',
			marginTop: margintop || ''
		});

	}

	function assignanimationoptions(d, e, c) {
		var options;
		if ( isobject(d) ) {
			options = { time: d.duration, loop: d.loop, delay: d.delay, bystep: d.bystep, rounding: d.rounding, easing: d.easing, onstart: d.start, onupdate: d.step, onend: d.complete };
		} else if ( typeof(c) == 'function' ) {
			options = { time: d, easing: e, onend: c };
		} else if ( typeof(e) == 'function' ) {
			options = ( typeof(d) == 'number' )? { time: d } : { easing: d }
			options.onend = e;
		} else if ( typeof(d) == 'function' ) {
			options = { onend: d };
		}
		if ( options.time === undefined ) {
			options.time = 400;
		}
		options.time /= 1000;
		if (options.delay && !isNaN(parseInt(options.delay))) {
			if (typeof(options.delay) == 'string') {
				options.autodelay = true;
			}
			options.delay = parseInt(options.delay)/1000;
		}
		return options;
	}

	function killcamels(property) {
		return property.replace(/([A-Z])/g, '-$1').toLowerCase();
	}

	$._event = (function() {

		var
			supporttouch = support.touch,
			typemap = supporttouch ? {mousedown: 'touchstart', mousemove: 'touchmove', mouseup: 'touchend'} : {};

		return {
			gettype: function(types) {
				var type, newtypes;
				if (supporttouch) {
					newtypes = {};
					for (type in types) {
						newtypes[typemap[type] || type] = types[type];
					}
					return newtypes;
				}
				return types;
			},
			getpoint: function(e) {
				e = e.originalEvent;
				if (e.touches || e.changedTouches) {
					return [
						e.touches[0] ? e.touches[0].pageX : e.changedTouches[0].pageX,
						e.touches[0] ? e.touches[0].pageY : e.changedTouches[0].pageY
					];
				}
				return [e.clientX, e.clientY];
			}
		}

	})();
	
	div = null;

	$(document.documentElement)
		.addClass(browser.os)
		.addClass(browser.chrome ? 'chrome' : browser.firefox ? 'firefox' : browser.opera ? 'opera' : browser.safari ? 'safari' : browser.ie ? 'ie ie'+browser.ie : '')
		.addClass(browser.webkit ? 'webkit' : '')
		.addClass(browser.ie && 8 > browser.ie ? 'ie8' : '')
		.addClass(browser.ios ? 'ios' : browser.android ? 'android' : '')
		.addClass(support.transition ? 'transition' : 'notransition')
		.addClass(support.transform ? 'transform' : 'notransform')
		.addClass(support.backgroundsize ? 'backgroundsize' : 'nobackgroundsize')
		.addClass(support.rgba ? 'rgba' : 'norgba')
		.addClass(support.svgimage ? 'svg' : 'nosvg')
		.addClass(support.pointerevents ? 'pointerevents' : 'nopointerevents')
		.addClass(support.opacity ? 'opacity' : 'noopacity');

	if (!window.console) {
		window.console = {};
		window.console.log = window.console.table = window.console.error = window.console.clear = function() {};
	}

	window.trace = (function() {
	
		var box = null,
			number = 1;
	
		function tostring(v) {
			var rv, i, max;
			if ( v === null ) {
				return 'null';
			} else if ( v === undefined ) {
				return 'undefined';
			} else if ( v == window ) {
				return '[object Window]';
			} else if ( v == document ) {
				return '[object HTMLDocument]';
			} else if ( v === true || v === false || typeof(v) == 'number' || typeof(v) == 'function' ) {
				return v;
			} else if ( typeof(v) == 'object' ) {
				if ( v.constructor == Array ) {
					rv = [];
					for ( i = 0, max = v.length; i < max; i++ ) {
						rv.push(tostring(v[i]));
					}
					return '['+ rv.join(',') +']';
				} else if ( v.constructor == String ) {
					return '"'+ v.replace(/\</g, '<') +'"';
				} else if ( v.constructor == Boolean || v.constructor === Number || v.constructor == RegExp ) {
					return v;
				} else if ( v.constructor == Date ) {
					return 'Date('+ v.getTime() +', '+ v +')';
				} else if ( v.each && v.bind ) {
					rv = [];
					for ( i = 0, max = v.length; i < max; i++ ) {
						rv.push(i +':'+ tostring(v[i]));
					}
					rv.push('length:'+ max);
					return '${'+ rv.join(',') +'}';
				} else if ( v.nodeType ) {
					return '[object '+ v.nodeName.toUpperCase() +' Element]';
				} else {
					rv = [];
					for ( i in v ) {
						rv.push('\''+ i +'\':'+ tostring(v[i]));
					}
					return '{'+ rv.join(',') +'}';
				}
			} else {
				return '"'+ ((v.replace)? v.replace(/\</g, '<') : v) +'"';
			}
		}
	
		function create() {
			if ( !box ) {
				box = document.createElement('ol');
				box.style.cssText = 'position:absolute;left:5px;top:5px;max-width:75%;font-family:verdana;font-size:9px;color:#000;line-height:1.35em;margin:0;padding:3px 3px 2px 38px;border:1px solid #000;background:#fff;display:none;z-index:10000;opacity:0.75;filter:alpha(opacity=75);';
				box.onclick = clear;
				addbox();
			}
		}

		function addbox() {
			if ( document.body ) {
				document.body.appendChild(box);
			} else {
				setTimeout(addbox, 10);
			}
		}

		function clear(){
			if ( box ) {
				box.innerHTML = '';
				box.style.display = 'none';
				number = 1;
			}
		}

		return {
			log: function() {
				for ( var i = 0, max = arguments.length, v = [], li = document.createElement('li'); i < max; i++ ) {
					v.push(tostring(arguments[i]));
				}
				li.style.cssText = 'list-style:decimal;margin-bottom:1px;padding:2px 3px 3px;background:'+ ((number%2)? '#eee;' : '#ddd;');
				li.innerHTML = v.join(', ');
				create();
				box.appendChild(li);
				box.style.display = 'block';
				number++;
			},
			fixed: function(flag) {
				create();
				box.style.position = ( flag === false )? 'absolute' : 'fixed';
			},
			clear: clear
		}
	
	})();

})(window.jQuery);

;(function($) {

	'use strict';

	if ( !$ || $.fn.xlider ) {
		return;
	}

	var
		$win = $(window),
		$doc = $(document.documentElement),
		$body = $(document.body),

		isMobile = $.browser.mobile,
		isIOS = $.browser.ios,
		isAndroid = $.browser.android,
		supportTransform = $.support.transform,
		supportTransition = $.support.transition,

		getEventType = $._event.gettype,
		getEventPoint = $._event.getpoint,

		regExpIsUL = /ul/i,

		windowWidth,
		resizeFunctions = [],

		last;

	$.fn.xlider = function(_option, value, pretendTo, noAnimation) {
		var forState;
		if (!_option || $.isPlainObject(_option)) {
			this.each(function() {
				xlider($(this), _option);
			});
		} else if (typeof(_option) == 'string') {
			if (_option == 'prev' || _option == 'next') {
				noAnimation = value;
			} else if (_option == 'toggleAuto') {
				forState = {v: 0, value: value};
				$(this).trigger('xlider-'+_option, forState, value);
				return forState.v;
			} else if (_option == 'change' || typeof pretendTo != 'string') {
				noAnimation = pretendTo;
			}
			this.trigger('xlider-'+_option, {to: value, pretendTo: pretendTo, noAnimation: noAnimation});
		}
		return this;
	}

	$win.resize(function() {
		windowWidth = $doc[0].clientWidth;
		$.each(resizeFunctions, function() {
			this();
		});
	});

	function xlider($box, option) {

		var option = option || {},

			endless = option.endless,
			arrows = option.arrows,
			arrowsTag = arrows ? arrows.constructor == Array ? 'pre' : typeof arrows == 'string' ? arrows : 'button' : '',
			paging = option.paging,
			pagingTag = paging ? paging.length && paging[0].nodeType ? 'pre' : typeof paging == 'string' ? paging : 'button' : '',
			useSwipe = option.swipe !== false,
			useFade = option.fade,
			animate = option.animate !== false,
			animateDuration = option.duration,
			autoPlay = option.autoPlay,
			useTransition = option.useTransition && supportTransition,
			numDisplay = option.numDisplay || 1,
			newstyle = option.newstyle || false,
			maxview = option.maxview || 5,
			mode = option.mode || 'all',

			eventMove = option.onMove,
			eventChange = option.onChange,
			eventChangeEnd = option.onChangeEnd,
			eventreset = option.reset,

			$wrapper,
			$arrows, $prev, $next,
			$paging, $pagingItems,

			$items = $box.children(),
			$fakeItem,

			$blocker,

			boxWidth, itemWidth, moveSize,
			downX, downY, baseX, swipeAngle, startTime, moved, realX, setX,

			multiMode = numDisplay > 1,
			classicMode = false,

			clickAble = true,
			blockerAdded = false,
			checkStart = false,
			changePhone = false,
			dragPoint = true,

			autoPlaying = !!autoPlay,
			autoPlayTimer = null,

			wrapperClassName = 'xlider-wrapper',

			zIndex = 0,
			limitCount = 1,
			lastX = 0,
			resetMover,
			realAni = true,
			resetting = false,

			i = 0, max = $items.length,

			nowPage = option.defaultPage && option.defaultPage > -1 ? Math.min(max-1, option.defaultPage) : 0,

			aniOption = {
				slide: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
				back: {queue: false, step: onMove, easing: 'easeOutCubic', complete: changeEnd},
				fade: {queue: false, easing: 'easeOutSine', complete: changeEnd}
			};

		if (GALAXY.isPoorBrowser) {
			newstyle = false;
		}


		if (!$body.length) {
			$body = $(document.body);
		}

		if (!max) {
			return;
		}

		if (useFade) {
			useSwipe = true;
			endless = true;
		}

		if (regExpIsUL.test($box[0].nodeName)) {
			$wrapper = $box.addClass(wrapperClassName);
			$box = $wrapper.parent();
		} else if (2 > max && regExpIsUL.test($items[0].nodeName)) {
			$wrapper = $items.addClass(wrapperClassName);
			$items = $items.find('> li');
			max = $items.length;
		}
		if (!$wrapper) {
			$wrapper = $('<div class="'+ wrapperClassName +'" />').appendTo($box);
		}
		if ($wrapper.css('position') == 'static') {
			$wrapper.css('position', 'relative');
		}
		if ($wrapper.css('zIndex') == 'auto') {
			$wrapper.css('zIndex', 0);
		}
		$box.css('overflow', 'hidden');

		if (!useFade && endless && 2 > max) {
			endless = false;
		}

		if (arrows && max > 1) {
			if (arrowsTag == 'pre') {
				$prev = arrows[0];
				$next = arrows[1];
			} else {
				$arrows = $('<p class="arrows" />').appendTo($box);
				$prev = $('<'+ arrows +' class="prev">Prev</'+ arrows +'>').appendTo($arrows);
				$next = $('<'+ arrows +' class="next">Next</'+ arrows +'>').appendTo($arrows);
			}
			$prev.attr('data-flag', 'prev').click(toPrev);
			$next.attr('data-flag', 'next').click(toNext);
		} else if (2 > max) {
			if (arrows == 'pre') {
				arrows[0].remove();
				arrows[1].remove();
			}
			arrows = null;
		}

		if (paging) {
			if (pagingTag == 'pre') {
				$paging = $(paging);
				$pagingItems = $paging.children();
			} else {
				$paging = $('<p class="paging" />').appendTo($box);
				$pagingItems = [];
				for (i = 0; i < max; i++) {
					$pagingItems[i] = $('<'+pagingTag+' />');
					$pagingItems[i][0].innerHTML = i+1;
				}
			}
		}

		for (i = 0; i < max; i++) {
			$items[i] = $($items[i]);
			if (!newstyle) {
				$items[i] = $($items[i]).css({left: useFade ? 0 : '200%', top: 0, width: '100%', display: i == nowPage ? '' : 'none'});
				$items[i].appendTo($wrapper);
				$items[i].find('a, button, input, textarea').attr('data-xlider-page', i).focus(itemFocusablesFocused);
			} 
			if ($items[0].parent().parent().hasClass('g-contents')) {
				$items[i].addClass('hide');
			}
			if (paging) {
				$pagingItems[i] = $($pagingItems[i]).attr('data-page', i)
					.click(pagingClick)
					.appendTo($paging);
			}
		}

		function settingView() {
			if (newstyle) {
				if ($('html').hasClass('s'+mode) || (mode == 'all')) {
					if (!resetting) {
						if ($wrapper&&$wrapper.length) {
							for (i = 0; i < max; i++) {
								var actCounr = Math.ceil(maxview / 2);
								$items[i] =  $($items[i]).attr('data-call', i);
								if (i < actCounr) {
									var count = Math.ceil((max - 1) - i);
									$wrapper.prepend($items[count]);
								}
							}
						}
						resetting = true;
					}
					if ($wrapper&&$wrapper.length) {
						newcenterSet();
					}
				} else {
					if (resetting) {
						if ($wrapper&&$wrapper.length) {
							$wrapper.html('');
							for (i = 0; i < max; i++) {
								$items[i] =  $($items[i]).attr('data-call', i);
								$items[i].appendTo($wrapper);
								if (i == max-1) {
									eventreset && eventreset.call();
								}
							}
						}
						resetting = false;
					}
				}
			}
			
		}

		function pagingClick() {
			if (!newstyle) {
				jump({to: parseInt(this.getAttribute('data-page'))});
			} else {
				var page = $(this).attr('data-page');
				if (!clickAble || page == nowPage) {
					return false;
				}
				var center = $wrapper.find('> li.show').index();
				var allC = [];
				var full = $pagingItems.length;
				for (i = 0;i<full;i++) {
					allC[i] = $wrapper.find('> li').eq(i).attr('data-call');
				}
				var clickPAge = allC.indexOf(page);
				var countPage = clickPAge - center;
				if (realAni) {
					changeNew(countPage);
				}
			}
			return false;
		}

		function changeNew(idx) {
			realAni = false;
			var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
			var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
			var thisinDex = $wrapper.find(' > li.show').index();
			var currinDex = $wrapper.find(' > li').eq(thisinDex+idx).attr('data-call');
			var field;
			var movedRe;
			var limitNew = 1;
			var half = limit / 2;
			var newCall;
			var transX = Math.ceil($wrapper.css('transform').split(',')[4]);
			if ($.browser.ie > 9) {
				transX = Math.ceil($wrapper.css('transform').split(',')[12]);
			}
			var caseOne = Math.abs(idx);
			var noX = 0;
			var fakeX = false;
			var time = 0;
			if ($.browser.mobile) {
				time = 10;
			}
			var remake = function () {
				if (idx > 0) {
					field = 0;
				} else {
					field = max - 1;
				}
				var lastCont = $wrapper.find('> li').eq(field).attr('data-call');
				$wrapper.find('> li').eq(field).remove();
				if (field != 0) {
					$wrapper.prepend($items[lastCont]);
				} else {
					$wrapper.append($items[lastCont]);
				}
				if (idx > 0) {
					noX = transX + (Math.abs(limit));
				} else {
					noX = transX - (Math.abs(limit));
				}
				limitNew++;
				fakeX = true;
			}
			newCall = setInterval(function () {
				var noWtransX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					noWtransX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				if (fakeX) {
					movedRe = transX;
					fakeX = false;
				} else {
					if (idx > 0) {
						movedRe = noWtransX-(20);
					} else {
						movedRe = noWtransX+(20);
					}
				}
				$wrapper._css({translate3dX:movedRe});
				var noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					noWtransX2 = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				var movedRecheck = noWtransX2-transX;
				if (isMobile && changePhone) {
					movedRecheck = Math.abs(movedRecheck)+Math.abs(setX-transX);
				}
				if ((limit) < Math.abs(movedRecheck)) {
					remake();
				}
				if (limitNew == caseOne+1) {
					clearInterval(newCall);

					if (isMobile && changePhone) {
						$wrapper._css({translate3dX:setX});
					} else {
						$wrapper._css({translate3dX:transX});
					}
					nowPage = currinDex;
					setButtons();
					changeEnd();
					changePhone = false;
					if (isMobile) {
						setTimeout(function () {
							realAni = true;
							dragPoint = true;
						}, 100);
					} else {
						realAni = true;
						dragPoint = true;
					}
				}
			}, time);
		}

		if (useSwipe) {
			if (window.navigator.pointerEnabled) {
				$wrapper[0].style.cssText += 'touch-action: pan-y;';
			} else if (window.navigator.msPointerEnabled ){
				$wrapper[0].style.cssText += '-ms-touch-action: pan-y;';
			}
			$wrapper.bind(getEventType({mousedown: down}));
			$wrapper.bind('selectstart dragstart', function() {
				return false;
			});
		}

		function newcenterSet(idt) {
			if (newstyle) {
				var settingX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					settingX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
				var center = $win.width() / 2;
				var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
				var limit = $wrapper.find(' > li').eq(max-1).innerWidth();
				var thisIndex = $wrapper.find(' > li.show').offset().left;
				var moveAni = thisIndex + limit/2 - center;
				if (checkStart) {
					moveAni = thisIndex + limit/2 - center - settingX;
				}
				$wrapper._animate({translate3dX:-moveAni}, {duration: 550, easing: 'easeOutCubic', force3D: true});
				checkStart = true;
			}
		}

		

		$box.bind('xlider-prev', function(e, option) {
			toPrev(e, false, option.noAnimation);
		});
		$box.bind('xlider-next', function(e, option) {
			toNext(e, false, option.noAnimation);
		});
		$box.bind('xlider-jump', function(e, option) {
			jump(option);
		});
		$box.bind('xlider-change', function(e, option) {
			change(option);
		});
		$box.bind('xlider-toggleAuto', function(e, forState) {
			forState.v = toggleAuto(forState.value);
		});
		$box.bind('xlider-remove', function(e) {
			for (i = 0; i < max; i++) {
				$items[i].find('a, button, input, textarea').removeAttr('data-xlider-page');
				if (!regExpIsUL.test($wrapper[0].nodeName)) {
					$items[i].appendTo($box);
				}
				if (paging) {
					if (pagingTag != 'pre') {
						$pagingItems[i].remove();
					} else {
						$pagingItems[i].unbind('click');
					}
				}
			}
			$wrapper._css({position: '', translate3dX: ''}).removeClass(wrapperClassName);
			$wrapper.unbind(getEventType({mousedown: down}));
			if (!regExpIsUL.test($wrapper[0].nodeName)) {
				$wrapper.remove();
			}
			if (paging && pagingTag != 'pre') {
				$paging.remove();
			}
			if (arrows) { 
				if (arrowsTag != 'pre') {
					$prev.remove();
					$next.remove();
				} else {
					$prev.unbind('click');
					$next.unbind('click');
				}
			}
			$fakeItem && $fakeItem.remove();
			$blocker.remove();
			$box.unbind('xlider-prev xlider-next xlider-jump xlider-change xlider-toggleAuto xlider-remove');
			$box = $wrapper = $prev = $next = $pagingItems = null;
			for (i = 0, max = resizeFunctions.length; i < max; i++) {
				if (resizeFunctions[i] == resize) {
					resizeFunctions.splice(i, 1);
					break;
				}
			}
		});

		$blocker = $('<div class="blocker" style="position:absolute;left:0;top:0;width:100%;height:100%;background:#000;" />').css('opacity', 0);

		setButtons();
		resize();
		changeEnd();

		resizeFunctions.push(resize);

		function down(e) {

			clearAutoPlay();

			if (!clickAble) {
				realAni
			}

			downX = baseX = getEventPoint(e)[0];
			returnX = downX;

			if (isIOS && (15 > downX || downX > windowWidth-15)) {
				return true;
			}

			downY = getEventPoint(e)[1];
			startTime = new Date().getTime();

			moved = 0;
			swipeAngle = false;
			if  (!realAni && isMobile) {
				return false;
			}
			if (!dragPoint) {
				return false;
			}
			if ($.support.transform) {
				realX = Math.ceil($wrapper.css('transform').split(',')[4]);
				setX = Math.ceil($wrapper.css('transform').split(',')[4]);
				if ($.browser.ie > 9) {
					realX = Math.ceil($wrapper.css('transform').split(',')[12]);
					setX = Math.ceil($wrapper.css('transform').split(',')[12]);
				}
			}
			if (realX == undefined) {
				realX = 0;
				setX = 0;
			}
			$doc.bind(getEventType({mousemove: move, mouseup: up}));

		}

		var mapword = '',
			recount = true,
			returnX;

		function move(e) {
			var x = getEventPoint(e)[0],
				y = getEventPoint(e)[1],
				nowTime = new Date().getTime();


			if (swipeAngle === false) {
				swipeAngle = Math.abs((Math.atan2(downX-x, downY-y)*180)/Math.PI);
				if (45 > swipeAngle || swipeAngle > 135) {
					$doc.unbind(getEventType({mousemove: move, mouseup: up}));
					return true;
				}
			}
			if ($items[0].parent().parent().hasClass('g-contents')) {
				if (nowPage != 0) {
					$items[nowPage - 1].addClass('show');
					if ((max - 1) != nowPage) {
						$items[nowPage + 1].addClass('show');
					} else {
						$items[0].addClass('show');
					}
				} else {
					$items[nowPage + 1].addClass('show');
					$items[max - 1].addClass('show');
				} 
			}


			moved = x-downX;

			if (newstyle) {
				
				var movedcheck = x-returnX;
				var mapCheck = x-lastX;
				var faker = realX;
				var limitMg = Math.floor($wrapper.find(' > li').eq(max-1).css('marginLeft').replace('px', ''));
				var limit = $wrapper.find(' > li').eq(max-1).innerWidth() + (limitMg * 2);
				var half = limit / 2;
				if ((mapCheck > 0) && (lastX != 0) && (!isMobile)) {
					if (mapword == 'left') {
						recount = true;
						mapword = 'right';
					}
					if (recount) {
						limitCount = 1;
						recount = false;
						returnX = x;
					} 
					movedcheck = x-returnX;
					var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
 					var remakeRi = function () {
						var lastCont = $wrapper.find('> li').eq(max-1).attr('data-call');
						$wrapper.find('> li').eq(max-1).remove();
						$wrapper.prepend($items[lastCont]);
						limitCount++;
						realX = faker - (Math.abs(limit) * caseOne);
					}
					if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
						for (i=0;i<caseOne;i++) {
							remakeRi();
						}
					}
					mapword = 'right';
				} else if ((mapCheck < 0) && (lastX != 0) && (!isMobile)) {
					if (mapword == 'right') {
						recount = true;
						mapword = 'left';
					}
					if (recount) {
						limitCount = 1;
						recount = false;
						returnX = x;
					}
					movedcheck = x-returnX;
					var caseOne = Math.abs(Math.floor((Math.abs(movedcheck) + limit) / limit) - limitCount + 1);
					var remakeLe = function () {
						var lastCont = $wrapper.find('> li').eq(0).attr('data-call');
						$wrapper.find('> li').eq(0).remove();
						$wrapper.append($items[lastCont]);
						limitCount++;
						realX = faker + (Math.abs(limit) * caseOne);
					}
					if ((limit * limitCount) < (Math.abs(movedcheck) + half)) {
						for (i=0;i<caseOne;i++) {
							remakeLe();
						}
					}
					mapword = 'left';
				}
				moved = realX+(x-downX);
			}
			if (!endless && (!nowPage || nowPage == max-1)) {
				moved /= 2;
			}

			if (!useFade) $wrapper._css('translate3dX', moved);
			onMove(moved);

			if (nowTime-300 > startTime) {
				startTime = nowTime;
				baseX = x;
			}

			if (!isMobile && !blockerAdded) {
				$blocker.appendTo($box);
				blockerAdded = true;
			}

			lastX = x;
			$(document).on('mouseleave', function () {
				if ($('html').hasClass('firefox')) {
					up(e)
				}
			});
			e.preventDefault();


		}

		function onMove(v, moveOnly) {
			var now = $.isPlainObject(v) ? v.translate3dX : v;
			moveOnly !== true && eventMove && eventMove.call($box, now);
		}

		function up(e) {

			var x = getEventPoint(e)[0],
				movedvalue = x - baseX;

			if (x != downX) {
				if (!newstyle) {
					if (10 > Math.abs(x-downX)) {
						back();
					} else if (!movedvalue || new Date().getTime()-startTime > 300) {
						if (moved > boxWidth/2 && (endless || nowPage)) {
							toPrev(false, true);
						} else if (-boxWidth/2 > moved && (endless || nowPage != max-1)) {
							toNext(false, true);
						} else {
							back();
						}
					} else {
						if (movedvalue > 0 && (endless || nowPage)) {
							toPrev(false, true);
						} else if (0 > movedvalue && (endless || nowPage != max-1)) {
							toNext(false, true);
						} else {
							back();
						}
					}
				} else {
					dragPoint = false;
					
					limitCount = 1;
					if (isMobile) {
						if (Math.abs(movedvalue) > 10) {
							if (movedvalue > 0) {
								if (realAni) {
									changeNew(-1);
								}
							} else {
								if (realAni) {
									changeNew(1);
								}
							}
							changePhone = true;
						} else {
							$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
						}
					} else {
						$wrapper._animate({translate3dX:setX}, {duration: 300, easing: 'easeOutCubic', force3D: true, complete: callEnd});
					}
				}
			} else {
				setAutoPlay();
			}

			if (!isMobile && blockerAdded) {
				$blocker.detach();
				blockerAdded = false;
			}

			$doc.unbind(getEventType({mousemove: move, mouseup: up}));

		}
		function callEnd() {
			var center = $win.width() / 2;
			var allC = [];
			var allCsma = [];
			var full = $wrapper.find(' > li').length;
			for (i = 0;i<full;i++) {
				allC[i] = Math.abs($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
				allCsma[i] = Math.ceil($wrapper.find(' > li').eq(i).offset().left + ($wrapper.find(' > li').eq(i).innerWidth() / 2) - center);
			}
			var currin = Math.min.apply(null, allC);
    		var curr;
    		if(!Array.indexOf){
		        for(var i=0; i<allC.length; i++){
		            if(allC[i]==currin){
		                curr = i;
		            }
		        }
			} else {
				curr = allC.indexOf(currin);
			}
			nowPage = $wrapper.find(' > li').eq(curr).attr('data-call');
			setButtons();
			changeEnd();
			dragPoint = true;
		}

		function back() {
			wrapperMove(0, 'back');
		}

		function change(option) {
			var nextPage, moveTo, page = parseInt(option.to);
			if (!clickAble) {
				return false;
			}
			nextPage = typeof page == 'number' && !isNaN(page) ? page : this.getAttribute ? parseInt(this.getAttribute('data-page')) : null;
			if ($items[0].parent().parent().hasClass('g-contents')) {
				if (nextPage != 0) {
					$items[nextPage - 1].addClass('show');
					if ((max - 1) != nextPage) {
						$items[nextPage + 1].addClass('show');
					}
				} else {
					$items[nextPage + 1].addClass('show');
				}
			}
			if (nextPage !== null && nextPage != nowPage && nextPage > -1 && max > nextPage) {

				resize();
				if (useFade) {
					fade(nextPage, option.noAnimation);
				} else {
					moveTo = (nowPage-nextPage)*moveSize;
					readyToMove(nextPage);
					wrapperMove(moveTo, 'slide', option.noAnimation);
				}
			}
			return false;
		}

		function toPrev(e, fromSwipe, noAnimation) {
			var nextPage;
			if (!clickAble || (!endless && !nowPage)) {
				return false;
			}
			if (!newstyle) {
				nextPage = !nowPage ? max-1 : nowPage-1;
				if (useFade) {
					fade(nextPage, noAnimation);
				} else {
					readyToMove(nextPage, 'prev', fromSwipe);
					wrapperMove(moveSize, 'slide', noAnimation);
				}
			} else {
				if (realAni) {
					changeNew(-1);
				}
			}
			e && e.preventDefault();
			return false;
		}

		function toNext(e, fromSwipe, noAnimation) {
			var nextPage;
			if (!clickAble || (!endless && nowPage == max-1)) {
				return false;
			}
			if (!newstyle) {
				nextPage = nowPage == max-1 ? 0 : nowPage+1;
				if (useFade) {
					fade(nextPage, noAnimation);
				} else {
					readyToMove(nextPage, 'next', fromSwipe);
					wrapperMove(-moveSize, 'slide', noAnimation);
				}
			} else {
				if (realAni) {
					changeNew(1);
				}
			}
			e && e.preventDefault();
			return false;
		}

		function jump(option) {
			var direction, page = option.to;
			if (!clickAble || page == nowPage) {
				return false;
			}
			if (useFade) {
				change(option);
			} else {
				for (i = 0; i < max; i++) {
					if (!$items[0].parent().parent().hasClass('g-contents')) {
						i != page && i != nowPage && $items[i].hide();
					} else {
						i != page && i != nowPage && $items[i].removeClass('show');
					}	
				}
				direction = option.pretendTo ? option.pretendTo : nowPage > page ? 'prev' : 'next';
				readyToMove(page, direction);
				wrapperMove(direction == 'prev' ? moveSize : -moveSize, 'slide', option.noAnimation);
			}
			return false;
		}

		function readyToMove(nextPage, prevOrNext, withoutDisplays) {
			var from, to;
			if (!withoutDisplays) {
				if (prevOrNext) {
					appendItem(nextPage, prevOrNext == 'next' ? '100%' : '-100%');
				} else {
					from = Math.min(nowPage, nextPage);
					to = Math.max(nowPage, nextPage);
					for (i = from; i <= to; i++) {
						if (i != nowPage) {
							appendItem(i, (i-nowPage)*100+'%');
						}
					}
				}
			}

			ready(nextPage);
		}

		function ready(nextPage) {
			clearAutoPlay();
			clickAble = false;
			nowPage = nextPage;
			setButtons();
			eventChange && eventChange.call($box, nowPage, max);
			resize();
		}

		function appendItem(target, left) {
			if (!newstyle) {
				(typeof target == 'number' ? $items[target] : target).css({position: 'absolute', left: left}).show();
			}
			if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
				(typeof target == 'number' ? $items[target] : target).addClass('show');
			}
			
		}

		function fade(nextPage, noAnimation) {
			var fadeDelay;
			clearTimeout(fadeDelay);

			if (animate && !noAnimation) {
				appendItem(nowPage, 0);
				if (useTransition) {
					$items[nowPage]._animate({opacity: 0}, aniOption.fade);
					fadeDelay = $items[nextPage].show()._animate({opacity: 1}, aniOption.fade);

				} else {
					$items[nowPage]._animate({opacity: 0}, aniOption.fade);
					fadeDelay = setTimeout(function () {
						$items[nextPage].show()._animate({opacity: 1}, aniOption.fade);
					},500);
				}
				nowPage = nextPage;
				setButtons();
				ready(nextPage)
			} else {
				changeEnd();
			}
		}

		function wrapperMove(value, aniOptionKey, noAnimation) {
			if ($items[0].parent().parent().hasClass('g-contents')) {
				$items[nowPage].addClass('show');
			}
			if (animate && !noAnimation) {
				if (useTransition) {
					$wrapper._transition({translate3dX: value}, aniOption[aniOptionKey]);
				} else {
					$wrapper._animate({translate3dX: value}, aniOption[aniOptionKey]);
				}
			} else {
				changeEnd();
			}
		}

		function setButtons() {
			for (i = 0; i < max; i++) {
				if (paging) {
					$pagingItems[i][ ( i == nowPage )? 'addClass' : 'removeClass' ]('on');
				}
			}
			if (!endless && arrows) {
				$prev[!nowPage ? 'addClass' : 'removeClass' ]('disabled');
				$next[nowPage == max-1 ? 'addClass' : 'removeClass' ]('disabled');
			}
		}

		function changeEnd() {
			var $prevItem, $nextItem, $nowItem;
			for (i = 0; i < max; i++) {
				if (i == nowPage) {
					$items[i].css({position: 'relative', left: 0}).addClass('xlider-current show');
					$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
					$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1];
				} else {
					if ((!$items[0].parent().parent().hasClass('g-contents')) && (!newstyle)) {
						$items[i].hide().removeClass('xlider-current');
					} else {
						$items[i].removeClass('xlider-current show');
					}
				}
			}

			if ((!useFade) && (!newstyle)) {

				if ($fakeItem) {
					$fakeItem.remove();
					$fakeItem = null;
				}

				$wrapper._css('translate3dX', 0);

				$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
				$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
				$nowItem = $items[nowPage];

				if (endless && $prevItem[0] == $nextItem[0]) {
					$fakeItem = $prevItem.clone().addClass('xlider-fake');
					$fakeItem.appendTo($wrapper);
					appendItem($fakeItem, itemWidth, true);
				}

				for (i = 0; i < max; i++) {
					if ($prevItem && $items[i][0] == $prevItem[0]) {
						appendItem(i, '-'+ itemWidth);
					} else if ($nextItem && $items[i][0] == $nextItem[0]) {
						appendItem(i, itemWidth);
					}
				}

			}
			if (newstyle) {
				$prevItem = $items[!nowPage ? endless ? max-1 : -1 : nowPage-1],
				$nextItem = $items[nowPage == max-1 ? endless ? 0 : max : nowPage+1],
				$nowItem = $items[nowPage];
			}


			clickAble = true;

			eventChangeEnd && eventChangeEnd.call($box, nowPage, max);

			setAutoPlay();

		}

		function autoPlayAction() {
			jump({to: nowPage == max-1 ? 0 : nowPage+1, pretendTo: 'next'});
		}

		function clearAutoPlay() {
			clearTimeout(autoPlayTimer);
		}

		function setAutoPlay() {
			clearAutoPlay();
			if (autoPlaying) {
				autoPlayTimer = setTimeout(autoPlayAction, autoPlay);
			}
		}

		function toggleAuto(value) {
			autoPlaying = typeof(value) == 'boolean' ? value : !autoPlaying;
			if (!autoPlaying) {
				clearAutoPlay();
			} else {
				setAutoPlay();
			}
			return autoPlaying;
		}

		function setWrapperMS() {
			if (animate) {
				aniOption.slide.duration = animateDuration || Math.max(450, Math.min(moveSize, 750));
				aniOption.back.duration = (animateDuration || aniOption.slide.duration)*0.75;
				aniOption.fade.duration = animateDuration || 200;
			}
		}

		function itemFocusablesFocused() {
			var index;
			if ($box) {
				index = parseInt(this.getAttribute('data-xlider-page'));
				$box[0].scrollLeft = 0;
				setTimeout(function() {
					$box[0].scrollLeft = 0;
				}, 0);
				$box.xlider('change', index, true);
			}
		}

		function resize() {
			boxWidth = $box[0].offsetWidth;
			itemWidth = multiMode ? $items[0][0].offsetWidth : '100%';
			moveSize = multiMode ? itemWidth : boxWidth;
			if (newstyle) {
				clearTimeout(resetMover);
				resetMover = setTimeout(function() {
					settingView();
				}, 100);
			}
			setWrapperMS();
		}
		
	}

	function cancelEvent(e) {
		e.preventDefault();
	}

	

})(window.jQuery);

;(function($) {

	window.GALAXY = {

		isMobile: $.browser.mobile,
		isPoorBrowser: $.browser.ie && 9 > $.browser.ie,

		swipeAble: !!(!!$.browser.mobile || window.PointerEvent || window.MSPointerEvent),
		parallaxAble: !($.browser.ie && 9 > $.browser.ie) && !$.browser.mobile && $.support.transition,

		areaWidth: 0,
		areaHeight: 0,

		prevSizeMode: -1,
		sizeMode: 0,

		scrollBarWidth: 0,
		scrollTop: 0,

		mediaBaseURL: window.MEDIA_BASE_URL || '/',

		isTestURL: location.href.indexOf('samsung.com') < 0,
		
		isGalaxy: location.pathname.indexOf('/global/galaxy') === 0 || window.IS_CAMPAIGN === true,

		isGPSI: navigator.userAgent.toLowerCase().replace(/ /g, '').indexOf('googlepagespeedinsights') != -1,

		scrollFunctions: [],
		resizeFunctions: [],
		readyFunctions: [],
		loadFunctions: [],
		
		initialized: false,
		
		dom: {
			header: $('#header').get(0) || $('header').get(0)
		},

		sections: function() {

			var
				$wrap = $('#galaxy-a-pdp-wrap'),
				$contents = $('#galaxy-a-pdp-contents'),
				$sections = $contents.children('[class^="m_"]'),
				$subNav = $wrap.find('#subnav'),

				$blocks = [],
				$children = null,

				keyvisual = null,
				keyvisualType2 = null,
				controls = [],

				isMobile = GALAXY.isMobile,
				isPoorBrowser = GALAXY.isPoorBrowser,

				transformName = $.support.transform,
				supportTransition = $.support.transition,
				supportTransform = $.support.transform,

				parallaxAble = GALAXY.parallaxAble,
				parallaxAbleTypes = /^(x|y|s|a|c)$/,
				parallaxFloatTypes = /^(s|a)$/,

				i = 0, j = 0, numSections = $sections.length,
				k, kmax,
				numBlocks;


			if ($.browser.ie && $.support.canvas) {
				!$(document.documentElement).hasClass('s1') && $sections.not('#kv, .m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					GALAXY.imageResizeViaCanvas(this.children[0], this.children[0].offsetWidth, this.children[0].offsetHeight);
				});
				!$(document.documentElement).hasClass('s1') && !$(document.documentElement).hasClass('s2') && $sections.filter('.m_spec_list').find('span[class*="ico_obj-"]').each(function() {
					GALAXY.imageResizeViaCanvas(this.children[0], 200, 200);
				});
			}

			for (; i < numSections; i++, j++) {
				$blocks[j] = $($sections[i]);
				controls[j] = createControls($blocks[j]);
				if (!controls[j]) {
					for ($children = $blocks[j].children('[class^="m_"]'), k = 0, kmax = $children.length; k < kmax; j++, k++) {
						$blocks[j] = $($children[k]);
						controls[j] = createControls($blocks[j]);
					}
					if (kmax) {
						j--;
					} else {
						controls[j] = getArticleControl($blocks[j]);
					}
				}
			}
			numBlocks = $blocks.length;

			$contents.find('a[data-layer-toggle]').each(GALAXY.setLayerToggler);

			$.browser.ie && $('[class*="logo_galaxy-"] img').each(function() {
				var ieFix = this.getAttribute('data-ie-fix');
				if (ieFix != 'no') {
					this.src = this.src.replace('.png', (ieFix || '_ie') +'.png');
				}
			});


			keyvisual = (function() {

				var $visual = $sections.filter('#kv, #kv-type2'),
					$article = $visual.find('article'),
					$title = $article.find('[class*="f_header-"] .kv-title'),
					$text = $article.find('[class*="f_header-"] .kv-text'),
					$figure = $article.find('figure'),
					$image = $figure.find('img'),
					$video = $figure.find('video'),
					$preButton = $article.find('div.f_btn_pre'),

					imageDisplayed = false,
					tryToVideoPlay = false,

					minWidthBound = 0.75,
					sizeMode, areaWidth, areaHeight,
					show = false,
					type, setImage;


				if (!$visual.length) {
					GALAXY.header && GALAXY.header.onKeyVisualShow();
					return {resize: $.noop};
				}


				type = $visual.attr('id').match('kv-type([0-9])');
				type = type ? parseInt(type[1]) : 1;

				if (!isPoorBrowser) {
					$article.bind({'video-play-kv': videoPlay, 'video-pause-kv': videoPause});
				}
				$title.show();
				$text.show();
				$preButton.show();


				function videoPlay() {
					tryToVideoPlay = true;
					if (imageDisplayed) {
						$article.trigger('video-play');
					}
				}

				function videoPause() {
					tryToVideoPlay = false;
					$article.trigger('video-pause');
				}

				function onImageShow() {
					imageDisplayed = true;
					tryToVideoPlay && videoPlay();
				}

				function getMobileImageHeight() {
					for (var i = 0; i < $image.length; i++) {
						if ($image[i].offsetHeight) {
							return $image[i].offsetHeight;
						}
					}
				}

				setImage = {

					1: function() {

						var imageWidth = areaHeight/9*16,
							visualTop = '',
							visualWidth = Math.min(areaWidth, 1440),
							visualHeight = areaHeight;

						if (sizeMode > 2) {
							if (visualWidth > imageWidth) {
								imageWidth = visualWidth;
							}
							if (imageWidth*minWidthBound > visualWidth) {
								imageWidth = visualWidth/(minWidthBound*10)*10;
								visualHeight = Math.round(imageWidth/16*9);
							}
							if (imageWidth/16*9 > visualHeight) {
								visualTop = (visualHeight-imageWidth/16*9)/2;
							}
						} else {
							imageWidth = visualWidth = areaWidth;
							$figure.css('width', areaWidth);
							visualTop = (areaHeight-getMobileImageHeight())/2;
							visualHeight = areaHeight;
						}

						$visual.css({height: visualHeight});
						$figure.css({top: visualTop, width: imageWidth, marginLeft: Math.min(0, (visualWidth-imageWidth)/2)});
						$video.css('height', imageWidth*0.5625);

						setImage.after(500, 1500, $text.length ? 3000 : 2000, 1500);

					},

					2: function() {
						setImage.after(1000, 500, 2000);
					},

					after: function(delayForTitle, delayForText, delayForPreButton) {
						if (!show) {
							if ($title.get(0)) {
								$title.parent().show();
							} else {
								$text.parent().show();
							}
							if ($article.hasClass('invisible')) {
								onImageShow();
							} else {
								if (!isPoorBrowser) {
									if (GALAXY.sizeMode>1) {
									} else {
										onImageShow();
									}
								}
							}
							show = true;
						}
						GALAXY.header && GALAXY.header.onKeyVisualShow();
					}

				}

				return {
					scroll: function(v) {
					},
					resize: function resize(_sizeMode) {
						sizeMode = _sizeMode;
						areaWidth = Math.min(GALAXY.areaWidth, 1440);
						areaHeight = GALAXY.areaHeight;
						GALAXY.loadImage($image, setImage[type]);
					}
				};

			})();

			function createControls($section) {

				var className = $section.attr('class') || '',
					$children = $section.children().not('nav'),
					i = 0, numChildren = $children.length;

				if ((/^m_feature/).test(className) && (/article/i).test($section[0].nodeName)) {
					return getArticleControl($section);
				} else if (numChildren == 1) {
					if (className.indexOf('m_product_gallery') != -1) {
						return getProductGalleryControl($section);
					} else if (className.indexOf('m_content-colorset') != -1) {
						return getProductColorsetControl($children);
					} else if (className.indexOf('m_content-video') != -1) {
						return getVideoControl($children);
					} else {
						return getArticleControl($children);
					}
				} else if (className) {
					if (className.indexOf('m_spec_list') != -1) {
						return getSpecListControl($section);
					} else if (className.indexOf('m_content-slider') != -1) {
						return getSliderControl($section);
					} else if (className.indexOf('m_content-tab') != -1) {
						return getTabControl($section);
					}
				}

			}

			function getVideoControl($article) {

				var $figureContainer = $article.find('.f_container'),
					$playButton  = $figureContainer.find('a'),
					control = getArticleControl($article),
					added = false,
					videoId = '',
					videoParam = '';

				control.name = 'video';

				$playButton.click(function() {
					if (!added) {
						videoId = $playButton.attr('href').split('?v=')[1];
						videoParam = $playButton.attr('data-video-param');
						if (supportTransition) {
							GALAXY.setTransitionEndEvent($playButton.find('img.play'), addVideo);
							$article.parent().addClass('video-added');
						} else {
							addVideo();
						}
						added = true;
					}
					return false;
				});

				function addVideo() {
					$('<iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="'+ GALAXY.getYoutubePlayerLink(videoId, true, videoParam) +'"></iframe>')
						.appendTo($article).focus();
				}

				return control;

			}

			function getProductColorsetControl($article) {

				var $buttons = $article.find('nav a'),
					$images = $article.find('.f_container figure'),
					$fakeSlider = null,
					$fakeSliderItems = null,
					control = getArticleControl($article),
					prevColor = 0,
					nowColor = 0,
					i = 0, numColors = $buttons.length;
					
				
				if (!$images.get(0)||$images.length<2) {
					return getArticleControl($article);
				}

				control.name = 'colorset';

				if (GALAXY.swipeAble) {
					$fakeSlider = $('<div class="fake-slider" />');
					$fakeSliderItems = [];
				}
				for (; i < numColors; i++) {
					$buttons[i] = $($buttons[i]).attr('data-index', i)
						.bind('click', changeColor);
					$images[i] = $($images[i]).show();
					if (i && !isPoorBrowser) {
						$($images[i]).css('opacity', 0);
					}
					if ($fakeSlider) {
						$fakeSliderItems[i] = $('<div class="fake-slider-item" />').appendTo($fakeSlider);
					}
				}
				$images[0].css('zIndex', 1);

				if ($fakeSlider) {
					$fakeSlider.appendTo($article);
					$fakeSlider.xlider({
						endless: true,
						swipe: true,
						onMove: function(v) {
							var percent = Math.abs(v)/$fakeSlider[0].offsetWidth;
							$images[nowColor]._css({opacity: 1-percent});
							$images[0 > v ? nowColor == numColors-1 ? 0 : nowColor+1 : !nowColor ? numColors-1 : nowColor-1]
								.css('opacity', percent);
						},
						onChange: function(page) {
							setButtons(page);
						},
						onChangeEnd: function(page) {
							$images[nowColor]._css('translate3dX', 0);
							changed(page);
							onColorChanged();
						}
					});
				}

				function changeColor() {
					var index = parseInt(this.getAttribute('data-index'));
					if (nowColor != index) {
						setButtons(index);

						changed(index);
						
						$images[index].stop().css({zIndex: 1, opacity: 0, 'display': 'block'})
							.animate({opacity: 1}, 500, 'easeInOutSine', function () {
								onColorChanged();
							});
						$images[prevColor].stop().animate({'opacity': 0}, 500);
					}
					return false;
				}

				function setButtons(index) {
					$buttons[nowColor].removeClass('on');
					$buttons[index].addClass('on');
				}

				function changed(index) {
					prevColor = nowColor;
					nowColor = index;
				}

				function onChanging(v) {
					$images[prevColor].css('opacity', 1-v.opacity);
				}

				function onColorChanged() {
					$images[prevColor].css('zIndex', 0);
				}

				return control;

			}

			function getSpecListControl($section) {

				var
					$mask = $section.find('div.m_inner'),
					$list = $mask.find('> ul'),
					$moreButton = $section.find('div.m_more a'),
					$moreButtonText = $moreButton.find('em'),
					control = getArticleControl($section),
					opened = false;


				control.name = 'spec';

				$moreButton.click(more);
				$moreButtonText.html('Learn more');
				if (GALAXY.hashMenu == 'spec') {
					setTimeout(more, 1000);
				}


				function more() {
					if (!opened) {
						GALAXY.setHash('spec');
						GALAXY.setSmoothScrollTop($section[0].offsetTop + ($subNav.length ? -$subNav[0].offsetHeight : 0), 750);
						$mask._animate({height: $list[0].offsetHeight}, {queue: false, duration: 750, easing: 'easeInOutQuint', complete: onMore});
						opened = true;
					} else {
						less();
					}
					return false;
				}

				function onMore() {
					$mask.addClass('on').css('height', '');
					$moreButtonText.html('Close');
				}

				function less() {
					var $checker, lessHeight;
					if (opened) {
						GALAXY.setHash('');
						$checker = $mask.clone().removeClass('on').appendTo($mask.parent());
						lessHeight = $checker[0].offsetHeight;
						$checker.remove();
						$mask.__animate({height: lessHeight}, {queue: false, duration: 750, easing: 'easeInOutQuart', complete: onLess});
						opened = false;
					}
				}

				function onLess() {
					$mask.removeClass('on').css('height', '');
					$moreButtonText.html('Learn more');
				}

				return control;

			}

			function getProductGalleryControl($section) {

				var
					$body = $(document.body),

					$sliders = $section.find('div.m_list'),
					$sliderItems = [],
					$nav = $section.find('nav'),
					$prev = $nav.find('a[class$=prev]'),
					$next = $nav.find('a[class$=next]'),
					$colors = $nav.find('div.c_paging-type2 a'),
					$items = [],
					$opener = null,
					hashname = $section.attr('data-hash-name'),
					layerId = $section.attr('data-layer-id'),
					$layer = $((layerId===undefined||layerId==='') ? '#layer-gallery' : '#'+layerId),
					$layerColorName = $layer.find('.c_txt_ly-type1 em'),
					$layerList = $layer.find('ul.ly_gallery_list'),
					$layerPrev = $layer.find('button[class$=prev]'),
					$layerNext = $layer.find('button[class$=next]'),
					$layerPagingBox = $layer.find('div.m_paging_type1'),
					$layerClose = $layer.find('button.c_btn_close-type1'),
					$baseContentsArea = $('#galaxy-a-pdp-wrap'),
					$baseContentsClickable = null,

					$perspectiveImagesForRubbishIE,
					lastSettedPerspectiveImageName = 'ie...',

					layerAdded = false,
					layerSetted = false,
					layerPagingClick = false,

					hasListImage = $section.attr('data-has-list-image'),
					lastSizeMode = -1,
					regSizeModeImageName = /(_s[1-4])?\.png/,

					colorNames = [],

					nowPage = 0,
					nowLayerPage = 0,
					prevLayerPage = null,
					nowColor = 0,
					clickAble = true,
					isSincing = false,

					numSliderItems = $sliders.length,
					numPages = $sliders.first().find('> ul').length,
					numItems = $sliders.first().find('li').length,

					control = getArticleControl($section),
					
					readyClassName = 'product-gallery-ready-for-load',
					src = '',
					imageSizeMode = '',

					i = 0, j;

				if ((hashname === undefined) || (hashname === '')) {
					hashname = 'gallery';
				}


				if (hasListImage) {
					hasListImage += ',';
				}

				$colors.bind('click touchend', changeColor);

				for (; i < numSliderItems; i++) {
					$sliderItems[i] = $($sliders[i]);
					$colors[i] = $($colors[i]).attr('data-index', i);
					$items[i] = $sliderItems[i].find('li');
					for (j = 0; j < numItems; j++) {
						$items[i][j] = $($items[i][j]);
						$items[i][j].find('a').attr('data-index', j).click(showLayer);
						if (!isMobile && !isPoorBrowser) {
							$items[i][j].find('a').bind({mouseenter: itemHover, mouseleave: itemLeave, focus: itemHover, blur: itemLeave});
						}
						if (i==0) {
							src = GALAXY.setMediaBaseURL($items[i][j].find('img').attr('data-image'));
							if (hasListImage) {
								imageSizeMode = (hasListImage.indexOf(GALAXY.sizeMode+',') != -1) ? GALAXY.sizeMode : hasListImage.split(',')[0];
								src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
							}
							$items[i][j].find('img').attr('src', src);
						} else {
							$items[i][j].find('img').addClass(readyClassName);
						}
					}
					colorNames[i] = $colors[i].text();
				}
				
				$section.bind('welcome', function() {
					$('.'+readyClassName).each(function() {
						src = GALAXY.setMediaBaseURL($(this).attr('data-image'));
						if (hasListImage) {
							imageSizeMode = (hasListImage.indexOf(GALAXY.sizeMode+',') != -1) ? GALAXY.sizeMode : hasListImage.split(',')[0];
							src = src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						}
						$(this).attr('src', src).removeClass(readyClassName);
					});
				});

				$sliders.xlider({
					swipe: GALAXY.swipeAble,
					onChange: function(page) {
						isSliding = true;
						if (!isSincing) {
							setButtons(page);
						}
					},
					onChangeEnd: function() {
						if (!isSincing) {
							isSliding = false;
						}
					}
				});
				$prev.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('prev', i != nowColor);
					}
					isSincing = false;
					return false;
				});
				$next.click(function() {
					for (var i = 0; i < numSliderItems; i++) {
						isSincing = i != nowColor;
						$sliderItems[i].xlider('next', i != nowColor);
					}
					isSincing = false;
					return false;
				});

				control.setSizeMode = function(sizeMode) {
					if (lastSizeMode != sizeMode) {
						hasListImage && setSizeModeImages(sizeMode);
						lastSizeMode = sizeMode;
					}
					resizeLayer();
				}
				control.name = 'product-gallery';

				setButtons(0);
				colorChanged();

				if (GALAXY.hashMenu == hashname) {
					$sliderItems[nowColor].find('a').eq(0).click();
				}


				function setSizeModeImages(sizeMode) {
					var imageSizeMode = (hasListImage.indexOf(sizeMode+',') != -1) ? sizeMode : hasListImage.split(',')[0];
					$section.find('div.m_list img').each(function() {
						var src = this.src.replace(regSizeModeImageName, '_s'+ imageSizeMode +'.png');
						if (this.src!=src) {
							this.src = src;
						}
					});
				}

				function itemHover() {
					!isSliding && itemFocusing(parseInt(this.getAttribute('data-index')));
				}

				function itemLeave() {
					!isSliding && itemFocusing(-1);
				}

				function itemFocusing(index) {
					var sizeMode = GALAXY.sizeMode;
					for (i = 0, $currentItems = $items[nowColor]; i < numItems; i++) {
						$currentItems[i]._stop()._animate({opacity: (index == -1 || i == index) ? 1 : 0.5}, {queue: false, duration: 350, easing: 'easeOutQuad'});
					}
				}

				function showLayer() {
					var index = parseInt(this.getAttribute('data-index'));
					if (!layerAdded) {
						$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
						$baseContentsClickable.each(function() {
							var tabindex = $(this).attr('tabindex');
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						});
						$opener = $(this);
						setLayerContent();
						$layerColorName.html(colorNames[nowColor]);
						$layerList.xlider('change', index, true);
						if (!isPoorBrowser) {
							$layerList[0].children[index].style.opacity = 1;
						}
						$layer.addClass('show');
						GALAXY.setHash(hashname);
						GALAXY.noScroll.on();
						layerAdded = true;
						resizeLayer();
					}
					return false;
				}

				function setLayerContent() {

					var $images = $sliderItems[nowColor].find('img'),
						$imageButtons = $sliderItems[nowColor].find('a'),
						$layerImages, i;

					if (!layerSetted) {
						for (i = 0; i < numItems; i++) {
							$('<li><span><img alt=""></span></li>').appendTo($layerList);
							$('<a href="#"><span>'+ $images[i].alt +'</span></a>').appendTo($layerPagingBox);
						}
						for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
							$layerImages[i].alt = $images[i].alt;
						}
						$layerClose.bind('click touchend', hideLayer);
						$layerPagingBox.find('a').click(function() {
							layerPagingClick = true;
						}).each(function(i) {
							var omni = $imageButtons.eq(i).attr('data-omni');
							if (omni&&omni.length>0) {
								$(this).attr({'data-omni':omni}).click(GALAXY.tracking);
							}
						});
						$layerList.xlider({
							endless: true,
							swipe: GALAXY.swipeAble,
							onMove: !isPoorBrowser ? onLayerSliderMove : null,
							arrows: [$layerPrev, $layerNext],
							paging: $layerPagingBox,
							onChange: function(page) {
								prevLayerPage = nowLayerPage;
								nowLayerPage = page;
							},
							onChangeEnd: function(page) {
								prevLayerPage = null;
								layerPagingClick = false;
							}
						});
						$layer.bind('touchmove', GALAXY.preventDefault);
						layerSetted = true;
					}

					for ($layerImages = $layerList.find('img'), i = 0; i < numItems; i++) {
						$layerImages[i].src = $images[i].src.replace(regSizeModeImageName, '.png');
					}
					if (hasListImage && $.browser.ie) {
						$perspectiveImagesForRubbishIE = $layerList.find('img[src*="-perspective"]');
					}

				}

				function checkPerspectiveImageSize() {
					var imageName;
					if ($perspectiveImagesForRubbishIE) {
						imageName = $layerList[0].offsetHeight > 650 ? '' : '_m';
						if (imageName != lastSettedPerspectiveImageName) {
							$perspectiveImagesForRubbishIE.each(function() {
								this.src = this.src.replace(/(_m)?\.png/i, imageName +'.png');
							});
							lastSettedPerspectiveImageName = imageName;
						}
					}
				}

				function onLayerSliderMove(now) {

					if (layerPagingClick) {
						return;
					}

					return;

					var children = $layerList[0].children,
						minWidth = $layerList[0].offsetWidth/3,
						maxWidth = minWidth*2,
						currentIndex = prevLayerPage !== null ? prevLayerPage : nowLayerPage,
						percent, i = 0;

					for (; i < numItems; i++) {
						if (i == currentIndex) {
							percent = 1-Math.min(1, Math.abs(now)/minWidth);
							children[i].style.opacity = percent;
						} else if ((now > 0 && (i == currentIndex-1 || i == numItems-1)) ||
							(0 > now && (i == currentIndex+1 || i == 0))) {
							percent = Math.max(0, Math.min(1, (Math.abs(now)-maxWidth)/minWidth));
							children[i].style.opacity = percent;
						}
					}

				}

				function resizeLayer() {
					if (layerAdded) {
						$layerList.css('marginTop', ($layerList[0].parentNode.offsetHeight-$layerList[0].offsetHeight)/2);
						checkPerspectiveImageSize();
					}
				}

				function hideLayer() {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					$opener && $opener.focus();
					$opener = null;
					GALAXY.setHash('');
					GALAXY.setTransitionEndEvent($layer, function() {
						GALAXY.noScroll.off();
					});
					layerAdded = false;
					lastSettedPerspectiveImageName = '...';
					return false;
				}

				function changeColor() {
					var index;
					if (clickAble) {
						index = parseInt(this.getAttribute('data-index'));
						if (index != nowColor) {
							clickAble = false;
							if (!isPoorBrowser) {
								$sliderItems[nowColor]._animate({opacity: 0}, {queue: false, duration: 500, easing: 'easeInOutQuad'});
								$sliderItems[index].addClass('over')
									.css({zIndex: 1, opacity: 0}).show()
									._animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: colorChanged});
							}
							nowColor = index;
							for (i = 0; i < numSliderItems; i++) {
								$($colors[i]).decideClass('on', i == nowColor);
							}
							if (isPoorBrowser) {
								$sliderItems[index].css({zIndex: 1}).show();
								colorChanged();
							}
						}
					}
					return false;
				}

				function colorChanged() {
					clickAble = true;
					for (i = 0; i < numSliderItems; i++) {
						$sliderItems[i].removeClass('over').css({zIndex: 0});
						if (i != nowColor) {
							$sliderItems[i].hide();
						}
					}
				}

				function setButtons(_nowPage) {
					var i;
					nowPage = _nowPage;
					$prev.decideClass('hide', !nowPage);
					$next.decideClass('hide', nowPage == numPages-1);

					if (!nowPage) {
						$prev.attr('tabindex', -1).css('zIndex', -1);
						$prev.on('click', function () {
							$next.focus();
						});
					}else {
						$prev.attr('tabindex', 0).css('zIndex', 2);
					}
					if (nowPage == numPages-1) {
						$next.attr('tabindex', -1).css('zIndex', -1);
					}else {
						$next.attr('tabindex', 0).css('zIndex', 2);
						$next.on('click', function () {
							$prev.focus();
						});
					}
					isSincing = true;
					for (i = 0; i < numSliderItems; i++) {
						i != nowColor && $sliderItems[i].xlider('change', nowPage, true);
					}
					isSincing = false;
				}

				return control;
				
			}
			
			function getSliderControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not('nav, .fixedCont'),
					$slider = $items.wrapAll('<div style="height: 100%;" />').parent(),
					$prev = $nav.find('a[class*=-prev]'),
					$next = $nav.find('a[class*=-next]'),
					$pagingBox = $nav.find('[class^="m_paging_type"]'),
					$paging = [],
					controls = [],
					pagingOmnitureBase = $pagingBox.attr('data-omni'),
					pagingNameBase = $pagingBox.attr('data-alt'),
					pagingIsNumbering = $pagingBox.hasClass('numbering'),
					lastVisiblePercent = 0,
					lastVisibility = false,
					lastInvisibility = true,
					regThemeArrow = /m_btn_type([0-9]+)/,
					regThemePage = /m_paging_type([0-9]+)/,
					themeArrowDefault = 1,
					themePageDefault = 1,
					nowPage = -1,
					i = 0, numItems = $items.length,
					gaer360Swipe = GALAXY.swipeAble;

				if (regThemeArrow.test($prev.attr('class'))) {
					themeArrowDefault = parseInt($prev.attr('class').match(regThemeArrow)[1]);
				}
				if (regThemePage.test($pagingBox.attr('class'))) {
					themePageDefault = parseInt($pagingBox.attr('class').match(regThemePage)[1]);
				}
				if (pagingNameBase == undefined) {
					pagingNameBase = $section[0].parentNode.className.indexOf('m_content_sub') != -1 ? 'Sub Feature' : 'Feature';
				}
				pagingNameBase = pagingNameBase ? pagingNameBase +' ' : '';

				for (; i < numItems; i++) {
					$items[i] = $($items[i]).bind('tab-changed', setTheme);
					if (!pagingIsNumbering) {
						$paging[i] = $('<a href="#" data-page="'+ i +'"'+ (
							pagingOmnitureBase ? ' data-omni="'+ pagingOmnitureBase.replace('<no>', (i+1)) +'"' : '') +'><span>'+ pagingNameBase + (i+1) +'</span></a>')
							.click(changePage)
							.appendTo($pagingBox);
					}
					controls[i] = createControls($($items[i]));
				}
				if (pagingIsNumbering) {
					$paging = $('<span />').appendTo($pagingBox);
				}
				if ( $section.hasClass('m_content-slider') ) {
					$section.each(function() {
						if ( $(this).hasClass('videos') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_left:index_' + (index + 1));
							});
						} else if ( $(this).hasClass('banners') ) {
							$(this).find('.m_paging_type2 a').each(function() {
								var index = $(this).index();
								$(this).attr('data-omni', ':banner_right:index_' + (index + 1));
							});
						}
					});
				}
				if ($section.attr('id') == 'quality') gaer360Swipe = false;

				$slider.xlider({
					swipe: gaer360Swipe,
					onChange: setButtons,
					endless: $('.main_contents').find($section),
					onChangeEnd: setVisibles
				});
				$prev.click(function() {
					$slider.xlider('prev');
					return false;
				});
				$next.click(function() {
					$slider.xlider('next');
					return false;
				});
				setButtons(0);


				function changePage() {
					var page = parseInt(this.getAttribute('data-page'));
					$slider.xlider('jump', page);
					return false;
				}

				function setButtons(_nowPage) {
					nowPage = _nowPage;
					if (pagingIsNumbering) {
						$paging.html((nowPage+1) +'/'+ numItems);
					} else{
						for (i = 0; i < numItems; i++) {
							$paging[i].decideClass('on', i == nowPage);
						}
					}
					if ( ! $('.main_contents').find($section) ) {
						$prev.decideClass('hide', !nowPage);
						$next.decideClass('hide', nowPage == numItems-1);
					}
					setTheme();
					$section.trigger('xlider-changed', {page: nowPage});
				}

				function setTheme() {
					if (0 > nowPage) {
						return;
					}
					var $currentItem = controls[nowPage].name == 'tab' ? controls[nowPage].getCurrentItem() : $items[nowPage],
						themeArrow = $currentItem.attr('data-theme-arrow') || themeArrowDefault,
						themePage = $currentItem.attr('data-theme-page') || themePageDefault;
					$prev.attr('class', $prev.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$next.attr('class', $next.attr('class').replace(regThemeArrow, 'm_btn_type'+ themeArrow));
					$pagingBox.attr('class', $pagingBox.attr('class').replace(regThemePage, 'm_paging_type'+ themePage));
				}

				function setVisibles() {
					setParallax(lastVisiblePercent);
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
					for (i = 0; i < numItems; i++) {
						i != nowPage && controls[i].resetVideo();
					}
				}

				function setParallax(visiblePercent) {
					lastVisiblePercent = visiblePercent;
					for (var i = 0; i < numItems; i++) {
						controls[i].setParallax(visiblePercent);
					}
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowPage ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(2 >Math.abs(nowPage-i) ? invisible : true);
					}
				}

				return {
					name: 'slider',
					resetVideo: function() {	
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: function(sizeMode) {	
						for (var i = 0; i < numItems; i++) {
							controls[i].setSizeMode(sizeMode);
						}
					},
					setParallax: setParallax,
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getTabControl($section) {

				var $nav = $section.find('> nav'),
					$items = $section.children().not($nav),
					$tabs = $nav.find('a'),
					$itemHeaders = [],
					controls = [],
					lastVisibility = false,
					lastInvisibility = true,
					lastZIndex = 0,
					nowIndex = -1,
					isNewTabModule = $nav[0].className.indexOf('c_tab2-') != -1,
					isFirst = true,
					i = 0, numItems = $items.length;


				for (; i < numItems; i++) {
					$items[i] = $($items[i]);
					if (isNewTabModule) {
						$itemHeaders[i] = $items[i].find('[class*="f_header-"]');
					}
					controls[i] = createControls($items[i]);
				}
				$tabs.click(tabChange).eq(0).click();


				function tabChange() {
					var index = $tabs.index(this),
						i = 0;
					if (index != nowIndex) {
						nowIndex = index;
						$items[index].css({left: 0, zIndex: ++lastZIndex});
						if (!isPoorBrowser) {
							$items[index].css({opacity: 0})
								.animate({opacity: 1}, {queue: false, duration: 500, easing: 'easeInOutQuad', complete: setVisibles});
								if (!isFirst&&$.browser.firefox) {
									setVisibles();
								}
						}
						$nav.css('zIndex', lastZIndex+1);
						$tabs.removeClass('on').eq(index).addClass('on');
						$section.trigger('tab-changed');
						resize(GALAXY.sizeMode, !isFirst);
						if (isFirst) {
							$nav.show();
							isFirst = false;
						}
					}
					return false;
				}

				function setVisibles() {
					setVisible(lastVisibility);
					setInvisible(lastInvisibility);
				}

				function setVisible(visible) {
					lastVisibility = visible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setVisible(i == nowIndex ? visible : false);
					}
				}

				function setInvisible(invisible) {
					lastInvisibility = invisible;
					for (var i = 0; i < numItems; i++) {
						controls[i].setInvisible(i == nowIndex ? invisible : true);
					}
				}

				function resize(sizeMode, animate) {
					for (var i = 0; i < numItems; i++) {
						controls[i].setSizeMode(sizeMode);
					}
					if (isNewTabModule) {
						$nav['_'+ (isPoorBrowser || animate !== true ? 'css' : 'animate')]({top: $itemHeaders[nowIndex][0].offsetTop+$itemHeaders[nowIndex][0].offsetHeight},
							{duration: 500, easing: 'easeInOutCubic'});
					}
				}

				return {
					name: 'tab',
					getCurrentItem: function() {
						return $items[nowIndex];
					},
					resetVideo: function() {	
						for (var i = 0; i < numItems; i++) {
							controls[i].resetVideo();
						}
					},
					setSizeMode: resize,
					setParallax: function(visiblePercent) {
						for (var i = 0; i < numItems; i++) {
							controls[i].setParallax(visiblePercent);
						}
					},
					setVisible: setVisible,
					setInvisible: setInvisible
				}

			}

			function getArticleControl($article) {

				var $figures = $article.find('figure'),
					$images = $article.find('figure img'),
					$parallaxs = null,

					imageSources = [],
					parallaxs = [],

					videos = [],
					hasVideo = false,
					videoPlaying = false,
					videoHided = false,

					show = false,
					visible = false,
					invisible = false,
					welcome = true,
					hello = [],

					isKeyvisual = $article.parent().attr('id') == 'kv',
					isParallaxVideo = false,

					$parallaxer = $({p: 0}),
					parallaxAnimateOption = {queue: false, duration: 850, bystep: false, rounding: false, easing: 'easeOutQuint', step: onParallaxAnimate},

					i, j, max;


				for (i = 0, max = $figures.length; i < max; i++) {

					$figures[i] = $($figures[i]);

					$images[i] = $($images[i]);
					imageSources[i] = GALAXY.getImageSources($images[i]);

					videos[i] = GALAXY.setVideoControl($figures[i], $article);

					hasVideo = hasVideo || videos[i];

					isParallaxVideo = isParallaxVideo || $figures[i].attr('data-parallax-video');

				}

				$parallaxs = $article.find('[data-parallax]');
				for (i = 0, max = $parallaxs.length; i < max; i++) {
					$parallaxs[i] = $($parallaxs[i]);
					parallaxs[i] = $parallaxs[i].attr('data-parallax');
					if (parallaxs[i]) {
						parallaxs[i] = parallaxs[i].split('|');
						for (j = 0; j < parallaxs[i].length; j++) {
							parallaxs[i][j] = parallaxs[i][j].split(',');
							if (parallaxAbleTypes.test(parallaxs[i][j][0])) {
								parallaxs[i][j][10] = parallaxs[i][j][0].toLowerCase();
								parallaxs[i][j].shift();
							} else {
								parallaxs[i][j][9] = 'y';
							}
							if (parallaxs[i][j][9] != 'c') {
								parallaxs[i][j][0] = parseFloat(parallaxs[i][j][0]);
								parallaxs[i][j][1] = parallaxs[i][j][0]-parseFloat(parallaxs[i][j][1]);
								if (parallaxs[i][j][2] !== undefined) {
									parallaxs[i][j][5] = parseFloat(parallaxs[i][j][2]);
								}
								if (parallaxs[i][j][3] !== undefined) {
									parallaxs[i][j][6] = parseFloat(parallaxs[i][j][3]);
								}
								parallaxs[i][j][2] = 0;
								parallaxs[i][j][3] = 0;
								parallaxs[i][j][4] = 0;
								if (parallaxs[i][j][9] == 's') {
									parallaxs[i][j][2] = parallaxs[i][j][0];
								}
							}
						}
					}
				}
				
				hello = $article.data('hello');
				if (!hello) {
					hello = [];
				}

				function onParallaxAnimate(v) {
					for (var properties, value, transform,
							i = 0, j, max = $parallaxs.length; i < max; i++) {
						for (j = 0, properties = {}, transform = '';
								j < parallaxs[i].length; j++) {
							if (parallaxs[i][j][9] == 'c') {
								continue;
							}
							value = parallaxs[i][j][3]+(parallaxs[i][j][4]-parallaxs[i][j][3])*v.p;
							properties[parallaxs[i][j][9]] = parallaxs[i][j][2] = value;
						}
						$parallaxs[i][0].style[transformName] = [
								'scale(', properties.s !== undefined ? properties.s : 1, ', ', properties.s !== undefined ? properties.s : 1, ')', ' ',
								'translate3d(', properties.x || 0, 'px, ', properties.y || 0, 'px, 0)'
							].join('');
						if (properties.a !== undefined) {
							$parallaxs[i][0].style.opacity = properties.a;
						}
					}
				}

				function resetVideo() {
					hasVideo && $article.trigger('video-reset');
				}
				

				return {

					name: 'article',
					resetVideo: resetVideo,

					setSizeMode: function(sizeMode) {
						for (var newSrc, i = 0, max = $figures.length; i < max; i++) {
							newSrc = ''+imageSources[i][sizeMode];
							if ($images[i][0] && $images[i][0].src && ($images[i][0].src.indexOf(newSrc.replace('/','')) == -1)) {
								$images[i][0].src = GALAXY.setMediaBaseURL(newSrc);
							}
							if (hasVideo) {
								$article.trigger('video-change');
								if (3 > sizeMode && !videoHided) {
									$article.trigger('video-hide');
									videoHided = true;
								} else if (sizeMode > 2) {
									if (videoHided) {
										$article.trigger('video-show');
										videoHided = false;
									} else {
										if (GALAXY.prevSizeMode!==sizeMode) {
											$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
										}
									}
								}
							}
						}
					},

					setParallax: function(visiblePercent) {
						var i, j, max, valueTo, sizeMode;
						if (parallaxAble) {
							visiblePercent = Math.max(0, visiblePercent, Math.min(1, visiblePercent));
							sizeMode = GALAXY.sizeMode;
							$parallaxer._stop();
							if (3 > sizeMode) {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										parallaxs[i][j][2] = 0;
									}
									$parallaxs[i][0].style[transformName] = $parallaxs[i][0].style.opacity = '';
								}
							} else {
								for (i = 0, max = $parallaxs.length; i < max; i++) {
									for (j = 0; j < parallaxs[i].length; j++) {
										if (parallaxs[i][j][9] == 'c') {
											window[parallaxs[i][j][0]] && window[parallaxs[i][j][0]](visiblePercent);
										} else {
											parallaxs[i][j][3] = parallaxs[i][j][2];
											valueTo = parallaxs[i][j][0]-parallaxs[i][j][1]*visiblePercent;
											if (parallaxs[i][j][5] !== undefined) {
												valueTo = Math.max(parallaxs[i][j][5], valueTo);
											}
											if (parallaxs[i][j][6] !== undefined) {
												valueTo = Math.min(parallaxs[i][j][6], valueTo);
											}
											if (sizeMode == 3 && parallaxs[i][j][9] != 's' && parallaxs[i][j][9] != 'a') {
												valueTo *= 0.75;
											}
											if (!parallaxFloatTypes.test(parallaxs[i][j][9])) {
												valueTo = Math.round(valueTo);
											}
											parallaxs[i][j][4] = valueTo;
										}
									}
								}
								$parallaxer[0].p = 0;
								$parallaxer._animate({p: 1}, parallaxAnimateOption);
							}

							if (hasVideo && !videoHided && isParallaxVideo && visiblePercent && 1 > visiblePercent) {
								$article.trigger('video-parallax', visiblePercent);
							}

						}
					},

					setVisible: function(_visible) {
						if (_visible) {
							if (!show) {
								$article.addClass('show');
								show = true;
							}
							if (!visible) {
								$article.addClass('visible').trigger('visible');
								visible = true;
							}
							if (hasVideo && !videoPlaying && !isParallaxVideo) {
								$article.trigger(isKeyvisual ? 'video-play-kv' : 'video-play');
								videoPlaying = true;
							}
						} else {
							if (visible) {
								$article.removeClass('visible');
								visible = false;
							}
						}
					},

					setInvisible: function(_invisible) {
						if (_invisible) {
							if (!invisible) {
								if (hasVideo && videoPlaying && !isParallaxVideo) {
									$article.trigger(isKeyvisual ? 'video-pause-kv' : 'video-pause');
									videoPlaying = false;
								}
								if (hello.length) {
									$.each(hello, function(i) {
										if ($article.hasClass(this.css)) {
											if (typeof(this.off)=='function') {
												this.off();
											}
											$article.removeClass(this.css);
										}
									});
								}
								$article.addClass('invisible').trigger('inactive').trigger('invisible');
								resetVideo();
								invisible = true;
								this.updateHelloPosition();
							}
						} else {
							if (invisible) {
								$article.removeClass('invisible').trigger('active');
								invisible = false;
							} else {
								if (welcome) {
									$article.trigger('active');
								}
							}
							if (welcome) {
								$article.trigger('welcome');
								welcome = false;
							}
							this.updateHelloPosition();
						}
						
						if (!invisible) {
							this.checkHello();
						}
						
						
						
					},
					
					updateHelloPosition: function() {
						if (hello.length) {
							$.each(hello, function() {
								this.helloTop = this.$elementTop.offset().top;
								this.helloBottom = this.$elementBottom.offset().top + this.$elementBottom.height();
								this.viewportHeight = $(window).height();
							});
						}
					},
					
					checkHello: function() {
						if (hello.length) {
							$.each(hello, function(i) {
								var baseLine = ((''+this.baseLine).toLowerCase().indexOf('px')>-1)
													? parseInt(this.baseLine)
													: this.viewportHeight/parseInt(this.baseLine,10);
								
								if (this.helloTop<GALAXY.scrollTop+this.viewportHeight-baseLine
									&&this.helloBottom>GALAXY.scrollTop+baseLine) {
									if (!$article.hasClass(this.css)) {
										$article.addClass(this.css);
										if (typeof(this.on)=='function') {
											this.on();
										}
									}
								}
							});
						}
					}

				}

			}

			function scroll(scrollTop, maxScrollTop) {

				var sizeMode = GALAXY.sizeMode,
					areaHeight = GALAXY.areaHeight,
					blockTop, blockHeight,
					visibleSize, visibleHeight, visiblePercent, visibleBase,
					i = 0, j, jmax;

				for (; i < numBlocks; i++) {
					blockTop = !i ? $blocks[i][0].offsetTop-scrollTop : $blocks[i][0].getBoundingClientRect().top;
					
					if (blockTop>0||$blocks[i].css('display')!='none') {
						
						blockHeight = $blocks[i][0].offsetHeight;
		
						if (!i) {
							visibleSize = 1-((blockHeight+blockTop)/blockHeight);
						} else {
							visibleSize = -(blockTop-areaHeight)/(areaHeight+blockHeight);
						}
						if (parallaxAble) {
							visiblePercent = visibleSize;
							if (visiblePercent >= -0.15 && 1.15 >= visiblePercent) {
								controls[i].setParallax(visiblePercent);
							}
						}
		
						visibleBase = Math.min(blockHeight*0.66, GALAXY.areaHeight*0.66);
						visibleHeight = Math.min(areaHeight, 0 >= blockTop ? blockHeight+blockTop : Math.min(blockHeight, areaHeight-blockTop));
						controls[i].setVisible(visibleHeight >= visibleBase);
		
						controls[i].setInvisible(0 > visibleSize || visibleSize > 1);
					}

				}

				keyvisual.scroll && keyvisual.scroll(scrollTop);

			}

			function resize() {

				var i = 0, sizeMode = GALAXY.sizeMode;

				for (; i < numBlocks; i++) {
					controls[i].setSizeMode(sizeMode);
				}

				keyvisual.resize(sizeMode);

			}

			return {
				scroll: scroll,
				resize: resize
			}

		},

		setVideoControl: function($figure, $article, $cover) {
			var $video = null,
				source = '',
				setVideoimg = $figure.find('.setting-img'),
				isKeyvisual = ($article.attr('class') || '').indexOf('-kv') != -1,
				ready = false,
				tryToPlay = false,
				coverHided = false,
				videoHided = false,
				preferWebm = false,
				justOne = true,
				tweener = null,
				invisible = true,
				duration = 0,
				sizeMode = 0,
				noneplay = $figure.attr('data-none-play'),
				autoplayText = '',
				coverImg = $figure.attr('data-set-img'),
				newVideo = $figure.attr('data-media-v4'),
				canvasLoop = $figure.attr('data-canvas-loop'),
				mobileCheck = GALAXY.isMobile;


			if (newVideo != undefined) {
				mobileCheck = false;
			}
			if ((10 > $.browser.ie) || mobileCheck || GALAXY.isPoorNetwork) {
				if ($cover == undefined) {
					removeReady();
					return false;
				}
			}
			if ($cover == undefined) {
				$cover = $figure.find('img:not(".setting-img")');
			}


			source = $figure.attr('data-media-video') || $figure.attr('data-media-v4');
			if (newVideo != undefined) {
				source = newVideo;
				var isCount = 0;
				$(document).on('touchstart', function () {
					if (isCount == 0) {
						isCount = 1;
						$('video').each(function () {
							$(this)[0].load();
						});
					}
				});
			}
			if (!source) {
				return false;
			}
			if (noneplay === undefined) {
				autoplayText = ' autoplay'
			}
			source = GALAXY.setMediaBaseURL(source);
			source = {
				mp4: '<source src="'+ source +'.mp4" type="video/mp4">',
				webm: '<source src="'+ source +'.webm" type="video/webm">',
				ogv: '<source src="'+ source +'.ogv" type="video/ogg">'
			}
			preferWebm = $figure.attr('data-video-prefer-webm');

			if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
				$canvers = $figure.append('<canvas class="canvas"></canvas>');
			}
			var videoTitle = $figure.attr('data-video-title');
			$video = $([
				'<video muted' , $.browser.firefox ? autoplayText : '', ' ', $figure.attr('data-video-setting'), '>',
					preferWebm ? source.webm : source.mp4,
					preferWebm ? source.mp4 : source.webm,
					source.ogv,
				'</video>'].join(''))
				.bind({
					play: function() {
						if (invisible && newVideo == undefined) {
							$video[0].pause();
							$video[0].currentTime = 0;
						} else {
							$video[0].play();
						}
					},
					playing: function() {
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							justOne = false;
							setTimeout(function () {
								$video[0].pause();
								$video[0].currentTime = -0.1;
							}, 1000);
							
						}
					},
					canplay: function() {
						if (!ready) {
							ready = true;
							duration = this.duration;
							if (mobileCheck) {
								!isKeyvisual && GALAXY.sizeMode > 2 && hideCover();
							}
							tryToPlay && play();
						}
						if (justOne && (newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
							$video[0].play();
						} 
						removeReady();
					},
					ended: function() {
						$video.addClass('playend');
					},
					error: function() {
						removeReady();
					}
				})
				.insertBefore($cover);

			if ($.browser.android) {
				$video.on('click', function () {
					$video[0].play();
				});
			}

			setTimeout(function() {
				if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
					if (canvasLoop == 'loop') {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas'),
							loop: true
						});
					} else {
						var canvasVideo = new CanvasVideoPlayer({
							videoSelector: $video,
							canvasSelector: $figure.find('canvas')
						});
					}
				} else if (newVideo == undefined){
					$video[0].load();
				}
			}, 100);

			$article.bind({
				visible: function() {
					invisible = false;
					if ((newVideo != undefined) && !$.browser.android && !$('html').hasClass('desktop')) {
						coverHided = false;
						videoHided = true;
						if (noneplay != 'none') {
							$figure.find('canvas').click();
						}
					} else if ((newVideo != undefined) && $.browser.android && !$('html').hasClass('desktop')) {
						coverHided = true;
						videoHided = false;
						if ((noneplay != 'none') && ($(this).find('video').length > 0)) {
							$(this).find('video')[0].play();
						}
					} else if (newVideo != undefined) {
						coverHided = true;
						videoHided = false;
						if (noneplay != 'none') {
							$(this).find('video')[0].play();
						}
					}
					else {
						if ( GALAXY.sizeMode < 3 ) {
							coverHided = true;
							videoHided = false;
						} else {
							coverHided = false;
							videoHided = false;
						}
					}
				}, invisible: function() {
					invisible = true;
					if ((newVideo != undefined) && $(this).find('video').length > 0 && $('html').hasClass('firefox')) {
						$(this).find('video')[0].pause();
						$(this).find('video')[0].currentTime = 0;

					}
				},
				'video-play': play, 'video-pause': pause, 'video-reset': reset, 'video-show': show, 'video-hide': hide, 'video-change': changSrc, 'video-parallax': parallax});


			function removeReady() {
				if(setVideoimg) {
					setVideoimg.remove();
				}
			}

			function play() {
				tryToPlay = true;
				if (ready && !videoHided && (noneplay != 'none')) {
					hideCover();
					videoPlay();
				}
			}

			function videoPlay() {
				if (!$video.hasClass('playend')) {
					$video.css('opacity', '')[0].play();
					coverHided = false;
				}
			}

			function hideCover() {
				if (ready && !coverHided) {
					$cover.css('visibility', 'hidden');
					$video.css('visibility', '');
					coverHided = true;
				}
			}

			function pause() {
				tryToPlay = false;
				ready && $video[0].pause();
			}

			function reset() {
				if (ready) {
					$video[0].pause();
					$video[0].currentTime = 0;
					$video.removeClass('playend');
				}

			}

			function show() {
				hideCover();
				ready && tryToPlay && videoPlay();
				videoHided = false;
			}

			function hide() {
				if (newVideo == undefined) {
					if (coverHided || GALAXY.sizeMode<3) {
						$video[0].pause();
						$cover.css('visibility', '');
						$video.css('visibility', 'hidden');
						coverHided = false;
						videoHided = true;
					}
				} else {
					videoHided = false;
				}
			}

			function changSrc() {
				if (newVideo != undefined) {
					var getVideoSources = function($figure) {
						var s3 = $figure.attr('data-media-v3') ,
							s2 = $figure.attr('data-media-v2') || s3,
							s1 = $figure.attr('data-media-v1') || s2;
						return [null, s1, s2, s3];
					}
					var _sizeMode = GALAXY.sizeMode;
					if (_sizeMode != sizeMode) {
						sizeMode = _sizeMode;
						if (getVideoSources($figure)[sizeMode] == 'none' || getVideoSources($figure)[sizeMode] == 'NONE') {
							$video[0].pause();
							$cover.css('visibility', '');
							$video.css('visibility', 'hidden');
							coverHided = false;
							videoHided = true;
						} else {
							$cover.css('visibility', 'hidden');
							$video.css('visibility', '');
							var crateSouce = '<source src="' + getVideoSources($figure)[sizeMode] + '.mp4" type="video/mp4"><source src="'+ getVideoSources($figure)[sizeMode] +'.webm" type="video/webm"><source src="'+ getVideoSources($figure)[sizeMode] +'.ogv" type="video/ogg">'
							$video.innerHTML = crateSouce;
							$video[0].load();
							coverHided = false;
							videoHided = true;
						}
						
					}
				}
			}

			var parallaxer = {currentTime: 0},
				prevVideoTime = 0;

			function parallax(e, visiblePercent) {
				if (ready) {
					visiblePercent = Math.max(0, Math.min(1, (visiblePercent*1.25)-0.125));
					tweener && tweener.kill();
					tweener = TweenMax.to(parallaxer, 0.5, {
						startAt: {currentTime: $video[0].currentTime},
						currentTime: Math.min(duration-0.05, duration*visiblePercent),
						ease: 'easeOutQuad',
						lazy: true,
						onUpdate: function() {
							$video[0].currentTime = parallaxer.currentTime;
							return;
							var current = Math.round(parallaxer.currentTime*10000)/10000;
							if (prevVideoTime != current) {
								$video[0].currentTime = current;
								prevVideoTime = current;
							}
						}
					});
				}
			}

			return true;

		},

		setLayerToggler: function() {

			var $button = $(this),
				$layer = $($button.attr('href')),
				$layerTitle = $layer.find('.layer-title'),
				$opener = null,
				opened = false;

			if (!$layer.length) {
				return;
			}

			$button.click(function() {
				$opener = $button;
				show();
				return false;
			});

			$layer.find('button[class*="c_btn_close"]').click(hide);

			function show() {
				if (!opened) {
					$layer.addClass('show');
					GALAXY.noScroll.on();
					$layerTitle.focus();
					opened = true;
				}
			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$opener && $opener.focus();
					$opener = null;
					GALAXY.setTransitionEndEvent($layer, function() {
						GALAXY.noScroll.off();
					});
					opened = false;
				}
			}

		},

		vodPlayer: (function() {

			var $layer, $layerTitle, $iframeBox, $iframe, $closeButton,
				$opener = null,
				opened = false,
				$baseContentsArea = null,
				$baseContentsClickable = null,
				isKeydown = false;


			function show(url, opener, autoplay) {

				var id = url.split('?v=')[1];
				
				if (!$layer) {
					$layer = $([
						'<div id="layer-youtube" class="m_layer-youtube"><div class="m_ly_inner">',
							'<span class="layer-title" tabindex="0">Movie player Layer</span>',
							'<div class="m_ly_header">',
								'<h3 class="c_txt_ly-type1 heading">Official introduction</h3>',
							'</div>',
							'<div class="m_ly_contents">',
								'<div class="m_video_view"><iframe frameborder="0" allowfullscreen="1" title="YouTube video player" src="about:blank"></iframe></div>',
							'</div>',
							'<nav><button type="button" class="c_btn_close-type1">Youtube Close</button></nav>',
						'</div></div>'
					].join(''));
					$layerTitle = $layer.find('span.layer-title');
					$iframe = $layer.find('iframe');
					$iframeBox = $iframe.parent();
					$closeButton = $layer.find('button[class*="_btn_close"]');
					$closeButton.one('keydown', function() {
						isKeydown = true;
					});
					$closeButton.bind('click touchend', hide);
					$layer.bind('touchmove', GALAXY.preventDefault)
						.appendTo(document.body);
				}
				$baseContentsArea = $('#wrap');
				$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
				$baseContentsClickable.each(function() {
					var tabindex = $(this).attr('tabindex');
					if (tabindex!==undefined&&tabindex!==null) {
						$(this).data('prev-tabindex', tabindex);
					}
					$(this).attr('tabindex','-1');
				});

				if (!opened) {
					if (opener) {
						$opener = $(opener);
					}
					$iframe.attr('src', GALAXY.getYoutubePlayerLink(id, autoplay)).appendTo($iframeBox);
					$layer.addClass('show');
					$layerTitle.focus();
					GALAXY.noScroll.on();
					opened = true;
				}

			}

			function hide() {
				if (opened) {
					$layer.removeClass('show');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
					});
					isKeydown && $opener && $opener.focus();
					$opener = null;
					GALAXY.setTransitionEndEvent($layer, function() {
						$iframe.attr('src', 'about:blank').detach();
						GALAXY.noScroll.off();
					});
					opened = false;
				}
				isKeydown = false;
			}

			return {
				show: show,
				hide: hide
			}

		})(),

		getYoutubePlayerLink: function(id, autoplay, option) {
			return 'https://www.youtube.com/embed/'+ id +'?enablejsapi=1&version=3&autoplay='+ (autoplay ? 1 : 0) +'&wmode=opaque' + (option&&option!=''?'&'+option:'');
		},

		imageResizeViaCanvas: (function() {

			function canvasResizer(_image, width, height, widthTo, heightTo, callback) {
				var canvas = document.createElement('canvas'),
					context = canvas.getContext('2d'),
					image = new Image();
				image.onload = function() {
					canvas.width = widthTo;
					canvas.height = heightTo;
					context.drawImage(image, 0, 0, widthTo, heightTo);
					this.onload = null;
					this.src = canvas.toDataURL();
					callback(this);
				}
				image.src = _image.src;
			}

			return function(image, widthTo, heightTo) {

				var resizedImage = new Image(),
					nowWidth, nowHeight;

				resizedImage.onload = function() {
					nowWidth = this.width;
					nowHeight = this.height;
					this.onload = null;
					check(this);
				}
				resizedImage.src = image.src;

				function check(_image) {
					resizedImage = _image;
					if (nowWidth/2 > widthTo && nowHeight/2 > heightTo) {
						canvasResizer(resizedImage, nowWidth, nowHeight, nowWidth/2, nowHeight/2, check);
						nowWidth = nowWidth/2;
						nowHeight = nowHeight/2;
					} else if (nowWidth) {
						canvasResizer(resizedImage, nowWidth, nowHeight, widthTo, heightTo, check);
						nowWidth = nowHeight = 0;
					} else {
						image.src = resizedImage.src;
					}
				}

			}

		})(),

		noScroll: (function() {

			var $documentElement,
				$wrap,
				$header,
				$headerButtonBox,
				$gnbBox,
				$gnbCloseButton,
				$subNavGnbBox,
				$topButtonBox,
				scrollBarWidth;

			function assign() {
				$documentElement = $(document.documentElement);
				$wrap = $('#wrap');
				$header = $(GALAXY.isGalaxy?'#header':GALAXY.dom.header);
				$headerButtonBox = $header.find('p.link');
				$gnbBox = $('#gnb');
				$gnbContentsBox = $gnbBox.find('.g-contents');
				$gnbCloseButton = $gnbBox.find('p.g-close a');
				$subNavGnbBox = $('#subnav p.gnb');
				$subNavPreButton = $('#subnav p.pre-button');
				$topButtonBox = $('div.f_backtotop');
				scrollBarWidth = GALAXY.scrollBarWidth;
			}

			return {
				activated: false,
				on: function() {
					var paddingRight = 0;
					!$documentElement && assign();
					GALAXY.scrollFixSkip = true;
					$documentElement.addClass('no-scroll').css('paddingRight', scrollBarWidth);
					if (GALAXY.areaWidth > 1440+scrollBarWidth) {
						paddingRight = scrollBarWidth;
						$gnbBox.css('paddingRight', paddingRight);
						$gnbBox.addClass('wide');
					} else {
						$gnbBox.removeClass('wide');
					}
					$topButtonBox.css('paddingRight', scrollBarWidth);
					if ($wrap.hasClass('subnav-fixed')) {
						$subNavGnbBox.css('marginRight', scrollBarWidth-paddingRight);
						$subNavPreButton.css('marginRight', scrollBarWidth-paddingRight);
					}
					GALAXY.noScroll.activated = true;
					GALAXY.noScroll.resize();
				},
				off: function() {
					GALAXY.noScroll.activated = false;
					GALAXY.scrollFixSkip = false;
					$documentElement.removeClass('no-scroll').css('paddingRight', '');
					$gnbBox.css('paddingRight', '');
					$gnbContentsBox.css('right', '');
					$gnbCloseButton.css('marginRight', '');
					$topButtonBox.css('paddingRight', '');
					$subNavGnbBox.css('marginRight', '');
					$subNavPreButton.css('marginRight', '');
					GALAXY.noScroll.resize();
				},
				resize: function() {
					!$documentElement && assign();
					if (GALAXY.isPoorBrowser) {
						return;
					}
					var marginRight = Math.round((GALAXY.areaWidth-(($header[0])?$header[0].offsetWidth:0))/2);
					if (GALAXY.noScroll.activated) {
						marginRight += GALAXY.scrollBarWidth;
					}
					$headerButtonBox.css('marginRight', marginRight);
				}
			}

		})(),
		
		bodyTabKeyControls: (function() {
			
			var $baseContentsArea, $baseContentsClickable;
			
			return {
				on: function() {
					$baseContentsClickable.each(function() {
						var tabindex = $(this).data('o-prev-tabindex');
						if (tabindex!==undefined&&tabindex!==null) {
							$(this).attr('tabindex',tabindex);
						} else {
							$(this).removeAttr('tabindex');
						}
						$(this).removeData('o-prev-tabindex');
					});
					$baseContentsArea = $baseContentsClickable = null;
				},
				off: function($base) {
					$baseContentsArea = $base ? $base : $('#galaxy-a-pdp-wrap');
					$baseContentsClickable = $baseContentsArea.find('a,input,select,textarea,button,video,iframe');
					$baseContentsClickable.each(function() {
						var tabindex = $(this).attr('tabindex');
						var prevTabindex = $(this).data('o-prev-tabindex');
						if (prevTabindex==undefined||prevTabindex==null||prevTabindex=="") {
							if (tabindex!==undefined&&tabindex!==null) {
								$(this).data('o-prev-tabindex', tabindex);
							}
							$(this).attr('tabindex','-1');
						}
					});
					
				},
			}
		})(),

		setOverflowYEdges: function($target) {

			var pointYAtStart, getPoint = $._event.getpoint;

			$target.bind('touchstart', function(e) {
				pointYAtStart = GALAXY.getEventPoint(e)[1];
			});

			$target.bind('touchmove', function(e) {
				var pointY = GALAXY.getEventPoint(e)[1];
				if (
					( this.scrollTop === 0 && pointY > pointYAtStart ) ||
					( this.scrollTop >= this.scrollHeight-this.offsetHeight && pointYAtStart > pointY )
				) {
					e.preventDefault();
					return false;
				}
				e.stopPropagation();
				return true;
			});

		},

		getImageSources: function($image) {
			var s3 = $image.attr('data-media-s3') || $image.attr('src')
				s2 = $image.attr('data-media-s2') || s3,
				s1 = $image.attr('data-media-s1') || s2;
			return [null, s1, s2, s3];
		},

		setTabFocusTrap: function($box, $toFocus, tabIndex) {
			$('<div tabindex="'+ (tabIndex || 0) +'" />')
				.focus(function() {
					$toFocus.focus();
				})
				.appendTo($box);
		},

		getEventType: $._event.gettype,
		getEventPoint: $._event.getpoint,

		setTransitionEndEvent: (function() {
			var supportTransition = $.support.transition,
				transitionEndName = 'transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd msTransitionEnd';
			return function($target, callback) {
				if (supportTransition) {
					$target.bind(transitionEndName, function(e) {
						if (e.target == this) {
							callback.call(this);
							$target.unbind(transitionEndName);
						}
					});
				} else {
					callback.call($target[0]);
				}
			}
		})(),

		loadImage: function($image, callback) {
			if ($image[0].complete) {
				$image.unbind({load: callback});
				callback.call($image);
			} else {
				if ($image[0].src==$image[0].src) {
					if ($image[0].complete) {
						$image.unbind({load: callback});
						callback.call($image);
					} else {
						$image.unbind({load: callback}).bind({load: callback});
					}
				} else {
					$image.bind({load: callback});
					$image[0].src = $image[0].src;
				}
			}
		},

		setMediaBaseURL: function(mediaBaseURL) {
			return function(src) {
				return (/^(http|\/global\/)/).test(src)||(''+src).indexOf('.')==0 ? src : mediaBaseURL+src;
			}
		},

		sharing: function() {

			var
				$body = $(document.body),
				provider = GALAXY.stripTags(this.innerHTML).replace(/ /g, '').toLowerCase(),
				url = encodeURIComponent(location.href),
				message = encodeURIComponent(this.getAttribute('data-share-msg') || $body.attr('data-msg') || ''),
				tags = encodeURIComponent(this.getAttribute('data-share-tags') || $body.attr('data-tags') || 'SamsungMobile'),
				popupSize, popupURL, popup;
				
			if (provider == 'facebook') {
				popupSize = [560, 525];
				popupURL = 'https://www.facebook.com/sharer/sharer.php?u='+ url;
			} else if (provider == 'twitter') {
			
				popupSize = [680, 400];
				popupURL = 'https://twitter.com/intent/tweet?text='+ message +'&hashtags='+ tags + (url ? '&url='+ url : '');
			} else if (provider == 'googleplus' || provider == 'google+') {
				popupSize = [510, 510];
				popupURL = 'https://plus.google.com/share?url='+ url;
			} else if (provider == 'linkedin') {
				popupSize = [550, 500];
				popupURL = 'https://www.linkedin.com/shareArticle?url='+ url;
			}

			popup = GALAXY.popup(popupURL, popupSize[0], popupSize[1], 'shareWindow');
			popup && popup.focus();

			return false;	
		
		},

		setHash: function(hash) {
			var href = location.href.split('#')[0];
			location.replace(href +'#!/'+ (hash || ''));
		},
		
		scrollTracking: function() {
			var omniCode = $(this).data('omni-scroll-code');
			var prevOmniCode = GALAXY.___scroll_omniCode;
			GALAXY.___scroll_omniCode = omniCode;
			if (omniCode!=null&&omniCode!=''&&omniCode!=prevOmniCode) {
				GALAXY.omniture('scroll:'+omniCode);
			}
		},

		tracking: function() {
			var omniCode = this.getAttribute('data-omni');
			var omniType = this.getAttribute('data-omni-type');
			if (omniCode!=null&&omniCode!='') {
				GALAXY.omniture(omniCode, omniType);
			}
		},

		omniture: function(name, type) {
			var omniTag,
				isMicrositeAction = (type&&type!='') ? false : true;
			if (GALAXY.isGalaxy) {
				omniTag = [
					'global:', (window.OMNI_CAMPAIGN_NAME || ''),
					name.indexOf(':') !== 0 ? ':'+ (window.OMNI_PAGE_NAME || '') +':'+ name : name
				].join('');
				if (GALAXY.isTestURL) {
					console.log('omniture: "'+ omniTag +'"');
				} else {
					window.omniture_click && omniture_click(omniTag);
				}
			} else {
				type = (isMicrositeAction) ? 'microsite_action' : type;
				if (isMicrositeAction) {
					
					omniTag = name.indexOf(':') !== 0 ? (window.OMNI_PAGE_NAME || '') +':'+ name : name.substring(1);
				} else {
					omniTag = name;
				}
				if (GALAXY.isTestURL) {
					console.log('omniture : "'+ type +'", "'+ omniTag +'"');
				} else {
					window.sendClickCode && sendClickCode(type, omniTag);
				}
			}
		},

		svgFillTween: (function() {
			if (!$.browser.ie) {
				return function(element, color) {
					element.setAttribute('fill', color);
				}
			} else {
				return function(element, color) {
					$('span').css('color', element.getAttribute('fill'))
						._animate({color: color}, {queue: false, duration: 250, easing: 'easeInOutQuad', step: function(v) {
							element.setAttribute('fill', v.color);
						}});
				}
			}
		})(),

		popup: function(url, width, height, name) {
			return window.open(url, name || '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+ (width+GALAXY.scrollBarWidth) +',height='+ height);
		},

		stripTags: function(text) {
			return text.replace(/<[^>]+>/g, '');
		},

		addZero: function(value) {
			return 10 > value ? '0'+ value : value;
		},

		preventDefault: function(e) {
			e.preventDefault();
		},

		returnFalse: function() {
			return false;
		},

		getScrollTop: function() {
			return document.documentElement.scrollTop || document.body.scrollTop || 0;
		},

		getScrollHeight: function() {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
		},

		getMaxScrollTop: function() {
			return GALAXY.getScrollHeight()-GALAXY.areaHeight;
		},

		setScrollTop: function(v) {
			$(window).scrollTop(v);
		},

		setSmoothScrollTop: function(v, time, callback) {
			$('html, body')._animate({scrollTop: v}, {queue: false, duration: time || 1000, easing: 'easeInOutQuart', complete: callback});
		},

		getScrollBarWidth: function() {
			var div = document.createElement('div'), scrollBarWidth;
			div.style.cssText = 'position: absolute; left: -999em; width: 100px; height: 100px; overflow: scroll;';
			document.body.appendChild(div);
			scrollBarWidth = 100-div.clientWidth;
			document.body.removeChild(div);
			div = null;
			return scrollBarWidth;
		},
		
		scroll: (function(e) {
			
			var
				ie = navigator.userAgent.match(/(?:msie ([0-9]+)|rv:([0-9\.]+)\) like gecko)/i),
				webkit = (/applewebkit/i).test(navigator.userAgent),
				documentElement = document.documentElement,
				scrollCaptured = false,
				lastScrollTop = 0,
				maxScrollTop = 0;

			if ((/win/i).test(navigator.appVersion) && ie) {
				$(documentElement)
					.bind('mousewheel', function(e) {
						if (GALAXY.scrollFixSkip === true) {
							return true;
						}
						scrollFix(e.originalEvent.wheelDelta*-1);
						e.preventDefault();
					})
					.bind('keydown', function(e) {
						if (GALAXY.scrollFixSkip) {
							return true;
						}
						var keyCode = e.keyCode, documentHeight = documentElement.clientHeight, newScrollTop;
						if ((/^(32|33|34|38|40)$/).test(keyCode)) {
							scrollFix(keyCode == 32 || keyCode == 34 ? documentHeight : keyCode == 33 ? -documentHeight : keyCode == 38 ? -75 : 75);
							e.preventDefault();
						}
					});
			}

			function scrollFix(scrollBy) {
				var newScrollTop = Math.min(getMaxScrollTop(), Math.max(0, getScrollTop()+scrollBy));
				if (newScrollTop != lastScrollTop) {
					scroll(newScrollTop);
					scrollCaptured = true;
					document[webkit ? 'body' : 'documentElement'].scrollTop = newScrollTop;
				}
			}

			function getScrollTop() {
				return documentElement.scrollTop || (document.body ? document.body.scrollTop : 0) || 0;
			}

			function getMaxScrollTop() {
				return Math.max(document.body ? document.body.scrollHeight : 0, documentElement.scrollHeight)-Math.min(documentElement.offsetHeight, documentElement.clientHeight);
			}

			function scroll(_scrollTop) {

				var scrollTop = typeof(_scrollTop) == 'number' ? _scrollTop : getScrollTop();
				lastScrollTop = scrollTop;
				if (scrollCaptured) {
					scrollCaptured = false;
					return false;
				}

				GALAXY.scrollTop = scrollTop;
				maxScrollTop = getMaxScrollTop();

				GALAXY.scrollTop = scrollTop;
				GALAXY.header && GALAXY.header.scroll && GALAXY.header.scroll(scrollTop, maxScrollTop);
				GALAXY.sections && GALAXY.sections.scroll && GALAXY.sections.scroll(scrollTop, maxScrollTop);
				GALAXY.footer && GALAXY.footer.scroll && GALAXY.footer.scroll(scrollTop, maxScrollTop);

				if (GALAXY.scrollFunctions.length) {
					$.each(GALAXY.scrollFunctions, function() {
						this(scrollTop, maxScrollTop);
					});
				}

			}

			return scroll;

		})(),
		
		
		hello: function(selector, opt) {
			var $element = $(selector), arr,
				$article = $element.closest('section[class^="m_"] > article');
			if ($article&&$article.get(0)) {
				arr = $article.data('hello');
				if (!arr) {
					arr = [];
				}
				if (!opt) {
					opt = {};
				}
				opt.css = (!opt.css) ? (arr.length) ? 'hello-'+(arr.length+1) : 'hello' : opt.css;
				opt.$elementTop = $element;
				opt.$elementBottom = (!opt.bottom) ? $element : $(opt.bottom);
				opt.baseLine = (!opt.baseLine) ? 3 : opt.baseLine;
				arr.push(opt);
				$article.data('hello', arr);
			}
			return this;
		},
		
		

		resize: function(func) {
			
			if (typeof(func)=='function') {
				this.resizeFunctions.push(func);
				return this;
			}

			var documentElement = document.documentElement,
				width, height, sizeMode;

			width = documentElement.clientWidth;
			if (GALAXY.isPoorBrowser) {
				width = Math.max(document.getElementById('pdp-wrap').offsetWidth, width);
			}
			height = $(window).height();
			
			if (func !== true) {
				if (!$.browser.mobile && width == GALAXY.areaWidth && height == GALAXY.areaHeight) {
					return;
				} else if ($.browser.mobile && width == GALAXY.areaWidth) {
					return;
				}
			}

			sizeMode = width > 1023 ? 3 : width > 719 ? 2 : 1;
			GALAXY.prevSizeMode = GALAXY.sizeMode;
			if (sizeMode != GALAXY.sizeMode) {
				GALAXY.sizeMode = sizeMode;
				documentElement.className = documentElement.className.replace(/ *s[1-4][1-4]?/g, '') +' s'+ sizeMode +' s'+ (sizeMode > 2 ? 34 : 12);
			}
			documentElement.className = documentElement.className.replace(/ *s0/, '') + (360 > width ? ' s0' : '');

			GALAXY.areaWidth = width;
			GALAXY.areaHeight = height;

			GALAXY.header && GALAXY.header.resize && GALAXY.header.resize();
			GALAXY.sections && GALAXY.sections.resize && GALAXY.sections.resize();
			GALAXY.footer && GALAXY.footer.resize && GALAXY.footer.resize();
			GALAXY.noScroll.resize();

			if (GALAXY.resizeFunctions.length) {
				$.each(GALAXY.resizeFunctions, function() {
					this();
				});
			}

			GALAXY.scroll();

		},
		
		ready: function(func) {
			if (func===undefined) {
				if (this.readyFunctions.length) {
					$.each(this.readyFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.readyFunctions.push(func);
				}
			}
			return this;
		},
		
		load: function(func) {
			if (func===undefined) {
				if (this.loadFunctions.length) {
					$.each(this.loadFunctions, function() {
						this();
					});
				}
			} else {
				if (typeof(func)=='function') {
					this.loadFunctions.push(func);
				}
			}
			var checkGnb = location.href.split('/#')[1];
			var gnbhash = ['gnb_products', 'gnb_how-tos', 'gnb_gallery', 'gnb_events', 'gnb_apps'];
			var hash = gnbhash.indexOf(checkGnb);
			if (checkGnb != undefined && hash != -1) {
				$('#header p.menu a').click();
			}
			return this;
			
		},

		initialize: function() {
			
			if (this.initialized) {
				return;
			}
			this.initialized = true;
			
			
			(function() {
				var lt = 3, key = '___GALAXY_SPEED', st = (window.___GALAXY_START_TIME)?___GALAXY_START_TIME:(new Date()).getTime(), 
					val = $._cookie.get(key), speed = (val=='L') ? 'L' : (val=='H') ? 'H' : ((new Date()).getTime()-st>lt*1000) ? 'L' : 'H';
				
				var $footer = GALAXY.isGalaxy ? $('#footer') : $('.m_dotcom_footer'),
					$network = $footer.find('.select-network a.network'),
					$networkOptions = $footer.find('.select-network .option'),
					statusText = $network.text(),
					speedText = '',
					setNetworkSpeed = function(speed) {
						$._cookie.set(key, speed, 1, '/');
						return this;
					};
					
				GALAXY.isPoorNetwork = $(document.documentElement).addClass('s'+speed).hasClass('sL');
				if (val!='L' && val!='H') setNetworkSpeed(speed);
				
				$networkOptions.each(function() {
					var val = $(this).data('speed');
					if (val==speed) {
						speedText = ' '+$(this).data('label');
					}
					$(this).on('click', function(e) {
						e.preventDefault();
						setNetworkSpeed(val);
						try {window.scrollTo(0,0);} catch(e) {}
						location.reload();
					});
				});
				$network.on('click', function(e) {
					e.preventDefault();
					e.stopPropagation();
					var $select = $(this).closest('.select-network');
					if (!$select.hasClass('opened')) {
						$select.addClass('opened');
						$(document).one('click', function(e) {
							if (!$(this).closest('.select-network').get(0)) {
								$select.removeClass('opened');
							}
						});
					} else {
						$select.removeClass('opened');
					}
				}).text(statusText+(speedText!=''?speedText:''));
			})();
			
			
			this.ready();
			
			$(document.documentElement)
				.addClass($.browser.mobile ? 'mobile' : 'desktop')
				.decideClass('oldandroid', $.browser.android && 430 > $.browser.android)
				.decideClass('color_yb', $._cookie.get('highContrastMode') == '1');


			this.hashMenu = location.href.split('#!/')[1];
			this.hashMenu && this.isTestURL && console.log('hash menu: "'+ this.hashMenu + '"');

			this.mediaBaseURL = this.mediaBaseURL.replace(/\/$/, '');
			this.setMediaBaseURL = this.setMediaBaseURL(this.mediaBaseURL);

			this.scrollBarWidth = this.getScrollBarWidth();

			$('body style').each(function() {
				this.removeAttribute('scoped');
			});


			if (GALAXY.isGPSI) {
				this.resize(true);
				$('body img')
					.not('#kv [class*="f_header-"] img')
					.not('#kv-type2 [class*="f_header-"] img')
					.not('div.gift_header .heading img')
					.not('div.theme-steps div.img img')
					.each(function(i) {
						var $image = $(this),
							source = GALAXY.setMediaBaseURL(GALAXY.getImageSources($image)[GALAXY.sizeMode].replace(/^\./, ''));
						$image.attr('src', GALAXY.path.root+'/common/images/blank.gif');
						$image.css({
							backgroundImage: 'url('+ source +')',
							backgroundRepeat: 'no-repeat',
							backgroundSize: GALAXY.sizeMode > 2 ? 'cover' : '100% auto',
							backgroundPosition: '50% 50%'
						});
					});
				$('#kv,#kv-type2').find('[class*="f_header-"]').find('.kv-title, .kv-text, div').show();
				$('#kv,#kv-type2').css({width: '100%', height: $(window).height()+100})
					.find('div.f_container figure')
						.css({left: 'auto', width: '100%', marginLeft: 'auto'})
						.css($.support.transform, 'none')
					.find('img').css({width: '100%', height: '100%'});
				$('#kv,#kv-type2').find('div.f_container figure').each(function() {
					this.style.marginLeft = Math.min(0, (this.parentNode.offsetWidth-this.offsetWidth)/2) +'px';
				});
				if ($('#kv').hasClass('m_content-slider')||$('#kv-type2').hasClass('m_content-slider')) {
					$('#kv,#kv-type2').children().not('nav').not(':first').hide();
				}
				return;
			}

			this.sections = this.sections();
			
			if (GALAXY.isGalaxy) {
				$('a[data-omni], button[data-omni]')
					.unbind('click', GALAXY.tracking)
					.bind('click', GALAXY.tracking);
			} else {
				$('#galaxy-a-pdp-contents a[data-omni], #galaxy-a-pdp-contents button[data-omni], .m_dotcom_footer a[data-omni]')
					.unbind('click', GALAXY.tracking)
					.bind('click', GALAXY.tracking);
			}

			$(window).resize(this.resize)
					.scroll(this.scroll);

			if (!GALAXY.isGalaxy&&$('html').attr('lang')=='ja') {
				$('body').on('scroll', function() {
					if (GALAXY.sizeMode<3) {
						GALAXY.scroll();
					}
				});
			}

			this.resize(true);

			setTimeout(function() {
				window.initBuyNowButtons && window.initBuyNowButtons();
				$(document.documentElement).addClass('load');
				GALAXY.load();
				
				setTimeout(function() {
					var hash = location.hash, $section, pattern = /#[A-Z0-9-_]+$/i;
					pattern.test(hash) && ($section = $(hash)).length && GALAXY.setScrollTop($section.offset().top, 750);
				}, 100);
			}, 100);
		}
	};


	$(window).load(function() {
		setTimeout(function() {
			GALAXY.initialize();
		}, 0);
	});

	$(function() {

		var waveStart,
			scrollWave = false;

		function waveView() {
			if ( $('.m_content-sound .sound-btm-arti').hasClass('visible') ) {
				( GALAXY.sizeMode == 1 ) ? scrollWave = false : scrollWave = true;
				if ( scrollWave ) {
					scrollWave = false;
					$('.m_content-sound .sound-btm-arti .wave').addClass('show');
	    			clearInterval(waveStart); 
	    			waveStart = setInterval(function() {
	    				$('.m_content-sound .sound-btm-arti .wave').removeClass('show');
	    				setTimeout(function() {
	    					$('.m_content-sound .sound-btm-arti .wave').removeClass('show').addClass('show');
	    				}, 100);
	    			}, 5500);
				}
			} else {
				$('.m_content-sound .sound-btm-arti .wave').removeClass('show');
    			clearInterval(waveStart);
    			scrollWave = false;
			}
		}

		var $captureList = $('.capture-slide .slide-list'),
			$capturePrev = $('.capture-slide').find('.slide_arrow a[class$=prev]'),
			$captureNext = $('.capture-slide').find('.slide_arrow a[class$=next]'),
			$capturePaging = $('.capture-slide').find('.slide_page'),
			$captureThumb = $('.capture-slide').find('.img-pagenation'),
			moveScrollPoint;

		$captureList.find('li').each(function(i) {
			var imgSrc = $(this).find('img').attr('data-media-s3'),
				galleryAlt = $(this).find('img').attr('alt');
			$capturePaging.append('<a href="#"><span>slide '+ (i+1) +'</span></a>');
			$captureThumb.append('<a href="#"><span><img src='+ imgSrc +' alt="' + galleryAlt + '" /></span></a>');
			$captureThumb.find('a').eq(0).addClass('on');
		});

		$('.capture-slide .slide-list').xlider({
			swipe: GALAXY.swipeAble,
			endless: true,
			arrows: [$capturePrev, $captureNext],
			paging: $capturePaging,
			onChange: function(page) {
				$captureThumb.find('a').removeClass('on').eq(page).addClass('on');
				capturethumbRe(page);
			}

		});
		$captureThumb.find('a').on('click', function(e) {
			e.preventDefault();
			var thumbIndex = $(this).index();
			$captureThumb.find('a').removeClass('on').eq(thumbIndex).addClass('on');
			$capturePaging.find('a').eq(thumbIndex).click();
		});

		function capturethumbRe(idx) {
			var thumbWidth = $captureThumb.find('img').width(),
				thumbMl = $captureThumb.find('a').not(':first-child').css('margin-left'),
				moveScrollX = idx * (thumbWidth + parseInt(thumbMl, 10)),
				windCenter = ($(window).width()/2)-parseInt($captureThumb.css('padding-left'), 10),
				pageMove = moveScrollX - windCenter + (thumbWidth/2);

			if ( idx == 0 ) pageMove = 0;
			if (  windCenter <= moveScrollX + (thumbWidth/2)) {
				$('.thumbnail').animate({
					scrollLeft: pageMove
				}, 250, 'easeInOutSine');
			} else {
				$('.thumbnail').animate({
					scrollLeft: 0
				}, 250, 'easeInOutSine');
			}
		}

		function captureResize() {
			if ( GALAXY.sizeMode == 1 ) {
				var thumbWrapWidth = $captureThumb.outerWidth(),
					thumbIdx = $captureThumb.find('a.on').index();

				if ( $(window).width() > thumbWrapWidth ) {
					$('.thumbnail').css({
						left: '50%',
						width: thumbWrapWidth,
						marginLeft : -(thumbWrapWidth/2)
					});
				} else {
					$('.thumbnail').css({
						left: 'auto',
						width: '100%',
						marginLeft : '0'
					});
				}
				moveScrollPoint = setTimeout(function() {
					clearTimeout(moveScrollPoint);
					capturethumbRe(thumbIdx);
				}, 100);
			} else {
				$('.thumbnail').css({
					left: '',
					width: '',
					marginLeft : ''
				});
			}
		}

		var $filterMode = $('.filter-mode a'),
			$filterSlideWrap = $('.filter-slide'),
			$filterList = $('.filter-slide .img-list'),
			$filterImg = $('.filter-slide .img-list li'),
			$filterSlideArrow = $('.filter-slide .slide_arrow a'),
			$thumbNav = $('.thumb-nav'),
			thumbNavCenter = $thumbNav.width()/2,
			filterImgTotal = $filterImg.size(),
			filterImgH,
			containerH,
			setSlide = true,
			resetSlide = true;

		$('.filter-slide-box').append('<span class="dummy"><img src="http://images.samsung.com/is/image/samsung/ua-feature-samsung-galaxy-a7-2017-a720f-61216562?$Download-Source$" alt="" /></span>');
		$filterMode.on('click', function(e) {
			e.preventDefault();
			$filterMode.removeClass('current');
			$(this).addClass('current');
			if ( $(this).parent().index() == 0 ) {
				$('.m_content-filter .food-mode').removeClass('view');
				$('.m_content-filter .filter-slide').addClass('view');
				filterImgH = $('.filter-slide-box .dummy').height();
				controlsWidth();
				$filterList.css('height',filterImgH);
				filterResize();
			} else {
				$('.m_content-filter .filter-slide').removeClass('view');
				$('.m_content-filter .food-mode').addClass('view');
			}
		});

		$filterImg.each(function(i) {
			var imgSrc = $(this).find('img').attr('data-media-s3'),
				filterName = $(this).find('img').attr('data-filter-name'),
				filterAlt = $(this).find('img').attr('alt');
			$thumbNav.find('.paging').append('<a href="#" class="thumbPage"><img src="'+ imgSrc +'" alt="' + filterAlt +'" /><strong>' + filterName + '</strong></a>');
		});

		var $filterNavUl = $thumbNav.find('.paging'),
			$filterNavItem = $thumbNav.find('a'),
			$navControls = $('.filter-slide .controls'),
			$controlBar = $navControls.find('.bar'),
			$controlAnchor = $navControls.find('.anchor'),
			itemSize = $filterNavItem.size(),
			itemWidth, 
			itemMl, 
			filterNavWidth,
			startMove = false,
			movePageScroll,
			anchorX,
			anchorW = $controlAnchor.width(),
			barW = $controlBar.width(),
			leftX,
			keyPaging = 0;

		$navControls.find('.num em').text(itemSize);
		$filterList.xlider({
			swipe: GALAXY.swipeAble,
			fade: true,
			useTransition: true,
			endless: true,
			arrows: [$filterSlideWrap.find('.slide-prev'), $filterSlideWrap.find('.slide-next')],
			paging: $filterNavUl,
			onChange: function(page) {
				controlsResize(page);
				$navControls.find('.num .now').text(page+1);
			}
		});

		function controlsWidth() {
			anchorW = $controlAnchor.width();
			barW = $controlBar.width();
		}

		function controlsResize(onPage) {
			var thumbWidth = $filterNavItem.find('img').width(),
				thumbMl = $filterNavItem.not(':first-child').css('margin-left'),
				moveScrollX = onPage * (thumbWidth + parseInt(thumbMl, 10)),
				tgCenter =$thumbNav.width()/2,
				pageMove = (moveScrollX - tgCenter) + (thumbWidth/2);
			
			if ( !startMove ) {
				if ( onPage == 0 ) pageMove = 0;
				if (  tgCenter <= moveScrollX+(thumbWidth/2) ) {
					$thumbNav.animate({
						scrollLeft : pageMove
					}, 250);
				} else {
					$thumbNav.animate({
						scrollLeft : 0
					}, 250);
				}
			}
		}

		function filterResize() {
			filterSecWidth = $('.m_content-filter').width();
			filterImgH = $('.filter-slide-box .dummy').height();
			itemWidth = $filterNavItem.width();
			itemMl = parseInt($filterNavItem.not(':first-child').css('margin-left'), 10);
			filterNavWidth = (itemWidth*itemSize) + (itemMl*(itemSize-1));

			var onPageIdx = $filterNavUl.find('a.on').index();
			
			$filterNavUl.css('width', filterNavWidth);
			$filterList.css('height',filterImgH);

			movePageScroll = setTimeout(function() {
				clearTimeout(movePageScroll);
				controlsWidth();
				controlsResize(onPageIdx);
			}, 100);
		};

		$controlAnchor.on('mousedown touchstart', function(e) {
			e.preventDefault();
			anchorX = $(this).position().left;
			anchorW = $(this).width();
			barW = $controlBar.width();
			leftX = e.pageX;
			if (e.type == 'touchstart') {
				leftX = e.originalEvent.touches[0].pageX;
			}
			startMove = true;
		});
		$filterSlideWrap.on('mousemove touchmove', function(e) {
			var moveLeftX = e.pageX;
			if ( startMove ) {
				if (e.type == 'touchmove') {
					moveLeftX = e.originalEvent.touches[0].pageX;
				}
				movePoint = moveLeftX - leftX;
				moveAnhcor();
			}
		});
		$(document).on('mouseup touchend', function() {
			startMove = false;
		});

		$controlAnchor.on('keydown', function (e) {
			keyPaging = $filterNavUl.find('a.on').index();
			if (e.keyCode == '37') {
				( 0 >= keyPaging ) ? keyPaging = itemSize-1 : keyPaging--;
			} else if (e.keyCode == '39') {
				( itemSize-1 <= keyPaging ) ? keyPaging = 0 : keyPaging++;
			}
			$filterNavUl.find('a').eq(keyPaging).click();
			keyPaging = $filterNavUl.find('a.on').index();
		});

		function moveAnhcor() {
			var leftMoveData =  anchorX + movePoint,
				max = barW-anchorW,
				min = 0,
				windowW = $(window).width(),
				thumbScrollLeft = Math.floor( ((filterNavWidth-barW)*leftMoveData ) / max );

			var moveData = function() {
				$controlAnchor.css('left', leftMoveData);
				$thumbNav.scrollLeft(thumbScrollLeft);
			}

			if ( (leftMoveData >= min) && (leftMoveData <= max) ) {
				moveData();
			} else if ( leftMoveData < min ) {
				leftMoveData = min;
				moveData();
			} else if ( leftMoveData > max ) {
				leftMoveData = max;
				moveData();
			}

		}

		$thumbNav.scroll(function() {
			var navLeftScroll = $(this).scrollLeft(),
				scrollWidth = ($thumbNav[0].scrollWidth-$thumbNav.width()),
				leftScrollData = ($controlBar.width()-$controlAnchor.width())*navLeftScroll/scrollWidth;
			if (!startMove ) {
				if ( leftScrollData >= barW-anchorW ) {
					leftScrollData = barW-anchorW;
				}
				$controlAnchor.css('left', leftScrollData);
			}
		});

		$('.food-mode button').on('click', function() {
			$('.food-mode button').removeClass('on');
			$(this).addClass('on');
			if ( $(this).hasClass('btn-off')) {
				$('.food-mode-img figure').removeClass('show');
				$('.food-mode-img figure.off').addClass('show');
			} else {
				$('.food-mode-img figure').removeClass('show');
				$('.food-mode-img figure.on').addClass('show');
			}
		});

		var $accRightList = $('.acc-right ul li');
		$('.acc-list li').each(function(i) {
			$('.m_content-choose .slide_page').append('<a href="#"><span>slide '+ (i+1) +'</span></a>');
		});
		function addResizeSet() {
			var setAcc;
			clearTimeout(setAcc);
			setAcc = setTimeout(function() {
				var sizeOK = true;
				if ( sizeOK ) {
					if ( GALAXY.sizeMode == 1 ) {
						$('.acc-list').xlider({
							swipe: GALAXY.swipeAble,
							endless: true,
							paging: $('.m_content-choose .slide_page')

						});
					} else {
						$('.acc-list').xlider('remove');
						$('.m_content-choose .acc-list').removeClass('xlider-wrapper').removeAttr('style');
						$('.m_content-choose .acc-list li').each(function() {
							$(this).removeAttr('style');
							if ( $(this).hasClass('xlider-current')) {
								$(this).removeClass('xlider-current');
							}
						});
						
					}
					sizeOK = false;
				}
			}, 100);
		}

		var sizeMode = 0,
			$sliderBox = $('.slide-list-box'),
			$sliderUl = $sliderBox.find('.slider'),
			$instantItem = $('.instant-con').find('li'),
			$colorItem = $('.color-list').find('li');

		function setResize() {
			var _sizeMode = GALAXY.sizeMode;
			if (_sizeMode != sizeMode) {
				var resetCall = function () {
					$sliderUl.xlider('remove');
					$sliderUl.removeAttr('style');
					$sliderUl.find('li').removeClass('xlider-current').attr('style', '');
					$sliderBox.find('.slide_page').empty();
					$('.instant-con .slider').append($instantItem);
					$('.color-list').append($colorItem);
				};
				resetCall();

				if ( _sizeMode == 1 ) {
					$sliderBox.each(function() {
						var $slider = $(this).find('.slider'),
							$sliderList = $slider.find('li');

						$sliderList.each(function(i) {
							$(this).parents('.slide-list-box').find('.slide_page').append('<a href="#"><span>slide '+ (i+1) +'</span></a>')
						});
						$slider.xlider({
							swipe: true, 
							useTransition: false,
							paging: $(this).find('.slide_page'), 
							newstyle:true, 
							maxview:1, 
							endless:true,
							mode: 12,
							onChangeEnd: function() {
								$sliderList.last().css('opacity', '');
							}
						});
						$sliderList.last().css('opacity', '0');
					});

				} else {
					resetCall();
				}
				sizeMode = _sizeMode;
			}
		} 

		$(window).scroll(function() {
			waveView();
		});

		GALAXY.resize(function() {
			thumbNavCenter = $thumbNav.width()/2;
			controlsWidth();
			captureResize();
			addResizeSet();
			setResize();
			filterResize();
		});

		GALAXY.load(function () {
			waveView();
		});
	});
})(window.jQuery);
			
	});
});

});
import purifycss from "purify-css"
const purifycss = require("purify-css")

let content = ""
let css = ""
let options = {
    output: "filepath/output.css"
}
purify(content, css, options)