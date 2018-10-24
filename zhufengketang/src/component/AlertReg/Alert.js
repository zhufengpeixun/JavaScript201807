import React from "react";
import {connect} from "react-redux";
import "./index.less"
import action from "../../store/action/sesson"
 class Alert extends React.Component{
    render(){
       // console.log(this.props);
        return <div className="alert">
            {this.props.a?<div className="success">{this.props.a}</div>:null}
        </div>

    }
}
export default connect(state=>({...state.sesson}),action)(Alert)
