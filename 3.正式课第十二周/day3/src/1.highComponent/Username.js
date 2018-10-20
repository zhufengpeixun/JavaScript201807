import React from "react";
import Local from "./Local"
class Username extends React.Component{
  /*  constructor(){
        super();
        this.state = {val:""}
    }
    componentWillMount(){
        // 重新设置state; 初始化状态一般都在当前钩子函数中因为此时视图还没渲染；
        this.setState({val:localStorage.getItem("username")});
    }*/
    render(){
        // 受控组件： 表单元素受状态控制；不可以发生直接更改；需要改变状态中的值来改变组件中的值；
        return  <div>
                    <input type="text" value={this.props.msg.val} onChange={()=>{}}/>
                </div>
    }
}
export default Local("username")(Username)
// localStore.getItem
