import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../../helpers/auth';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/Serving-Food-PH2.png';
import './header.css';
import { deleteCart } from '../../redux/actions/cartActions';

const Header = ({ history }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleLogout = (evt) => {
    logout(() => {
      dispatch(deleteCart());
      history.push('/signin');
    });
  };

  const roleChange = () => {
    let storageNow = JSON.parse(localStorage.getItem('user'));
    switch (storageNow.role) {
      case 1:
        storageNow.role = 0;
        localStorage.setItem('user', JSON.stringify(storageNow));
        break;
      case 0:
        storageNow.role = 1;
        localStorage.setItem('user', JSON.stringify(storageNow));
        break;
      default:
        return storageNow;
    }
  };

  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to="/" className="navbar-brand">
        <img
          alt="logo"
          src={logo}
          className="logo"
          style={{ height: '55px' }}
        ></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  <i className="fa-solid fa-utensils"></i> Menu
                </Link>
              </li>
              <li className="nav-item mr-2" style={{ position: 'relative' }}>
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{' '}
                  <span
                    className={`badge rounded-circle badge-warning ${cart.length === 0 ? 'd-none' : ''
                      }`}
                    style={{
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  <i className="fas fa-edit"></i> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> Signin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  <i className="fas fa-shopping-bag"></i> Menu
                </Link>
              </li>
              <li className="nav-item mr-2" style={{ position: 'relative' }}>
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{' '}
                  <span
                    className={`badge rounded-circle badge-warning ${cart.length === 0 ? 'd-none' : ''
                      }`}
                    style={{
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-white text-secondary dropdown-toggle pl-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>&nbsp; Dashboard
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      to="/user/dashboard/accountdetails"
                      className="active text-dark nav-link dropdown-item"
                    >
                      Buyer
                    </Link>
                    <Link
                      to="/admin/dashboard/products"
                      className="text-dark nav-link dropdown-item"
                      onClick={roleChange}
                    >
                      Seller
                    </Link>
                  </div>
                </div>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  <i className="fas fa-shopping-bag"></i> Menu
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-white text-secondary dropdown-toggle pl-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user"></i>&nbsp; Dashboard
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link
                      to="/admin/dashboard"
                      className=" active text-dark nav-link dropdown-item"
                    >
                      Seller
                    </Link>
                    <Link
                      to="/user/dashboard/accountdetails"
                      className="text-dark nav-link dropdown-item"
                      onClick={roleChange}
                    >
                      Buyer
                    </Link>
                  </div>
                </div>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 2 && (
            <Fragment>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  <i className="fas fa-shopping-bag"></i> Menu
                </Link>
              </li>
              <li className="nav-item mr-2" style={{ position: 'relative' }}>
                <Link to="/cart" className="nav-link">
                  <i className="fas fa-shopping-cart"></i> Cart{' '}
                  <span
                    className={`badge rounded-circle badge-warning ${cart.length === 0 ? 'd-none' : ''
                      }`}
                    style={{
                      position: 'absolute',
                      top: '0px',
                    }}
                  >
                    {cart.length}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/superadmin/dashboard/statistics" className="nav-link">
                  <i className="fa-solid fa-user"></i> Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <button
                  className="btn btn-link text-secondary text-decoration-none pl-0"
                  onClick={handleLogout}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
