
import React from "react";
export default class List extends React.Component{
    getUser=()=>{
        let users  = JSON.parse(localStorage.getItem("userList"));
        return users;
    }
    render(){
        // 凡是由路由渲染出来的组件，当前组件的属性上会多三个属性； history[go  push goback]   location [pathname]   match [params: 获取通过路由传过来的参数]
        console.log(this.props);
        return <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>用户名</td>
                    </tr>
                </thead>
                <tbody>
                {this.getUser().map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    }
}