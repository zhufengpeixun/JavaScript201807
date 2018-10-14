// 此组件是用来渲染轮播图焦点；
import React from "react";
export default class SliderDots extends React.Component {
    render() {
        return <ul className="focus">
            {this.props.imgs.map((item, index) => {
                // 如果当前index是3,那么返回一个空；
                if (index === this.props.imgs.length - 1) {
                    return null;
                }
                // this.props.index  ====>0
                // this.props.index  ====>1
                //this.props.index  ===>3
                //通过属性 传递的index;index的值代表当前显示图片的索引；
                // 给每一个li绑定的点击事件，那么需要将当前显示的图片的索引，和点击的那个li索引求差，传给turn中的step；原有的状态index+差，正好是点击的li对应的状态值；
                return <li key={index}
                           className={this.props.index === index || this.props.index - index === 3 ? "active" : ""}
                           onClick={() => {
                               if (this.props.index === 3) {
                                   this.props.turn(0)
                               } else {
                                   this.props.turn(index - this.props.index)
                               }
                           }}></li>
            })}
        </ul>
    }
}
