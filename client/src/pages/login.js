import React from "react";

class Login extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="col-lg-3 my-5 mx-auto">
                    <h3 className="text-center">Login</h3>
                    <form className="login-user" method="POST" action="/login">
                        <div className="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" className="form-control form-control-sm" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control form-control-sm" placeholder="Password" />
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

export default Login;