import React, { Fragment, useState } from 'react';
// import isEmpty from 'validator/lib/isEmpty';
// import { showErrorMsg, showSuccessMsg } from '../../helpers/message';
// import { showLoading } from '../../helpers/loading';
// redux
// import { getCategories } from '../../redux/actions/categoryActions';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../../redux/actions/messageActions';
// import { createOrder } from '../../redux/actions/orderActions';

import { saveAddress } from '../../redux/actions/address';
import { Link, useHistory } from 'react-router-dom';
// import orderReducer from '../../redux/reducers/orderReducers';
// import {
//   CREATE_FAIL,
//   CREATE_REQUEST,
//   CREATE_SUCCESS,
// } from '../../redux/constants/orderConstants';
// import { DELETE_CART } from '../../redux/constants/cartConstants';
// import { SAVE_ADDRESS } from '../../redux/constants/address';
// import payImg from '../../images/payment.png';
// import PayPal from '../PayPal/PayPal';
// import Slide from 'react-reveal/Slide';

const ShippingAddress = () => {
  // const { loading } = useSelector((state) => state.loading);
  // const { successMsg, errorMsg } = useSelector((state) => state.messages);
  // const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  // const cart = JSON.parse(localStorage.getItem('cart'));
  const history = useHistory();
  
  // const [clientSideError, setClientSideError] = useState('');
  const [orderData, setOrderData] = useState({
    title: '',
    email: '',
    city: '',
    address: '',
    mobile: ''
  });

  const { title, email, city, address, mobile} = orderData;

  // const handleMessages = (evt) => {
  //   dispatch(clearMessages());
  //   setClientSideError('');
  // };

  const handleShippingDetails = (evt) => {
    setOrderData({
      ...orderData,
      [evt.target.name]: evt.target.value,
    });
    // console.log(orderData);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("addressDetails",JSON.stringify(orderData))
    // let x = JSON.parse(localStorage.getItem("addressDetails"))
    dispatch(saveAddress({ title, email, mobile, city, address }));
    history.push("/orderpayment")
    }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex mb-2 col-12 mt-1">
            <h3 className="text-center col"></h3>
            <h3 className="bg-warning px-1 py-1 text-center col">
              Shipping details
            </h3>
            <h3 className="text-center col"></h3>
            <h3 className="text-center col"></h3>
          </div>
            <div className="col-md-6 mx-auto">
              <form onSubmit={handleShippingSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Contact Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleShippingDetails}
                    name="title"
                    defaultValue={title}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailAddress" className="form-label">
                    Contact Email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    defaultValue={email}
                    onChange={handleShippingDetails}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    defaultValue={city}
                    onChange={handleShippingDetails}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    defaultValue={address}
                    onChange={handleShippingDetails}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile number :
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    minLength="11"
                    maxLength="11"
                    name="mobile"
                    defaultValue={mobile}
                    pattern="[0]{1}[1]{1}[0-9]{9}"
                    required
                    onChange={handleShippingDetails}
                  />
                </div>
                <div className="d-flex justify-content-between px-5 mb-3 mx-1 w-100">
                  <div className=" mb-3">
                    <Link to="/cart">
                      <button className="btn btn-outline-warning text-dark py-2">
                        Go back to cart
                      </button>
                    </Link>
                  </div>

                  <div className="">
                    <button
                      type="submit"
                      className="btn btn-outline-success py-2"
                    >
                      Save shipping details
                    </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddress;
