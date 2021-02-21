import {
    ON_CHANGE_PRODUCT_NAME, ON_CHANGE_PRODUCT_ABOUT, ON_CHANGE_PRODUCT_PRICE} from '../types';

let initialState = {
    newProductName: '',
    newProductAbout: '',
    newProductPrice: 0
};

const cmsReducer = (state = initialState, action) => {
    switch (action.type) {
        // get 


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