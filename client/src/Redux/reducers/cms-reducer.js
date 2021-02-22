import {
    ON_CHANGE_PRODUCT_NAME, ON_CHANGE_PRODUCT_ABOUT, ON_CHANGE_PRODUCT_PRICE,
    GET_ORDERS_STARTED, GET_ORDERS, GET_ORDERS_FAILURE} from '../types';

let initialState = {
    newProductName: '',
    newProductAbout: '',
    newProductPrice: 0,
    orders: [],
    isLoading: false
};

const cmsReducer = (state = initialState, action) => {
    switch (action.type) {
        // get orders
        case GET_ORDERS_STARTED: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_ORDERS: {
            return {
                ...state,
                isLoading: false,
                orders: [...action.orders]
            }
        }
        case GET_ORDERS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        }
        // add new product
        case ON_CHANGE_PRODUCT_NAME: {
            return {
                ...state,
                newProductName: action.payload
            }
        }
        case ON_CHANGE_PRODUCT_ABOUT: {
            return {
                ...state,
                newProductAbout: action.payload
            }
        }
        case ON_CHANGE_PRODUCT_PRICE: {
            return {
                ...state,
                newProductPrice: action.payload
            }
        }
        // default
        default: {
            return state
        }
    }
};

export default cmsReducer;