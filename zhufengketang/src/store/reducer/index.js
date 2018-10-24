import * as Types from "../action-types";
import {combineReducers} from "redux";
let initState = {
    currentTypes :"all",
    sliders:[],// 用于接收轮播图响应回来的数据
    lessons:{
        list:[],// 存储当前的课程数据
        offset:0,// 代表当前页面已经加载多少条；
        limit:5,
        hasMore:true
    }
};
function home(state=initState,action) {

    switch(action.type){
        case Types.CHANGE_TYPES:
            return {...state,currentTypes:action.val};
        case Types.SET_SLIDERS:
            return {...state,sliders:action.payload}
        case Types.SET_LESSONS:
            return {
                ...state,lessons:{
                    list:[...state.lessons.list,...action.payload.list],
                    offset:state.lessons.offset+state.lessons.list.length,
                    limit:5,
                    hasMore:action.payload.hasMore
                }
            }
    }
    return state;
};
let  sessonState = {
    success :"",
    error:"",
    reg:""
}
function sesson(state=sessonState,action){
   switch (action.type){
       case Types.SET_LOGIN:
           return {...state,...action.val}
       case Types.SET_REG:
           return {...state,reg:action.val.success}
   }
    return state;
}
// 合并reducer；
let reducers = combineReducers({
    home,
    sesson
});
export default reducers;



