import React from "react";
import logo from "../../images/logo.png"
import Transition from 'react-transition-group/Transition';
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1},
};
export default  class HomeHeader extends React.Component {
    constructor() {
        super();
        this.state = {show: true}
    }

    changeShow = () => {
        this.setState({show: !this.state.show});// 点击i标签时，把之前原有的状态取反；
    }

    render() {
        //console.log(this.props);
        return <div className="home-header">
            <div className="header-content">
                <img src={logo} alt=""/>
                {this.state.show ? <i className="iconfont icon-liebiao" onClick={this.changeShow}></i> :
                    <i className="iconfont icon-guanbi" onClick={this.changeShow}></i>}
                {/* {!this.state.show?<ul className="header-course">
                 <li>全部课程</li>
                 <li>react课程</li>
                 <li>vue课程</li>
                 </ul>:null}
                 */}
                {/*in: 是一个布尔类型的值；会根据true或false进行渲染；timeout： 控制动画时间；*/}
                <Transition in={!this.state.show} timeout={duration}
                            onEntered={(node) => {
                                // node代表具有动画的DOM节点；
                                //console.log(node);
                                node.style.display = "block";
                            }}
                            onExited={(node) => {
                                node.style.display = "none";
                            }}>
                    {(state) => (
                        // state : 代表的是entering  entered
                        <ul className="header-course" style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }
                        }
                            onClick={(e) => {
                                //console.log(e.target);// 点击的事件源；
                                // 当前被直接绑定的元素；
                                let type = e.target.dataset.type;
                                // 父将action中的方法传递给子组件；子组件调用该方法；改变store中的状态；
                                this.props.changeType(type);
                            }}
                        >
                            <li data-type="all">全部课程</li>
                            <li data-type="react">react课程</li>
                            <li data-type="vue">vue课程</li>
                        </ul>
                    )}
                </Transition>
            </div>
        </div>
    }
}
