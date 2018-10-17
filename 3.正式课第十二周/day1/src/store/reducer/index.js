// 用于reducer的合并；\
// combineReducers : 用于对reducer的合并；
import  counter from "./counter"
import  todos from "./todos"
//import {combineReducers} from "redux";
//combineReducers : 是一个函数；需要传一个对象;返回一个新的合并之后的reducer
// 当前组件对应的reducer的属性名是什么，那么就以当前这个属性名取值；
function combineReducers(reducers) {
    return (state={},action)=>{
        // 返回的函数的最终返回值；应该是是一个state;
        let  obj = {};
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action)
        }
        return obj;// 覆盖createStore中的state;
    }
}
let reducer = combineReducers({
    counter,
    todos
});
export default reducer;

