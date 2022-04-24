import React,{useEffect} from 'react';
import Card from '../Card/Card';
// redux
import { useSelector,useDispatch } from 'react-redux';
import TopTotal from './TopTotal.js';
import ProductStatistics from './ProductStatistics';
import UserStatistics from './UserStatistics'
import { getCategories } from '../../redux/actions/categoryActions';
import { getProducts } from '../../redux/actions/productActions';


const Dashboard = () => {
	const productList = useSelector((state) => state.productList);
    // const { products } = productList;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const { products } = useSelector(state => state.products);

	return (
		<div className='container'>
			<TopTotal  products={products} />
			<div className='row'>
			<ProductStatistics/>
			<UserStatistics/>
			</div>

		</div>
	);
};

export default Dashboard;