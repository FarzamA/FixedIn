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
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleDemo = this.handleDemo.bind(this);     
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        // console.log(this.props);
        this.props.loginUser({
            email: this.state.email.trim(),
            password: this.state.password
        });
    }

    handleDemo(e) {
        e.preventDefault();
        this.props.loginUser({
            email: "farzam@mazraf.com",
            password: "password"
        })
    }

    render() {
        return (
        <div className='login-section'>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <br />
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                </label>
                    <br />
                <label>Password
                    <br />
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                </label>
                    <br />
                <button type="submit">Sign In</button>
                    <br />
                <button onClick={this.handleDemo}>Demo User</button>
                <p>New to FixedIn? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
        )
    }
};

const mSTP = ({ errors: { session } }) => ({
    errors: session
});

const mDTP = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
});

const LoginFormContainer = withRouter(connect(mSTP, mDTP)(LoginForm));

export default LoginFormContainer;