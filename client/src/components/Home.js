import React from 'react'
import { BrowserRouter as Router, Route, Link,  Switch, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

// const links = (
// 	<ul>
// 		<li><Link to="/">Home</Link></li>
// 		<li><Link to="/main">Dashboard</Link></li>
// 		<li><Link to="/login">Login</Link></li>
// 		<li><Link to="/signup">Register</Link></li>
// 	</ul>
// )

const Home = props => (
	<div className="Home">
		{/* {links} */}
		<Route path="/login" render={() => <Login login={props.login}/>} />
		<Route path="/signup" render={() => <Signup/>} />
	</div>
)

export default Home
