import React,{Component} from "react";
import ReactDOM from "react-dom";
// 在React 上有个属性叫Component;这是一个类；
// 通过类声明组件
// 1. 必须要继承React的Component这个类
// 2. 在类中，必须有render函数；constructor不是必须的
// 3. 在render函数中，需要return一个值；
class Fn extends Component{
    constructor(props){
        //console.log(props);
        // 1. 传过来的实参，是不可以扩展的；
        // 2. 在props中的属性名对应的属性值是一个对象，那么这个对象是可以扩展的；但是这个对象的空间地址不能被修改；
        //console.log(a);
        super();
        console.log(this.props);
        // 将传过来的实参的值赋值给了当前实例的props属性；
        //this.props.name = "zfpx";
        props.data.age = 10;
        //props.data = {name:"zfpx",age:10};  错误的；
    }
    render(){
        return <div>{this.props.data.age}</div>
    }
}
ReactDOM.render(<Fn id="a" data={{name:"zfpx"}}/>,window.root);
// render : 如果是类定义的组件；
// 1.将行间属性打包成一个对象
// 2.将类new一下，创建一个实例；把这个对象传给constructor的形参；
// 3.将这个对象放到当前类的实例props属性上；
// 4.调用render方法；将返回的虚拟JSX元素转换成DOM，并且插入到页面中；
