(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(e,t,s){"use strict";s.r(t);var o=s(21),n=Object(o.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("For the above directory structure, the default page routing paths are as follows:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../config/"}},[e._v("Config")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"./../theme/"}},[e._v("Theme")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"./../theme/default-theme-config.html"}},[e._v("Default Theme Config")])],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Directory Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("VuePress follows the principle of "),t("strong",[this._v('"Convention is better than configuration"')]),this._v(", the recommended document structure is as follows:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{staticClass:"vue-container"},[s("code",[s("p",[e._v(".\n├── docs\n│   ├── .vuepress "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("components")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("theme")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   │   └── Layout.vue\n│   │   ├── "),s("code",[e._v("public")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   ├── "),s("code",[e._v("styles")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── "),s("code",[e._v("templates")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional, Danger Zone")]),e._v(")")]),e._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── "),s("code",[e._v("config.js")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │   └── "),s("code",[e._v("enhanceApp.js")]),e._v(" "),s("em",[e._v("("),s("strong",[e._v("Optional")]),e._v(")")]),e._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json")]),e._v("\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("Please note the capitalization of the directory name.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("docs/.vuepress")]),e._v(": It is used to store global configuration, components, static resources, etc.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/components")]),e._v(": The Vue components in this directory will be automatically registered as global components.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/theme")]),e._v(": Used to store local theme.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles")]),e._v(": Stores style related files.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": The palette is used to override the default color constants and to set the color constants of Stylus.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/public")]),e._v(": Static resource directory.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates")]),e._v(": Store HTML template files.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": HTML template file for development environment.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": Vue SSR based HTML template file in the built time.")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/config.js")]),e._v(": Entry file of configuration, can also be "),s("code",[e._v("yml")]),e._v(" or "),s("code",[e._v("toml")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": App level enhancement.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"default-page-routing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-page-routing","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Page Routing")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Relative Path")]),e._v(" "),s("th",[e._v("Page Routing")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("/README.md")])]),e._v(" "),s("td",[s("code",[e._v("/")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("/guide/README.md")])]),e._v(" "),s("td",[s("code",[e._v("/guide/")])])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("/config.md")])]),e._v(" "),s("td",[s("code",[e._v("/config.html")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Also see:")])])}],!1,null,null,null);n.options.__file="directory-structure.md";t.default=n.exports}}]);