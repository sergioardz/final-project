import React, { Component } from "react";
import "./subtitle.css";

class SubTitle extends Component {
    render() {
        return (
            <div id="subtitle">
                <h6>{this.props.title}</h6>
            </div>
        );
    }
}

export default SubTitle;