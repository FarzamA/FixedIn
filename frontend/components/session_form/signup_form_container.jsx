import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import EmailFormContainer from "./email_form_container";
import LocationFormContainer from "./location_form_container";
import NameFormContainer from "./name_form_container";
import JobFormContainer from "./job_form_container";
import StudentFormContainer from "./student_form_container";

export const SignUpForms = () => (
    <div className='signup-cont'>
        {/* <Link to='/' className='signUp-logo'><img src={window.logo} /></Link>    */}
        <AuthRoute exact path='/signup/student' component={StudentFormContainer}/>
        <AuthRoute exact path='/signup/job' component={JobFormContainer}/>
        <AuthRoute exact path='/signup/location' component={LocationFormContainer}/>
        <AuthRoute exact path='/signup/name' component={NameFormContainer}/>
        <AuthRoute exact path='/signup' component={EmailFormContainer}/>
    </div>
);

