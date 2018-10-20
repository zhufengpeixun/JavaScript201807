import React from "react";
import {Link,Route} from "react-router-dom";
import Add from "./Add.js"
import List from "./List"
export default class User extends React.Component{
    render(){
        return <div>
            <div className="col-md-3">
                <nav className="nav navbar-nav">
                    <li>
                        {/*Link 的to属性存放当前的路由*/}
                        {/*#后面如果有两个/,那么二级路由；*/}
                        <Link to={"/user/add"}>添加用户</Link>
                        <Link to={"/user/list"}>用户列表</Link>
                    </li>
                </nav>
            </div>
            <div className="col-md-9">
                <Route path="/user" exact={true} component={Add}/>
                <Route path="/user/add" component={Add}/>
                <Route path="/user/list"  exact={true} component={List}/>
                <Route path="/user/list/:id" component={List}/>
                {/*<Route path="/user/list" component={Add}/>*/}
            </div>
        </div>
    }
}