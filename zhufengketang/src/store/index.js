import {createStore,applyMiddleware} from "redux";
// applyMiddleware : 这个方法存在于redux中；方法中放着对应的中间件；

import reducer from "./reducer/index";
import reduxLogger from "redux-logger";// 打印状态
import reduxThunk from "redux-thunk";// 处理异步
import reduxPromise from "redux-promise";// 可以返回promise对象；

let store = createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
window._store = store;//主要为了方便调试使用；
export default store;