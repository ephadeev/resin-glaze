import {
    ON_CHANGE_PRODUCT_NAME, ON_CHANGE_PRODUCT_ABOUT, ON_CHANGE_PRODUCT_PRICE,
    GET_ORDERS_STARTED, GET_ORDERS, GET_ORDERS_FAILURE} from '../types';

// add new product
export const onChangeProductName = product => ({type: ON_CHANGE_PRODUCT_NAME, payload: product});
export const onChangeProductAbout = product => ({type: ON_CHANGE_PRODUCT_ABOUT, payload: product});
export const onChangeProductPrice = product => ({type: ON_CHANGE_PRODUCT_PRICE, payload: product});

// get orders
export const getOrders = () => {
    return dispatch => {
        dispatch({type: GET_ORDERS_STARTED});
        fetch('http://localhost:5000/api/orders/')
            .then(response => response.json())
            .then(orders => dispatch({type: GET_ORDERS, orders}))
            .catch(error => dispatch({type: GET_ORDERS_FAILURE, payload: {error}}))
    }
};