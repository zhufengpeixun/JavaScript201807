import * as Types from "./action-types";
export default {
    add(n){

        return  function (dispatch,getState) {
            // dispatch===> store.dispatch
            // getState===> store.getState
            setTimeout(()=>{
                dispatch({type:Types.ADD_COUNT,n})
            },2000)
        }
    },
    min(n){
        // 返回一个promise，那么是成功；但是不支持失败；
        // redux-promise : 如果返回一个promise那么，只支持成功的resolve；
        // 如果返回一个对象；对象中payLoad属性接收promise实例；就可以支持失败的回调；
        return  {
            type:Types.MIN_COUNT,
            payload:new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(Math.random()>0.5){
                        resolve(10)
                    }else{
                        reject(30)
                    }
                },1000)
            })
        }




     /* return new Promise((reslove,reject)=>{
          setTimeout(()=>{
             resolve({type:Types.MIN_COUNT,n})
          },2000)
      })*/
    }
}
