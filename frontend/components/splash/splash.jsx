import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';

const Splash = () => (
    <>
        <div className='splash-div'>
            <div className='splash-img-div'>
                <img src={window.splashImg} className='splash-img' />
            </div>
            <div className='splash-form-div'>
                <p className='splash-text'>Welcome to your professional community</p>
                <LoginFormContainer />
            </div>
        </div>
            <p className='splash-credits'>Illustration by <a href="https://icons8.com/illustrations/author/603d1fd6123f9916a4db9ee6">  Irina Molchanova</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
        <footer className='splash-footer'>
            
        </footer>
    </>
);

export default Splash;