import{a as V}from"/build/_shared/chunk-RTIGS2T3.js";import{c as I,e as Y}from"/build/_shared/chunk-RAQ24GF6.js";var ue=I((Nt,oe)=>{oe.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var z=I(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});function et(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}v.isIdentStart=et;function tt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}v.isIdent=tt;function rt(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}v.isHex=rt;function nt(e){for(var t=e.length,r="",i=0;i<t;){var n=e.charAt(i);if(v.identSpecialChars[n])r+="\\"+n;else if(n==="_"||n==="-"||n>="A"&&n<="Z"||n>="a"&&n<="z"||i!==0&&n>="0"&&n<="9")r+=n;else{var o=n.charCodeAt(0);if((o&63488)===55296){var l=e.charCodeAt(i++);if((o&64512)!==55296||(l&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");o=((o&1023)<<10)+(l&1023)+65536}r+="\\"+o.toString(16)+" "}i++}return r}v.escapeIdentifier=nt;function it(e){for(var t=e.length,r="",i=0,n;i<t;){var o=e.charAt(i);o==='"'?o='\\"':o==="\\"?o="\\\\":(n=v.strReplacementsRev[o])!==void 0&&(o=n),r+=o,i++}return'"'+r+'"'}v.escapeStr=it;v.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};v.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};v.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};v.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var de=I(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var m=z();function ot(e,t,r,i,n,o){var l=e.length,u="";function c(a,s){var h="";for(t++,u=e.charAt(t);t<l;){if(u===a)return t++,h;if(u==="\\"){t++,u=e.charAt(t);var p=void 0;if(u===a)h+=a;else if((p=s[u])!==void 0)h+=p;else if(m.isHex(u)){var C=u;for(t++,u=e.charAt(t);m.isHex(u);)C+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),h+=String.fromCharCode(parseInt(C,16));continue}else h+=u}else h+=u;t++,u=e.charAt(t)}return h}function f(){var a="";for(u=e.charAt(t);t<l;){if(m.isIdent(u))a+=u;else if(u==="\\"){if(t++,t>=l)throw Error("Expected symbol but end of file reached.");if(u=e.charAt(t),m.identSpecialChars[u])a+=u;else if(m.isHex(u)){var s=u;for(t++,u=e.charAt(t);m.isHex(u);)s+=u,t++,u=e.charAt(t);u===" "&&(t++,u=e.charAt(t)),a+=String.fromCharCode(parseInt(s,16));continue}else a+=u}else return a;t++,u=e.charAt(t)}return a}function d(){u=e.charAt(t);for(var a=!1;u===" "||u==="	"||u===`
`||u==="\r"||u==="\f";)a=!0,t++,u=e.charAt(t);return a}function y(){var a=G();if(t<l)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return a}function G(){var a=X();if(!a)return null;var s=a;for(u=e.charAt(t);u===",";){if(t++,d(),s.type!=="selectors"&&(s={type:"selectors",selectors:[a]}),a=X(),!a)throw Error('Rule expected after ",".');s.selectors.push(a)}return s}function X(){d();var a={type:"ruleSet"},s=M();if(!s)return null;for(var h=a;s&&(s.type="rule",h.rule=s,h=s,d(),u=e.charAt(t),!(t>=l||u===","||u===")"));)if(n[u]){var p=u;if(t++,d(),s=M(),!s)throw Error('Rule expected after "'+p+'".');s.nestingOperator=p}else s=M(),s&&(s.nestingOperator=null);return a}function M(){for(var a=null;t<l;)if(u=e.charAt(t),u==="*")t++,(a=a||{}).tagName="*";else if(m.isIdentStart(u)||u==="\\")(a=a||{}).tagName=f();else if(u===".")t++,a=a||{},(a.classNames=a.classNames||[]).push(f());else if(u==="#")t++,(a=a||{}).id=f();else if(u==="["){t++,d();var s={name:f()};if(d(),u==="]")t++;else{var h="";if(i[u]&&(h=u,t++,u=e.charAt(t)),t>=l)throw Error('Expected "=" but end of file reached.');if(u!=="=")throw Error('Expected "=" but "'+u+'" found.');s.operator=h+"=",t++,d();var p="";if(s.valueType="string",u==='"')p=c('"',m.doubleQuotesEscapeChars);else if(u==="'")p=c("'",m.singleQuoteEscapeChars);else if(o&&u==="$")t++,p=f(),s.valueType="substitute";else{for(;t<l&&u!=="]";)p+=u,t++,u=e.charAt(t);p=p.trim()}if(d(),t>=l)throw Error('Expected "]" but end of file reached.');if(u!=="]")throw Error('Expected "]" but "'+u+'" found.');t++,s.value=p}a=a||{},(a.attrs=a.attrs||[]).push(s)}else if(u===":"){t++;var C=f(),S={name:C};if(u==="("){t++;var w="";if(d(),r[C]==="selector")S.valueType="selector",w=G();else{if(S.valueType=r[C]||"string",u==='"')w=c('"',m.doubleQuotesEscapeChars);else if(u==="'")w=c("'",m.singleQuoteEscapeChars);else if(o&&u==="$")t++,w=f(),S.valueType="substitute";else{for(;t<l&&u!==")";)w+=u,t++,u=e.charAt(t);w=w.trim()}d()}if(t>=l)throw Error('Expected ")" but end of file reached.');if(u!==")")throw Error('Expected ")" but "'+u+'" found.');t++,S.value=w}a=a||{},(a.pseudos=a.pseudos||[]).push(S)}else break;return a}return y()}Q.parseCssSelector=ot});var he=I($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});var g=z();function k(e){var t="";switch(e.type){case"ruleSet":for(var r=e.rule,i=[];r;)r.nestingOperator&&i.push(r.nestingOperator),i.push(k(r)),r=r.rule;t=i.join(" ");break;case"selectors":t=e.selectors.map(k).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=g.escapeIdentifier(e.tagName)),e.id&&(t+="#"+g.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(n){return"."+g.escapeIdentifier(n)}).join("")),e.attrs&&(t+=e.attrs.map(function(n){return"operator"in n?n.valueType==="substitute"?"["+g.escapeIdentifier(n.name)+n.operator+"$"+n.value+"]":"["+g.escapeIdentifier(n.name)+n.operator+g.escapeStr(n.value)+"]":"["+g.escapeIdentifier(n.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(n){return n.valueType?n.valueType==="selector"?":"+g.escapeIdentifier(n.name)+"("+k(n.value)+")":n.valueType==="substitute"?":"+g.escapeIdentifier(n.name)+"($"+n.value+")":n.valueType==="numeric"?":"+g.escapeIdentifier(n.name)+"("+n.value+")":":"+g.escapeIdentifier(n.name)+"("+g.escapeIdentifier(n.value)+")":":"+g.escapeIdentifier(n.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}$.renderEntity=k});var pe=I(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});var ut=de(),lt=he(),at=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.pseudos[o]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.pseudos[o]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.pseudos[o]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.pseudos[o]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.ruleNestingOperators[o]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.ruleNestingOperators[o]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];this.attrEqualityMods[o]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var o=n[i];delete this.attrEqualityMods[o]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return ut.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return lt.renderEntity(t).trim()},e}();H.CssSelectorParser=at});var q={}.hasOwnProperty;function N(e,t){let r=t||{};function i(n,...o){let l=i.invalid,u=i.handlers;if(n&&q.call(n,e)){let c=String(n[e]);l=q.call(u,c)?u[c]:i.unknown}if(l)return l.call(this,n,...o)}return i.handlers=r.handlers||{},i.invalid=r.invalid,i.unknown=r.unknown,i}var Se=N("operator",{unknown:_e,invalid:te,handlers:{"=":Ie,"^=":Ne,"$=":Oe,"*=":Te,"~=":Ee}});function ee(e,t){let r=-1;for(;++r<e.attrs.length;)if(!Se(e.attrs[r],t))return!1;return!0}function te(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function Ie(e,t){return te(e,t)&&String(t[e.name])===e.value}function Ee(e,t){let r=t[e.name];return r==null?!1:Array.isArray(r)&&r.includes(e.value)?!0:String(r)===e.value}function Ne(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(0,e.value.length)===e.value)}function Oe(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(-e.value.length)===e.value)}function Te(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.includes(e.value))}function _e(e){throw new Error("Unknown operator `"+e.operator+"`")}function re(e,t){return e.tagName==="*"||e.tagName===t.type}var ke=new Set([9,10,12,13,32]),ne="0".charCodeAt(0),Pe="9".charCodeAt(0);function ie(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,i=o(),n=l();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=i*(n??1),u(),t<e.length?(i=o(),u(),n=l()):i=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,i*n];function o(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function l(){let c=t,f=0;for(;t<e.length&&e.charCodeAt(t)>=ne&&e.charCodeAt(t)<=Pe;)f=f*10+(e.charCodeAt(t)-ne),t++;return t===c?null:f}function u(){for(;t<e.length&&ke.has(e.charCodeAt(t));)t++}}var j=Y(ue(),1);function le(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return j.default.falseFunc;if(t===-1)return o=>o<=r;if(t===0)return o=>o===r;if(t===1)return r<0?j.default.trueFunc:o=>o>=r;let i=Math.abs(t),n=(r%i+i)%i;return t>1?o=>o>=r&&o%i===n:o=>o<=r&&o%i===n}function O(e){return le(ie(e))}function b(e){return Array.isArray(e.children)}var Me=O.default||O,je=N("name",{unknown:Xe,invalid:Ge,handlers:{any:F,blank:ae,empty:ae,"first-child":Fe,"first-of-type":Re,has:Ue,"last-child":ze,"last-of-type":Qe,matches:F,not:$e,"nth-child":He,"nth-last-child":Le,"nth-of-type":Ze,"nth-last-of-type":Be,"only-child":De,"only-of-type":We,root:Je,scope:Ke}});R.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];function R(e,t,r,i,n){let o=e.pseudos,l=-1;for(;++l<o.length;)if(!je(o[l],t,r,i,n))return!1;return!0}function ae(e,t){return b(t)?t.children.length===0:!("value"in t)}function Fe(e,t,r,i,n){return x(n,e),n.nodeIndex===0}function Re(e,t,r,i,n){return x(n,e),n.typeIndex===0}function Ue(e,t,r,i,n){let o={type:"root",children:b(t)?t.children:[]},l={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:E(e.value)};return A(l,o),l.results.length>0}function ze(e,t,r,i,n){return x(n,e),typeof n.nodeCount=="number"&&n.nodeIndex===n.nodeCount-1}function Qe(e,t,r,i,n){return x(n,e),typeof n.typeCount=="number"&&n.typeIndex===n.typeCount-1}function F(e,t,r,i,n){let o={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:E(e.value)};return A(o,t),o.results[0]===t}function $e(e,t,r,i,n){return!F(e,t,r,i,n)}function He(e,t,r,i,n){let o=T(e);return x(n,e),typeof n.nodeIndex=="number"&&o(n.nodeIndex)}function Le(e,t,r,i,n){let o=T(e);return x(n,e),typeof n.nodeCount=="number"&&typeof n.nodeIndex=="number"&&o(n.nodeCount-n.nodeIndex-1)}function Be(e,t,r,i,n){let o=T(e);return x(n,e),typeof n.typeIndex=="number"&&typeof n.typeCount=="number"&&o(n.typeCount-1-n.typeIndex)}function Ze(e,t,r,i,n){let o=T(e);return x(n,e),typeof n.typeIndex=="number"&&o(n.typeIndex)}function De(e,t,r,i,n){return x(n,e),n.nodeCount===1}function We(e,t,r,i,n){return x(n,e),n.typeCount===1}function Je(e,t,r,i){return t&&!i}function Ke(e,t,r,i,n){return t&&n.scopeNodes.includes(t)}function Ge(){throw new Error("Invalid pseudo-selector")}function Xe(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function x(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function T(e){let t=e._cachedFn;return t||(t=Me(e.value),e._cachedFn=t),t}function se(e,t,r,i,n){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||re(e,t))&&(!e.attrs||ee(e,t))&&(!e.pseudos||R(e,t,r,i,n)))}var Ye=[];function E(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function A(e,t){t&&fe(e,[],t,void 0,void 0)}function fe(e,t,r,i,n){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return o=qe(e,_(t,e.rootQuery.selectors),r,i,n),b(r)&&!e.shallow&&!(e.one&&e.found)&&Ve(e,o,r),o}function Ve(e,t,r){let i=_(t.descendant,t.directChild),n,o=-1,l={count:0,types:new Map},u={count:0,types:new Map};for(;++o<r.children.length;)ce(l,r.children[o]);for(o=-1;++o<r.children.length;){let f=r.children[o].type.toUpperCase();e.nodeIndex=u.count,e.typeIndex=u.types.get(f)||0,e.nodeCount=l.count,e.typeCount=l.types.get(f);let d=_(i,n),y=fe(e,d,r.children[o],o,r);if(n=_(y.generalSibling,y.adjacentSibling),e.one&&e.found)break;ce(u,r.children[o])}}function qe(e,t,r,i,n){let o={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},l=-1;for(;++l<t.length;){let u=t[l];if(e.one&&e.found)break;if(e.shallow&&u.rule.rule)throw new Error("Expected selector without nesting");if(se(u.rule,r,i,n,e)){let c=u.rule.rule;if(c){let f={type:"ruleSet",rule:c},d=c.nestingOperator==="+"?"adjacentSibling":c.nestingOperator==="~"?"generalSibling":c.nestingOperator===">"?"directChild":"descendant";U(o,d,f)}else e.found=!0,e.results.includes(r)||e.results.push(r)}u.rule.nestingOperator===null?U(o,"descendant",u):u.rule.nestingOperator==="~"&&U(o,"generalSibling",u)}return o}function _(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:Ye}function U(e,t,r){let i=e[t];i?i.push(r):e[t]=[r]}function ce(e,t){let r=t.type.toUpperCase(),i=(e.types.get(r)||0)+1;e.count++,e.types.set(r,i)}var ve=Y(pe(),1),P=new ve.CssSelectorParser;P.registerAttrEqualityMods("~","^","$","*");P.registerSelectorPseudos("any","matches","not","has");P.registerNestingOperators(">","+","~");function ge(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return P.parse(e)}function er(e,t){let r=xe(e,t);return r.one=!0,A(r,t||void 0),r.results[0]||null}function me(e,t){let r=xe(e,t);return A(r,t||void 0),r.results}function xe(e,t){return{rootQuery:E(ge(e)),results:[],scopeNodes:t?b(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}function L(e,t){return r(e,null,null);function r(i,n,o){let l=Object.assign({},t(i,n,o));return"children"in i&&(l.children=i.children.map(function(u,c){return r(u,c,i)})),l}}var st=e=>crypto.getRandomValues(new Uint8Array(e)),ct=(e,t,r)=>{let i=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*i*t/e.length);return(o=t)=>{let l="";for(;;){let u=r(n),c=n;for(;c--;)if(l+=e[u[c]&i]||"",l.length===o)return l}}},B=(e,t=21)=>ct(e,t,st);function we(e,t){return t?.note&&(e.note=t?.note),t?.url&&(e.url=t?.url),t?.fatal&&(e.fatal=!0),e}function ft(e,t,r){return we(e.message(t,r?.node,r?.source),{...r,fatal:!0})}function dt(e,t,r){return we(e.message(t,r?.node,r?.source),r)}var ye="abcdefghijklmnopqrstuvwxyz",be=ye+ye.toUpperCase(),ht="0123456789",pt=B(be,1),vt=B(be+ht,9);function gt(){return pt()+vt()}function mt(e){if(!e)return;let t=e.replace(/[\t\n\r ]+/g," ").trim().toLowerCase(),r=Ce(t);return{identifier:t,label:e,html_id:r}}function Ce(e){if(e)return e.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function xt(e,t){L(e,r=>{var i,n;let o=(n=(i=r.children)===null||i===void 0?void 0:i.map(l=>l.type===t&&l.children?l.children:l))===null||n===void 0?void 0:n.flat();return r&&r.children==null&&delete r.children,o!==void 0&&(r.children=o),r})}function yt(e,t){e.children=[{type:"text",value:t}]}function Z(e){return e?Array.isArray(e)?e.map(t=>!t||typeof t=="string"?t||"":"value"in t?t.value:"children"in t&&t.children?Z(t.children):"").join(""):Z([e]):""}function D(e){return JSON.parse(JSON.stringify(e))}var W;(function(e){e.content="notebook-content",e.code="notebook-code"})(W||(W={}));var J;(function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"})(J||(J={}));var wt=[],K=function(e,t,r){let i=V(r||t),n=!t||t.cascade===void 0||t.cascade===null?!0:t.cascade;return o(e);function o(l,u,c){let f=l.children||wt,d=-1,y=0;if(i(l,u,c))return null;if(f.length>0){for(;++d<f.length;)o(f[d],d,l)&&(f[y++]=f[d]);if(n&&!y)return null;f.length=y}return l}};function Ae(e,t){if(!t)return;let r=me("block",e).filter(i=>{var n,o;return((n=i.data)===null||n===void 0?void 0:n.part)===t||((o=i.data)===null||o===void 0?void 0:o.tags)&&Array.isArray(i.data.tags)&&i.data.tags.includes(t)});if(r.length!==0)return r}function bt(e,t){let r=Ae(e,t);if(!r)return;let n={type:"root",children:D(r).map(o=>{var l;return(l=o.data)!==null&&l!==void 0||(o.data={}),o.data.part=t,o.data.tags&&Array.isArray(o.data.tags)&&o.data.tags.includes(t)&&(o.data.tags=o.data.tags.filter(u=>u!==t),o.data.tags.length===0&&delete o.data.tags),o})};return r.forEach(o=>{o.type="__delete__"}),K(e,"__delete__"),n}export{N as a,er as b,me as c,L as d,ft as e,dt as f,gt as g,mt as h,Ce as i,xt as j,yt as k,Z as l,D as m,K as n,bt as o,W as p,J as q};
