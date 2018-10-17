import * as Types from "../action-types";
// 在reducer初始化值；
let initState = {todos:[1,2,100]};
export default  function reducer(state=initState,action) {
    switch (action.type){
        case Types.ADD_TODO:
            return {todos:[...state.todos,action.todo]}
    }
    return state;
}
