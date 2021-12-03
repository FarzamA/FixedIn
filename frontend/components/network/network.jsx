import React from 'react';
import { connect } from 'react-redux';
import RequestsIndexContainer from './requests_index';
import ConnectedIndex from './connected_index';
import { fetchConnections } from '../../actions/connection_actions';

class Network extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchConnections();
    }

    render() {
        // debugger
        const { requestingUsers, connectedUsers, requests } = this.props;

        return (
            <>
                <RequestsIndexContainer requestingUsers={requestingUsers} requests={requests} />
                <ConnectedIndex connectedUsers={connectedUsers} />
            </>
        )
    }
}


const mSTP = ({ entities: { users, connections }, session: { currentUser }}) => {
    console.log('users', users);
    const requests = Object.values(connections).filter(
        con => con.accepted === false && con.connecteeId !== currentUser
    );
    // console.log('requests', requests);

    const connected = Object.values(connections).filter(
        con => con.accepted === true
    );
    // console.log('connected', connected);

    const requestingUsers = requests.map(req => {
        // debugger
        // currently users only contains one user
        return users[req.connecteeId]
    });

    // console.log('requesting users', requestingUsers);

    const connectedUsers = connected.map(con => {
        return con.connectorId === currentUser ? users[con.connecteeId] : users[con.connectorId]
    });

    // console.log('connected users', connectedUsers)

    return {
        requests, 
        requestingUsers,
        connectedUsers
    }
};

const mDTP = dispatch => ({
    fetchConnections: () => dispatch(fetchConnections())
});

const NetworkContainer = connect(mSTP, mDTP)(Network);

export default NetworkContainer;