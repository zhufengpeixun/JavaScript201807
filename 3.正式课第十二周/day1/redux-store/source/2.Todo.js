import React from "react";
import ReactDOM from "react-dom";
import store from "../store/index";
import * as Types from "../store/action-types";
import actions from "../store/actions/1.todos"
class Todo extends React.Component{
    constructor(){
        super();
        this.state = {todos:store.getState().todos}
    }
    componentDidMount(){
        store.subscribe(()=>{
            // 获取store中最新的todos的属性值；对当前组件的state重新设置；从而刷新页面；
            this.setState({todos:store.getState().todos})
        })
    }
    addTodo=(e)=>{
        //console.log(e);// 事件对象；
        // 当向输入框输入内容；当按回车键时，把该input的值新加到列表中
        if(e.keyCode===13){
            // push  可以原有的数组；
           /* this.state.todos.push(e.target.value);
            this.setState({todos:this.state.todos});
            e.target.value="";*/// 清空input框中的值；
            store.dispatch(actions.add(e.target.value));
            e.target.value = "";
        }
    }
    render(){
        return <div>
            <input type="text" onKeyUp={this.addTodo}/>
            {this.state.todos.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </div>
    }
}
ReactDOM.render(<Todo/>, document.querySelector("#root"))
