import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import ProviderCard from "../components/ProviderCard"

class Profile extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        const { user } = this.props;

        const localLogin = (
            <button onClick={() => this.props.history.push("/login")}>Login</button>
        )

        return (
            <div>
                <h2>Profile Page</h2>
                <ProviderCard title="Local" provider={user.local} bgColor="gray" handleLogin={localLogin} />   
            </div>
        );
    }
}

export default Profile;
