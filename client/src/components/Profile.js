import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import ProviderCard from "../components/ProviderCard"
import Dashboard from "./dashboard";
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
                <Dashboard />
                <div className="container" id="table">
                    <div id="title">
                        <h2>Statistics</h2>
                    </div>
                    <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0"
                        width="100%">
                        <thead>
                            <tr>
                                <th scope="col"># O.P.</th>
                                <th scope="col">DATE 1</th>
                                <th scope="col">P.N.</th>
                                <th scope="col">CUST</th>
                                <th scope="col">MAT</th>
                                <th scope="col">P.O.</th>
                                <th scope="col">QTY</th>
                                <th scope="col"># L.P.</th>
                                <th scope="col">DATE 2</th>
                                <th scope="col">EQUIP</th>
                                <th scope="col">SUP</th>
                                <th scope="col">OPER</th>
                                <th scope="col">INSP</th>
                                <th scope="col">OK QTY</th>
                                <th scope="col">NOK QTY</th>
                                <th scope="col">DATE 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                            <tr>
                                <td>O-08-001</td>
                                <td>08/02/2019</td>
                                <td>GC-0001</td>
                                <td>GLASS CO.</td>
                                <td>STEEL 1</td>
                                <td>A-2392</td>
                                <td>3,000</td>
                                <td>L-08-0001</td>
                                <td>08/03/2019</td>
                                <td>CNC 1</td>
                                <td>Tommy Hillfiger</td>
                                <td>Mike Tyson</td>
                                <td>Johny Cash</td>
                                <td>1,195</td>
                                <td>5</td>
                                <td>08/04/2019</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container" id="score">
                    <h2>ScoreCard</h2>
                    <img src={scorecard} alt="" className="responsive"></img>
                </div>
            </div>
        );
    }
}

export default Profile;
