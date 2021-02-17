import {
    ON_CHANGE_PRODUCT_NAME, ON_CHANGE_PRODUCT_ABOUT, ON_CHANGE_PRODUCT_PRICE} from '../types';

// add new product
export const onChangeProductName = product => ({type: ON_CHANGE_PRODUCT_NAME, payload: product});
export const onChangeProductAbout = product => ({type: ON_CHANGE_PRODUCT_ABOUT, payload: product});
export const onChangeProductPrice = product => ({type: ON_CHANGE_PRODUCT_PRICE, payload: product});