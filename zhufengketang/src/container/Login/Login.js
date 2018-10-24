import React from "react";
import Header from "../../component/Header/Header"
import profile from "../../images/profile.png"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Alert from "../../component/Alert/Alert";
import action from "../../store/action/sesson";
import store from "../../store/index";
import * as Types from "../../store/action-types"
import "./index.less"
 class Login extends React.Component{
    handleLogin=()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.log({username,password})
    }
    render(){

        return <div className="login">
                <Header title="登录"/>
                <div className="login-content">
                    <img src={profile} alt=""/>
                </div>
                <ul className="form">
                    <li><input type="text" placeholder="手机号" ref={x=>{this.username = x}}/></li>
                    <li><input type="text" placeholder="密码" ref={x=>{this.password = x}}/></li>
                    <li><Link to={"/reg"}>前往注册</Link></li>
                    <li>
                        <button onClick={this.handleLogin}>登录</button>
                    </li>
                </ul>
            <Alert/>
        </div>
    }
}
export default connect(state=>({...state.sesson}),action)(Login)
