import {GET_PRODUCTS_STARTED, GET_PRODUCTS, GET_PRODUCTS_FAILURE} from '../types';

// get products
const getProductsStarted = () => ({type: GET_PRODUCTS_STARTED});
const setProducts = products => ({type: GET_PRODUCTS, products});
const getProductsFailure = error => ({type: GET_PRODUCTS_FAILURE, payload: {error}});
export const getProducts = () => {
    return dispatch => {
        dispatch(getProductsStarted);
        fetch('http://localhost:5000/api/products/')
            .then(response => response.json())
            .then(data => dispatch(setProducts(data)))
            .catch(err => dispatch(getProductsFailure(err)))
    }
};