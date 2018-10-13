import React from "react";
import ReactDOM from "react-dom";
// 父组件
//
import "bootstrap/dist/css/bootstrap.css";
class  Panel  extends React.Component{
    constructor(){
        super();
        this.state={color:"success"}
    }
    change=(color)=>{
        this.setState({color:color})
    }
    render(){
        //row  : 行  col  : 列  col-md-4 col-lg-4 col-sm-4 col-xs-4 12列
        return <div className="container">
            <div className="row">
                <div className={`panel panel-${this.state.color}`}>
                    <div className="panel-heading">
                        <Header t={this.props.title} chan={this.change}/>
                    </div>

                </div>

            </div>

        </div>
    }
}
// 子组件
class Header extends React.Component{
    changeColor=()=>{
        this.props.chan("warning");
    }
    render(){
        return <div>
            <h1>{this.props.t}</h1>
            <button onClick={this.props.chan.bind(666,"warning")}>改变背景</button>
        </div>
    }
}
// render 方法会把行间属性打包成一个对象传给实例的props属性
ReactDOM.render(
< Panel title="珠峰"/>,
document.querySelector("#root")
)
;
