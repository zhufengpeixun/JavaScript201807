
import React from "react";
export default class Add extends React.Component{
    addUser=()=>{
        //console.log(this.a.value);
        // 点击添加用户；向本地localStorage进行存储;
        let userList = JSON.parse(localStorage.getItem("userList"))||[];
        userList.push({id:Math.random(),username:this.a.value});
        // setItem : 属性值只支持字符串；如果不是字符串会默认调用toString转成字符串；
        localStorage.setItem("userList",JSON.stringify(userList));
        this.a.value= "";
        this.props.history.push("/user/list/666");


    }
    render(){
        return <div>
            <input type="text" className="form-control" ref={(x)=>this.a = x}/>
            <button className="btn" onClick={this.addUser}>添加用户</button>
        </div>
    }
}