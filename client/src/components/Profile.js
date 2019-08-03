import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import ProviderCard from "../components/ProviderCard"
import scorecard from "../images/scorecard.jpg"

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
            <div className="wrapper">
                <div className="container" id="maindash">
                    <h2>Dashboard</h2>
                    <div className="row">
                        <div id="wait" className="col-4">
                            <h6><strong>Waitlist</strong></h6>
                        </div>
                        <div id="inprocess" className="col-4">
                            <h6><strong>In Process</strong></h6>
                        </div>
                        <div id="done" className="col-4">
                            <h6><strong>Done</strong></h6>
                        </div>
                    </div>
                    {/* <ProviderCard title="Local" provider={user.local} bgColor="gray" handleLogin={localLogin} />    */}
                </div>
                <div className="container" id="table">
                    <h2>Statistics</h2>
                    <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0"
                        width="100%">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>Bird</td>
                                <td>@twitter</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container" id="score">
                    <h2>ScoreCard</h2>
                    <img src={scorecard} alt="" class="responsive"></img>
                </div>
            </div>
        );
    }
}

export default Profile;
