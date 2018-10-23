
import React from "react";
import "./index.less";
import HomeHeader from "./HomeHeader";
import HomeSlider from "./HomeSlider"
import {connect} from "react-redux";
// react-redux ： 将状态和action的中的方法统一放在当前属性上；
import actions from "../../store/action/home"
 class Home extends React.Component{
    componentWillMount(){
        this.props.getSlider();
    }
    componentDidMount(){
        console.log(1);
        this.props.getSlider();// 获取轮播图数据；发送请求；
    }
    render(){
        return <div>
            <HomeHeader changeType={this.props.changeCurrentType}/>
            <div className="main-content">
                <HomeSlider sliders={this.props.sliders}/>
            </div>
        </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home);
// store [action,reducer,action-type,index]