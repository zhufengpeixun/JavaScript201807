
// 组件中数据的来源
// 1.属性； 是由外界传递过来的
// 2.状态： 是自己的；只能通过setState来改变状态；

import React from "react";
import ReactDOM from "react-dom";
class Count extends React.Component{
    constructor(){
        super();
        this.state = {a:1}
    }
    addCount=()=>{
        // 状态是当前组件私有的，但是不能直接更改；可以使用setState这个方法更改；
        // 当setState执行时，重新运行了render函数；让视图进行了更新；
        // 当setState 发现如果执行相同的+1；那么只会执行一次；
        // setState
        // 1. 在react组件的生命周期或事件的绑定中，setState 是异步的
        // 2. 在定时器或原生的事件中，setState不一定是同步的；
        /*console.log(this.state.a);
        this.setState({a:this.state.a+1});*/
        /*console.log(this.state.a);
        this.setState({a:this.state.a+1});*/
        //this.setState({a:{num:this.state.a.num+1}})
        /*this.setState({a:this.state.a+1},function () {
            this.setState({a:this.state.a+1});
        });*/
        this.setState((prevState)=>({a:prevState.a+1}));
    }
    render(){
        return  <div>
                    <h1>{this.state.a}</h1>
                    <button onClick={this.addCount}>+</button>
                </div>
    }
}
ReactDOM.render(
<Count/>, document.querySelector("#root"));
