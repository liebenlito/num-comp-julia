import{b as f}from"/build/_shared/chunk-RAQ24GF6.js";function l(n){for(var e={},i=n.split(" "),r=0;r<i.length;++r)e[i[r]]=!0;return e}function t(n,e){var i=n.next();if(i=="/"&&n.eat("*"))return e.tokenize=o,o(n,e);if(i==="#")return n.skipToEnd(),"comment";if(i=='"')return e.tokenize=c(i),e.tokenize(n,e);if(i=="(")return e._indent.push("("),e._indent.push("{"),null;if(i==="{")return e._indent.push("{"),null;if(i==")"&&(e._indent.pop(),e._indent.pop()),i==="}")return e._indent.pop(),null;if(i==","||i==";"||/[{}\(\),;]/.test(i))return null;if(/\d/.test(i))return n.eatWhile(/[\d]/),n.eat(/[KkMmGg]/),"number";if(i==":")return n.eatWhile(/[a-zA-Z_]/),n.eatWhile(/[a-zA-Z0-9_]/),"operator";n.eatWhile(/\w/);var r=n.current();return r=="text"&&n.eat(":")?(e.tokenize=d,"string"):p.propertyIsEnumerable(r)?"keyword":k.propertyIsEnumerable(r)?"atom":null}function d(n,e){return e._multiLineString=!0,n.sol()?(n.next()=="."&&n.eol()&&(e._multiLineString=!1,e.tokenize=t),"string"):(n.eatSpace(),n.peek()=="#"?(n.skipToEnd(),"comment"):(n.skipToEnd(),"string"))}function o(n,e){for(var i=!1,r;(r=n.next())!=null;){if(i&&r=="/"){e.tokenize=t;break}i=r=="*"}return"comment"}function c(n){return function(e,i){for(var r=!1,u;(u=e.next())!=null&&!(u==n&&!r);)r=!r&&u=="\\";return r||(i.tokenize=t),"string"}}var p,k,g,h=f(()=>{p=l("if elsif else stop require"),k=l("true false not");g={name:"sieve",startState:function(n){return{tokenize:t,baseIndent:n||0,_indent:[]}},token:function(n,e){return n.eatSpace()?null:(e.tokenize||t)(n,e)},indent:function(n,e,i){var r=n._indent.length;return e&&e[0]=="}"&&r--,r<0&&(r=0),r*i.unit},languageData:{indentOnInput:/^\s*\}$/}}});h();export{g as sieve};