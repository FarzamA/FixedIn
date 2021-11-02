import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { clearSessionErrors, loginUser } from '../../actions/session_actions';

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

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        // console.log(this.state.email);
        // console.log(this.state.password);

        this.props.loginUser({
            //remove any whitespace
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

        const [errorOne, errorTwo] = this.props.errors;
        const { splash } = this.props;
        const loginPage= (
            <div>
                <h2>Sign In</h2>
                <p>Stay updated on your professional world</p>
            </div>
        );

        const logo = splash ? null : <Link to='/' className='login-logo'><img src={window.logo} className='main-logo'/></Link>


        return (
        <div className='login-section'>
            {/* {logo} */}
            <div className='login-form-div'>
                <form onSubmit={this.handleSubmit}>
                    {splash ? null : loginPage}
                    <label>Email
                        <br />
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                        <br />
                        {errorOne ? <p className='error-msg'>{errorOne}</p> : null}
                        {/* {if (errorOne) {
                            <p className='error-msg'>{errorOne}</p>
                        } else {
                            null
                        }
                        } */}
                        
                    </label>
                        <br />
                    <label>Password
                        <br />
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        <br />
                        {errorTwo ? <p className='error-msg'>{errorTwo}</p> : null}
                    </label>
                        <br />
                    <button type="submit">Sign In</button>
                        <br />
                    <button onClick={this.handleDemo}>Demo User</button>
                    <p>New to FixedIn? <Link to="/signup">Join now</Link></p>
                </form>
            </div>
        </div>
        )
    }
};

const mSTP = ({ errors: { session } }, ownProps) => ({
    errors: session,
    splash: ownProps.location.pathname === '/'
});

const mDTP = dispatch => ({
    loginUser: user => dispatch(loginUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

const LoginFormContainer = withRouter(connect(mSTP, mDTP)(LoginForm));

export default LoginFormContainer;