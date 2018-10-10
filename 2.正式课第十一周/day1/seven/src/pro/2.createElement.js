import React  from "react";
import ReactDOM from "react-dom";
let a = <div a="1">888</div>;
// JSX 元素最后经过webpack 编译之后，都转换成了React.createElement;JSX 实际上就是这个方法的语法糖；
console.log(a);
let newEle = React.createElement("div",{a:1,id:"box"},"8888",React.createElement("p",null,"你很帅"));
console.log(newEle);
// 1. 参数；接收虚拟的DOM元素；
// 2. 参数： 将要注入的真实元素；
ReactDOM.render(newEle,window.root);

// createElement :返回一个虚拟的DOM元素；就是一个对象；
// 第一个参数： 元素的类型
// 第二个参数： 行内属性;是一个对象数据类型的；
// 第三个参数：  子节点；
// 从第三个参数开始往后，都是子节点；
