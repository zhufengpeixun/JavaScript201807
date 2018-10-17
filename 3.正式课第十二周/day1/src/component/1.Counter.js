import React from "react";

import store from "../store/index";
import * as Types from "../store/action-types";
import actions from "../store/actions/counter"
export default class Counter extends React.Component{
    constructor(){
        super();
        console.log(store.getState());// {counter:{num:0},todos:{todos:[]}
        this.state = {num:store.getState().counter.num}
    }
    componentDidMount(){
        // 订阅一个当派发动作之后会调用的一个方法；
        store.subscribe(()=>{
            this.setState({num:store.getState().counter.num})
        });
    }
    addNum=()=>{
        // store 中的state值已经发生修改，但是当前组件的render方法没有执行；
        store.dispatch(actions.add(2));
    }
    minNum = ()=>{
        store.dispatch(actions.min(1))
        // 当前组件要发生视图的更新；改变状态或改变属性；
        // setState 会调用页面进行刷新；
    }
    render(){
        console.log(this.state);
        return  <div>
            <p>{this.state.num}</p>
            <button onClick={this.addNum}>+</button>
            <button onClick={this.minNum}>-</button>
        </div>
    }
}



