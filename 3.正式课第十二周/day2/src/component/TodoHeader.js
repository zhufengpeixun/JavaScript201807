import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/index"
class TodoHeader extends React.Component{
    unfinish=()=>{
        // 计算state中对象isSelected是false的个数；
        // 把数组中isSelected是false的过滤出来；
        return this.props.todos.filter((item,index)=>!item.isSelected).length
    }
    render(){
        return <div>
            <h3>亲，您还有{this.unfinish()}件事未完成</h3>
            <input type="text" className="form-control" onKeyUp={(e)=>{
                if(e.keyCode===13){
                   this.props.add(e.target.value);
                   e.target.value="";
                }
            }
            }/>
        </div>
    }
}
export default  connect(state=>({...state.todo}),actions)(TodoHeader)
