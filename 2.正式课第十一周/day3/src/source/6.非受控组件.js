import React from "react";
import ReactDOM from "react-dom";
class Sum extends React.Component{
    constructor(){
        super();
        this.state = {total:0}
    }
    handleSum=()=>{
        console.log(100);
        /*let a = document.getElementById("a");
        console.log(a);*/
        /// 在react中获取元素怎么获取
        // 1. 获取第一种方式： 给当前元素加上ref属性；
        //console.log(this.refs);// 输出当前组件下所有的带有ref行间属性的元素；这是一个对象；ref的属性值在这个对象中就是这个对象的属性名；属性值就是对应的那个元素；
       /* let total = Number(this.refs.a.value)+Number(this.refs.b.value);
        this.setState({total})*/
       // 2.第二种获取方式;ref 属性是一个函数；这个函数执行时，会把当前的元素传给当前函数的第一个形参；
        //console.log(this.b);
        let total = Number(this.refs.a.value)+ Number(this.b.value);
        this.setState({total})
    }
    render(){
        return  <div onChange={this.handleSum}>
            {/*如果当前*/}
            <input type="text" ref="a"/>
            <input type="text" ref={(x)=>{this.b = x}}/>
            {this.state.total}
        </div>
    }
}
ReactDOM.render(<Sum/>,document.querySelector("#root"))

