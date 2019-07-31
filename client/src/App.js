import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";

import Home from "./components/Home";
import Profile from "./components/Profile";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.loggedIn ? (
          <Component {...props} user={auth.user} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: null,
      isReady: false
    };
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {

    const setIsReady = () => {
      this.setState({
        ...this.state,
        isReady: true
      });
    };

    axios.get("/auth/user").then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        console.log("THERE IS A USER");
        this.setState({
          loggedIn: true,
          user: response.data.user
        }, () => setIsReady());
      } else {
        this.setState({
          loggedIn: false,
          user: null
        }, () => setIsReady());
      }
    });
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios.post("/auth/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  login(email, password) {
    axios
      .post("/auth/login", {
        email,
        password
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user
          });
        }
      });
  }

  render() {
    return (
      <Router>
        <div className="block">
          <Navbar />
          <p>spaceholder</p>
          <p>isLogged in: {JSON.stringify(this.state.loggedIn)}</p>
          <p>user model: {JSON.stringify(this.state.user)}</p>
          {this.state.loggedIn &&  <button onClick={this.logout}>Logout</button>}      
          {
            this.state.isReady && (
              <Switch>
                <PrivateRoute auth={this.state} path="/main" component={Profile} />
                <Route path="/" render={() => <Home login={this.login} logout={this.logout} />} />
              </Switch>
            )
          }
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
