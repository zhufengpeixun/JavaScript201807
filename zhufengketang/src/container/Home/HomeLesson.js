import React from "react";
export default class HomeLesson extends React.Component{
    /*componentDidMount(){
        console.log(this.props.lessons,666666);
    }*/
    render(){
   let  {list}  = this.props.lessons;
        return <div className="home-lesson">
                    <div className="lesson-title">
                        <span>全部课程</span>
                    </div>
                    {
                        list.map((item,index)=>{
                            return <div key={index} className="lesson">
                                <img src={item.poster}/>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        })
                    }
                </div>
    }
}
