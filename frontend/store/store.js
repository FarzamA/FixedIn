import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

// in order to only have logger during development mode
const middle = [thunk]
if (process.env.NODE_ENV !== "production") {
    middle.push(logger);
};

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(...middle))
);

export default configureStore;