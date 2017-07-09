### 目的

(1)在markdown中指定'demo-jsx'(在webpack中进行配置语言)的代码块我会给你生成html，并插入到我的template实现预览

(2)readme照样来做，其中预览的部分我来完成。以后不用运行复杂的npm run命令来实现预览效果，直接双击我们的html就可以了，甚至可以直接插入到iframe中实现预览


### 问题
(1)我们的readme也是要放在入口文件中打包(可以通过我的loader自动插入我们的readme.md代码)，打包完成以后从生成的资源中单独取出这个markdown文件插入到一个html中实现预览，所以结构就是loader+plugin的方式
。

(2)所有的require代码肯定在node_modules是存在的，不然不可能开发者写出这样的demo。


### mdw的实现原理
(1)我们指定了文件夹，应用会直接读取这些md文件，然后将他们转化为jsonml，并作为一个loader的值通过module.exports导出。你不用直接显示的require('*.md')。我们的markdown-data-loader处理的结果就是如下的结构:

```js
module.exports = ${
    stringify(parsedMarkdown)
}
```

