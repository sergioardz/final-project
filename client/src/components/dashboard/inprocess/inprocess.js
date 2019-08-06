import React, { Component } from "react";
import SubTitle from "../subtitle";
import "./inprocess.css";

class InProcess extends Component {
    render() {
        return (
            <div id="inprocess" className="col-4">
                <SubTitle title="In Process" />
                <ul>
                    <li>O-08-001 <button className="btn btn-outline-info btn-sm">Done</button></li>
                    <li>O-08-001 <button className="btn btn-outline-info btn-sm">Done</button></li>
                </ul>
            </div>
        );
    }
}

export default InProcess;