import React from "react";
import SliderItem from "./SliderItem";
import SliderDots from "./SliderDots";
import SliderArrow from "./SliderArrow";
export default class Slider extends React.Component{
    constructor(){
        super();
        //在slider组件中定义状态state；因为这个里面定义可以在其他三个组件中进行调用；以属性的方式传给其他组件；
        // Slider组件是其他三个组件的父组件；父传子；
        // 当前控制轮播图显示就是当前状态；子组件想改变视图，只能通过改变状态来改变视图；必须把父组件改变视图的方法传递给子组件；
        this.state  = {index:0}
    }
    componentDidMount(){
        // 当真实的DOM渲染完毕，然后再开始；
        this.go();
    }
    go=()=>{
        this.timer = setInterval(()=>{
            // 默认情况下，定时器每次改变到下一张；
            this.turn(1);
        },2000)
    }
    turn=(step)=>{
        // 设置最新的状态；
        // 0  ---> 第一张
        // 1  ---> 第二张
        // 2 ---> 第三张
        // 3 ---> 第四张
        // console.log(this.state.index);
        if(this.state.index===3){
            // 设置子组件的样式属性；
            this.sliders.style.transitionDuration="0s";
            this.sliders.style.left = 0+"px";
            // 强制重绘的方法
            // DOM的回流和重绘：
            // DOM的回流：当页面中元素的位置，大小或结构、定位发生改变，会引发浏览器对当前页面的结构进行重新的计算；非常耗性能的；
            // DOM的重绘： 当元素的背景、透明度、颜色发生变化，那么浏览器会对元素进行重新描绘；这个过程就是浏览器的重绘；
            let left = window.getComputedStyle(this.sliders,null).left
            this.sliders.style.transitionDuration="0.5s";
            this.setState({index:0});
        }
        if(this.state.index+step===-1){
            // 设置子组件的样式属性；
            this.sliders.style.transitionDuration="0s";
            this.sliders.style.left = -1200+"px";
            let left = window.getComputedStyle(this.sliders).left;
            this.sliders.style.transitionDuration="0.5s";
            this.setState({index:2});
            return;
        }
        if(this.state.index===3){
            this.setState({index:1});
            return;
        }
        this.setState({index:this.state.index+step});
    }

    // 获取子组件的元素；但是在子组件中定义方法，但是父组件获取不到
    // 在父组件中定义方法，把这个方法传给子组件，在子组件中调用；
    getSlider=(x)=>{
        this.sliders = x;// 把ul赋值给当前组件实例的sliders属性；
        //console.log(this.sliders);// 子组件中的ul元素；
    }
    render(){
        return <div className="container"
        onMouseOver={()=>{clearInterval(this.timer)}}         onMouseOut={this.go}
        >
            <SliderItem  imgs={this.props.imgs} index={this.state.index} getSlider={this.getSlider}/>
            <SliderDots  imgs={this.props.imgs} index={this.state.index}  turn={this.turn}/>
            <SliderArrow index={this.state.index} turn={this.turn}/>
        </div>
    }
}
