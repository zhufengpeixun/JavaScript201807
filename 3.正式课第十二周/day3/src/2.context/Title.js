import React from "react";
import PropTypes from "prop-types";
export default  class Title extends React.Component{
    constructor(){
        super();
    }
    static contextTypes = {
        color:PropTypes.string
    }
    render(){
        //context ： 通过context传递数据，在子组件中需要通过context获取数据；
        return <div>
            <p style={{color:this.context.color}}>今天周六</p>
        </div>
    }
}
