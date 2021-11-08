import React from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
import { deleteConnection, updateConnection } from '../../actions/connection_actions';

const RequestsIndex = ({ requestingUsers, requests, updateConnection, deleteConnection }) => {
    const header = requestingUsers.length ? 'Invitations' : 'No pending invites';
    const requestsList = requestingUsers.length ? (
        <ul>
            {requestingUsers.map((user, i) => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <div>
                            <img src={user.avatarUrl || window.defaultUser}></img>
                        </div>
                    </Link>
                    <div className='requesting'>
                        <div>
                            <p className='connect-name'>{`${user.firstName} ${user.lastName}`}</p>
                        </div>
                    </div>
                    <div className='connections-btn'>
                        <button className='reject' onClick={() => deleteConnection(requests[i].id)}>Ignore</button>
                        <button className='accept' onClick={() => updateConnection(requests[i])}>Accept</button>
                    </div>
                </div>
            ))}
        </ul>
    ) : null;
    return (
        <div className='connections'>
            <header>{header}</header>
            {requestsList}
        </div>
    )
};

const mDTP = dispatch => ({
    updateConnection: connection => dispatch(updateConnection(connection)),
    deleteConnection: connectionId => dispatch(deleteConnection(connectionId))
});

const RequestsIndexContainer = connect(null, mDTP)(RequestsIndex);
export default RequestsIndexContainer;