import{c as S}from"/myst_assets_folder/_shared/chunk-RAQ24GF6.js";var m=S((y,d)=>{function u(e){return e?typeof e=="string"?e:e.source:null}function _(e){return p("(?=",e,")")}function p(...e){return e.map(c=>u(c)).join("")}function R(e){let a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},n={className:"meta",begin:/^(>>>|\.\.\.) /},i={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},s={begin:/\{\{/,relevance:0},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n,s,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n,s,i]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,i]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t="[0-9](_?[0-9])*",b=`(\\b(${t}))?\\.(${t})|\\b(${t})\\.`,o={className:"number",relevance:0,variants:[{begin:`(\\b(${t})|(${b}))[eE][+-]?(${t})[jJ]?\\b`},{begin:`(${b})[jJ]?`},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${t})[jJ]\\b`}]},E={className:"comment",begin:_(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},l={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",n,o,r,e.HASH_COMMENT_MODE]}]};return i.contains=[r,o,n],{name:"Python",aliases:["py","gyp","ipython"],keywords:a,illegal:/(<\/|->|\?)|=>/,contains:[n,o,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},r,E,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,keywords:a}]},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[o,l,r]}]}}d.exports=R});export default m();
