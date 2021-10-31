import React from 'react';
import { connect } from 'react-redux';
import { receiveUserName } from '../../../actions/session_actions';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user

        this.state = {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            firstNameError: false,
            lastNameError: false
        };
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    };

    handleErrors() {
        const { firstName, lastName } = this.state; 
        let errorSwitch = false;

        if (!firstName.length) {
            this.setState({ firstNameError: true });
            errorSwitch = true;
        }

        if (!lastName.length) {
            this.setState({ lastNameError: true });
            errorSwitch = true;
        };

        return errorSwitch;
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            firstNameError: false, 
            lastNameError: false
        });

        if (!this.handleErrors()) {
            this.props.receiveUserName(this.state);
            this.props.history.push('/signup/location')
        }
    }
}