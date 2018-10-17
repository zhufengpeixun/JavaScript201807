import  *  as Types  from "../action-types";
let  initState = {num:0};
export default function reducer(state=initState,action) {
    switch (action.type){
        case Types.ADD_COUNT:
            return {...state,num:state.num+action.mount};
        case Types.MIN_COUNT:
            return {...state,num:state.num-action.mount}
    }
    return state;
}

