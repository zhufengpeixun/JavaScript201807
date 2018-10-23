import * as Types from "../action-types";
import {getSliders} from "../../api/home.js"
export default {
    changeCurrentType(val){
        return {type:Types.CHANGE_TYPES,val}
    },
    getSlider(){
        // redux-thunk : 支持异步的方法，派发动作；
        return function (dispatch,getState) {
            // dispatch ===> store.dispatch
            // getState ===> store.getState
            // 这个函数中是支持异步的派发；
            // 发送请求成功返回数据之后，再次派发动作，修改store中state的值；
            // getSliders的返回值是一个Promise的实例；
            // Promise ：解决异步的回调；
            // pending => resolve
            // pending => reject
            getSliders().then(sliders=>{
                //console.log(sliders);sliders 代表请求之后的数据；
                dispatch({
                    type:Types.SET_SLIDERS,
                    payload:sliders
                })
            });
        }
    }

}

