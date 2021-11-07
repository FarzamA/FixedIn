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
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    checkError(field) {
        return e => {
            if (e.target.value == '') {
                this.setState({ [field]: true })
            } else {
                this.setState({ [field]: false })
            }
        }
    };

    handleErrors() {
        if (Object.values(this.state).some(el => el == true)) {
          return true;
        } else {
          return false;
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const { state, city } = this.state;

        if (!this.handleErrors()) {
            this.props.updateUser({
                ...this.state,
                location: `${city}, ${state}`
            });

            this.props.closeModal();
        }
    };

    render() {
        const {
            firstName, lastName, industry, state, city, firstNameErr,
            lastNameErr, headlineErr, stateErr, cityErr, industryErr
        } = this.state;

        return (
            <div className='modal'>
                <header>
                    <h2>Edit Intro</h2>
                    <span className='close-modal-button' onClick={() => this.props.closeModal()}>✕</span>
                </header>
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