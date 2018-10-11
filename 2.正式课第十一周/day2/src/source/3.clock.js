import React from "react";
import ReactDOM from "react-dom";
let a;
function tick() {
    a = <h1>
        {/*大括号不能是一个对象；需要将其转换成字符串*/}
        {new Date().toLocaleString()}
    </h1>
    console.log(a);
    ReactDOM.render(a,document.querySelector("#root"));
}
setInterval(tick,1000);
tick();
// 由于只渲染一次，所以当a变量发生变化，但是页面是不刷新的；
//
//ReactDOM.render(a,document.querySelector("#root"));
