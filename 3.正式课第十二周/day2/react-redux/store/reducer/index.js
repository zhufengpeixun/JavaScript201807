import * as Types from "../action-types";
import {combineReducers} from "redux";
let initState = {num:0}
function counter(state=initState,action){
    switch (action.type){
        case Types.ADD_COUNT:
            return {num:state.num+action.m};
        case Types.MIN_COUNT:
            return {num:state.num-action.n}
    }
    return state;
}
// store中的state {counter:{num:0}}
let reducer = combineReducers({
    counter
});
export default reducer;
