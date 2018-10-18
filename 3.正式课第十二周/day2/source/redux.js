function createStore(reducer){// 函数
    let state;
    let  getState = ()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let subscribe=(fn)=>{
        typeof fn==="function"?listeners.push(fn):null;
        return ()=>{
            listeners = listeners.filter((item)=>{return item!==fn})
        }
    };
    let  dispatch = (action)=>{
        // 组件可以派发动作；因为把dispatch方法暴露出去；
        // dispatch执行，通知了reducer；reducer才是真正改变数据的方法；reducer的返回值覆盖了store中原有的状态；
        state = reducer(state,action);
        listeners.forEach((item)=>{item()})
    }
    dispatch({});
    return {getState,subscribe,dispatch}
}
// 记忆  <==>  理解 =====> 熟练
// 合并reducer；
function combineReducers(reducers){// 对象
    return (state={},action)=>{
        let  obj = {};
        for(let key in reducers){
            // counter的reducer覆盖了obj中counter属性；
            // todo的reducer覆盖了obj中todo的属性；
            obj[key] = reducers[key](state[key],action);
        }
        return obj;
    }
}
combineReducers({
    counter,
    todo
})