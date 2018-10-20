
import React from "react";
import Local from "./Local"
 class Password extends React.Component{
   /* constructor(){
        super();
        this.state = {val:""}
    }
    componentWillMount(){
        this.setState({val:localStorage.getItem("password")})
    }*/
    render(){
        return  <div>
                    <input type="text" value={this.props.msg.val} onChange={()=>{}}/>
                </div>
    }
}
export default Local("password")(Password)
