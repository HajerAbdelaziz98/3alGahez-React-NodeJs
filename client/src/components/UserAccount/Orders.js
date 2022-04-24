import React, { useEffect, useState } from 'react';
import kit from '../../images/DrawKit-cooking-kitchen-food-vector-illustrations-07.png';
import Slide from 'react-reveal/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orderActions';
import './orders.css';
import { Link } from 'react-router-dom';

const Orders = () => {
  const { loading } = useSelector((state) => state.loading);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProduct(productId));
  // }, [dispatch, productId]);

  const { orders } = useSelector((state) => state.orders);
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  const ordersFiltered = orders.filter((o) => {
    return o.user._id === userId;
  });

  console.log('orders', orders);
  console.log('orders By Marina filtered', ordersFiltered);

  return (
    <Slide right>
      <div className="p-10 bg-surface-secondary">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h6>Previous orders</h6>
            </div>
            <div className="table-responsive">
              <table className="table table-hover table-nowrap">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Deliverd to</th>
                    <th scope="col">Order number</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Meals Orderd</th>
                    <th scope="col">Transaction</th>
                    <th scope="col">State</th>
                    <th scope="col">Date</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {ordersFiltered &&
                    ordersFiltered.map((o) => (
                      <tr key={o._id}>
                        <td>
                          <p>{o.title}</p>
                        </td>
                        <td>
                          <Link to={`/order/${o._id}`}>
                          <span>{o._id}</span></Link>
                        </td>
                        <td>
                          <a className="text-current" href={`tel:${o.mobile}`}>
                            {o.mobile}
                          </a>
                        </td>
                        <td>
                          <span>{o.products.length}</span>
                        </td>
                        <td>
                          <span className="badge bg-soft-success text-success">
                            {o.orderStatus}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-soft-warning text-warning">
                            Shipping
                          </span>
                        </td>
                        <td>
                          <span>{o.createdAt}</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Orders;
