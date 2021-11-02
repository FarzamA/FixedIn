import React from "react";
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginFormContainer from "./session_form/login_form_container";
import { SignUpForms } from "./session_form/signup_form_container";
import Splash from "./splash/splash";
import HeaderContainer from "./header/header";
import Main from './main/main';

const App = () => (
  <div>
    {/* <h1>FixedIn</h1> */}
    <Route path='/' component={HeaderContainer}/>
    <AuthRoute exact path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={ SignUpForms } />
    <ProtectedRoute path='/' component={ Main } />
    <AuthRoute exact path='/' component={Splash} />
  </div>
);

const mapSTP = (state, ownProps) => {
  const path = ownProps.location.pathname;
  return ({
  sessionPath: path.includes('/signup') || path == '/login',
  rootPath: path == '/'
})};

const AppContainer = withRouter(connect(mapSTP)(App));

export default AppContainer;

// export default App;