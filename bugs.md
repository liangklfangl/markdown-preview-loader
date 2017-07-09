### bugs
(1)我们要安装webpack是不合理的，但是原因是我们使用了webpackcc
(2)grob-files的readme有问题
(3)react,react-dom不应该安装
(4)安装了babel-core,antd
(5)jsx语法报错

```js
 4 | module.exports = {
  5 |   "content": ["article", ["h3", "1.基本用法"], function jsonmlReactLoader() {
> 6 |     return <div>
    |            ^
  7 |  I am basic usage
  8 |     </div>;
  9 |   }, ["h3", "2.运行"]],
```
