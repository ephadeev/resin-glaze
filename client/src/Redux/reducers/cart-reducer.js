import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS, ON_CHANGE_FIRST_NAME, ON_CHANGE_LAST_NAME, ON_CHANGE_TEL, ON_CHANGE_STREET, ON_CHANGE_HOME, ON_CHANGE_APARTMENT} from '../types';

const initialState = {
  cart: {},
  counter: 0,
  totalAmount: 0,
  orderFirstName: '', 
  orderLastName: '', 
  orderTel: 375, 
  orderStreet: '', 
  orderHome: '', 
  orderApartment: ''
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
    // order
    case ON_CHANGE_FIRST_NAME: {
      return {
        ...state,
        orderFirstName: action.payload
      }
    }
    case ON_CHANGE_LAST_NAME: {
      return {
        ...state,
        orderLastName: action.payload
      }
    }
    case ON_CHANGE_TEL: {
      return {
        ...state,
        orderTel: action.payload
      }
    }
    case ON_CHANGE_STREET: {
      return {
        ...state,
        orderStreet: action.payload
      }
    }
    case ON_CHANGE_HOME: {
      return {
        ...state,
        orderHome: action.payload
      }
    }
    case ON_CHANGE_APARTMENT: {
      return {
        ...state,
        orderApartment: action.payload
      }
    }
    default:
      return state;
  }
};

export default cartReducer;