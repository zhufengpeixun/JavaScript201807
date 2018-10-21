import {createStore,combineReducers,applyMiddleware} from "redux";
// 引入中间件；
// 应用中间件： applyMiddleWare: 这是一个函数；这个函数在redux中可以解构出来；
import reduxLogger from "redux-logger";
import reduxThunk from "redux-thunk";
// reduxThunk :可以让action 派发异步的动作； action支持返回一个函数；在函数的形参中有dispatch 和getState方法； 这方法就是store中的方法；
import reduxPromise from "redux-promise";
import Counter from "./reducers"
let reducers = combineReducers({
    Counter
});

let store = createStore(reducers,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
export default store;
/*let  dispatch = store.dispatch;
store.dispatch = function (action) {
    console.log(store.getState().num)
    dispatch(reducers,action)
    console.log(store.getState().num)
}*/

// 1. redux-logger : 输出改变状态之前和之后的插件；

/*let  logger = store=>dispatch=>action=>{
    console.log(store.getState().Counter.num);
    dispatch(action)
    console.log(store.getState().Counter.num)
}

let  applyMiddleWare = middle=>createStore=>reducers=>{
    let store = createStore(reducers);
    let mid = middle(store);
    let dispatch = mid(store.dispatch);
    return {
        ...store,dispatch
    }
}
export default applyMiddleWare(logger)(createStore)(reducers);*/

// 微任务   宏任务；
// 事件循环机制：
/*setTimeout(function () {
    console.log(3);
},11)
setTimeout(function () {
    console.log(1);
},10);
for(let i=0;i<1000000000000;i++){

}
setTimeout(function () {
    console.log(100);
},5)
console.log(2);
let n = new Promise((resolve,reject)=>{
    console.log(1);
})
console.log(2);*/
new  Promise((resolve,reject)=>{
    console.log(1);
})
console.log(2);
