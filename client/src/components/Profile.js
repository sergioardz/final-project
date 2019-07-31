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

    async handleLogin() {
        const res = await axios.get("/auth/twitter")
    }

    render() {
        const { user } = this.props;

        const localLogin = (
            <button onClick={() => this.props.history.push("/login")}>Login</button>
        )

        const twitterLogin = (
            <a href="/auth/twitter">Login</a>
        )

        const googleLogin = (
            <a href="/auth/google">Login</a>
        )

        const facebookLogin = (
            <a href="/auth/facebook">Login</a>
        )

        return (
            <div>
                <h2>Profile Page</h2>

                <ProviderCard title="Local" provider={user.local} bgColor="gray" handleLogin={localLogin} />   
                <ProviderCard title="Twitter" provider={user.twitter} bgColor="lightblue" handleLogin={twitterLogin} />
                <ProviderCard title="Google" provider={user.google} bgColor="red" handleLogin={googleLogin} />
                <ProviderCard title="Facebook" provider={user.facebook} bgColor="blue" handleLogin={facebookLogin} />
            </div>
        );
    }
}

export default Profile;
