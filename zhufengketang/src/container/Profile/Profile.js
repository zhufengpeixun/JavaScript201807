import React from "react";
import "./index.less"
import {Link} from "react-router-dom";
import profile from "../../images/profile.png"
export  default class Profile extends React.Component{
    render(){
        return <div className="profile">
            <div className="profile-bg">
                <img src={profile} alt=""/>
                <Link to={"/login"}>登录</Link>
            </div>
        </div>
    }
}