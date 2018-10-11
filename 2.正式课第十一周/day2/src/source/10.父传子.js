import React from "react";
import ReactDOM from "react-dom";
class Count extends React.Component{
    constructor(){
        super();
        this.state = {a:1}
    }
    addCount=()=>{
        this.setState({
            a:this.state.a+1
        })
    }
    render(){
        return  <div>
                <Head val={this.state.a}/>
                <button onClick={this.addCount}>+</button>
            </div>
    }
}
class Head extends React.Component{
    render(){
        return <h1>{this.props.val}</h1>
    }
}
// 父传子： 通过行间属性传递；子组件通过实例上的props属性接收新的数据
// 当组件的属性发生改变，那么当前的视图就会更新；
ReactDOM.render(
    <Count/>, document.querySelector("#root"));
