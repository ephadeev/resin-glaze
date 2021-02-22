import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS, ON_CHANGE_FIRST_NAME, ON_CHANGE_LAST_NAME, ON_CHANGE_TEL, ON_CHANGE_STREET, ON_CHANGE_HOME, ON_CHANGE_APARTMENT} from '../types';

export const clickMinus = (id, price) => ({type: CLICK_BUTTON_MINUS, payload: {id, price}});

export const clickPlus = (id, price) => ({type: CLICK_BUTTON_PLUS, payload: {id, price}});

// order
export const onChangeOrderFirstName = order => ({type: ON_CHANGE_FIRST_NAME, payload: order});
export const onChangeOrderLastName = order => ({type: ON_CHANGE_LAST_NAME, payload: order});
export const onChangeOrderTel = order => ({type: ON_CHANGE_TEL, payload: order});
export const onChangeOrderStreet = order => ({type: ON_CHANGE_STREET, payload: order});
export const onChangeOrderHome = order => ({type: ON_CHANGE_HOME, payload: order});
export const onChangeOrderApartment = order => ({type: ON_CHANGE_APARTMENT, payload: order});