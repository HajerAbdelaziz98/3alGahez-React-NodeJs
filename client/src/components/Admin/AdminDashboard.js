import React, { useEffect } from 'react';
// components
import AdminActionBtns from './AdminActionBtns';
import AdminProductModal from './AdminProductModal';
import AdminBody from './AdminBody';
// redux
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';
import AdminSidePanel from './AdminSidePanel';
import './admin.css'
import AdminBodyProducts from './AdminBodyProducts';
import AdminBodyOrders from './AdminBodyOrders';
import Card from '../Card/Card';
// redux
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<main className='admin-dashboard'>
			{/* <AdminActionBtns /> */}
			<AdminProductModal />
			<AdminBody />
		</main>
	);
};

export default AdminDashboard;
