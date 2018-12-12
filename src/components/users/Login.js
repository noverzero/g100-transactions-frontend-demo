import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {userLogin} from "../../redux/actions/userAction";

class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    };

    submitLogin(e){
        e.preventDefault();
        console.log(this.state);
    }

    updateFormField(e){
        let user = {...this.state.user, [e.target.name]: e.target.value};
        this.setState({
            user
        });
    }
    render() {
        this.updateFormField = this.updateFormField.bind(this);
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submitLogin.bind(this)}>
                    <input type="email" name={'email'} placeholder={'Email'} onChange={this.updateFormField}/>
                    <input type="password" name={'password'} placeholder={'Password'} onChange={this.updateFormField}/>
                    <input type="submit"/>
                </form>
                <Link to="/register">Don't have an account with us? Click here to register</Link>
            </div>
        );
    }
}

export default withRouter(connect(null, { userLogin })(Login));
