(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{220:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"while-循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#while-循环","aria-hidden":"true"}},[t._v("#")]),t._v(" While 循环")]),t._v(" "),s("p",[t._v("QueryPHP 支持  while 语法标签，通过这种方式可以很好地将 PHP 的 while 语法布局出来。")]),t._v(" "),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[t._v("#")]),t._v(" code")]),t._v(" "),s("p",[t._v("我们在模板中写下如下的代码：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("{~$i = 10}\n{while $i>0}   \n    {$i}Hello QueryPHP !"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   \n    {~$i--}   \n{/while} \n")])])]),s("p",[t._v("模板编译后的结果：")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n    "),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("Hello QueryPHP !"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("endwhile")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])]),s("h2",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[t._v("#")]),t._v(" node")]),t._v(" "),s("p",[t._v("我们在模板中写下如下的代码：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("{~$i = 10}\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("while")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("condition")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$i gt 0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   \n    {$i}Hello QueryPHP !"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   \n    {~$i--}   \n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("while")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("模板编译后的结果：")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n    "),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("Hello QueryPHP !"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$i")]),s("span",{attrs:{class:"token operator"}},[t._v("--")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("endwhile")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="while.md";a.default=e.exports}}]);