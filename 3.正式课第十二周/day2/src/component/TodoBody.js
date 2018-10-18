import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions"
class TodoBody extends React.Component{
    filterTodos=()=>{
        // 获取当前最新的state中的types；根据types进行过滤；
        let todos;
        if(this.props.types==="all"){
            todos = this.props.todos;
        }
        if(this.props.types==="finish"){
            todos = this.props.todos.filter((item)=>item.isSelected)
        }
        if(this.props.types==="unfinish"){
            todos = this.props.todos.filter((item)=>!item.isSelected)
        }
        return todos;
    }
    render(){
        return <ul className="list-group">
            {this.filterTodos().map((item,index)=>{
                return <li className="list-group-item" key={index}>
                    <input type="checkbox" checked={item.isSelected} onChange={()=>{this.props.change(item.id)}}/>
                    {item.title}
                    <button className="btn pull-right btn-xs" onClick={()=>{
                        this.props.delete(item.id)
                    }}>&times;</button>
                </li>
            })}
        </ul>
    }
}
// 受控组件不能直接修改input的value；只能通过修改数据修改内容；
export default  connect(state=>({...state.todo}),actions)(TodoBody)

