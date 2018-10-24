
import React from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";
import HomeSlider from "./HomeSlider"
import HomeLesson from "./HomeLesson"
import {connect} from "react-redux";
import {loadMore,downRefresh} from "../../utils";
// react-redux ： 将状态和action的中的方法统一放在当前属性上；
import actions from "../../store/action/home"
 class Home extends React.Component{
    componentDidMount(){
        //console.log(1);
        this.props.getSlider();// 获取轮播图数据；发送请求；
        this.props.getLesson();
        loadMore(this.content,this.props.getLesson);
        downRefresh(this.content, this.props.getLesson);
    }
    render(){
        return <div>
            <HomeHeader changeType={this.props.changeCurrentType}/>
            <div className="main-content" ref={(x)=>{this.content=x}}>
                <HomeSlider sliders={this.props.sliders}/>
                <HomeLesson lessons={this.props.lessons}/>
            </div>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home);
// store [action,reducer,action-type,index]