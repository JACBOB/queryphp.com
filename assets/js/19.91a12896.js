(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{207:function(t,e,s){"use strict";s.r(e);var a=s(21),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Before 1.x.x, VuePress retrieves all markdown files in the documents source directory and defines the page links based on the file hierarchy. e.g. if you have the following file structure:")]),t._v(" "),t._m(2),s("p",[t._v("Then you will get following available pages:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),s("p",[t._v("It seems that we have seen the shadow of the blog. Let's continue to look down.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("You can configure globally to apply it for all pages:")]),t._v(" "),t._m(10),s("p",[t._v("Alternatively, you can also set permalink on a page only, and it will have a higher priority than the global settings.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),s("table",[t._m(14),t._v(" "),s("tbody",[t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("tr",[s("td",[t._v(":regular")]),t._v(" "),s("td",[t._v("Permalink generated by VuePress by default, for implementation see "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/next/packages/%40vuepress/shared-utils/lib/fileToPath.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"permalinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permalinks","aria-hidden":"true"}},[this._v("#")]),this._v(" Permalinks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"background"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[this._v("#")]),this._v(" Background")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("However, for a blog system, we hope that the link of a post can be customized. VuePress started supporting this feature from "),e("code",[this._v("1.0.0")]),this._v(". which is known as "),e("code",[this._v("permalink")]),this._v(". Then, the actual pages would be:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/source/\n/source/tags/\n/source/2018/4/1/intro-vuepress.html\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"permalinks-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permalinks-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Permalinks")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A permalink is a URL that is intended to remain unchanged for many years into the future, yielding a hyperlink that is less susceptible to link rot"),e("sup",[this._v("[1]")]),this._v(". VuePress supports a flexible way to build permalinks, allowing you to leverage various template variables.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The default permalink is "),e("code",[this._v("/:regular")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"configure-permalinks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-permalinks","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Permalinks")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  permalink"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/:year/:month/:day/:slug'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("📝 "),e("strong",[this._v("hello.md")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{attrs:{class:"token hr punctuation"}},[this._v("---")]),this._v("\ntitle: Hello World\n"),e("span",{attrs:{class:"token title important"}},[this._v("permalink: /hello-world\n"),e("span",{attrs:{class:"token punctuation"}},[this._v("---")])]),this._v("\n\nHello!\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"template-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#template-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Template Variables")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Variable")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":year")]),this._v(" "),e("td",[this._v("Published year of posts (4-digit)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":month")]),this._v(" "),e("td",[this._v("Published month of posts (2-digit)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":i_month")]),this._v(" "),e("td",[this._v("Published month of posts (Without leading zeros)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":day")]),this._v(" "),e("td",[this._v("Published day of posts (2-digit)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":i_day")]),this._v(" "),e("td",[this._v("Published day of posts (Without leading zeros)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":slug")]),this._v(" "),e("td",[this._v("Slugified file path (Without extension)")])])}],!1,null,null,null);r.options.__file="permalinks.md";e.default=r.exports}}]);