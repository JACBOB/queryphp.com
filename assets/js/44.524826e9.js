(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{180:function(t,s,e){"use strict";e.r(s);var a=e(21),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Theme components are subject to the same "),e("router-link",{attrs:{to:"./../guide/using-vue.html#browser-api-access-restrictions"}},[t._v("browser API access restrictions")]),t._v(".")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),e("p",[t._v("From there it's the same as developing a normal Vue application. It is entirely up to you how to organize your theme.")]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("Just one "),e("code",[t._v("Layout.vue")]),t._v(" might not be enough, and you might also want to define more layout components in the theme for using on different pages. You may also want to customize the "),e("router-link",{attrs:{to:"./../config/#palette"}},[t._v("palette")]),t._v(", and even apply some plugins.")],1),t._v(" "),e("p",[t._v("So it's time to reorganize your theme, an agreed theme directory structure is as follows:")]),t._v(" "),t._m(6),e("ul",[e("li",[e("code",[t._v("theme/global-components")]),t._v(": Components under this directory will be automatically registered as global components. For details, please refer to "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ol",[e("li",[t._v("Considering backward compatibility, Vue components located at "),e("router-link",{attrs:{to:"./../miscellaneous/glossary.html#theme-side"}},[t._v("themePath")]),t._v(" will also be automatically registered as layout components. But the recommended is placing them under "),e("code",[t._v("themePath/layouts")]),t._v(" directory, which looks more clearer.")],1),t._v(" "),e("li",[t._v("When you want to publish your theme as an npm package, make sure the package has "),e("code",[t._v("index.js")]),t._v(", and set "),e("code",[t._v('"main"')]),t._v(" field at "),e("code",[t._v("package.json")]),t._v(" to "),e("code",[t._v("index.js")]),t._v(" so that VuePress can resolve and get the correct "),e("router-link",{attrs:{to:"./../miscellaneous/glossary.html#theme-side"}},[t._v("themePath")]),t._v(".")],1)]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("Suppose your theme layouts folder is as follows:")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),e("p",[e("code",[t._v("title")]),t._v(", "),e("code",[t._v("description")]),t._v(" and "),e("code",[t._v("base")]),t._v(" are copied from respective fields in "),e("code",[t._v(".vuepress/config.js")]),t._v(". "),e("code",[t._v("pages")]),t._v(" contains an array of metadata objects for each page, including its path, page title (explicitly specified in "),e("router-link",{attrs:{to:"./../guide/markdown.html#front-matter"}},[t._v("YAML front matter")]),t._v(" or inferred from the first header on the page), and any YAML front matter data in that file.")],1),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("lastUpdated")]),t._v(" is the UNIX timestamp of this file's last git commit, for more details, refer to "),e("router-link",{attrs:{to:"./../theme/default-theme-config.html#last-updated"}},[t._v("Last Updated")]),t._v(".")],1)]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),e("p",[t._v("Using a theme is almost same as using a plugin.")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),e("p",[t._v("Same with:")]),t._v(" "),t._m(47),e("p",[t._v("This also works with "),e("a",{attrs:{href:"https://docs.npmjs.com/misc/scope",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scoped Packages"),e("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(48),e("p",[t._v("Shorthand:")]),t._v(" "),t._m(49),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),e("p",[t._v("See: "),e("router-link",{attrs:{to:"./../plugin/#using-a-plugin"}},[t._v("Plugin > Using a plugin")]),t._v(".")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("Translation are welcome!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"writing-a-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-theme","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing a theme")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To write a theme, create a "),s("code",[this._v(".vuepress/theme")]),this._v(" directory in your docs root, and then create a "),s("code",[this._v("Layout.vue")]),this._v(" file:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{staticClass:"vue-container"},[s("code",[s("p",[this._v(".\n└─ .vuepress\n └─ "),s("code",[this._v("theme")]),this._v("\n     └─ Layout.vue")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Directory Structure")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"vue-container"},[e("code",[e("p",[t._v("themePath\n├── "),e("code",[t._v("global-components")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n│   └── xxx.vue\n├── "),e("code",[t._v("components")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n│   └── xxx.vue\n├── "),e("code",[t._v("layouts")]),t._v("\n│   ├── Layout.vue "),e("em",[t._v("("),e("strong",[t._v("Required")]),t._v(")")]),t._v("\n│   └── 404.vue "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n├── "),e("code",[t._v("styles")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n│   ├── index.styl\n│   └── palette.styl\n├── "),e("code",[t._v("templates")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n│   ├── dev.html\n│   └── ssr.html\n├── "),e("code",[t._v("index.js")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Only required when you publish it as an npm package")]),t._v(")")]),t._v("\n├── "),e("code",[t._v("enhanceApp.js")]),t._v(" "),e("em",[t._v("("),e("strong",[t._v("Optional")]),t._v(")")]),t._v("\n└── package.json")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/components")]),this._v(": Your components.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/layouts")]),this._v(": Layout components of the theme, where "),s("code",[this._v("Layout.vue")]),this._v(" is required.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/styles")]),this._v(": Global style and palette.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/templates")]),this._v(": Modify default template.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/index.js")]),this._v(": Entry file of theme configuration.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("theme/enhanceApp.js")]),this._v(": Theme level enhancements.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ...\n  "),e("span",{attrs:{class:"token property"}},[t._v('"main"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"index.js"')]),t._v("\n  ...\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"layout-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Layout Component")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{staticClass:"vue-container"},[s("code",[s("p",[this._v("theme\n└── "),s("code",[this._v("layouts")]),this._v("\n   ├── Layout.vue\n   ├── AnotherLayout.vue\n   └── 404.vue")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Then, all the pages will use "),s("code",[this._v("Layout.vue")]),this._v(" as layout component by default, while the routes not matching will use "),s("code",[this._v("404.vue")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you want to switch the layout of the some page to "),s("code",[this._v("AnotherLayout.vue")]),this._v(", you just need to update the frontmatter of this page:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{attrs:{class:"token hr punctuation"}},[this._v("---")]),this._v("\n"),s("span",{attrs:{class:"token title important"}},[this._v("layout: AnotherLayout\n"),s("span",{attrs:{class:"token punctuation"}},[this._v("---")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"apply-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Apply plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can apply some plugins to the theme via "),s("code",[this._v("theme/index.js")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      serviceWorker"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatePopup"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For themes that need to be released to NPM, please do not forget to add it to "),s("code",[this._v("dependencies")]),this._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"dependencies"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token property"}},[t._v('"@vuepress/plugin-pwa"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"^x.x.x"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"site-and-page-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#site-and-page-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Site and Page Metadata")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The "),e("code",[t._v("Layout")]),t._v(" component will be invoked once for every "),e("code",[t._v(".md")]),t._v(" file in "),e("code",[t._v("docs")]),t._v(", and the metadata for the entire site and that specific page will be exposed respectively as "),e("code",[t._v("this.$site")]),t._v(" and "),e("code",[t._v("this.$page")]),t._v(" properties which are injected into every component in the app.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This is the value of "),s("code",[this._v("$site")]),this._v(" of this very website:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"description"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Vue-powered Static Site Generator"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"base"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"pages"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("1524027677000")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{attrs:{class:"token property"}},[t._v('"path"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"VuePress"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ...\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This is the "),s("code",[this._v("$page")]),this._v(" object for this page you are looking at:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"lastUpdated"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token number"}},[t._v("1524847549000")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"path"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/guide/custom-themes.html"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Custom Themes"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"headers"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/* ... */"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{attrs:{class:"token property"}},[t._v('"frontmatter"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("If the user provided "),e("code",[t._v("themeConfig")]),t._v(" in "),e("code",[t._v(".vuepress/config.js")]),t._v(", it will also be available as "),e("code",[t._v("$site.themeConfig")]),t._v(". You can use this to allow users to customize behavior of your theme - for example, specifying categories and page order. You can then use these data together with "),e("code",[t._v("$site.pages")]),t._v(" to dynamically construct navigation links.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Finally, don't forget that "),s("code",[this._v("this.$route")]),this._v(" and "),s("code",[this._v("this.$router")]),this._v(" are also available as part of Vue Router's API.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"content-excerpt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-excerpt","aria-hidden":"true"}},[this._v("#")]),this._v(" Content Excerpt")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If a markdown file contains a "),s("code",[this._v("\x3c!-- more --\x3e")]),this._v(" comment, any content above the comment will be extracted and exposed as "),s("code",[this._v("$page.excerpt")]),this._v(". If you are building custom theme for blogging, this data can be used to render a post list with excerpts.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"content-outlet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-outlet","aria-hidden":"true"}},[this._v("#")]),this._v(" Content Outlet")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The compiled content of the current "),s("code",[this._v(".md")]),this._v(" file being rendered will be available as a special "),s("code",[this._v("<Content/>")]),this._v(" global component. You will need to render it somewhere in your layout in order to display the content of the page. The simplest theme can be just a single "),s("code",[this._v("Layout.vue")]),this._v(" component with the following content:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Content")]),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"app-level-enhancements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-level-enhancements","aria-hidden":"true"}},[this._v("#")]),this._v(" App Level Enhancements")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Themes can enhance the Vue app that VuePress uses by exposing an "),s("code",[this._v("enhanceApp.js")]),this._v(" file at the root of the theme. The file should "),s("code",[this._v("export default")]),this._v(" a hook function which will receive an object containing some app level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Vue"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// the version of Vue being used in the VuePress app")]),t._v("\n  options"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// the options for the root Vue instance")]),t._v("\n  router"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// the router instance for the app")]),t._v("\n  siteData "),e("span",{attrs:{class:"token comment"}},[t._v("// site metadata")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// ...apply enhancements to the app")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"using-a-theme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-theme","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a theme")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"use-plugins-from-a-dependency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-plugins-from-a-dependency","aria-hidden":"true"}},[this._v("#")]),this._v(" Use plugins from a dependency")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Themes can be published on npm in raw Vue SFC format as "),s("code",[this._v("vuepress-theme-xxx")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'vuepress-theme-xx'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"theme-shorthand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theme-shorthand","aria-hidden":"true"}},[this._v("#")]),this._v(" Theme Shorthand")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you prefix the plugin with "),s("code",[this._v("vuepress-theme-")]),this._v(", you can use a shorthand to leave out that prefix:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'vuepress-theme-xxx'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'@org/vuepress-theme-xxx'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'@vuepress/theme-xxx'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'@org/xxx'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'@vuepress/xxx'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("The plugin whose name starts with "),s("code",[this._v("@vuepress/theme-")]),this._v(" is an officially maintained theme.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" plugins")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Type: "),s("code",[this._v("Array|Object")])]),this._v(" "),s("li",[this._v("Default: undefined")])])}],!1,null,null,null);n.options.__file="README.md";s.default=n.exports}}]);