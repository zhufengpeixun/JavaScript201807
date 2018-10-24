import React from "react";
import Header from "../../component/Header/Header"
import profile from "../../images/profile.png"
import {Link} from "react-router-dom";
import "./index.less"
import {connect} from "react-redux";
import action from "../../store/action/sesson"
import Alert from "../../component/AlertReg/Alert"
class Login extends React.Component{
    handleReg =()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({username,password});
    }
    render(){
        return <div className="login">
            <Header title="注册"/>
            <div className="login-content">
                <img src={profile} alt=""/>
            </div>
            <ul className="form">
                <li><input type="text" placeholder="手机号" ref={x=>{this.username=x}}/></li>
                <li><input type="text" placeholder="密码" ref={x=>{this.password=x}}/></li>
                <li><Link to={"/login"}>前往登录</Link></li>
                <li>
                    <button onClick={this.handleReg}>注册</button>
                </li>
            </ul>
            <Alert/>
        </div>
    }
}
export default  connect(state=>({...state.sesson}),action)(Login)