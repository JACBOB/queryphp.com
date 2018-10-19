(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{184:function(e,t,v){"use strict";v.r(t);var _=v(21),s=Object(_.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),v("ul",[v("li",[v("router-link",{attrs:{to:"./../config/"}},[e._v("配置")])],1),e._v(" "),v("li",[v("router-link",{attrs:{to:"./../theme/"}},[e._v("主题")])],1),e._v(" "),v("li",[v("router-link",{attrs:{to:"./../theme/default-theme-config.html"}},[e._v("默认主题配置")])],1)]),e._v(" "),e._m(6),e._v(" "),v("p",[e._v("此外，对于上述的目录结构，默认页面路由地址如下：")]),e._v(" "),e._m(7)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("VuePress 遵循 "),t("strong",[this._v("“约定优于配置”")]),this._v(" 的原则，推荐的目录结构如下：")])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("pre",{staticClass:"vue-container"},[v("code",[v("p",[e._v(".\n├── docs\n│   ├── .vuepress "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),v("code",[e._v("components")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),v("code",[e._v("theme")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   │   └── Layout.vue\n│   │   ├── "),v("code",[e._v("public")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   ├── "),v("code",[e._v("styles")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── "),v("code",[e._v("templates")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的, 谨慎配置")]),e._v(")")]),e._v("\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── "),v("code",[e._v("config.js")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │   └── "),v("code",[e._v("enhanceApp.js")]),e._v(" "),v("em",[e._v("("),v("strong",[e._v("可选的")]),e._v(")")]),e._v("\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json")]),e._v("\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),t("p",[this._v("请留意目录名的大写。")])])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ul",[v("li",[v("code",[e._v("docs/.vuepress")]),e._v(": 用于存放全局的配置、组件、静态资源等。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/components")]),e._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/theme")]),e._v(": 用于存放本地主题。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/styles")]),e._v(": 用于存放样式相关的文件。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": 用于重写默认颜色常量，或者设置新的的 stylus 颜色常量。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/public")]),e._v(": 静态资源目录。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/templates")]),e._v(": 存储 HTML 模板文件。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": 用于开发环境的 HTML 模板文件。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/config.js")]),e._v(": 配置文件的入口文件，也可以是 "),v("code",[e._v("YML")]),e._v(" 或 "),v("code",[e._v("toml")]),e._v("。")]),e._v(" "),v("li",[v("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": 客户端应用的增强。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("同时阅读:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"默认的页面路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认的页面路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认的页面路由")])},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("table",[v("thead",[v("tr",[v("th",[e._v("文件的相对路径")]),e._v(" "),v("th",[e._v("页面路由地址")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v("/README.md")])]),e._v(" "),v("td",[v("code",[e._v("/")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("/guide/README.md")])]),e._v(" "),v("td",[v("code",[e._v("/guide/")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v("/config.md")])]),e._v(" "),v("td",[v("code",[e._v("/config.html")])])])])])}],!1,null,null,null);s.options.__file="directory-structure.md";t.default=s.exports}}]);