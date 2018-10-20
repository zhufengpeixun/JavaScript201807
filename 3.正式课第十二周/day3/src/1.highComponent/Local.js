import React from "react";
// 将username和password的公共的逻辑封装在当前组件上；
 const Local = (key) =>(Component)=>{
    // 当前函数需要返回一个封装后的组件；
    return class A extends React.Component{
        constructor(){
            super();
            this.state = {val:""};
        }
        componentWillMount(){
            this.setState({val:localStorage.getItem(key)})
        }
        render(){
            return <Component msg={this.state}/>
        }
    }
}
export default Local;

// connect()(): 返回一个新的组件；
