// h 存储就是一个jsx元素；jsx : JS + XML;
import React from "react";
import ReactDOM from "react-dom";
import "./1.index.css";
// 在JS中直接写的标签；是一个JSX元素；也是一个react元素；这个元素实际是一个对象；这个对象就是虚拟的DOM元素；
// 在react中的元素一般都写在js中；css 写在css 文件中；
let  obj  = {name:"renjinhui"};
let  num = "12";
let arr = [1,2,3,4,"我爱你中国"];
let fn = function () {

};
let sty = {width:"100px",background:"red"}
// 1. jsx的元素只能由一个根元素；
// 2. 如果需要获取对象中属性名对应的属性值，外层加一个大括号；
// 3. jsx的大括号取值中不能放对象；但是可以基本数据类型；如果基本数据类型是布尔、null、undefined，那么不会默认为空；
// 4.支持数组，数组成员不能是对象
// 5.大括号可以放函数的执行结果；
// 6. 行内样式需要两个大括号；
// 7. 在JS中关键字，需要进行特殊处理；class==>className  for ==> htmlFor

let  h =<div style={ {width:"100px",background:"red"}} className="content"><div>123</div><div>{fn()}</div></div> ;
console.log(h);
ReactDOM.render(h,document.getElementById("root"));
// ReactDOM.render :
// 1. 把虚拟的DOM转换成真实的DOM；
// 2. 把真实的DOM插入到根元素中；