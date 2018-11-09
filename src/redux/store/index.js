/* global require module window alert */

import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {logger} from 'redux-logger';
import {promiseMiddleware} from 'redux/store/promiseMiddleware';

import EnvironmentVariableUtils from 'modules/EnvironmentVariableUtils';
import combinedReducers from 'redux/reducers/index';

const defaultState = {
    appGlobal: {
    }
};

/**
 * Configures the application store by combining all the reducers and enabling hot reloading for the reducers.
 */
export default function configureStore() {
    const store = EnvironmentVariableUtils.isThisADevelopmentBuild() ?
        createStore(combinedReducers, defaultState, applyMiddleware(ReduxThunk, promiseMiddleware, logger)) :
        createStore(combinedReducers, defaultState, applyMiddleware(ReduxThunk, promiseMiddleware));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
