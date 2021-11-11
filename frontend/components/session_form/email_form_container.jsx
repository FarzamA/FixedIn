import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveUserEmail, loginUser, clearSessionErrors } from '../../actions/session_actions';
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
        
        // this.handleInput.bind(this);
    };

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleErrors() {
        const {email, password} = this.state;
        let errorSwitch = false;

        const emailArr = email.split('@');

        if (password.length < 6) {
            this.setState({ pwErr: true });
            errorSwitch = true;
        }

        // check is to make sure email is actually entered
        if (!email.length) {
            this.errors.email = 'Please enter an email address';
            this.setState({ emailErr: true });
            errorSwitch = true;
        //provide different errors based on different inputs
        } else if(!(emailArr.length === 2 && emailArr[1] && emailArr[1].split('.').length === 2)) {
            this.setState({ emailErr: true });
            errorSwitch = true;
        } else {
            //check if email has already been registered
            this.props.checkEmail(this.state).then(user => {
                if (user) {
                    errorSwitch = true;
                    this.errors.email = 'Email already exists';

                    this.setState({ emailErr: true });
                }

                if (!errorSwitch) {
                    this.props.receiveUserEmail(this.state);
                    this.props.history.push('/signup/name');
                }
            })
        }

        return errorSwitch;
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            pwErr: false, 
            emailErr: false
        });

        this.errors.email = 'Please enter a valid email';

        this.handleErrors();
    };

    handleDemo(e) {
        e.preventDefault();

        this.props.loginUser({
            email: 'farzam@mazraf.com',
            password: 'password'
        })
    };

    render() {
        const { emailErr, pwErr } = this.state;

        return(
            <div className='signup-section'>
                <h2>Make the most out of your professional life</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Email
                        {/* <br/> */}
                        <input type="text" value={this.state.email} className={emailErr ? 'input-error' : ''} onChange={this.handleInput('email')} />
                    </label>
                    {/* <br/> */}

                    {emailErr ? <p className='error-msg'>{this.errors.email}</p> : null}
                    {/* <br/> */}

                    <label>Password (6 or more characters)
                    {/* <br/> */}
                        <input type="password" value={this.state.password} className={pwErr ? 'input-error' : ''} onChange={this.handleInput('password')} />
                    </label>
                    {/* <br/> */}
                    {pwErr ? <p className='error-msg'>{this.errors.pw}</p> : null}
                    {/* <br/> */}
                    <button type='submit' className='form-button' >Join FixedIn</button>
                    {/* <br/> */}
                    <button className='form-button' onClick={this.handleDemo.bind(this)} >Demo User</button>
                    {/* <br/> */}
                    <p>Already on FixedIn? <span><Link to="/login">Sign In</Link></span> </p>
                </form>
            </div>
        )
    }


};

const mSTP = ({ session: { signUp }}) => ({
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserEmail: email => dispatch(receiveUserEmail(email)),
    loginUser: user => dispatch(loginUser(user)),
    checkEmail: user => checkEmail(user),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

const EmailFormContainer = connect(mSTP, mDTP)(EmailForm);

export default EmailFormContainer;