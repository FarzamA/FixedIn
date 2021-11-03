import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UserDetail extends React.Component {
    
}


const mSTP = ({ entities: { users }, session: { currentUser }}, ownProps) => {
    const user = users[ownProps.match.params.id];

    return {
        currentUser,
        user,
    };
};

const mDTP = dispatch => ({

}) ;

const UserDetailContainer = withRouter(connect(mSTP, mDTP)(UserDetail));
export default UserDetailContainer