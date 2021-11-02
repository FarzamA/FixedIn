import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';




const mSTP = ({ entities: { users, connections }, session: { currentUser }}, ownProps) => {
    const user = users[ownProps.match.params.id]

    return {
        currentUser,
        user,
        connection: Object.values(connections).filter(
            con => con.cennecteeId == user.id && con.connectorId == currentUser || con.connectorId == user.id && con.connectedId == currentUser
        )[0]
    }
};

const mDTP = dispatch => ({
    dispatch
});

const UserDetailContainer = withRouter(connect(mSTP, mDTP)(UserDetail));

export default UserDetailContainer;