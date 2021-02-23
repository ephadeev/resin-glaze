import {
    GET_PRODUCTS_STARTED, GET_PRODUCTS, GET_PRODUCTS_FAILURE,
    GET_PRODUCT_STARTED, GET_PRODUCT, GET_PRODUCT_FAILURE} from '../types';

let initialState = {
    products: [],
    error: null,
    isLoading: false,
    product: {}
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        // get products
        case GET_PRODUCTS_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_PRODUCTS: {
            return {
                ...state,
                isLoading: false,
                products: [...action.products]
            }
        }
        case GET_PRODUCTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // get product
        case GET_PRODUCT_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_PRODUCT: {
            return {
                ...state,
                isLoading: false,
                product: {...action.product}
            }
        }
        case GET_PRODUCT_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // default
        default: {
            return state
        }
    }
};

export default productsReducer;