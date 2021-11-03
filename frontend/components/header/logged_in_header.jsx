import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import SearchBar from './search_bar';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     logout: false
        // };

        // this.clicked = this.clicked.bind(this);
    }

    // clicked() {
    //     this.setState({ logout: true });
    // }

    render() {
        const { user, logoutUser } = this.props;
        return (
            <div className='logged-in-container'>
                <nav className='left-nav-bar'>
                    <Link to='/'>
                        <div className='icon-logo'>
                            <img src={window.logo} className='logo'/>
                        </div>
                    </Link>
                    <SearchBar />
                </nav>
                <nav className='right-nav-bar'>
                    <div className='nav-icon'>
                        <i className='fas fa-home'></i>
                        <p>Home</p>
                    </div>
                    <div className='nav-icon'>
                        <i className="fas fa-user-friends"></i>
                        <p>My Network</p>
                    </div>
                    <button onClick={logoutUser}>Sign Out</button>
                </nav>  
            </div>
        )
    }

}

const mSTP = ({ entities: { users }, session: { currentUser } }) => ({
    user: users[currentUser]
});

const mDTP = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

const LoggedInHeader = withRouter(connect(mSTP, mDTP)(LoggedIn));

export default LoggedInHeader;