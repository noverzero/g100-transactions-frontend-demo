import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageList extends Component {

    state = {
        opacity: 1
    };

    componentDidUpdate(prevProps){
        if(this.props === prevProps){
            return;
        }
        this.setState({
            opacity: 1
        });
        setTimeout(()=>{
            this.setState({
                opacity: 0
            });
        }, 3000)
    }
    render() {
        return (
            <div>
                {this.props.messages.map((msg, i) => <p key={i} style={{color: msg.type === 'success' ? 'green' : 'red', opacity: this.state.opacity}}>{msg.message}</p>)}
            </div>
        );
    }
}

const mapStateToProps = ({ messages }) => ({messages})

export default connect(mapStateToProps)(MessageList);
