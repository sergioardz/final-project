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
        <div className="container">
          <div className="col-lg-3 my-5 mx-auto">
            <h3 className="text-center">Login</h3>
            <div className="LoginForm">
              <form>
                <div className="form-group">
                  <label htmlFor="email">E-mail: </label>
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input
                    class="form-control form-control-sm"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-info" onClick={this.handleSubmit}>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
