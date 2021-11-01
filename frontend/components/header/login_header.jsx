import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => (
    <div className='nav-bar'>
        <Link to='/'>
            <img src={window.logo} className='logo' />
        </Link>
        <nav className='session-nav'>
            <Link to='/signup' className='splash-signup'>Join Now</Link>
            <Link to='/login' className='splash-signin'>Sign In</Link>
        </nav>
    </div>
);

export default LoginHeader;