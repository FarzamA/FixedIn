import React from 'react';
import { Link } from 'react-router-dom';

const ConnectedIndex = ({ connectedUsers }) => {
    const connectionsList = connectedUsers.length ? (
        <ul className='connections-list'>
            {connectedUsers.map(user => (
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <div className='avatar'>
                            <img src={ user.avatarUrl || window.defaultUser }></img>
                        </div>
                    </Link>
                    <div>
                        <p className='connection-name'>
                            {`${user.firstName} ${user.lastName}`}
                        </p>
                        <p className='connection-headline'>
                            {user.headline}
                        </p>
                    </div>
                </div>
            ))}
        </ul>
    ) : null;

    return (
        <div className='connections'>
            <header>Connections</header>
            {connectionsList}
        </div>
    );
}

export default ConnectedIndex;