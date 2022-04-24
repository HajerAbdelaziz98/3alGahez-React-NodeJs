import React from "react";
// import "./userbody.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // useParams,
    //NavLink
    // useRouteMatch
} from 'react-router-dom';
// import AccountDetails from './AccountDetails';
import Orders from '../UserAccount/Orders';
import Dashboard from "./Dashboard";
import AllOfProducts from "./AllOfProducts";
// import Inbox from './Inbox';
import Product from '../Product/Product'
import Card from "../Card/Card";
import SuperAdminBodyOrders from "./SuperAdminBodyOrders";
import Slide from "react-reveal/Slide"
import SuperAdminEditProduct from "./SuperAdminEditProduct";
const Sidebar = () => {
    return (

        <>
            <Router>
                <div className='container my-1'>
                    <div className='row'>
                        <Slide left>
                            <aside className='col-md-3 p-0'>
                                <ul className="list-group rounded-3">
                                    <li className="list-group-item border-0">
                                        <Link
                                            to="/superadmin/dashboard/statistics">
                                            <i className="icon fas fa-home"></i>&nbsp;&nbsp;
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <Link
                                            to="/superadmin/dashboard/orders">
                                            <i className="icon fas fa-list"></i>&nbsp;&nbsp;

                                            Orders
                                        </Link>
                                    </li>
                                    <li className="list-group-item border-0">
                                        <Link
                                            to="/superadmin/dashboard/products">
                                            <i className="icon fas fa-shopping-bag"></i>&nbsp;&nbsp;
                                            Products
                                        </Link>
                                    </li>
                                </ul>
                            </aside>
                        </Slide>
                        <Switch>
                            <section className='col-md-8 mx-auto p-0 mt-3 mt-md-0' >
                                <Route exact path="/superadmin/dashboard/products" component={AllOfProducts}></Route>
                                <Route exact path="/superadmin/dashboard/orders" component={SuperAdminBodyOrders}></Route>
                                <Route exact path="/superadmin/dashboard/statistics" component={Dashboard}></Route>
                                <Route
                                    exact
                                    path="/superadminadmin/edit/product/:productId"
                                    component={SuperAdminEditProduct}
                                >
                                </Route>
                            </section>
                        </Switch>
                    </div>
                </div>
            </Router>
        </>

    );
};

export default Sidebar;
