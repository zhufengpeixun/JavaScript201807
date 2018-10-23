import * as Types from "../action-types";
import {combineReducers} from "redux";
let initState = {
    currentTypes :"all",
    sliders:[]// 用于接收轮播图响应回来的数据
};
function home(state=initState,action) {
    switch(action.type){
        case Types.CHANGE_TYPES:
            return {...state,currentTypes:action.val};
        case Types.SET_SLIDERS:
            return {...state,sliders:action.payload}
    }
    return state;
};
// 合并reducer；
let reducers = combineReducers({
    home
});
export default reducers;



