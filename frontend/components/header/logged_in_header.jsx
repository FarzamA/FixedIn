import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';
import SearchBar from './search_bar';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drop: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.leave = this.leave.bind(this);
    }

    handleClick() {
        this.setState({ drop: true });
    }

    leave() {
        this.setState({ drop: false });
    }

    render() {
        const { user, logoutUser, history } = this.props;
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
                <Link to='/feed'>
                    <div className='nav-icon'>
                        <i className='fas fa-home'></i>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/banana'>
                    <div className='nav-icon'>
                        <i className="fas fa-user-friends"></i>
                        <p>My Network</p>
                    </div>
                </Link>
                    <button className='user-sess-btn' onFocus={this.handleClick} onBlur={this.leave}>
                        <div className='header-avatar'>
                            <div className='avatar-small'>
                                <img src={user.avatarUrl || window.defaultUser} alt='pfp-small' />
                            </div>
                            <p>Me <span className='arrow-down'></span></p>
                        </div>
                        <ul className={'header-dropdown-' + (this.state.drop ? 'reveal' : 'hide')}>
                            <li>
                                <div>
                                    <div className='avatar'>
                                        <img src={user.avatarUrl || window.defaultUser} alt='pfp-small' />
                                    </div>
                                    <div>
                                        <p>{`${user.firstName} ${user.lastName}`}</p>
                                        <p>{user.headline}</p>
                                    </div>
                                </div>
                                <div className='pf-btn' onClick={() => {
                                    history.push(`/users/${user.id}`);
                                    console.log(this);
                                    console.log(that);
                                    this.leave;
                                }}>
                                    View Profile
                                </div>
                            </li>
                            <li onClick={logoutUser}>Sign Out</li>
                        </ul>
                    </button>
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