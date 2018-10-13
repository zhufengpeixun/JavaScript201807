
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";// 是一个模块
class  Title extends React.Component{
    // 在这个类中有两个特殊的静态属性；
    static propTypes={
        // 要求num必须是一个数字类型的；
        // 抛出一个警告，但页面会渲染；
        n:PropTypes.number
    }
    static defaultProps = {
        // 默认属性；如果属性被传行间属性传递进来，那么会默认获取当前的属性；如果行间传递，那么会走行间属性；
        n:"99"
    }
    constructor(){
        super();
}
render(){
    return <div>{this.props.n}</div>
}
}
ReactDOM.render(<Title />,window.root)