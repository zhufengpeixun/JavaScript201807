import * as Types from "../action-types";
export default {
    add(todo){
        return {type:Types.ADD_TODO,todo}
    },
    delete(id){// 删除哪一个，通过id来判断；
         return {type:Types.DELETE_TODO,id}
    },
    change(id){// 你要修改哪一个的复选框；
        return {type:Types.CHANGE_TODO,id}
    },
    changeType(val){
        return {type:Types.CHANGE_TYPES,val}
    }
}
