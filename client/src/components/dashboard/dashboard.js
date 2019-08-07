import React, { Component } from "react";
import MainTitle from "./maintitle";
import Waitlist from "./waitlist";
import InProcess from "./inprocess";
// import Finished from "./finished";
import "./dashboard.css";

class Dashboard extends Component {
    render() {
        return (
            <div className="container" id="maindash">
                <MainTitle title="Dashboard" />
                <div className="row">
                    <Waitlist />
                    <InProcess />
                </div>
            </div>
        );
    }
}

export default Dashboard;