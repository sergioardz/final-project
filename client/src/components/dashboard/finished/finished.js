import React, { Component } from "react";
import SubTitle from "../subtitle";
import "./finished.css";

class Finished extends Component {
    render() {
        return (
            <div id="done" className="col-4">
                <SubTitle title="Done" />
                <ul>
                    <li>O-08-001</li>
                </ul>
            </div>
        );
    }
}

export default Finished;