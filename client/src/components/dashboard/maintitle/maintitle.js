import React, { Component } from "react";
import "./maintitle.css";

class MainTitle extends Component {
    render() {
        return (
            <div className="maintitle">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

export default MainTitle;