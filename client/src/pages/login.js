import React from "react";

class Login extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="col-lg-3 my-5 mx-auto">
                    <h3 className="text-center">Login</h3>
                    <form class="login-user" method="POST" action="/login">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" class="form-control form-control-sm" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="Password" />
                        </div>
                        <div className="text-center">
                            <button id="submit" type="submit" class="btn btn-info">Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default Login;