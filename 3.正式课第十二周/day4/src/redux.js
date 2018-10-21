function createStore(reducer) {
    let  state;
    let getState = ()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach((item)=>{
            item();
        })
    }
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners = listeners.filter((item)=>item!=fn)
        }
    }
    dispatch({});
   return  {
       getState,
       dispatch,
       subscribe
   }
}
function combineReducers(reducers) {
    return (state={},action)=>{
        let obj = {};
        for(let key in reducers){
            obj[key] = reducers[key](state[key],action);
        }
        return obj;
    }
}
