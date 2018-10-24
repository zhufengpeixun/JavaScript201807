import React from "react";
import "./index.less"
import {withRouter} from "react-router-dom";
// 只有路由渲染出的组件才具有match  history location;
// 那么如果当前组件不是路由渲染；那么withRouter可以让当前组件具有这三个属性；
class Header extends React.Component{
    render(){
        console.log(this.props);
        return <div className="login-header">
            <i className="iconfont icon-fanhui" onClick={()=>{this.props.history.push("/profile")}}></i>
            {this.props.title}
        </div>
    }
}
export default withRouter(Header);
