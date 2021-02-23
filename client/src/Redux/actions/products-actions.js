import {
    GET_PRODUCTS_STARTED, GET_PRODUCTS, GET_PRODUCTS_FAILURE,
    GET_PRODUCT_STARTED, GET_PRODUCT, GET_PRODUCT_FAILURE} from '../types';

// get products
export const getProducts = () => {
    return dispatch => {
        dispatch({type: GET_PRODUCTS_STARTED});
        fetch('http://localhost:5000/api/products/')
            .then(response => response.json())
            .then(products => dispatch({type: GET_PRODUCTS, products}))
            .catch(error => dispatch({type: GET_PRODUCTS_FAILURE, payload: {error}}))
    }
};

// get product
export const getProduct = id => dispatch => {
        dispatch({type: GET_PRODUCT_STARTED});
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json())
            .then(product => dispatch({type: GET_PRODUCT, product}))
            .catch(error => dispatch({type: GET_PRODUCT_FAILURE, payload: {error}}))
};