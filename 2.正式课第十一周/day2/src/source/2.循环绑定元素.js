//
import React from "react";
import ReactDOM from "react-dom";
// 数据从后端请求过来
// 在react中，一般用于循环绑定元素的，都用map方法进行绑定；
// 不能使用forEach 方法，因为forEach 没有返回值；
let  arr = [{name:"王浩"},{name:"孙佳生"}];
let ul = <ul>
    {arr.map((item,index)=>{
        // 用数组的map方法遍历数组；
       return  <li key={index}>{item.name}</li>
    })}
    {/*{[<li key={index}>{item.name}</li>,<li key={index}>{item.name}</li>]}*/}
</ul>;
ReactDOM.render(ul,document.querySelector("#root"));
