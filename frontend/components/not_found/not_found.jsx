import React from 'react';
import { connect } from 'react-redux';

class NotFound extends React.Component {
    render() {
        return (
            <div className='explore'>
                <h2>Page not found</h2>
                <p>
                    Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous page.
                </p>
                <img src={window.notFound}></img>
                <div>Illustration by <a href="https://icons8.com/illustrations/author/603d1fd6123f9916a4db9ee6">  Irina Molchanova</a> from <a href="https://icons8.com/illustrations">Ouch!</a></div>
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