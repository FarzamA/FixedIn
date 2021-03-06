import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../util/session_api_util';
import { receiveUserJob, receiveCurrentUser } from '../../actions/session_actions';
import { createExperience } from '../../actions/experience_actions';

class JobForm extends React.Component {
    constructor(props) {
        super(props);
        const user = this.props.user;

        this.state = {
            title: user.title || '',
            employment_type: user.employment_type || 'Full-time',
            company: user.company || '',
            titleError: false,
            companyError: false
        }
    };

    handleInput(type) {
        return e => this.setState({ [type]: e.target.value });
    };

    handleErrors() {
        const { title, company } = this.state;
        let errorSwitch = false;

        if (!title.length) {
            this.setState({ titleError: true });
            errorSwitch = true;
        };

        if (!company.length) {
            this.setState({ companyErr: true });
            errorSwitch = true;
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        const {
            receiveUserJob,
            createUser,
            createExperience,
            user,
            dispatch,
            receiveCurrentUser
        } = this.props;

        const job = {
            headline: this.state.title + ' at ' + this.state.company,
            industry: this.state.company,
            ...this.state
        };

        if (!this.handleErrors()) {

            receiveUserJob({ ...job });

            createUser({ ...user, ...job }).then(payload => {
                dispatch(receiveCurrentUser(payload));
                createExperience({
                    ...job,
                    user_id: Object.keys(payload.user)[0]
                });
            });
        }
    };

    render() {
        const employmentTypes = [
            'Full-time',
            'Part-time',
            'Self-employed',
            'Freelance',
            'Contract',
            'Internship',
            'Apprenticeship',
            'Seasonal'
        ];

        const {titleError, companyError } = this.state;

        return(
            <div className='signup-form'>
                <h2>What's your most recent experience</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Most recent job title*
                        <br/>
                        <input type="text" className={titleError ? 'input-error' : ''} value={this.state.title} onChange={this.handleInput('title')}/>
                        {titleError ? <p className='error-msg'>Please enter a title</p> : null}
                    </label>
                    <br/>
                    <select onChange={this.handleInput('employment_type')}>
                        {employmentTypes.map((type, i) => (
                            <option key={i}>{type}</option>
                        ))}
                    </select>
                    <br/>
                    <label>Most recent company*
                        <br/>
                        <input type="text" className={companyError ? 'input-error' : ''} value={this.state.company} onChange={this.handleInput('company')}/>
                        {companyError ? <p className='error-msg'>Please enter a company</p> : null}
                    </label>
                    <br/>
                    <Link to='/signup/student' className='job-student-form'>I'm a student</Link>
                    <br/>
                    <button type='submit' className='form-button' >Finish</button>
                </form>
            </div>
        )
    }
}


const mSTP = ({ session: { signUp } }) => ({
    user: signUp
});

const mDTP = dispatch => ({
    receiveUserJob: job => dispatch(receiveUserJob(job)),
    createUser: user => createUser(user),
    receiveCurrentUser: user => receiveCurrentUser(user),
    createExperience: experience => dispatch(createExperience(experience)),
    dispatch
});

const JobFormContainer = connect(mSTP, mDTP)(JobForm);

export default JobFormContainer