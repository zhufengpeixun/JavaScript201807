/*function sum(a){
    return function (b) {
        return function (c) {
            return a+b+c;
        }
    }
}
// 高阶函数： 一个函数返回一个函数；
let  sum = a=>b=>c=>a+b+c;
sum(1)(2)(3);*/

// 高阶组件： 一个组件返回一个组件；
import React from "react";
import ReactDOM from "react-dom";
import Username from "./Username";
import Password from "./Password";
ReactDOM.render(
    <div>
        <Username/>
        <Password/>
    </div>,
document.querySelector("#root"));
// code-review: 代码审查；


