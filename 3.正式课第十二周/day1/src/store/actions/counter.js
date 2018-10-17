import * as Types from "../action-types.js"
export default {
    add(mount){
        // 需要返回一个action对象；dispatch 的实参；
        // 载荷： payload
        return {type:Types.ADD_COUNT,mount}
    },
    min(mount){
        // 需要返回一个action对象；dispatch 的实参；
        return {type:Types.MIN_COUNT,mount}
    }
}
