import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions"
 class TodoFooter extends React.Component{
    render(){
        console.log(this.props.todo);
        return <ul className="nav nav-pills" onClick={(e)=>{
            //console.log(e.target.dataset);// 可以获取当事件源的行间data-type 属性；
            let val = e.target.dataset.type;
            this.props.changeType(val);
        }}>
            <li role="presentation" className={this.props.types==="all"?"active":""}><a href="#" data-type="all">全部任务</a></li>
            <li role="presentation"  className={this.props.types==="finish"?"active":""}><a href="#" data-type="finish">已完成</a></li>
            <li role="presentation" className={this.props.types==="unfinish"?"active":""}><a href="#" data-type="unfinish">未完成</a></li>
        </ul>
    }
}
export default connect(state=>({...state.todo}),actions)(TodoFooter)