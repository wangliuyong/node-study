
// 1.node 是一个基于chrome  v8引擎的js运行环境




console.log(arguments.callee); 
 
// => function (exports, require, module, __filename, __dirname) { … },每一个模块都被一个外层文件所包裹，注入了exports, require, module, __filename, __dirname
// exports  暴漏模块   require 引入模块   module  暴漏模块  __filename 当前文件绝对路径   __dirname当前文件所在文件夹
/**
 * 外层函数的作用
 */
// 1.隐藏内部实现  2.支持commonJS 模块化

