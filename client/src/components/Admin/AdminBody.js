import React from 'react';
import Card from '../Card/Card';
// redux
import { useSelector } from 'react-redux';
import Slide from 'react-reveal/Slide'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import AdminBodyOrders from './AdminBodyOrders';
import AdminBodyProducts from './AdminBodyProducts';
import AdminSidePanel from './AdminSidePanel';
import './admin.css'
import AdminEditProduct from './AdminEditProduct';

const AdminBody = () => {
	// const { products } = useSelector(state => state.products);
	// const username = JSON.parse(localStorage.getItem('user')).username;
	// const productsFiltered = products.filter((p) => {
	// 	return p.seller === username;
	// })

	return (
		<>
			<div className='ad-bdy'>
				<Router>
					<AdminSidePanel />

					<Switch>
						<div className='admin-r-bdy'>
							<Route
								exact
								path="/admin/dashboard/products"
								component={AdminBodyProducts}
							></Route>
							<Route
								exact
								path="/user/dashboard/orders"
								component={AdminBodyOrders}
							></Route>
							<Route
								exact
								path="/admin/edit/product/:productId"
								component={AdminEditProduct}
							>
							</Route>
						</div>
					</Switch>
				</Router>

			</div>
		</>
	);
};

export default AdminBody;
