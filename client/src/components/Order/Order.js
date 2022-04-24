import React, { useEffect, useReducer, useNavigate } from 'react';
import { getOrders } from '../../redux/actions/productActions';

import { showErrorMsg } from '../../helpers/message';
import { showLoading } from '../../helpers/loading';
import { useHistory, useParams } from 'react-router-dom';
import { isAuthenticated } from '../../helpers/auth';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import payImg from '../../images/payment.png';
import PayPal from '../PayPal/PayPal';
import Slide from 'react-reveal/Slide';

function Order() {
  const addressDetails=JSON.parse(localStorage.getItem("addressDetails"));
  // console.log(addressDetails);
  //   const { successMsg, errorMsg } = useSelector((state) => state.messages);
  //   const { loading } = useSelector((state) => state.loading);
  //   const { cart } = useSelector((state) => state.cart);
  //   let history = useHistory();
  //   const dispatch = useDispatch();
  // const { orderId } = match.params;

  // const params = useParams();
  // const { id: orderId } = params;
  // const navigate = useNavigate();
  // cosnt[{ loading, error, order }, dispatch] = useReducer(reducer, {
  //     loading: true,
  //     order: {},
  //     error: "",
  // });


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex mb-2 col-12 mt-1">
            <h3 className="text-center col"></h3>
            <h3 className="text-center col"></h3>
            <h3 className="bg-warning px-1 py-1 text-center col">
              Payment
            </h3>
            <h3 className="text-center col"></h3>
          </div>
          <div className='col-12 d-flex justify-content-around '>
            <div className='col-md-5'>
              <label>Name :</label><p>{addressDetails.title}</p>
              <label>email :</label><p>{addressDetails.email}</p>
              <label>City :</label><p>{addressDetails.city}</p>
              <label>address :</label><p>{addressDetails.address}</p>
              <label>mobile :</label><p>{addressDetails.mobile}</p>
              <div className="d-flex justify-content-center px-5 mb-3 mx-1 w-100">
                  <div className=" mb-3">
                    <Link to="/shippingaddress">
                      <button className="btn btn-outline-warning text-dark py-2">
                        Edit Details
                      </button>
                    </Link>
                  </div>

                  {/* <div className="">
                    <Link to="/orderpayment"><button
                      type="submit"
                      className="btn btn-outline-success py-2"
                    >
                      Save shipping details
                    </button></Link>
                  </div> */}
                </div>
            </div>
            <div className="col-md-5">
              <Slide right>
                <div className="pay-img">
                  <img alt="..." className="girl-img" src={payImg} />
                </div>
              </Slide>
              <div>
                <PayPal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order;
