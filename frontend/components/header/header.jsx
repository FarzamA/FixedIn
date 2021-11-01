import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginHeader from './login_header';
import LoggedInHeader from './logged_in_header';

const Header = ({ loggedIn }) => {
    return loggedIn ? (
        <header className='header logged-in'>
            <nav className='nav-bar'>
            <LoggedInHeader/> 
            </nav>
        </header>
        ) : (
        <header className='header'>
            <nav className='nav-bar'>
            <LoginHeader/>
            </nav>
        </header>
    )
};

const mSTP = ({ session: {currentUser }}) => ({
    loggedIn: Boolean(currentUser)
});

const HeaderContainer = connect(mSTP)(Header);
export default HeaderContainer;