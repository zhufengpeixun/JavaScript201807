import * as Types from "../action-types";
import {login,register} from "../../api/sesson.js"
export default {
    log(user){
        return function (dispatch,getState) {
           login(user).then(val=>{
               // fetch请求的返回一个promise的实例；把请求的数据以参数形式传给then的一个方法的实参；
               //console.log(val);{error:"用户登录失败"}
               dispatch({type:Types.SET_LOGIN,val});
               /// 重新派发新的动作改变state中的值；视图重新刷新；
               setTimeout(function () {
                   dispatch({
                       type:Types.SET_LOGIN,
                       val:{success:"",err:""}
                   })
               },500)
           })
        }
    },
    reg(user){
        return function (dispatch,getState) {
            register(user).then(val=>{
                dispatch({
                    type:Types.SET_REG,
                    val
                })
                setTimeout(function () {
                    dispatch({
                        type:Types.SET_REG,
                        val:{success:""}
                    })
                },500)

            })

        }
    }

}
