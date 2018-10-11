import React from "react";
import ReactDOM from "react-dom";
//
let  A = <h1>1111</h1>;
// 在react中定义组件有两种方式；
// 第一种： 通过function来声明一个组件；
// 组件名称的要求
// 1. 为了区分JSX元素；组件的名称首字母需要大写；
// 2. 组件定义之后，可以像JSX元素一样使用；
// 3. 在组件中return一个唯一的JSX元素；
// 4. render方法将虚拟的DOM渲染成真实的DOM；
function Welcome(props) {
    // return 一个JSX元素；
    // 这个组件的参数，是在render方法执行时，调用了这个函数，并且默认传一个{}；
    //console.log(props);// {}
    //let  obj = {n:"m"}
    //return <h1 style={props.data}>{props.id}</h1>;
    return <h1>{props.name}</h1>;
}
let school = {name:"zfpx",class:7,total:41}
// 组件以单闭合标签形式
ReactDOM.render(<div>
   {/* <Welcome data={{width:"100px"}} id="666"/>
    <Welcome data={{width:"100px"}} id="888"/>*/}
    <Welcome  {...school}/>
</div>,window.root);

// render执行： 先判断一下参数是否一个组件或者是一个react元素；
// 如果是一个组件的话
// 1) : 首先将组件的行间属性组装成一个对象；
// 2) : 将这个函数执行，并且把这个组装好的对象传递给这个函数；
// 3) : 获取到函数返回的react元素，把虚拟的DOM转换成真实的DOM；
// 4) : 将转换的DOM插入到页面的根元素中；


// 组件：实现组件的复用；通过行间属性传递参数的不同，进行数据的处理；