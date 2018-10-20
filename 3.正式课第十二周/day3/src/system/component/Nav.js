import React from "react";
// Link : 是react-router-dom中的一个组件；会解析成一个a标签；点击Link时，可以改变当前的路由；
import {Link} from "react-router-dom";
export default class Nav extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            珠峰管理系统
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <Link to={"/"}>首页</Link></li>
                        <li><Link to={"/profile"}>个人中心</Link></li>
                        <li><Link to={"/user"}>用户</Link></li>
                    </ul>
                </div>
            </nav>
        </div>

    }
}
