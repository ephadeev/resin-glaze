import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS} from '../types';

export const clickMinus = (id) => ({
  type: CLICK_BUTTON_MINUS,
  payload: id,
});

export const clickPlus = (id) => ({
  type: CLICK_BUTTON_PLUS,
  payload: id,
});