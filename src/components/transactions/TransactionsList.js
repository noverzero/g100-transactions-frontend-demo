import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {getAllTransactions} from "../../redux/actions/transactionAction";

class TransactionsList extends Component {
    state = {
        transactions: []
    }
    componentDidMount(){
        this.props.getAllTransactions();
    }
    componentDidUpdate(prevProps){
        if(this.props.transactions === this.state.transactions){
            return;
        }
        this.setState({
            transactions: this.props.transactions
        });

    }

    renderData(){
        if(this.state.transactions.length === 0){
            return (
                <h1>LOADING</h1>
            )
        }else{
            return this.state.transactions.map((transaction)=>{
                return (
                    <div key={transaction.id}>
                        <h1>{transaction.business_name}</h1>
                        <p>{transaction.amount}</p>
                        <hr/>
                    </div>
                )
            })
        }
    }


    render() {
        return (
            <div>
                <h3>Welcome </h3>
                {this.renderData()}
            </div>
        );
    }
}

const mapStateToProps = ({ transactions, userReducer }) => ({transactions})

export default withRouter(connect(mapStateToProps, { getAllTransactions })(TransactionsList));
