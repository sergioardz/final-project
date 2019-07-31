import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const links = (
	<ul>
		<li>
			<Link to="/">Home</Link>
		</li>
		<li>
			<Link to="/main">Protected Page</Link>
		</li>
		<li>
			<Link to="/login">Login</Link>
		</li>
		<li>
			<Link to="/signup">Signup</Link>
		</li>
		<li>
			<a href="/auth/google">Google</a>
		</li>
		<li>
			<a href="/auth/facebook">Facebook</a>
		</li>
		<li>
			<a href="/auth/twitter">Twitter</a>
		</li>		
	</ul>
)

const Home = props => (
	<div className="Home">
		{links}
		<Route path="/login" render={() => <Login login={props.login}/>} />
		<Route path="/signup" render={() => <Signup/>} />
	</div>
)

export default Home
