import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Signup from './SignUp/Signup';
import Signin from './SignIn/Signin';

import Product from './Product/Product';
import Footer from './Footer/Footer';

import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './UserAccount/UserDashboard';
import AdminEditProduct from './Admin/AdminEditProduct';
import AdminRoute from './Admin/AdminRoute';
import UserRoute from './UserAccount/UserRoute';
import NotFound from './PageNotFound/NotFound';
import SellerProfile from './SellerProfile/SellerProfile';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import SuperAdminRoute from '../components/SuperAdmin/SuperAdminRoute';
import SuperAdminDashboard from '../components/SuperAdmin/SuperAdminDashboard';
// import HomeHeader from './HomeHeader/HomeHeader';
import SuperAdminEditProduct from './SuperAdmin/SuperAdminEditProduct';
import Checkout from './Checkout/Checkout';
import Order from './Order/Order';
import ShippingAddress from './ShippingAddress/ShippingAddress';
import AdminBodyOrders from './Admin/AdminBodyOrders';
import Orders from './UserAccount/Orders';
import OrderDetails from './OrderDetails/OrderDetails';
import AllOfProducts from './SuperAdmin/AllOfProducts';
import SuperAdminBodyOrders from './SuperAdmin/SuperAdminBodyOrders';
import Dashboard from './SuperAdmin/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <MessengerCustomerChat
          pageId="105157945465245"
          appId="1111149166341807"
        /> */}
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:productId" component={Product} />
            <Route exact path="/user/dashboard/order/:orderId" component={OrderDetails} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/shippingaddress" component={ShippingAddress} />
            <Route exact path="/orderpayment" component={Order} />
            <Route exact path="/profile" component={SellerProfile} />
            {/* On category selection/Click, the user will be redirected to menu page with this category */}
            <Route exact path="/menu" component={Menu} />
            <Route
              exact
              path="/menu/:name"
              render={(routeProps) => <Menu name="catone" stuff={routeProps} />}
            />
            <UserRoute
              exact
              path="/user/dashboard/accountdetails"
              component={UserDashboard}
            />
            <UserRoute exact path="/user/dashboard/orders" component={Orders} />
            <AdminRoute
              exact
              path="/admin/dashboard/products"
              component={AdminDashboard}
            />
            <AdminRoute
              exact
              path="/admin/dashboard/orders"
              component={AdminBodyOrders}
            />
            <AdminRoute
              exact
              path="/admin/edit/product/:productId"
              component={AdminEditProduct}
            />
            <SuperAdminRoute
              exact
              path="/superadmin/edit/product/:productId"
              component={SuperAdminEditProduct}
            />

            <SuperAdminRoute exact path="/superadmin/dashboard/statistics" component={SuperAdminDashboard} ></SuperAdminRoute>
            <SuperAdminRoute exact path="/superadmin/dashboard/orders" component={SuperAdminBodyOrders} ></SuperAdminRoute>
            <SuperAdminRoute exact path="/superadmin/dashboard/statistics" component={Dashboard} ></SuperAdminRoute>
            <SuperAdminRoute exact path="/superadmin/dashboard/products" component={AllOfProducts} ></SuperAdminRoute>

            <Route exact path="/not-found" component={NotFound} />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
