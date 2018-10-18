import React from "react";
import store from "../store"
export default class Compute extends React.Component{
    // 在redux 中，如果两个组件共用一个数据，那么当store中的数据发生改变，不会影响其他组件的数据；
    // 如果需要当前组件更新视图；需要将数据放到当前组件的状态上；并且数据变；更新当前的状态；那么就需要给store订阅方法；
    constructor(){
        super();
        this.state = {n:store.getState().num}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({n:store.getState().num})
        })
    }
    render(){
        console.log(1);
        return <div>
            <p>{this.state.n%2?"奇数":"偶数"}</p>
        </div>
    }
}