import React from "react";

class Register extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-3 mx-auto">
                    <h3 className="text-center">Registration</h3>
                    <form className="register-user" method="POST" action="/register">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" className="form-control form-control-sm" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" className="form-control form-control-sm" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control form-control-sm" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label for="passwordMatch">Re-Enter Password</label>
                            <input type="password" id="passwordMatch" name="passwordMatch" className="form-control form-control-sm"
                                placeholder="Password" />
                        </div>
                        <div className="text-center">
                            <button id="submit" type="submit" className="btn btn-info">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;

