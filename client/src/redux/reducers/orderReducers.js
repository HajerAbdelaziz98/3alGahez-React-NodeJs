import {
  CREATE_ORDER,
  GET_ORDERS,
  GET_ORDER,
  DELETE_ORDER,
} from '../constants/orderConstants';

const INITIAL_STATE = {
  orders: [],
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case GET_ORDERS:
      return {
        orders: [...action.payload],
      };
    case GET_ORDER:
      return {
        order: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
