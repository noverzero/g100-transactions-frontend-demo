import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateTransaction} from "../../redux/actions/transactionAction";
import axios from "../../axios";

class EditTransaction extends Component {

    state = {
        transaction: {
            amount: '',
            type: '',
            business_name: ''
        }
    };

    updateTransaction(e){
        e.preventDefault();
        console.log(this.state);
        this.props.updateTransaction(this.state.transaction).then(()=>{
            this.props.history.push('/transactions');
        });
    }

    updateFormField(e){
        let transaction = {...this.state.transaction, [e.target.name]: e.target.value};
        this.setState({
            transaction
        });
    }
    
    componentWillMount(){
        axios.get(`/transactions/${this.props.match.params.id}`).then((data)=>{
            console.log(data);
            this.setState({
                transaction: data.data
            });
        })
    }
    render() {
        this.updateFormField = this.updateFormField.bind(this);
        return (
            <div>
                <h1>Edit Transaction</h1>
                <form onSubmit={this.updateTransaction.bind(this)}>
                    <input type="text" name={'amount'} value={this.state.transaction.amount} onChange={this.updateFormField}/>
                    <input type="text" name={'type'} value={this.state.transaction.type} onChange={this.updateFormField}/>
                    <input type="text" name={'business_name'} value={this.state.transaction.business_name} onChange={this.updateFormField}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
const mapStateToProps = ({ transactions }) => ({ transactions });
export default withRouter(connect(mapStateToProps, { updateTransaction })(EditTransaction));
