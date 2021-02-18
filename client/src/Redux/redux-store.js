import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import productsReducer from './reducers/products-reducer';
import cmsReducer from './reducers/cms-reducer';
import cardReducer from './reducers/card-reducer';

let reducers = combineReducers({
    products: productsReducer,
    cms: cmsReducer,
    card: cardReducer
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;