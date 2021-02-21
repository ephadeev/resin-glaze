import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS} from '../types';

const initialState = {
  cart: {},
  counter: 0,
  totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON_PLUS: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: (state.cart[action.payload.id] || 0) + 1,
        },
        counter: state.counter + 1,
        totalAmount: state.totalAmount + action.payload.price
      };
    }
    case CLICK_BUTTON_MINUS: {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: (state.cart[action.payload.id] || 0) - 1,
        },
        counter: state.counter - 1,
        totalAmount: state.totalAmount - action.payload.price
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;