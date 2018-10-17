import * as Types from "../action-types";
export default {
    add(todo){
        return {type:Types.ADD_TODO,todo}
    }
}