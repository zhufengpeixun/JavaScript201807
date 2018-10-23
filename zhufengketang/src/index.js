import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./container/Home/Home"
import Lesson from "./container/Lesson/Lesson"
import Profile from "./container/Profile/Profile";
import App from "./container/App";
import store from "./store/index";
import {Provider} from "react-redux"
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/lesson" component={Lesson}/>
                <Route path="/profile" component={Profile}/>
            </App>
        </Provider>
    </Router>,
    document.querySelector("#root")
);