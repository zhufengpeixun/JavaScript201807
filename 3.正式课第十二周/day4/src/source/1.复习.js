// function  class
// 高阶组件： 一个组件返回一个组件；
// 经常用于将组件的公共逻辑封装到一个组件中；
import  React from "react";
class  Sum  extends React.Component{
    render(){
        return <div>{this.props.m}</div>
    }
}
let Local =(key)=>(Componet)=>{
    // key : 参数   Component: 组件
    return  class A extends React.Component{
        constructor(){
            super();
            this.state = {}
        }
        render(){
            return <Component m={...this.state}/>
        }
    }

}
export default Local("a")(Sum)

// context： 数据 传递；
// 父 ： childContextTypes(静态属性)  getChildContext（函数： 返回项下传递的数据,将此数据放到子孙组件的context属性上）
// 子： contextTypes (接收过来的数据)   this.context


// 路由： react-router-dom
// hashRouter ： 接收一个唯一的react的元素；
// Route : 配置每一条路由; path  component;
// Switch : 只要匹配正确的路由，就不再向下匹配
// Redirect : 重定向路由； to;
// Link : 用来绑定路由跳转，编译之后是一个a标签；
// NavLink : 导航路由；

// 路由嵌套路由；
// 由路由渲染出来的组件： 多了三个属性： history   location  match

// {hashRouter,Route,Switch}

