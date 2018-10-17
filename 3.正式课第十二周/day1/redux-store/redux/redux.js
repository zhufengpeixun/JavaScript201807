function createStore(reducer) {
    let  state;
    let getState = ()=>JSON.parse(JSON.stringify(state));
    let listeners = [];
    let subscribe = (fn)=>{
        if(typeof fn==="function"){
            listeners.push(fn);
        }
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    };
    function dispatch(action) {
        state = reducer(state,action);
        listeners.forEach((item,index)=>{
            item();
        })
    }
    dispatch({});
    return {getState,dispatch,subscribe}
}
export  {createStore} ;

