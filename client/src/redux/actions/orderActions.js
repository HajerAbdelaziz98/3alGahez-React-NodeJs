import axios from 'axios';
import { showErrorMsg } from '../../helpers/message';
import { START_LOADING, STOP_LOADING } from '../constants/loadingConstants';
import {
  SHOW_ERROR_MESSAGE,
  SHOW_SUCCESS_MESSAGE,
} from '../constants/messageConstants';
import {
  CREATE_ORDER,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  CREATE_FAIL,
  GET_ORDERS,
  GET_ORDER,
  DELETE_ORDER,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from '../constants/orderConstants';

export const createOrder = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.post('/api/order', formData);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({ type: CREATE_ORDER, payload: response.data.order });
  } catch (err) {
    console.log('createOrder api error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get('/api/order');
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ORDERS,
      payload: response.data.orders,
    });
  } catch (err) {
    console.log('getOrders api error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const getOrder = orderId => async dispatch => {
  try {
    dispatch({ type: GET_ORDER });
    const response = await axios.get(`/api/order/${orderId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ORDER,
      payload: response.data,
    });
  } catch (err) {
    console.log('getOrder api error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/order/${orderId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: DELETE_ORDER,
      payload: response.data,
    });
  } catch (err) {
    console.log('deleteOrder api error: ', err);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: err.response.data.errorMessage,
    });
  }
};
