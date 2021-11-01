import React from 'react';
import { connect } from 'react-redux';
import { receiveUserName } from '../../actions/session_actions';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user

        this.state = {
            first_name: user.firstName || '',
            last_name: user.lastName || '',
            firstNameError: false,
            lastNameError: false
        };
    }

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    };

    handleErrors() {
        const { first_name, last_name } = this.state; 
        let errorSwitch = false;

        if (!first_name.length) {
            this.setState({ firstNameError: true });
            errorSwitch = true;
        }

        if (!last_name.length) {
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
            this.props.history.push('/signup/location');
        }
    };

    render() {
        const { firstNameError, lastNameError } = this.state;

        return (
            <div className='signup-form'>
                <h2>Make the most of your professional life</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>First name
                        <br/>
                        <input type='text' value={this.state.first_name} className={firstNameError ? 'input-error' : ''} onChange={this.handleInput('first_name')} />
                        <br/>
                        {firstNameError ? <p className='error-msg'>Please enter your first name</p> : null}
                    </label>
                    <br/>
                    <label>Last name
                        <br/>
                        <input type='text' value={this.state.last_name} className={lastNameError ? 'input-error' : ''} onChange={this.handleInput('last_name')} />
                        <br/>
                        {lastNameError ? <p className='error-msg'>Please enter your last name</p> : null}
                    </label>
                    <br/>
                    <button type='submit' className='form-button' >Continue</button>
                </form>
            </div>
        )
    }
}

const mSTP = ({session: { signUp }}) => ({
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserName: name => dispatch(receiveUserName(name))
});

const NameFormContainer = connect(mSTP, mDTP)(NameForm);

export default NameFormContainer