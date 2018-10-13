import React from "react";
import ReactDOM from "react-dom";
class Panel extends React.Component{
    constructor(m){
        // 初始化状态一般在constructor中定义状态
        super(m);
        this.state = {num:0,n:100}
    }
    add=()=>{
        // setState
        // setState 替换了原来的空间地址；
        //this.setState({num:this.state.num+1})
        // this.setState((prevState)=>{return {num:prevState.num+1}})
        // setState 的传参方式：
        // 1. 对象
        // 2. 函数 ： 会把上一个状态以实参的方式传给形参，和当前函数return的对象进行合并；返回一个新的空间地址；
        // 3. 对象+ 回调函数；下一个状态依赖上一个状态；
        this.setState({num:this.state.num+1},function(){
            // 如果下一个状态是依赖于上一个状态的，那么需要写成函数的方式；防止状态发生合并；
            this.setState((prevState)=>({num:prevState.num+1}))
        });
        //console.log(this.state);
    }
    render(){
        // render 中的this指向当前组件的实例；
        return <div>
            <h1>{this.state.num}{this.state.n}</h1>
            <button onClick={this.add}>点啊</button>
        </div>
    }
}

/*let  a = {m:100,n:0};
let  b = {n:10}
let c = {...a,...b};
Object.assign()*/
ReactDOM.render(
<Panel/>,
document.querySelector("#root"))
