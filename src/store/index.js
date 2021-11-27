import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { auth, global } from './reducers';

const reducer = combineReducers({ auth, global });

const middlewares = process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;