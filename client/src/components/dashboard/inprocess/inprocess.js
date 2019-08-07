import React, { Component } from "react";
import axios from "axios";
import SubTitle from "../subtitle";
import Modal from "react-bootstrap/Modal";
import "./inprocess.css";

class InProcess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantityOK1: "",
            quantityOK2: "",
            quantityX: "",
            finished: "",
            showModal: false,
            orders: []
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.loadOrders();
        // console.log(this.state.orders);
    }

    loadOrders() {
        axios
            .get("/auth/ordersinprocess")
            .then(res => this.setState({ orders: res.data }))
            .catch(err => console.log(err));
        // console.log(this.state.orders);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        axios
            .post('auth/neworder', {
                quantityOK1: this.state.quantityOK1,
                quantityOK2: this.state.quantityOK2,
                quantityX: this.state.quantityX,
                finished: this.state.finished
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
            });
        this.setState({
            showModal: false,
            quantityOK1: "",
            quantityOK2: "",
            quantityX: "",
            finished: ""
        });
    }

    render() {
        return (
            <div id="inprocess" className="col-6">
                <SubTitle title="In Process" />
                <div className="listitems">
                    {this.state.orders.length > 0 &&
                        <ul>
                            {this.state.orders.map(order => (
                                <li className="inprocessitem">
                                    <strong>PN: </strong>{order.partnumber} - {""}
                                    <strong>Qty: </strong>{(order.orderquantity).toLocaleString()} {""}
                                    <button key={order._id} onClick={this.open} className="btn btn-outline-info btn-sm">Done</button><hr />
                                </li>
                            ))}
                        </ul>}
                </div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Production Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="neworder">
                            <div className="form-group">
                                <label htmlFor="quantityOK1">FPY 1 Quantity: </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="number"
                                    name="quantityOK1"
                                    value={this.state.quantityOK1}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantityOK2">FPY 2 Quantity: </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="number"
                                    name="quantityOK2"
                                    value={this.state.quantityOK2}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantityX">Scrap Quantity: </label>
                                <input
                                    className="form-control form-control-sm"
                                    type="number"
                                    name="quantityX"
                                    value={this.state.quantityX}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="finished">Is Order ready: </label>
                                <input
                                    class="form-control form-control-sm"
                                    type="text"
                                    name="customer"
                                    value={this.state.finished}
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
            </div>
        );
    }
}

export default InProcess;