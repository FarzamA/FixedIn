import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';

const Splash = () => (
    <div className='splash-div'>
        <div>
            <p className='splash-text'>Welcome to your professional community</p>
            <LoginFormContainer />
        </div>
        <div>
            <img src='../../' className='splash-img' />
        </div>
    </div>
)