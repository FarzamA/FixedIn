import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <img src={window.notFound}></img>
            </div>
        )
    }
};

// const mSTP = () => ({
// });

// const mDTP = dispatch => ({

// });

// const NotFoundContainer = connect(null, null)(NotFound)

export default NotFound