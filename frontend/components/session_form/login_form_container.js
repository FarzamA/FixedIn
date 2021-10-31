import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        //local state needed
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit.bind(this);  
        this.handleDemo.bind(this);     
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.loginUser({
            email: this.state.email.trim(),
            password: this.state.password
        });
    }

    handleDemo(e) {
        e.preventDefault();
        loginUser({
            email: "farzam@mazraf.com",
            password: "password"
        })
    }

    render() {
        <div className='login-section'>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                <button type="submit">Sign In</button>
                <button onClick={this.handleDemo}>Demo User</button>
                <p>New to FixedIn? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    }
};

const mSTP = ({ errors: { session } }) => ({
    errors: session
});

const mDTP = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
});

const LoginFormContainer = withRouter(connect(mSTP, mDTP)(LoginForm));

export default LoginFormContainer