import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {userRegister} from "../../redux/actions/userAction";

class Register extends Component {
  state = {
      user: {
          email: '',
          password: ''
      }
  };

  submitRegister(e){
      e.preventDefault();
      console.log(this.state);
      this.props.userRegister(this.state.user).then(()=>{
          this.props.history.push('/');
      });
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
              <h1>Register</h1>
              <form onSubmit={this.submitRegister.bind(this)}>
                  <input type="email" name={'email'} placeholder={'Email'} onChange={this.updateFormField}/>
                  <input type="password" name={'password'} placeholder={'Password'} onChange={this.updateFormField}/>
                  <input type="submit"/>
              </form>
              <Link to="/">Already have an account? Click here to login</Link>
          </div>
      );
  }
}

export default withRouter(connect(null, {userRegister})(Register));
