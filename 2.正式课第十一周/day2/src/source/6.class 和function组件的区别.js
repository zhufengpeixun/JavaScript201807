// 组件的定义方式： 1.function 声明  2. class 定义类来声明
// 组件可以复用、可维护、可组合(并列、嵌套)
// 在真实的项目中，一般使用class定义组件
// class 定义的组件；有this、有状态、有生命周期；
// 在react中组件有两种： 一种就是自定义组件 另一种是内置组件；
// 自定义组件： 通过function和class定义是自定义
// 内置组件： 像div  ul  p  h1  span

import React,{Component} from "react";
import ReactDOM from "react-dom";
class Panel extends Component{
    constructor(){
        super();
        console.log(88);
    }
    componentWillMount(){// 将要挂载组件；
        console.log(100);
    }
    componentDidMount(){// 组件挂载成功之后；
        console.log(0);
    }
   render(){
       console.log(123);
       console.log(this);// Panel 的实例；会默认带一些属性；props context
       return <h1></h1>
   }
}
function Fn() {
    console.log(this);// undefined
    return <h1></h1>
}
ReactDOM.render(<Panel/>,window.root);
/*class Fn{
    constructor(){
        this.a = 10;
    }
}
let f = new Fn;
console.log(f);*/
