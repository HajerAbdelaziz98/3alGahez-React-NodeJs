import React from "react";
import "./Checkout.css";
import payImg from '../../images/payment.png';
import PayPal from "../PayPal/PayPal";
import { Link } from 'react-router-dom';
import Slide from "react-reveal/Slide"

export default function Checkout() {
  return (
    <div className="container">
      <div className="row">
        <div className='d-flex mb-2 col-12 mt-1'>
          <h3 className='text-center col'></h3>
          <h3 className='text-center col'></h3>
          <h3 className='bg-warning px-1 py-1 text-center col'>Payment</h3>
          <h3 className='text-center col'></h3>
        </div>
        <div className='pay-section'>
          <div className="row d-flex justify-content-around">
            <Slide left>
              <div className="form-info">
                <form >
                  <div >
                    <label for="inputEmail4" >Email</label>
                    <input className="chk-input" type="email" id="inputEmail4" placeholder="Jeo@gmail.com" />
                  </div>

                  <div >
                    <label for="inputAddress" >Shipping Address</label>
                    <input className="chk-input" type="text" id="inputAddress" placeholder="1234 Main St, city" />
                  </div>
                  <div >
                    <label for="inputZip" >Mobile</label>
                    <input className="chk-input" type="tel" id="inputZip" placeholder="01009895811" />
                  </div>
                  <br></br>
                  <div><PayPal /></div>
                  {/* <div >

              <button type="submit" className="checkbtn ">Checkout Now!</button>
            </div> */}



                </form>
              </div>
            </Slide>
            <Slide right>
              <div className='pay-img' >
                <img alt="..." className='girl-img' src={payImg} />
              </div>
            </Slide>
          </div>
          <div className='d-flex justify-content-between px-5 mb-3 mx-1 w-100'>
            <div className=" mb-3">
              <Link
                to="/shippingaddress">
                <button
                  className="btn btn-outline-warning text-dark py-2"
                >Go back to shipping address
                </button></Link>
            </div>

            <div className=''>
              <button
                className="btn btn-outline-success py-2"
              >
                View order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}