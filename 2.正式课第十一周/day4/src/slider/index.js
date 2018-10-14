import React from "react";
import ReactDOM from "react-dom";
import Slider from "./component/Slider";
import "./index.css";
// 在react中webpack在编译时，对路径需要是一个绝对路径；
// webpack会把路径编译自己识别的路径；通过require方法进行转换；
let  imgs = [require("./images/1.jpg"),require("./images/2.jpg"),require("./images/3.jpg"),require("./images/1.jpg")];
console.log(imgs);
ReactDOM.render(<Slider imgs={imgs}/>,window.root);
