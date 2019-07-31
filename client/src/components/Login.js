import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");
    this.props.login(this.state.email, this.state.password);
    this.setState({
      redirectTo: "/"
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="LoginForm">
          <h2>Login</h2>
          <form>
            <label htmlFor="email">email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;
