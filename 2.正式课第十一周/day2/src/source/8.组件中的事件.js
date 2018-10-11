import React,{Component} from "react";
import ReactDOM from "react-dom";
// react  是单向数据流；
class Count extends Component{
    constructor(){
        super();
    }
    add=()=>{
        console.log(this);// undefined
        this.props.data.a ++;
        this.setState({});
        // 设置当前状态；可以重新调用render方法；让视图重新更新；
    }
    render(){
        // 在react中的事件行为都是驼峰命名的方式；
        console.log(100);
        return <div>
                    <Head  val={this.props.data.a}/>
                    <button onClick={this.add}>+</button>
                </div>
    }
}
class Head extends Component{
   render(){
       return <h1>{this.props.val}</h1>
   }
}
ReactDOM.render(
<Count data={{a:1}}/>,
document.querySelector("#root"));
