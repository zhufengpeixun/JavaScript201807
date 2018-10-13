import React from "react";
import ReactDOM from "react-dom";
class  Parent extends React.Component{
    static defaultProps  = {
        c:88
    }
    constructor(a){
        //a.b=9;// 不可以进行修改；
        super(a);
        // 如果需要在constructor需要获取属性，那么需要在super传进去整个对象
        //console.log(this.props);// undefined
        //console.log(this.props);
        this.state={num:100}
    }
    componentWillMount(){
        // 钩子函数中的this指向当前组件的实例；
        //console.log(this);
        // render执行之前，将要挂载元素之前;
        // 在这个钩子函数中不可以操作DOM；因为当前还没有进行挂载；
        // console.log(this.refs.a);
        // setState 在componentWillMount这个钩子函数中是同步的；
        // 只有将要挂载组件时执行一次，当数据更新时，不再执行；
        this.setState({num:200});
    }
    componentDidMount(){
        // 在render渲染完之后；
        // 当组件渲染完成，执行当前的钩子函数；经常可以在这里操作页面中的DOM元素；
        console.log(this.refs.a);
    }
    add=()=>{
         // 在给元素的绑定事件中，一般写成箭头函数；因为箭头函数中没有this；会指向外层作用域的this；通过this去获取或改变状态；
        //this.setState({num:this.state.num+1})
        ReactDOM.unmountComponentAtNode(window.root);
    }
    componentWillUnmount(){
        //debugger
        console.log("componentWillUnmount");
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps, nextState);
        /*if(nextState.num<210){
            this.setState({num:this.state.num+1})
        }*/
        // nextProps\nextState代表最新状态和最新的属性
        // 返回true，会默认调用render方法；如果返回false，不再调用render；
        //return !(nextState.num%2);
        return 1;
    }
    componentWillUpdate(){
        // 根据shouldComponentUpdate的返回值判断该方法是否执行；并且是在render之前执行的；
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    /*componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }*/
    render(){
        console.log("render");
        return <div>
            <p ref="a">{this.state.num}</p>
            <Son val={this.state.num}/>
            <button onClick={this.add}>加1</button>
        </div>
    }
}
class Son extends React.Component{
    componentWillReceiveProps(nextProps){
        // nextProps :代表更新之后的属性；
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps,nextState){
        // 当属性或状态其中一个发生改变，就会触发这个函数；
        console.log("儿子 shouldComponentUpdate");
        console.log(nextProps, nextState);
        return 1;
    }
    componentWillUpdate(){
        // 根据shouldComponentUpdate的返回值判断该方法是否执行；并且是在render之前执行的；
        console.log(" 儿子componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("儿子 componentDidUpdate")
    }
    render(){
            return <div>
                {this.props.val}
            </div>
    }
}
// 生命周期钩子函数的执行顺序：当初始化react实例时，调用的钩子函数；
// defaultProps==>constructor==>componentWillMount==>render==>componentDidMount
// 当数据更新时，执行的钩子函数
// shouldComponentUpdate===>componentWillUpdate==>render==> componentDidUpdate

ReactDOM.render(
<Parent a="1" b="100"/>,
document.querySelector("#root")
)
;
