import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_TO_CART } from '../../redux/constants/cartConstants';
import { deleteFromCart } from '../../redux/actions/cartActions';
import PayPal from '../PayPal/PayPal';
import Slide from 'react-reveal/Slide';
import emptyCart from '../../images/empty-cart.png'
import Checkout from '../Checkout/Checkout';
const Cart = ({ history }) => {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  // const handleGoBackBtn = () => {
  //   history.goBack();
  // };

  const handleQtyChange = (e, product) => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    cart.forEach((cartItem) => {
      if (cartItem._id === product._id) {
        cartItem.count = e.target.value;
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#FFF' }}>
      <div className="container py-1 h-100">
        <div className="row d-flex justify-content-center h-100">
          <div className="col-12">
            {cart.length <= 0 ? (
              <div className='empty-cart d-flex flex-column justify-content-center ' >
                <div className='w-100 d-flex justify-content-center'>
                  <Link to="/menu" className='text-decoration-none'><button
                    className="btn btn-warning text-dark d-block"
                  // onClick={handleGoBackBtn}
                  >
                    Check Our Menu
                  </button></Link>
                </div>
                <img src={emptyCart} className="w-50 mx-auto" alt="Empty cart" />
                {/* <h5 className="displayEmpty text-center">Your cart is currently empty.</h5> */}

              </div>
            ) : (
              <>
                <div className='d-flex mb-2 col-12'>
                  <h3 className='bg-warning px-1 py-1 text-center col'>Cart</h3>
                  <h3 className='text-center col'></h3>
                  <h3 className='text-center col'></h3>
                  <h3 className='text-center col'></h3>
                </div>
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: '15px' }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <Slide left>
                        <div className="col-lg-8">
                          <div className="p-5">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                              <h2 className="fw-bold mb-0 text-black">
                                Products list
                              </h2>
                              <h6 className="mb-0 text-muted">
                                {cart.length === 1
                                  ? '( 1 ) Item'
                                  : `(${cart.length}) Items`}
                              </h6>
                            </div>
                            <hr className="my-4" />

                            <div>
                              {cart.map((product) => (
                                <div
                                  key={product._id}
                                  className="row mb-4 d-flex justify-content-between align-items-center"
                                >
                                  {/* Product image className="img-fluid w-100 img-thumbnail */}
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    {' '}
                                    <img
                                      style={{
                                        maxWidth: '110px',
                                      }}
                                      className="img-fluid rounded-3"
                                      src={`/uploads/${product.fileName}`}
                                      alt="product"
                                    />
                                  </div>

                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    {' '}
                                    <h6 className="text-black">
                                      {' '}
                                      <Link to={`/product/${product._id}`}>
                                        {product.productName}
                                      </Link>
                                    </h6>
                                    <h6 className="text-muted mb-0">
                                      {product.productPrice.toLocaleString(
                                        'en-US',
                                        {
                                          style: 'currency',
                                          currency: 'USD',
                                        }
                                      )}
                                    </h6>
                                  </div>

                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <input
                                      className="form-control "
                                      type="number"
                                      min="1"
                                      max={product.productQty}
                                      value={product.count}
                                      onChange={(e) => handleQtyChange(e, product)}
                                    />
                                  </div>

                                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    {' '}
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm"
                                      onClick={() =>
                                        dispatch(deleteFromCart(product))
                                      }
                                    >
                                      <i className="far fa-trash-alt pr-1"></i>
                                    </button>
                                  </div>

                                  <hr className="my-4" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide right>
                        <div className="col-lg-4">
                          <div className="p-5">
                            <div className="mb-4 pb-2">

                            </div>

                            <div className="d-flex justify-content-center align-itmes-center mb-4">
                              <h5 className="text-uppercase">
                                {cart.length === 1
                                  ? '( 1 ) Item'
                                  : `(${cart.length}) Items`}
                              </h5>
                            </div>
                            <hr className="my-4" />
                            <div className="d-flex justify-content-center align-itmes-center mb-5">
                              <h5 className="font-weight-bold text-uppercase">
                                Total:
                                {cart
                                  .reduce(
                                    (currentSum, currentCartItem) =>
                                      currentSum +
                                      currentCartItem.count *
                                      currentCartItem.productPrice,
                                    0
                                  )
                                  .toFixed(2)}
                              </h5>
                            </div>

                            {/* {checkout ? (
                            <PayPal />
                          ) : (
                            <button
                              className="btn btn-dark btn-large btn-block mb-5 py-2"
                              data-mdb-ripple-color="dark"
                              onClick={() => {
                                setCheckOut(true);
                              }}
                            >
                              Proceed to Checkout
                            </button>
                          )} */}
                          </div>
                        </div>
                      </Slide>
                      <div className='d-flex justify-content-between px-5 mb-3 mx-1 w-100'>
                        <div className="">
                          <Link
                            to="/menu">
                            <button
                              className="btn btn-outline-warning text-dark py-2"
                            >
                              Browse products
                            </button></Link>
                        </div>
                        <div className=''>
                          <Link to="/shippingaddress"><button
                            className="btn btn-outline-success py-2"

                          >
                            Fill in shipping details
                          </button></Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
