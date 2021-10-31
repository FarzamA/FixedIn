import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveUserEmail, loginUser } from '../../actions/session_actions';
import { checkEmail } from '../../util/session_api_util';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user;

        this.state = {
            email: user.email || '',
            password: user.password || '',
            //variables to handle errors
            emailErr: false,
            pwErr: false
        }

        this.errors = {
            email: 'Please enter a valid email',
            pw: 'Password must be at least 6 characters'
        }
        
        this.handleInput.bind(this);
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleErrors() {
        const {email, password} = this.state;
        let errorSwitch = false;

        if (password.length < 6) {
            this.setState({ pwErr: true });
            errorSwitch = true;
        }

        // check is to make sure email is actually entered
        if (!email.length) {
            this.errors.email = 'Please enter an email address';
            this.setState({ emailErr: true });
            errorSwitch = true;
        } else {
            //provide different errors based on different inputs

        }
    }


};

const mSTP = ({ session: { signUp }}) => ({
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserEmail: email => dispatch(receiveUserEmail(email)),
    loginUser: user => dispatch(loginUser(user)),
    checkEmail: user => checkEmail(user)
});

const EmailFormContainer = connect(mSTP, mDTP)(EmailForm);

export default EmailFormContainer;