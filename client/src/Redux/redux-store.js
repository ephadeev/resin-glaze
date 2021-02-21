import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import productsReducer from './reducers/products-reducer';
import cmsReducer from './reducers/cms-reducer';
import cartReducer from './reducers/cart-reducer';

let reducers = combineReducers({
    products: productsReducer,
    cms: cmsReducer,
    cart: cartReducer
});

let store = createStore(reducers, applyMiddleware(thunk, reduxLogger));

export default store;