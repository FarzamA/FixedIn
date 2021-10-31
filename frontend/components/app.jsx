import React from "react";
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import LoginFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <h1>FixedIn</h1>

    <AuthRoute path='/login' component={LoginFormContainer} />
    {/* <AuthRoute path='/signup' component={} /> */}
  </div>
);

export default App;