import * as Types from "../action-types";
export default {
    add(m){
        // 函数的返回值是dispatch的实参；返回一个对象；对象要有type;
        return {type:Types.ADD_COUNT,m}
    },
    min(n){
        return {type:Types.MIN_COUNT,n}
    }
}
