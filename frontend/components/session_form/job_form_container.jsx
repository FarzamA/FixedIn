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
            
        }
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