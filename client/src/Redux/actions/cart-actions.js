import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS} from '../types';

export const clickMinus = (id, price) => ({type: CLICK_BUTTON_MINUS, payload: {id, price}});

export const clickPlus = (id, price) => ({type: CLICK_BUTTON_PLUS, payload: {id, price}});