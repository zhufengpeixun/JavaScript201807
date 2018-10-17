import {createStore} from "redux";// 导入第三方模块中的createStore;
import reducer from "./reducer/1.todos"
let  store  = createStore(reducer);
console.log(createStore);
export default store;