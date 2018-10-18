import * as Types from "../action-types";
import {combineReducers} from "redux";
let initState = {
    types:"all",
    todos :[{id:1,isSelected:true,title:"今天会下雨吗？"},{id:2,isSelected:false,title:"十一爬山"}]
};
function todo(state=initState,action) {
    switch (action.type){
        case Types.ADD_TODO:
            return {...state,todos:[...state.todos,{id:Math.random(),isSelected:false,title:action.todo}]}
        case Types.DELETE_TODO:
            return {...state,todos:state.todos.filter((item)=>{return item.id!==action.id})};
        case Types.CHANGE_TODO:
            let newTodos = state.todos.map((item,index)=>{
                if(item.id===action.id){
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            return {...state,todos:newTodos}
        case Types.CHANGE_TYPES:
            // 改变state中的types属性；
            return {...state,types:action.val}
    }
    return state;
}
let  reducer = combineReducers({
    todo
});
export default reducer;
