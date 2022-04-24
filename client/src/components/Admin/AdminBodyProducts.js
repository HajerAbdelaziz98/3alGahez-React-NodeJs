import React, { Fragment } from 'react';
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
import AdminActionBtns from './AdminActionBtns';
import { showLoading } from '../../helpers/loading';

const AdminBodyProducts = () => {
	const { loading } = useSelector((state) => state.loading);

	const { products } = useSelector(state => state.products);
	const username = JSON.parse(localStorage.getItem('user')).username;
	const productsFiltered = products.filter((p) => {
		return p.seller === username;
	})

	return (
		<div className='container admin-prds'>

			<button
				className='add-food-btn'
				data-toggle='modal'
				data-target='#addFoodModal'
			>
				<i className="fa-solid fa-circle-plus"> </i> &nbsp; Add Food
			</button>
			<div className='row d-flex justify-content-between'>
				{loading ? (
					<div className="text-center">{showLoading()}</div>
				) : (
					<Fragment>
						{productsFiltered &&
							productsFiltered.map(product => (
								<Card
									key={product._id}
									product={product}
									adminPage={true}
								/>
							))}
					</Fragment>
				)}


			</div>
		</div>
	);
};

export default AdminBodyProducts;
