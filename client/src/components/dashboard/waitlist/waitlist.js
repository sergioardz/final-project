import React, { Component } from "react";
import axios from "axios";
// import API from "../../../utils/API";
import "./waitlist.css";
import SubTitle from "../subtitle";
import Modal from "react-bootstrap/Modal";
// import { Redirect } from 'react-router-dom'

class Waitlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            partnumber: "",
            orderquantity: "",
            inprocess: "",
            showModal: false,
            orders: []
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.moveToInProcess = this.moveToInProcess.bind(this);
    }

    componentDidMount() {
        this.loadOrders();
    }

    loadOrders = () => {
        axios
            .get("/auth/orders")
            .then(res => this.setState({ orders: res.data }))
            .catch(err => console.log(err));
    };

    moveToInProcess(id) {
        // e.preventDefault();
        // alert(id);
        axios
            .put("/auth/process/" + id , {
                inprocess: true
            }).catch(function (error) {
                console.log(error);
              });
        this.loadOrders();
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault()
        axios
            .post('auth/neworder', {
                customer: this.state.customer,
                partnumber: this.state.partnumber,
                orderquantity: this.state.orderquantity,
            })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    this.setState({
                        redirectTo: '/login'
                    })
                } else {
                    console.log('duplicate')
                }
            })
        this.setState({
            showModal: false,
            customer: "",
            partnumber: "",
            orderquantity: ""
        });
        this.loadOrders();
    }

    render() {

        return (
            <div id="wait" className="col-6">
                <SubTitle title="Waitlist" />
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Production Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="neworder">
                            <div className="form-group">
                                <label htmlFor="customer">Customer: </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="customer"
                                    value={this.state.customer}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="partnumber">Part Number: </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="partnumber"
                                    value={this.state.partnumber}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="orderquantity">Order Quantity: </label>
                                <input
                                    className="form-control form-control-sm"
                                    type="number"
                                    name="orderquantity"
                                    value={this.state.orderquantity}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="text-center">
                                <button onClick={this.handleSubmit} className="btn btn-info btn-sm">Submit</button>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
                <div className="listitems">
                    {this.state.orders.length > 0 &&
                        <ul>
                            {this.state.orders.map(order => (
                                <li className="waitlistitem">
                                    <strong>PN: </strong>{order.partnumber} - {""}
                                    <strong>Qty: </strong>{(order.orderquantity).toLocaleString()} {""}
                                    <button 
                                        key={order._id} 
                                        onClick={this.moveToInProcess.bind(this, order._id)} 
                                        className="btn btn-outline-info btn-sm">
                                    Start
                                    </button><hr />
                                </li>
                            ))}
                        </ul>}
                </div>
                <div id="neworderbtn">
                    <button className="btn btn-info btn-sm" onClick={this.open}>New Order</button>
                </div>
            </div>
        );
    }
}

export default Waitlist;