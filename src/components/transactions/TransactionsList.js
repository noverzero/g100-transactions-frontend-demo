import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {getAllTransactions, createTransaction, deleteTransaction} from "../../redux/actions/transactionAction";

class TransactionsList extends Component {
    state = {
        transactions: [],
        newTransaction: {
            type: '',
            amount: '',
            business_name: ''
        }
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
                        <button onClick={()=>this.deleteTransaction(transaction.id)}>DELETE</button>
                        <Link to={`/transactions/${transaction.id}`}>Edit</Link>
                        <hr/>
                    </div>
                )
            })
        }
    }

    createTransaction = (e)=>{
        e.preventDefault();
        this.props.createTransaction(this.state.newTransaction).then(()=>{
            this.setState({
                newTransaction: {
                    type: '',
                    amount: '',
                    business_name: ''
                }
            })
        })
    }

    updateFormField = (e)=>{
        let newTransaction = {...this.state.newTransaction, [e.target.name]: e.target.value};
        this.setState({
            newTransaction
        });
    }

    deleteTransaction = (id)=>{
        console.log(id);

        this.props.deleteTransaction(id);
    }
    render() {
        // this.updateFormField = this.updateFormField.bind(this);
        return (
            <div>
                <h3>Welcome {this.props.user.email}</h3>
                <form onSubmit={this.createTransaction}>
                    <input type="text" name={'type'} placeholder={'Type'} value={this.state.newTransaction.type} onChange={this.updateFormField}/>
                    <input type="text" name={'amount'} placeholder={'Amount'} value={this.state.newTransaction.amount} onChange={this.updateFormField}/>
                    <input type="text" name={'business_name'} placeholder={'Biz Name'} value={this.state.newTransaction.business_name} onChange={this.updateFormField}/>
                    <input type="submit"/>
                </form>
                <hr/>
                {this.renderData()}
            </div>
        );
    }
}

const mapStateToProps = ({ transactions, userReducer }) => ({transactions, user: userReducer.user})

export default withRouter(connect(mapStateToProps, { getAllTransactions, createTransaction, deleteTransaction })(TransactionsList));
