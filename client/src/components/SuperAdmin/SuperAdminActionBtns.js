import React from 'react';

const SuperAdminActionBtns = () => (
  <div className="bg-light my-2">
    <div className="container">
      <div className="row py-1 d-flex justify-content-around">
        <div className="col-md-5 my-1">
          <button
            className="btn btn-outline-info btn-block"
            data-toggle="modal"
            data-target="#addCategoryModal"
          >
            <i className="fas fa-plus"> Categories</i>{' '}
            <i className="fas fa-minus"></i>
          </button>
        </div>

        <div className="col-md-5 my-1">
          <button
            className="btn btn-outline-warning btn-block"
            data-toggle="modal"
            data-target="#addFoodModal"
          >
            <i className="fas fa-plus"> Add Food</i>
          </button>
        </div>

        {/* <div className="col-md-3 my-1">
          <button className="btn btn-outline-primary btn-block">
            <i className="fas fa-money-check-alt"> View Products</i>
          </button>
        </div> */}
        {/* <div className="col-md- my-1">
          <button className="btn btn-outline-success btn-block">
            <i className="fas fa-money-check-alt"> View Orders</i>
          </button>
        </div> */}
      </div>
    </div>
  </div>
);

export default SuperAdminActionBtns;
