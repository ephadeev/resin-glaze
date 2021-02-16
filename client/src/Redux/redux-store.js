import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import productsReducer from './reducers/products-reducer';
import cmsReducer from './reducers/cms-reducer';

let reducers = combineReducers({
    products: productsReducer,
    cms: cmsReducer
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;