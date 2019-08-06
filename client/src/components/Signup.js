import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			role: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		axios
			.post('/auth/signup', {
				email: this.state.email,
				role: this.state.role,
				password: this.state.password
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
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="container">
				<div className="col-lg-3 my-5 mx-auto">
					<h3 className="text-center">Register</h3>
					<div className="Signup">
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
							<label htmlFor="role">Role: </label>
							<input
								class="form-control form-control-sm"
								type="text"
								name="role"
								value={this.state.role}
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
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirm Password: </label>
							<input
								class="form-control form-control-sm"
								type="password"
								name="confirmPassword"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
							/>
						</div>
						<div className="text-center">
							<button className="btn btn-info btn-sm" onClick={this.handleSubmit}>Sign up</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignupForm
