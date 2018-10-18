import React from "react";
import ReactDOM from "react-dom";
import Counter from "./compoment/Counter"
import Compute from "./compoment/Compute";
import {Provider} from "react-redux";
import store from "./store/index"
// Provider ： 这是一个组件；
// 在react-redux : 规定组件必须返回一个连接后的组件；
ReactDOM.render(

        <Provider store={store}>
            <Counter/>
           {/* <Compute/>*/}
        </Provider>

   , document.querySelector("#root"));
