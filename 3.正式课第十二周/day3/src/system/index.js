import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App"
import {HashRouter as Router,Route,Redirect,Link,Switch} from "react-router-dom";
import Home from "./container/Home"
import Profile from "./container/Profile"
import User from "./container/User"
import "bootstrap/dist/css/bootstrap.css"
ReactDOM.render(
    <Router>
        {/*一般一级路由在当前index中进行配置；*/}
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/user" component={User}/>
                <Redirect to="/"/>
            </Switch>
        </App>
    </Router>,
document.querySelector("#root")
)
;
