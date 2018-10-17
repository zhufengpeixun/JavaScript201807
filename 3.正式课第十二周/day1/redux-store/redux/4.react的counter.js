import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "./redux";
const ADD_COUNT = "ADD_COUNT";
const MIN_COUNT = "MIN_COUNT";
let  initState = {num:0};
function reducer(state=initState,action) {
    switch (action.type){
        case ADD_COUNT:
            return {...state,num:state.num+action.count};
        case MIN_COUNT:
            return {...state,num:state.num-action.count}
    }
    return state;
}
let store = createStore(reducer);
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {num:store.getState().num}
    }
   /* add=()=>{
        this.setState({num:store.getState().num+1})
    }
    min=()=>{
        this.setState({num:store.getState().num-1})
    }*/
   componentDidMount(){
       // 订阅一个当派发动作之后会调用的一个方法；
       store.subscribe(()=>{
           this.setState({num:store.getState().num})
       });
   }
    addNum=()=>{
        // store 中的state值已经发生修改，但是当前组件的render方法没有执行；
        store.dispatch({type:ADD_COUNT,count:1});
    }
    minNum = ()=>{
        store.dispatch({type:MIN_COUNT,count:1})
        // 当前组件要发生视图的更新；改变状态或改变属性；
        // setState 会调用页面进行刷新；
    }
    render(){
        return  <div>
            <p>{this.state.num}</p>
            <button onClick={this.addNum}>+</button>
            <button onClick={this.minNum}>-</button>
        </div>
    }
}
ReactDOM.render(
<Counter/>,
document.querySelector("#root")
)
;

