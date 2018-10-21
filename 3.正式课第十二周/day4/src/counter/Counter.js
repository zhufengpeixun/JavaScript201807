import React from "react";
import {connect} from "react-redux";
import actions from "./store/actions"
// 存放的对象，对象中放函数；函数返回带type的对象；
class Counter extends React.Component{
 /*   componentWillUpdate(){
        console.log(this.props.num);
    }
    componentDidUpdate(){
        console.log(this.props.num)
    }*/
    render(){
        return <div>
            <button onClick={()=>{this.props.add(100)}}>+</button>
            {this.props.num}
            <button onClick={()=>{this.props.min(20)}}>-</button>
        </div>
    }
}
// 给store中的状态中值加了一层属性；
export default connect(state=>({...state.Counter}),actions)(Counter)