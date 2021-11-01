import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

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

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));