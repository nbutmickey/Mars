(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{218:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h3",{attrs:{id:"我想在-h5-编译结束后，将产物推送到开发机，如何知道构建已完成？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我想在-h5-编译结束后，将产物推送到开发机，如何知道构建已完成？","aria-hidden":"true"}},[t._v("#")]),t._v(" 我想在 H5 编译结束后，将产物推送到开发机，如何知道构建已完成？")]),t._v(" "),e("p",[t._v("H5 的编译，会先生成 H5 工程文件，之后使用 vue-cli-service 进行编译。vue-cli-service 使用 webpack 编译，因此我们可以使用 "),e("code",[t._v("webpack.ProgressPlugin")]),t._v(" 插件来获取编译进度，具体设置在 vue.config.js 中增加：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("configureWebpack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProgressPlugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("percentage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("percentage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do something'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"新增的文件没有触发编译？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增的文件没有触发编译？","aria-hidden":"true"}},[t._v("#")]),t._v(" 新增的文件没有触发编译？")]),t._v(" "),e("p",[t._v("执行 "),e("code",[t._v("mars serve")]),t._v(" 后，新增了文件，发现不能够触发编译。请检查 mars.config.js 文件，是否自己设置了 watch。")]),t._v(" "),e("p",[t._v("gulp.watch 不能设置为绝对路径或 "),e("code",[t._v("./")]),t._v(" 开头的路径，否则不能自动监测到新增文件，例如："),e("code",[t._v("./src/**/*")]),t._v(" 需要改为 "),e("code",[t._v("src/**/*")]),t._v("。")]),t._v(" "),e("p",[t._v("详细说明见：https://stackoverflow.com/questions/22391527/gulps-gulp-watch-not-triggered-for-new-or-deleted-files 。")]),t._v(" "),e("h3",{attrs:{id:"为什么我升级了-marsjs-api-和-marsjs-components-构建产物却没有变化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么我升级了-marsjs-api-和-marsjs-components-构建产物却没有变化？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么我升级了 "),e("code",[t._v("@marsjs/api")]),t._v(" 和 "),e("code",[t._v("@marsjs/components")]),t._v(" 构建产物却没有变化？")]),t._v(" "),e("p",[t._v("这是 "),e("code",[t._v("@vue/cli")]),t._v(" 插件 "),e("code",[t._v("@vue/cli-plugin-babel")]),t._v(" 中使用 "),e("code",[t._v("cache-loader")]),t._v(" 的一个 Bug，导致 "),e("code",[t._v("transpileDependencies")]),t._v(" 中的 npm 升级后不会更新缓存，在官方修复这个 Bug 之前，可以通过在更新 "),e("code",[t._v("transpileDependencies")]),t._v(" 包之后手动删除 H5 产出目录下的"),e("code",[t._v("node_modules/.cache")]),t._v(" 目录来解决。")]),t._v(" "),e("p",[t._v("相关 Issue：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/4438",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/vue-cli/issues/4438"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/3635",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/vue-cli/issues/3635"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/issues/2450",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/vue-cli/issues/2450"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/webpack-contrib/cache-loader/issues/34",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/webpack-contrib/cache-loader/issues/34"),e("OutboundLink")],1)])])},[],!1,null,null,null);s.default=n.exports}}]);