import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
// 在全局下导入bootstrap模块
import "bootstrap/dist/css/bootstrap.css";
import {Provider} from "react-redux";
import store from "./store/index"
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,window.root);