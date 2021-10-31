import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginFormContainer from "./session_form/login_form_container";
import Splash from "./splash/splash";

const App = () => (
  <div>
    <h1>FixedIn</h1>

    <AuthRoute path='/login' component={LoginFormContainer} />
    {/* <AuthRoute path='/signup' component={} /> */}
    <AuthRoute path='/' component={Splash} />
  </div>
);

export default App;