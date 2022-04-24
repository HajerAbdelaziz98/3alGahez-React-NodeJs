import React from 'react';
import './userbody.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  // useRouteMatch
} from 'react-router-dom';
import AccountDetails from './AccountDetails';
import Orders from './Orders';
// import Inbox from './Inbox';
import Slide from 'react-reveal/Slide';
import OrderDetails from '../OrderDetails/OrderDetails';

const UserBody = () => {
  return (
    <>
      <Router>
        <div className="container-fluid my-1">
          <div className="row">
            <Slide left>
              <aside className="col-md-2 p-0">
                <ul className="list-group rounded-3">
                  <li className="list-group-item border-0">
                    <Link to="/user/dashboard/accountdetails">
                      <i className="fa-solid fa-home"></i>&nbsp;&nbsp; My Info
                    </Link>
                  </li>
                  <li className="list-group-item border-0">
                    <Link to="/user/dashboard/orders">
                      <i className="fa-solid fa-home"></i>&nbsp;&nbsp; Orders
                    </Link>
                  </li>
                </ul>
              </aside>
            </Slide>
            <Switch>
              <section className="col mx-auto p-0 mt-3 mt-md-0">
                <Route
                  exact
                  path="/user/dashboard/accountdetails"
                  component={AccountDetails}
                ></Route>
                <Route
                  exact
                  path="/user/dashboard/orders"
                  component={Orders}
                ></Route>
                <Route
                  exact
                  path="/user/dashboard/order/:id"
                  component={OrderDetails}
                ></Route>
                {/* <Route exact path="/user/dashboard/inbox" component={Inbox}></Route> */}
              </section>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
export default UserBody;
