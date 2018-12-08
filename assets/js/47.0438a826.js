(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{204:function(a,t,s){"use strict";s.r(t);var n=s(21),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板","aria-hidden":"true"}},[a._v("#")]),a._v(" 模板")]),a._v(" "),s("p",[a._v("QueryPHP 内置三种方式的模板引擎，一种是类似于 "),s("code",[a._v("smart")]),a._v(" 模板的 Code 语法，一种是 HTML 标签式的 Node 语法，例外还有一种类 Javascript 的语法与 Twig 比较相似。")]),a._v(" "),s("ul",[s("li",[a._v("code 语法，侧重简单实用")]),a._v(" "),s("li",[a._v("Node 语法，严谨务实")]),a._v(" "),s("li",[a._v("JS 语法，现代潮流")])]),a._v(" "),s("p",[a._v("例外，三种语法随心嵌套，随意使用，QueryPHP 模板引擎底层分析器和编译器非常健壮，完美运行 8 年。")]),a._v(" "),s("p",[a._v("QueryPHP 模板引擎技术来自于 Jecat,一款无与伦比的技术大餐，有幸在 2010 接触到这个框架，通过这个框架学到了很多。")]),a._v(" "),s("h2",{attrs:{id:"code-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" Code 语法")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("{$name}\n\n{if $name == 'You'}\n    欢迎进入 QueryPHP 开发者世界！\n{/if}\n")])])]),s("h2",{attrs:{id:"node-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" Node 语法")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("<")]),a._v("if")]),a._v(" "),s("span",{attrs:{class:"token attr-name"}},[a._v("condition")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')]),a._v("$name eq "),s("span",{attrs:{class:"token punctuation"}},[a._v("'")]),a._v("You"),s("span",{attrs:{class:"token punctuation"}},[a._v("'")]),s("span",{attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    欢迎进入 QueryPHP 开发者世界！\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[a._v("</")]),a._v("if")]),s("span",{attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"现代化类-js-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现代化类-js-语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 现代化类 JS 语法")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("{{i + 1}}\n")])])]),s("h2",{attrs:{id:"拒绝交叉"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拒绝交叉","aria-hidden":"true"}},[a._v("#")]),a._v(" 拒绝交叉")]),a._v(" "),s("p",[a._v("下面这种写法就是错误的，模板引擎将无法正确解析。")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v("<$name>\n\n{if condition=\"$name eq 'You'\"}\n    欢迎进入 QueryPHP 开发者世界！\n{/if}\n")])])]),s("h2",{attrs:{id:"php-方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-方式","aria-hidden":"true"}},[a._v("#")]),a._v(" PHP 方式")]),a._v(" "),s("p",[a._v("如果你不习惯使用使用内置的模板引擎，你也可以完全使用 PHP 自生来写。")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token variable"}},[a._v("$name")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'You'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n    欢迎进入 QueryPHP 开发者世界！\n"),s("span",{attrs:{class:"token php language-php"}},[s("span",{attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("endif")]),s("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])])]),s("h2",{attrs:{id:"扩展支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 扩展支持")]),a._v(" "),s("p",[a._v("为了更好地追随时代的潮流，系统扩展支持了流行的模板引擎 Twig，例外还支持基于 v8js 的服务端运行 Javascript 代码，以及 PHPUI 桌面应用开发。")]),a._v(" "),s("p",[a._v("第三方的教程留给大家自行探索，其乐无穷。")])])}],!1,null,null,null);e.options.__file="README.md";t.default=e.exports}}]);