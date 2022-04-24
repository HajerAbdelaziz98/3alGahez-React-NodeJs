import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../../redux/actions/productActions';
import { getOrders } from '../../redux/actions/orderActions';
import { Link } from "react-router-dom";

// redux
const SuperAdminBodyOrders = () => {
  // const { loading } = useSelector((state) => state.loading);
  // const [text, setText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProduct(productId));
  // }, [dispatch, productId]);

  const { orders } = useSelector((state) => state.orders);

  // console.log('orders', orders);


  orders.map((order) => {
    console.log(
      'order', order)
  });


  return (
    // <div className="container">
    //   <div className="row d-flex justify-content-between">
    // {/* {orders &&
    //   orders.map((order) => (
    //     <div key={order._id}>
    //       <p>Orderd on: {order.createdAt}</p>
    //       <p>Order number:{order._id}</p>
    //       <p>Order status:{order.orderStatus}</p> Number of items:
    //       {order.items.length}
    //     </div>
    //   ))} */}
    <div className="table-responsive">
      <table className="table">
        <tbody>
          <tr>
            <th>Order ID</th>
            <th>Order User</th>
            <th>User Email</th>
            <th>Order Price</th>

            {/* <th>Order CreatedAt</th> */}
            <th>Order Items</th>
            <th>Order Status</th>

          </tr>
          {orders &&
            orders.map((order) => (

              <tr key={order._id}>
                <td>
                  <b>{order._id}</b>
                </td>
                <td>
                  <b>{order.user.username}</b>
                </td>
                <td>{order.user.email}</td>
                <td>${order.orderPrice}</td>

                {/* <td>{order.createdAt}
                  </td> */}
                <td>
                  {order.products.length}
                </td>
                <td>
                  {order.orderStatus}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

  );
};

export default SuperAdminBodyOrders;
