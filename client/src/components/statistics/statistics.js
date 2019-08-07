import React, { Component } from "react";
import axios from "axios";
import "./statistics.css";

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHeaders: [
                { header: "ID" },
                { header: "Part Number" },
                { header: "Customer" },
                { header: "Order Amount" },
                { header: "FPY 1 Quantity" },
                { header: "FPY 1 %" },
                { header: "FPY 2 Quantity" },
                { header: "FPY 2 %" },
                { header: "Scrap Quantity" },
                { header: "Scrap %" },
                { header: "PPMs" }
            ],
            orders: []
        }
    }

    componentDidMount() {
        this.loadOrders();
        console.log(this.state.orders);
    }

    loadOrders = () => {
        axios
            .get("/auth/ordersdone")
            .then(res => this.setState({ orders: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container" id="table">
                <div id="title">
                    <h2>Finished Orders Statistics</h2>
                </div>
                <table id="dtHorizontalExample" class="table table-striped table-bordered table-sm" cellspacing="0"
                    width="100%">
                    <thead>
                        <tr>
                            {this.state.tableHeaders.map(d => <th key={d.header}>{d.header}</th>)}
                        </tr>
                    </thead>
                    {this.state.orders.length > 0 &&
                        <tbody>
                            {this.state.orders.map(order => (
                                <tr>
                                    <td>{(order._id).slice(-6)}</td>
                                    <td>{order.partnumber}</td>
                                    <td>{order.customer}</td>
                                    <td>{(order.orderquantity).toLocaleString()}</td>
                                    <td>{(order.quantityOK1).toLocaleString()}</td>
                                    <td>{((order.quantityOK1 / order.orderquantity)*100).toFixed(2)} %</td>
                                    <td>{(order.quantityOK2).toLocaleString()}</td>
                                    <td>{((order.quantityOK2 / order.orderquantity)*100).toFixed(2)} %</td>
                                    <td>{(order.quantityX).toLocaleString()}</td>
                                    <td>{((order.quantityX / order.orderquantity)*100).toFixed(2)} %</td>
                                    <td>{Math.round((order.quantityX / order.orderquantity)*1000000).toLocaleString()}</td>
                                </tr>))}
                        </tbody>}
                </table>
            </div>
        );
    }
}

export default Statistics;