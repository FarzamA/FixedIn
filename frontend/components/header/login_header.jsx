import React from 'react';
import { Link } from 'react-router-dom';

const LoginHeader = () => (
    <>
        <nav className='session-nav'>
            <Link to='/'>
                <img src={window.logo} className='logo' />
            </Link>
            <div>
                <Link to='/signup' className='splash-signup'>Join Now</Link>
                <Link to='/login' className='splash-sign-in'>Sign In</Link>
            </div>
        </nav>
    </>
);

export default LoginHeader;