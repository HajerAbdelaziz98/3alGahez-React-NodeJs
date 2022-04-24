import React from 'react';
import { Link } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';
import './Card.css';
import chefHat from '../../images/chef-hat.png';

const Card = ({
  product,
  adminPage = false,
  superAdminPage = false,
  homePage = false,
  username,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="card-crt">
      <div className="food-card">
        <img
          className="food-img"
          src={`/uploads/${product.fileName}`}
          alt="product"
        />
        {homePage && (
          <>
            <Link
              to={`/product/${product._id}`}
              type="button"
              className="btn details-eye"
            >
              <i className="fas fa-eye"></i>
            </Link>
          </>
        )}
        <div className="card-body">
          <h5>{product.productName}</h5>
          <p className="text-muted text-capitalize d-flex align-items-center">
            {' '}
            <img
              src={chefHat}
              style={{ height: '20px', textAlign: 'center' }}
            />{' '}
            &nbsp; {product.seller}{' '}
          </p>

          <h6>
            <span className="text-secondary">
              {product.productPrice}
              {/* {product.productPrice.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })} */}
            </span>
          </h6>
          <p className="text-muted">
            {product.productQty <= 0 ? 'Out of Stock' : 'In Stock'}
          </p>
          <p>
            {product.productDesc.length > 60
              ? product.productDesc.substring(0, 60) + '...'
              : product.productDesc.substring(0, 60)}
          </p>
          {homePage && (
            <>
              <button
                type="button"
                className="btn add-to-cart-btn text-white"
                disabled={product.productQty <= 0}
                onClick={handleAddToCart}
              >
                <i className="fas fa-cart-plus text-white mr-1"></i>
                Add to cart
              </button>
            </>
          )}
          {adminPage && (
            <>
              <div className="d-flex justify-content-between">
                <Link
                  to={`/admin/edit/product/${product._id}`}
                  type="button"
                  className="btn btn-outline-warning btn-sm px-3"
                  // className='btn btn-warning btn-sm px-3'
                >
                  <i className="far fa-edit pr-1"></i>
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  // className='btn btn-danger btn-sm'
                  onClick={() => dispatch(deleteProduct(product._id))}
                >
                  <i className="far fa-trash-alt pr-1"></i>
                  Delete
                </button>
              </div>
            </>
          )}

          {superAdminPage && (
            <>
              <div className="d-flex justify-content-between">
                <Link
                  to={`/superadmin/edit/product/${product._id}`}
                  type="button"
                  className="btn btn-warning text-dark btn-sm px-3"
                >
                  <i className="far fa-edit pr-1"></i>
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteProduct(product._id))}
                >
                  <i className="far fa-trash-alt pr-1"></i>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
