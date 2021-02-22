import {
  CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS,
  POST_ORDER_SUCCESS,
  ON_CHANGE_FIRST_NAME, ON_CHANGE_LAST_NAME, ON_CHANGE_TEL, ON_CHANGE_STREET, ON_CHANGE_HOME, ON_CHANGE_APARTMENT,
  CREATE_ORDER_STARTED, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE} from '../types';

const initialState = {
  cart: {},
  counter: 0,
  totalAmount: 0,
  orderFirstName: '', 
  orderLastName: '', 
  orderTel: 375, 
  orderStreet: '', 
  orderHome: '', 
  orderApartment: '',
  isLoading: false
};

const cartReducer = (state = initialState, action) => {
  console.log(action);
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
    // on change order
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
    // create new order
    case CREATE_ORDER_STARTED: {
      return {
        ...state,
        isLoading: true
      }
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        ...initialState,
        orderFirstName: ''
      }
    }
    case CREATE_ORDER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    // default
    default:
      return state;
  }
};

export default cartReducer;