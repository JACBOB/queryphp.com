(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{171:function(t,s,n){"use strict";n.r(s);var a=n(21),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"查询语言-aggregate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询语言-aggregate","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询语言.aggregate")]),t._v(" "),n("h2",{attrs:{id:"记录数量-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#记录数量-count","aria-hidden":"true"}},[t._v("#")]),t._v(" 记录数量 count")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# 函数原型")]),t._v("\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# public function count($strField = '*', $sAlias = 'row_count');")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT COUNT(`test`.*) AS row_count FROM `test` LIMIT 1")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("count")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT COUNT(`test`.`id`) AS row_count FROM `test` LIMIT 1")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("count")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT COUNT(`test`.`id`) AS count1 FROM `test` LIMIT 1")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("count")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'count1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT COUNT(`test`.`id`*50) AS count1 FROM `test` LIMIT 1")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("count")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'{[id]*50}'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'count1'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"平均值-avg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#平均值-avg","aria-hidden":"true"}},[t._v("#")]),t._v(" 平均值 avg")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# 函数原型")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("avg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$strField")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$sAlias")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'avg_value'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT AVG(`test`.`id`) AS avg_value FROM `test`")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("avg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT AVG(`test`.`num1`*`test`.`num2`) AS avg_value FROM `test` ")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("avg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'{[num1]*[num2]}'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"最大值-max"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最大值-max","aria-hidden":"true"}},[t._v("#")]),t._v(" 最大值 max")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# 函数原型")]),t._v("\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# public function max($strField, $sAlias = 'max_value');")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT MAX(`test`.`num`) AS max_value FROM `test`")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("max")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'num'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"最小值-min"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最小值-min","aria-hidden":"true"}},[t._v("#")]),t._v(" 最小值 min")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# 函数原型")]),t._v("\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# public function min($strField, $sAlias = 'min_value');")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT MIN(`test`.`num`) AS min_value FROM `test`")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("min")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'num'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"合计-sum"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#合计-sum","aria-hidden":"true"}},[t._v("#")]),t._v(" 合计 sum")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# 函数原型")]),t._v("\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# public function sum($strField, $sAlias = 'sum_value');")]),t._v("\n\n"),n("span",{attrs:{class:"token shell-comment comment"}},[t._v("# SELECT SUM(`test`.`num`) AS sum_value FROM `test`")]),t._v("\nDb"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("table")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("sum")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'num'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("getOne")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="aggregate.md";s.default=e.exports}}]);