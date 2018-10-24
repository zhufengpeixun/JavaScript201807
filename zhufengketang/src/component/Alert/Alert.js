import React from "react";
import {connect} from "react-redux";
import "./index.less"
import action from "../../store/action/sesson"
 class Alert extends React.Component{
    render(){
       // console.log(this.props);
        return <div className="alert">
            {this.props.success?<div className="success">{this.props.success}</div>:<div className="error">{this.props.error}</div>}
        </div>
    }
}
export default connect(state=>({...state.sesson}),action)(Alert)
