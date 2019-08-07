import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import axios from "axios"
// import ProviderCard from "../components/ProviderCard"
import Dashboard from "./dashboard";
import Statistics from "./statistics";
import scorecard from "../images/scorecard.jpg"

class Profile extends Component {
    // constructor() {
    //     super();
    //     this.state = {

    //     };
    // }

    render() {
        // const { user } = this.props;

        // const localLogin = (
        //     <button onClick={() => this.props.history.push("/login")}>Login</button>
        // )

        return (
            <div className="wrapper">
                <Dashboard />
                <Statistics />
                <div className="container" id="score">
                    <h2>ScoreCard</h2>
                    <img src={scorecard} alt="" className="responsive"></img>
                </div>
            </div>
        );
    }
}

export default Profile;
