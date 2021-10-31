import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mSTP = ({ session: { currentUser } }) => ({
    loggedIn: Boolean(currentUser)
});

const Auth = ({ component: Component, loggedIn, path, exact }) => (
    <Route exact={exact} path={path} render={props => (
        loggedIn ? <Redirect to='/' /> : <Component {...props} />
    )} />
)

const Protected = ({ component: Component, loggedIn, path, exact }) => (
    <Route exact={exact} path={path} render={props => (
        !loggedIn ? <Redirect to='/' /> : <Component {...props} />
    )} />
);

export const AuthRoute = connect(mSTP)(Auth);
export const ProtectedRoute = connect(mSTP)(Protected);