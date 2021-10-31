import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../util/session_api_util';
import { receiveUserStudent, receiveCurrentUser } from '../../actions/session_actions';
import { createEducation } from '../../actions/education_actions';

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user;

        this.state = {
            school: user.school || '',
            degree: user.degree || '',
            field: user.field || '',
            startDate: user.startDate || '',
            endDate: user.endDate || ''
        }
    };

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const student = {
            headline: 'Student at' + this.state.school,
            industry: this.state.school,
            ...this.state,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        const {
            receiveUserStudent, createUser, createEducation, user, dispatch, receiveCurrentUser
        } = this.props;

        receiveUserStudent({ ...student });
        createUser({ ...user, ...student }).then(payload => {
            dispatch(receiveCurrentUser(payload));
            createEducation({
                ...student,
                user_id: Object.keys(payload.user)[0]
            });
        });
    }

    render () {
        return (
            <div className='signup-form'>
                <h2>Your profile helps you discover new people and opportunities</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>School or College/University *
                        <input type="text" value={this.state.school} onChange={this.handleInput('school')}/>
                    </label>

                    <label>Degree 
                        <input type="text" value={this.state.degree} onChange={this.handleInput('degree')}/>
                    </label>

                    <label>Field 
                        <input type="text" value={this.state.field} onChange={this.handleInput('field')}/>
                    </label>

                    <Link to='/signup/job' className='job-student-form'>I'm not a student</Link>
                    <button type='submit' className='form-button' >Finish</button>
                </form>
            </div>
        )
    }
};

const mSTP = ({ session: { signUp }}) => ({
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserStudent: student => dispatch(receiveUserStudent(student)),
    createUser: user => createUser(user),
    receiveCurrentUser: user => receiveCurrentUser(user),
    createEducation: education => dispatch(createEducation(education)),
    dispatch
});

const StudentFormContainer = connect(mSTP, mDTP)(StudentForm);

export default StudentFormContainer;