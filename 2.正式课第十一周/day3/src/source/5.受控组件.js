import React from "react";
import ReactDOM from "react-dom";
class Box extends React.Component{
    constructor(){
        super();
        // 如果状态不初始化，那么默认值是null；
        this.state = {str:"请输入用户名"}
    }
    change=(e,a)=>{
        console.log(e);
        console.log(e.target);
        console.log(a);
        //debugger
        //console.log(e.target.value);// 可以获取当前input框最新的状态值
        //this.setState({str:1})
        this.setState({str:e.target.value});
    }
    render(){
        // 受控组件： 如果当前的元素值是受状态控制的，那么就是受控组件；这个元素一般是指表单元素；
        // 受控组件不能直接修改input中的值；
        // 常见表单元素： form  input文本框  单选框 复选框  多选框 textarea
        //console.log(this.state);
        return <div>
            <input type="text" value={this.state.str} onChange={(e)=>{this.change(e,100)}}/>
            {this.state.str}
        </div>
    }
}
ReactDOM.render(
<Box/>,
document.querySelector("#root")
)
;