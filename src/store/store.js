import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducers'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

