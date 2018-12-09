(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{176:function(t,e,n){"use strict";n.r(e);var s=n(21),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("PSR-4 基础目录使用小写，其它依次使用大驼峰法命名，例如。")]),t._v(" "),t._m(3),n("p",[t._v("其中 composer 配置")]),t._v(" "),t._m(4),n("p",[t._v("不存在类文件，请使用小写目录，其文件也一样:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("在使用前您需要安装 "),n("a",{attrs:{href:"http://cs.sensiolabs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("php-cs-fixer"),n("OutboundLink")],1),t._v("，这样子才能够进行下面的工作。")]),t._v(" "),t._m(9),n("p",[t._v("可以通过下面的方式来格式化代码风格:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),n("p",[t._v("上述脚本就会自动运行帮助你格式化代码,你也可以忽略脚本。")]),t._v(" "),t._m(20),n("p",[t._v("这样子我们再也不需要浪费时间在无意义的代码风格的讨论上了。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"开发规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发规范")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("QueryPHP")]),this._v(" 遵循 "),e("code",[this._v("PSR-2")]),this._v(" 命名规范和 "),e("code",[this._v("PSR-4")]),this._v(" 自动加载规范。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"文件和目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件和目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件和目录")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/data/codes/queryphp/application/app/Domain/Entity/\n/data/codes/queryphp/application/app/Domain/Entity/Test.php\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('"autoload": {\n    "psr-4": {\n        "App\\\\" : "application/app",\n        "Admin\\\\" : "application/admin",\n        "Common\\\\" : "common"\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/data/codes/queryphp/option/\n/data/codes/queryphp/option/app.php\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"统一代码风格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统一代码风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 统一代码风格")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了屏蔽不同用户的不同代码风格习惯，QueryPHP 设置一个统一的代码格式化配置来规范团队的代码风格，这符合 "),e("code",[this._v("PSR-2")]),this._v(" 规范并且可以通过 "),e("code",[this._v("StyleCI")]),this._v(" 规范。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"手工优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手工优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 手工优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/data/codes/queryphp/.php_cs.dist # 应用\n/data/codes/queryphp/vendor/hunzhiwange/framework/.php_cs.dist # 框架核心包\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$cd /data/codes/queryphp\n$php-cs-fixer fix --config=.php_cs.dist\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"结合-git-hooks-结合来格式化代码："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结合-git-hooks-结合来格式化代码：","aria-hidden":"true"}},[this._v("#")]),this._v(" 结合 "),e("code",[this._v("Git")]),this._v(" Hooks 结合来格式化代码：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/data/codes/queryphp/build/pre-commit.sh\n/data/codes/queryphp/vendor/hunzhiwange/framework/build/pre-commit.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("应用脚本 "),e("code",[this._v("/data/codes/queryphp/build/pre-commit.sh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("这里脚本也包含一段 JS 的脚本，这个用于格式化 QueryPHP 的通用前端后台的 JS 代码风格，跟 PHP 差不多。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#!/bin/bash\n#\n# check PHP code syntax error and standard with phpcs\n# https://blog.csdn.net/xsgnzb/article/details/52222366?locationNum=4&fps=1\n# https://blog.csdn.net/ljihe/article/details/80826071\n# =================== how to use ====================\n# ln -s pre-commit.sh ./../.git/hooks/pre-commit\n# git commit -h\n# git commit -n -m \'pass hook\' #bypass pre-commit and commit-msg hooks\n# ==================== end ==========================\n\nPROJECT=$(git rev-parse --show-toplevel)\ncd $PROJECT\nSFILES=$(git diff --cached --name-only --diff-filter=ACMR HEAD | grep \\\\.php)\n\n# Determine if a file list is passed\nif [ "$#" -ne 0 ]\nthen\n    exit 0\nfi\n\necho "Checking PHP Lint..."\n\nfor FILE in $SFILES\ndo\n    php -l -d display_errors=0 $FILE\n    if [ $? != 0 ]\n    then\n        echo "Fix the php error before commit."\n        exit 1\n    fi\n    FILES="$FILES $PROJECT/$FILE"\ndone\n\n# format code style\nif [ "$FILES" != "" ]\nthen\n    echo "Running Code Sniffer..."\n\n    isCheck=""\n\n    for FILE in $SFILES\n    do\n        result=`~/.composer/vendor/bin/php-cs-fixer fix $FILE --config=.php_cs.dist`\n\n        if [ "$result" != "" ]\n        then\n            echo $result\n            isCheck=$result\n            git add $FILE\n        fi\n    done\n\n    if [ "$isCheck" != "" ]\n    then\n        echo "The file has been automatically formatted."\n    fi\nfi\n\n# for js\njsfiles=$(git diff --cached --name-only --diff-filter=ACM "*.js" "*.jsx" "*.vue" "*.css" "*.less" | tr \'\\n\' \' \')\n[ -z "$jsfiles" ] && exit 0\n\n# Prettify all staged .js files\necho "$jsfiles" | xargs ./frontend/node_modules/.bin/prettier --config frontend/.prettierrc.js --ignore-path frontend/.prettierignore --write\n\n# Add back the modified/prettified files to staging\necho "$jsfiles" | xargs git add\n\ngit update-index -g\n\nexit $?\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("核心包脚本 "),e("code",[this._v("/data/codes/queryphp/build/pre-commit.sh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#!/bin/bash\n#\n# check PHP code syntax error and standard with phpcs\n# https://blog.csdn.net/xsgnzb/article/details/52222366?locationNum=4&fps=1\n# https://blog.csdn.net/ljihe/article/details/80826071\n# =================== how to use ====================\n# ln -s pre-commit.sh ./../.git/hooks/pre-commit\n# git commit -h\n# git commit -n -m \'pass hook\' #bypass pre-commit and commit-msg hooks\n# ==================== end ==========================\n\nPROJECT=$(git rev-parse --show-toplevel)\ncd $PROJECT\nSFILES=$(git diff --cached --name-only --diff-filter=ACMR HEAD | grep \\\\.php)\n\n# Determine if a file list is passed\nif [ "$#" -ne 0 ]\nthen\n    exit 0\nfi\n\necho "Checking PHP Lint..."\n\nfor FILE in $SFILES\ndo\n    php -l -d display_errors=0 $FILE\n    if [ $? != 0 ]\n    then\n        echo "Fix the php error before commit."\n        exit 1\n    fi\n    FILES="$FILES $PROJECT/$FILE"\ndone\n\n# format code style\nif [ "$FILES" != "" ]\nthen\n    echo "Running Code Sniffer..."\n\n    isCheck=""\n\n    for FILE in $SFILES\n    do\n        result=`~/.composer/vendor/bin/php-cs-fixer fix $FILE --config=.php_cs.dist`\n\n        if [ "$result" != "" ]\n        then\n            echo $result\n            isCheck=$result\n            git add $FILE\n        fi\n    done\n\n    if [ "$isCheck" != "" ]\n    then\n        echo "The file has been automatically formatted."\n    fi\nfi\n\ngit update-index -g\n\nexit $?\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"git-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-commit","aria-hidden":"true"}},[this._v("#")]),this._v(" Git Commit")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git commit -m 'pass hook'\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git commit -n -m 'pass hook'\n")])])])}],!1,null,null,null);i.options.__file="specification.md";e.default=i.exports}}]);