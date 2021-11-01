import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    const user = window.currentUser; 
    let preloadedState;
    if (user) {
        const { id } = user;
        preloadedState = {
            entities: {users: { [id]: user }},
            session: { currentUser: id }
        }
    }
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, root);
});