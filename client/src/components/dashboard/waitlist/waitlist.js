import React, { Component } from "react";
import "./waitlist.css";
import SubTitle from "../subtitle";

class Waitlist extends Component {
    render() {
        return (
            <div id="wait" className="col-4">
                <SubTitle title="Waitlist" />
                <ul>
                    <li>O-08-001 <button className="btn btn-outline-info btn-sm">Start</button></li>
                    <li>O-08-001 <button className="btn btn-outline-info btn-sm">Start</button></li>
                    <li>O-08-001 <button className="btn btn-outline-info btn-sm">Start</button></li>
                </ul>
            </div>
        );
    }
}

export default Waitlist;