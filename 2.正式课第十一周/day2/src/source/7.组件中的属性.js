// 数据影响视图；在react中，能够影响视图的有两种方式；
// 组件中的数据有两个来源：属性和状态；
// 当属性或状态发生改变，视图也会随着变化；
import React ,{Component} from "react";
import ReactDOM from "react-dom";
class Time extends Component{
    render(){
        // 如果当前组件的属性发生改变，那么会重新执行render函数；那么视图也会重新渲染；
        return <h1>{this.props.data.toLocaleString()}</h1>
    }
}
let curTime =new Date();
setInterval(function () {
    curTime =new Date();
    //ReactDOM.render(<Time data={curTime}/>,window.root);
},1000)
ReactDOM.render(<Time data={curTime}/>,window.root);