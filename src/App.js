import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import TransactionsList from "./components/transactions/TransactionsList";
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/transactions' component={TransactionsList}/>
            </Switch>
        </div>
    );
  }
}
const mapStateToProps = ({}) => ({})
export default withRouter(connect(mapStateToProps)(App));
