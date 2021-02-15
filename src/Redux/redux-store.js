import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let reducers = combineReducers({
    
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;