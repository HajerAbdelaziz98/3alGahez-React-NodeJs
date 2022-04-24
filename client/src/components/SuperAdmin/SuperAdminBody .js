import React,{useEffect} from 'react';
import Card from '../Card/Card';
// redux
import { useSelector,useDispatch } from 'react-redux';
import TopTotal from './TopTotal.js';
import Sidebar from './Sidebar';
import ProductStatistics from './ProductStatistics';
import UserStatistics from './UserStatistics'
import { getCategories } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';


const SuperAdminBody = () => {

	return (
		<div className='container'>
			<Sidebar/>


		</div>
	);
};

export default SuperAdminBody;
