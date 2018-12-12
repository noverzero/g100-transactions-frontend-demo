import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import TransactionsList from "./components/transactions/TransactionsList";
import MessageList from "./components/messages/MessageList";
import { verifyUser } from "./redux/actions/userAction";
import { connect } from 'react-redux';

class App extends Component {

    componentWillMount(){
        let exposedRoutes = ['/', '/register'];
        const {pathname} = this.props.location;
        if(exposedRoutes.indexOf(pathname)<0){
            this.props.verifyUser().then(()=>{
                if(!this.props.user.email)
                    this.props.history.push('/');
            });
        }
    }
  render() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/transactions' component={TransactionsList}/>
            </Switch>
            <MessageList></MessageList>
        </div>
    );
  }
}
const mapStateToProps = ({userReducer}) => ({user: userReducer.user})
export default withRouter(connect(mapStateToProps, {verifyUser})(App));
