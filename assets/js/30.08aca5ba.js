(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ci-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[s._v("#")]),s._v(" CI/CD")]),s._v(" "),t("h2",{attrs:{id:"githubpages-ci-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#githubpages-ci-cd"}},[s._v("#")]),s._v(" GithubPages CI/CD")]),s._v(" "),t("p",[s._v("最近本读书笔记网站部署时突发奇想，想着部署到Github pages并使用Github Actions实现自动化部署，我提交代码就自动更新到Github pages岂不美哉？\n于是有了以下步骤（省略github注册、仓库推送等）")]),s._v(" "),t("ol",[t("li",[s._v("进入github仓库的 actions"),t("br"),s._v(" "),t("img",{attrs:{src:"/practice/CICD/github-pages-01.png",alt:"pic"}})])]),s._v(" "),t("hr"),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("然后点击new workflow，再点击如图的configure\n"),t("img",{attrs:{src:"/practice/CICD/github-pages-02.png",alt:"pic"}})])]),s._v(" "),t("hr"),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("把以下脚本复制粘贴进去，会有对应注释解释脚本含义")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a basic workflow to help you get started with Actions")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  Deploy Pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#脚本名称")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里只配置了master分支，所以只有推送master分支才会触发以下任务")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#基于ubuntu跑该脚本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permissions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("contents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" write\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用官方提供的拉取分支脚本")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Use Node.js 16.20.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定步骤名字")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/setup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node@v2 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用官方提供的脚本")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node-version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"16.20.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（可选）指定该步骤要使用的版本")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Cache NPM dependencies "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将 node_modules 缓存下来")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/cache@v2\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_modules\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" runner.OS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("npm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cache\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restore-keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n            ${{ runner.OS }}-npm-cache")]),s._v("\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Install Dependencies "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装依赖")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行package.json中的打包脚本 如果你package.json没写打包命令的话 需要写一下")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm run build\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#部署 这里调用别人提供的推送脚本")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" peaceiris/actions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages@v3\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参数配置")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.你的密钥名 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在第四步骤说明")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("publish_dir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./docs/.vuepress/dist "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将打包后哪个文件/文件夹 推送上分支，会推送到 gh-pages分支")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("hr"),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[s._v("github_token: secrets.你的密钥名")]),s._v(" 配置，点击新建仓库秘钥，名字随便取，跟前文的'你的密钥名'相同即可，至于里面的SCRECT就填写申请的秘钥，将在下一步讲解（可以先随便填写保存，后面申请秘钥后再修改即可）\n"),t("img",{attrs:{src:"/practice/CICD/github-pages-03.png",alt:"pic"}})])]),s._v(" "),t("hr"),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("如图进入开发者设置，"),t("br"),s._v(" "),t("img",{attrs:{src:"/practice/CICD/github-pages-04.png",alt:"pic"}}),t("br"),s._v("\n导航选择Token(classic)，然后生成秘钥即可，过期时间最多选一年/永久。生成秘钥完成后复制到第四步即可。\n"),t("img",{attrs:{src:"/practice/CICD/github-pages-05.png",alt:"pic"}})])]),s._v(" "),t("hr"),s._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[s._v("至此github pages的自动化部署配置已完成，可以推送一下代码至g仓库的master尝试一下自动化部署效果了。部署成功的话，会新建一个gh-pages分支。")])]),s._v(" "),t("hr"),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[s._v("最后在github pages页面选择gh-pages分支显示即可。\n"),t("img",{attrs:{src:"/practice/CICD/github-pages-06.png",alt:"pic"}})])]),s._v(" "),t("ul",[t("li",[s._v("使用github域名：将仓库名字改为<自己的用户名>.github.io，就能用<自己的用户名>.github.io直接访问该github pages。")]),s._v(" "),t("li",[s._v("自定义域名，在第七步的配置页里，Custom domain填写自己的域名，然后到自己的域名DNS解析一下到该github pages即可。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);