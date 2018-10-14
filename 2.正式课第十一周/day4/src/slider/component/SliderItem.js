// 这个组件用于存放li图片；
import React from "react";
export default class SliderItem extends React.Component{
   constructor(){
       super();
   }
   render(){
       let  style = {
           left:-this.props.index*400+"px",
           transition:"left 0.5s linear"
       }
       return <ul className="wrapper" style={style} ref={this.props.getSlider}>
           {this.props.imgs.map((item,index)=>{
               return <li key={index} className="slider">
                   <img src={item} alt=""/>
               </li>
           })}
       </ul>
   }
}