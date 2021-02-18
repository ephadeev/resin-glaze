import {CLICK_BUTTON_PLUS, CLICK_BUTTON_MINUS, POST_ORDER_SUCCESS} from '../types';

const initialState = {
  value: {},
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON_PLUS: {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload]: (state.value[action.payload] || 0) + 1,
        },
      };
    }
    case CLICK_BUTTON_MINUS: {
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload]: (state.value[action.payload] || 0) - 1,
        },
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

export default cardReducer;