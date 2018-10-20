// react单向数据流；数据可以一层一层向下传递；
// context 可以实现数据的交互；
// APP  ---> Header ----> Title;
// 把方法和数据统一定义在在上层的组件中；

// 父组件中：
// childContextTypes :将要传给子组件的类型
// getChildContext ： 传给子组件的上下文；
// 子组件中：
// contextTypes : 定义了接收的数据类型；
// APP --- Header ==>函数方法
// APP ---Title ==> 数据；
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";
import PropTypes from "prop-types"
class App extends React.Component{
    constructor(){
        super();
        this.state = {color:"blue"}
    }
    static childContextTypes={
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    setColor=(val)=>{
        this.setState({color:val})
    }
    getChildContext(){// 定义子组件上下文数据的；需要返回一个对象那个
        return {color:this.state.color,setColor:this.setColor}
    }
    render(){
        return <div>
                <Header/>
        </div>
    }
}
ReactDOM.render(
<App/>,
document.querySelector("#root")
)
;
