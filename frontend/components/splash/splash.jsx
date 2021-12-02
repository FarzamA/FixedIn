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
            <div >
                <a href='https://farzama.github.io/'>
                    <img src={window.farzam} />
                    <h1>Farzam Ahmad</h1>
                </a>
            </div>
            <div className='links'>
                <a href='https://farzama.github.io/'>
                    <div className='nav-icon'>
                        <i className="fab fa-product-hunt"></i>
                    </div>
                </a>
                <a href='https://github.com/FarzamA'>
                    <div className='nav-icon'>
                        <i className="fab fa-github"></i>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/farzam-ahmad-41b024154/'>
                    <div className='nav-icon'>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </a>
                <a href='https://angel.co/u/farzam-ahmad'>
                    <div className='nav-icon'>
                        <i className="fab fa-angellist"></i>
                    </div>
                </a>
            </div>
        </footer>
    </>
);

export default Splash;