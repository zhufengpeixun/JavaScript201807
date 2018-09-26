// 导入模块；
//1.  require 导入一个模块；如果是同级的自定义模块，必须加上./;
//2. 如果文件的后缀名是.js  .json 文件，那么可以省略后缀名；
//3. require 这个方法不在全局的对象global中；
//4.require 导入的模块；会将模块中的代码从上到下执行；

// module.exports / exports： 导出；
// 1. 把当前模块中的内容进行暴露；其他模块可以使用
// 2. module.exports 可以用其他的空间地址进行覆盖；exports 不能用其他空间覆盖；只能给其新增属性；
// 3. module.exports 不仅支持空间地址，还支持基本数据类型；

let a = require("./6.sum");
console.log(a);
/*
console.log(a);
console.log(a.sum(1, 3, 4, "8"));
*/
// 在node的环境中，全局的对象，它是global；不存在window
//console.log(global);
// 在每个自定义模块的最外层，会默认添加一个闭包的函数，这个函数中会接收五个参数；
/*(function (module,exports,require,__dirname,__filename) {

})();*/

// module下有一个exports属性；这个属性是将当前模块的属性和方法导出去；
/*console.log(exports);
console.log(module);*/
//console.log(__dirname);// 当前文件的父级目录绝对路径
//console.log(__filename);// 当前文件的绝对路径；


