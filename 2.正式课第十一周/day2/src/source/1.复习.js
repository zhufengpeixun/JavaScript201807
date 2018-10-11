// JSX 元素
// JSX : 是js + XML的一种写法；经常把样式、js、DOM 都写在JSX中；webpack会将其打包一个js;
import React from "react";// 这是一个react的核心库；
import ReactDOM from "react-dom";// 把虚拟的DOM转成真实的DOM；并且插入到页面中；
let num = 100;
let  a = ()=>{
    return 100
}
let  h = <h1 id="title">{a()}</h1>;
// 1.支持表达是的结果，三元运算符
// 2. 不能直接放入对象
// 3. 可以放入基本的数据类型  布尔 null  undefined 显示为空；
// 4. 支持数组
// 5. 支持函数执行结果；
// 6. style ={{}}
// 7. class==> className  for===> htmlFor

ReactDOM.render(h,document.querySelector("#root"),function () {
    // render 中的第三个参数： 当虚拟DOM真正挂载到真实DOM之后，会执行这个回调函数；可以在这里面操作DOM；
    console.log(document.getElementById("title"));
});
// JSX 是React.createElement 这个方法的语法糖
React.createElement(type,null,111,React.createElement("span",null,111));
class Element{
    constructor(type,attr,children){
    }
    render(){
        // 1. 创建元素
        // 2. 遍历属性，并且放到行间属性上
        // 3. 循环子节点，判断是否是Element的实例；进行递归处理；
    }
}
let  React = {
    createElement(type,attr,...children){
        return new Element(type,attr,children)
    }
}
let  ReactDOM  = {
    render(ele,container){
        container.appendChild(ele.render())
    }
}
