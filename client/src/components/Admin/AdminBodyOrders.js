import Card from '../Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProduct } from '../../redux/actions/productActions';
import { getOrders } from '../../redux/actions/orderActions';
import AdminActionBtns from './AdminActionBtns';
// import { getProductsByFilter } from '../../redux/actions/filterActions';


// redux
const AdminBodyOrders = () => {
  const { loading } = useSelector((state) => state.loading);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getProduct(productId));
  // }, [dispatch, productId]);
  const { products } = useSelector((state) => state.products)
  // console.log('products', products);
  const { orders } = useSelector((state) => state.orders);
  // console.log('orders', orders);


  const userName = JSON.parse(localStorage.getItem("user")).username
  let productBySeller = [];
  let x;
  // 5 orders include many Ids of products ,seller is unknown
  orders.map((o) => {
    // 1- Get all orders
    // 2- Get array of sellers

    // console.log("All orders ", o)
    // console.log("All orders of the seller", o.products)
    o.products.forEach((prdBySeller) => {
      if (prdBySeller.seller === userName) {
        productBySeller.push({
          "orderId": o._id,
          "productName": prdBySeller.productName,
          "productId": prdBySeller._id,
          "count": prdBySeller.countPerProduct,
          "contactName": o.title,
          "contactPhone": o.mobile,
          "contactEmail": o.email,
          "orderPrice": prdBySeller.productPrice * prdBySeller.countPerProduct,
        });
      }
    })
  })
  // console.log("productBySeller", productBySeller)

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);



  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between">

          {/* {productBySeller &&
            productBySeller.map((p) => (
              <div key={p.orderId}>
                <ol key={p._id}>
                  <li>Order Id name : {p.orderId}</li>
                  <li>Product name : {p.productName}</li>
                  <li>seller:{p.seller}</li>
                  <li>{p.productName} </li>
                  <li> {p.productId} </li>
                  <li> {p.count} </li>
                  <li> {p.contactName}</li>
                  <li> {p.contactPhone} </li>
                  <li> {p.contactEmail} </li>
                  <li> {p.orderPrice} </li>
                </ol>
              </div>
            ))} */}


          <table class="table">
            <thead class="bg-warning">
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Products</th>
                <th scope="col">Count</th>
                <th scope="col">Total Price</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Phone</th>
              </tr>
            </thead>
            <tbody>
              {productBySeller &&
                productBySeller.map((p) => (
                  <tr key={p.orderId}>
                    <td>{p.orderId}</td>
                    <td>{p.productName}</td>
                    <td>{p.count}</td>
                    <td>{p.orderPrice}</td>
                    <td>{p.contactName}</td>
                    <td>{p.contactPhone}</td>
                  </tr>
                ))}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default AdminBodyOrders;
