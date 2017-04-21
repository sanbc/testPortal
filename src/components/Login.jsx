import React, { Component } from 'react';
import * as TodoActions from '../actions/TodoActions.jsx';
class Login extends Component {
    constructor(props) {
        super(props);
        this.loginCheck = this.loginCheck.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
    }
    loginCheck() {
        var data = {};
        data = {email : this.state.email, pwd : this.state.pwd};
        TodoActions.validateLogin(data) 
    }
    passwordChange(event) {
        this.setState({
            pwd : event.target.value 
        })
    }
    emailChange(event) {
        this.setState({
            email : event.target.value 
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 loginForm">
                    <div className="contents">
                        <div className="form-group row ">
                            <div className="col-md-offset-2 col-md-8">
                                <input type="email" className="form-control" id="loginEmail" placeholder="email" onChange={this.emailChange}></input>
                            </div>
                        </div>
                        <div className="form-group row ">
                            <div className="col-md-offset-2 col-md-8">
                                <input type="password" className="form-control " id="loginPwd" placeholder="password" onChange={this.passwordChange}></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-offset-2 col-md-8">
                                <button type="submit" className="btn btn-primary widthAdj" onClick={this.loginCheck}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;