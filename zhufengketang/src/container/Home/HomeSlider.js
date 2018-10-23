import React from "react";
import ReactSwipe from "react-swipe";
export default class HomeSlider extends React.Component {
    constructor() {
        super();
        this.state = {index: 0}
    }
    render() {
        let option = {
            continuous: true,
            auto: 2000,
            callback: (index) => {
                this.setState({index})
            }
        }
        return <div className="home-swipe">
            <ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>
                {
                    this.props.sliders.map((item, index) => {
                        return <div key={index}>
                            <img src={item} alt={item}/>
                        </div>
                    })
                }
            </ReactSwipe>
            <div className="focus">
                {this.props.sliders.map((item, index) => {
                    return <span key={index} className={index === this.state.index ? "active" : ""}></span>
                })}
            </div>
        </div>
    }
}
