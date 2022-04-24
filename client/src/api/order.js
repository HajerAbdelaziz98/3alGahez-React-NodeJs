import axios from 'axios';

export const createOrder = async (data) => {
  const response = await axios.post('/api/order', data);

  return response;
};

export const getOrders = async (data) => {
  const response = await axios.get('/api/order', data);
  // console.log('api resp', response);
  return response;
};
