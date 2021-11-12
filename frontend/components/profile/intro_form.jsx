import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';

class EditIntro extends React.Component {
    constructor(props) {
        super(props);

        const [city, state] = this.props.user.location.split(', ');

        this.state = {
            ...props.user,
            city: city,
            state: state,
            firstNameErr: false,
            lastNameErr: false,
            headlineErr: false,
            stateErr: false, 
            cityErr: false,
            industryErr: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkError = this.checkError.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        // console.log(field);
        return e => {
            // console.log(e.target.value);
            // console.log(field);
            this.setState({ [field]: e.target.value });
        };
    };

    checkError(field) {
        return e => {
            if (e.target.value === '') {
                this.setState({ [field]: true })
            } else {
                this.setState({ [field]: false })
            }
        }
    };

    handleErrors() {
        if (Object.values(this.state).some(el => el === true)) {
          return true;
        } else {
          return false;
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const { state, city } = this.state;
        
        if (!this.handleErrors()) {
            console.log(this.state)
            this.props.updateUser({
                ...this.state,
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                location: `${city}, ${state}`
            });
            
            // console.log('we are here');
            this.props.closeModal();
        }
    };

    render() {
        const {
            firstName, lastName, industry, state, city, headline, firstNameErr,
            lastNameErr, headlineErr, stateErr, cityErr, industryErr
        } = this.state;

        return (
            <div className='modal'>
                <header>
                    <h2>Edit Intro</h2>
                    <span className='close-modal-button' onClick={() => this.props.closeModal()}>✕</span>
                </header>
                <form>
                    <div className='intro-name'>
                        <div>
                            <label>First Name*</label>
                            <input type="text" value={firstName || ''} className={firstNameErr ? 'input-error' : ''}
                                onChange={this.handleInput('firstName')}
                                onBlur={this.checkError('firstNameErr')}
                             />
                             {firstNameErr ? <p className='error-msg'>Please enter your first name</p> : null}
   
                            <label>Last Name*</label>
                            <input type="text" value={lastName || ''} className ={lastNameErr ? 'input-error' : ''}
                                onChange={this.handleInput('lastName')}
                                onBlur={this.checkError('lastNameErr')}
                             />
                             {lastNameErr ? <p className='error-msg'>Please enter your last name</p> : null}
                        </div>
                    </div>
                    <label>Headline*</label>
                    <input type='text' value={headline || ''} className={headlineErr ? 'input-error' : ''}
                        onChange={this.handleInput('headline')}
                        onBlur={this.checkError('headlineErr')}
                    />
                    {headlineErr ? <p className='error-msg'>Please enter a headline</p> : null}
                    <div className='intro-location'>
                        <div className='intro state'>
                            <label>State *</label>
                            <input type="text" value={state || ''} className={stateErr ? 'input-error' : ''}
                            onChange={this.handleInput('state')} 
                            onBlur={this.checkError('stateErr')}
                            />
                            {stateErr ? <p className='error-msg'>Please enter your state</p> : null}
                        </div>
                        <div className='intro city'>
                        <label>City *</label>
                            <input type="text" value={city || ''} className={cityErr ? 'input-error' : ''}
                                    onChange={this.handleInput('city')} 
                                    onBlur={this.checkError('cityErr')}
                            />
                            {cityErr ? <p className='error-msg'>Please enter your city</p> : null}
                        </div>
                        <label>Industry *</label>
                        <input type="text" value={industry} className={industryErr ? 'input-error' : ''}
                                onChange={this.handleInput('industry')} 
                                onBlur={this.checkError('industryErr')}
                        />
                        {industryErr ? <p className='error-msg'>Please enter your industry</p> : null}
                    </div>
                </form>
                <footer>
                    <button onClick={this.handleSubmit}>Save</button>
                </footer>
            </div>
            
        )
    }
};

const mSTP = ({ entities: { users }, session: { currentUser }}) => ({
    user: users[currentUser]
});

const mDTP = dispatch => ({
    updateUser: user => dispatch(updateUser(user))
});

const EditIntroContainer = connect(mSTP, mDTP)(EditIntro);

export default EditIntroContainer;