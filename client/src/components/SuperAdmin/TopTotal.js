import React from "react";
import "./TopTotal.css";

const TopTotal = (props) => {
  const {products } = props;
  return (
    <div className="row">
      <div className="col-lg-8 ">
        <div className="card card-body mb-2 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Products</h6>
              {products ? <span>{products.length}</span> : <span>0</span>}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
