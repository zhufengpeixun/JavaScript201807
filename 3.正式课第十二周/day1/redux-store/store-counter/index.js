
import {createStore} from "../redux/redux.js";
import reducer from "./reducer/1.counter"
let store = createStore(reducer);
export default store;

// store 分为四部分：
// action-types  : 存放一些常量；代表当前的动作类型type;
// reducer  : 根据type类型返回状态；处理数据的逻辑；
// action  : dispatch 派发的动作；
// index ： 用来创建store；