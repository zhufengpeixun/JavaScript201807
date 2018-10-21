import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./container/Home/Home"
import Lesson from "./container/Lesson/Lesson"
import Profile from "./container/Profile/Profile";
import App from "./container/App";
ReactDOM.render(
    <Router>
        <App>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/lesson" component={Lesson}/>
            <Route path="/profile" component={Profile}/>
        </App>
    </Router>,
    document.querySelector("#root")
);