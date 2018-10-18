import React from "react";
import store from "../store/index";
import * as Types from "../store/action-types"
import actions from "../store/action/index";
import {connect}  from "react-redux";
// connect ： 是一个高阶函数；
// react-redux : 将store中状态和dispatch的action全部封装到当前实例的属性上；
// 视图更新： 1）： 属性更新  2） 状态变
class Counter extends React.Component{
   /* constructor(){
        super();
        this.state = {num:store.getState().num}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({num:store.getState().num})
        })
    }*/
    render(){
        console.log(this.props);
        return <div>
                    <p>{this.props.num}</p>
                    <button onClick={()=>{
                        //store.dispatch(actions.add(10))
                        this.props.add(9)
                    }}>+</button>
                    <button  onClick={()=>{
                        //store.dispatch(actions.min(1))
                        this.props.min(3)
                    }}>-</button>
                </div>
    }
}
// connect : 方法执行接收两个函数；
// mapStateToProps: 将store 中的状态放到当前实例的props属性上；
// mapDispatchToProps : 将派发动作统一放到当前实例props上；

let mapStateToProps = (state)=>{
    /// state : store.getState();
    return {...store.getState()}
}
let mapDispatchToProps = (dispatch)=>{
    // dispatch : store.dispatch
    // bindActionCreators : 这个方法是redux中的一个方法；对action进行重新包装；bindActionCreators(actions,dispatch)
    return {
        //返回此处的对象最终会放到当前实例的属性上；
        add(m){
            dispatch(actions.add(m))
        },
        min(m){
            dispatch(actions.min(m))
        }
    }
}

// 封装bindActionCreators
/*function bindActionCreators(actions,dispatch) {
    let  obj ={};
    for(let key in  actions){
        obj[key] = (...arg)=>{
            dispatch(actions[key](...arg))
        }
    }
    return obj;
}*/
// 如果在connect传入actions;会默认调用bindActionCreators； 这个方法执行会返回一个对象；
// connect :
// 第一个参数： mapStateToProps
// 第二个参数： mapDispatchToProps 在这个函数中调用bindActionCreators执行；返回一个包装后的dispatch；
// 这两个函数的最终目的是将state和dispatch放在属性上；通过属性去获取store中状态的值；获取action；当store中的state发生改变；会刷新视图；
// 有counter；只对当前组件对应的state放到当前实例属性上；其他组件state不需要；
export default  connect(state=>({...state.counter}),actions)(Counter);