// JSX
//在JS中书写HTML结构；
// 这是一个jsx元素；经过webpack编译之后变成了React.createElement
// createElement 方法的返回值是一个虚拟的DOM元素；
// ReactDOM.render :
// render方法 ： 把虚拟的DOM变成真实的DOM插入页面中；
// 框架不直接操作页面中真实的DOM；页面中所有的元素都有一个虚拟的DOM元素与之对应；那么当数据发生改变，先改变虚拟的DOM；通过DOM-diff算法进行对比；只会改变数据发生变化的地方；

// 1. ReactDOM.render(JSX元素,window.root)
// 2. ReactDOM.render(<组件: 函数 data="1"/>,window.root)
// 3. ReactDOM.render(<组件: 类 data="1"/>,window.root)
//let  a = <h1></h1>


/*function H() {
    return <h1></h1>
}*/
import React from "react";
import ReactDOM from "react-dom";
// 组件的定义方式有两种
// 1. 函数定义组件
function Parent(props) {
    // 用函数来定义的组件需要用形参进行接收，才能获取到传递过来的属性；
    // props 接收一个对象；这个对象包含了组件中传递过来的所有的属性；
    return <div>
        <Header/>
        {props.id}</div>
}
// 2. 类定义组件；

// 1. 继承一下React.component这个类
// 2. 类定义组件具有this【执行组件的实例，props】  state   生命周期
class Header extends React.Component{
    constructor(m){
        super();
        // 当执行constructor时，并没有将属性存放到当前的实例上；所以获取到的结果是undefined；
        console.log(m);
        console.log(this.props);
    }
    render(){
        console.log(this);
        return <p>{this.props.h}
                    <Son/>
                </p>
    }
}
class Son  extends  React.Component{
    render(){
        return <span>123</span>
    }
}
// 能够影响视图的是属性和state;
// 在react中属性是不可以发生更改的；但是状态是私有的可以发生改变；
// 在react改变状态的唯一方法就是setState

// 事件：事件行为遵循驼峰命名；事件一般定义在当前类的原型上，而且一般是一个箭头函数；因为这样可以获取属性，可以操作状态；
ReactDOM.render(<Header id="100" h="a">
</Header>,window.root);



