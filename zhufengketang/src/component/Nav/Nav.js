import React from "react";
import "./index.less";
// NavLink  Link 区别： NavLink 选中的当前的NavLink有class类名叫active；
import {NavLink} from "react-router-dom";
export default class Nav extends React.Component{
    render(){
        return <div className="nav-home">
                    <NavLink to={"/"} exact={true}>
                        <i className="iconfont icon-xingqiu"></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to={"/lesson"} >
                        <i className="iconfont icon-react"></i>
                        <span>我的课程</span>
                    </NavLink>
                    <NavLink to={"/profile"}>
                        <i className="iconfont icon-xiaolian"></i>
                        <span>个人中心</span>
                    </NavLink>
                </div>
    }
}