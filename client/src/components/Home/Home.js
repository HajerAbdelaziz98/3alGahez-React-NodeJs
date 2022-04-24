import React, { useEffect } from 'react';
import { showLoading } from '../../helpers/loading';
import Card from '../Card/Card';
import { getNewArrivals } from '../../redux/actions/filterActions';
import { getProductsByCount } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import InfoBar from '../Info/Info';
import './home.css';
import Slide from "react-reveal/Slide"

import HomeHeader from '../HomeHeader/HomeHeader';
import HowItWorks from '../HowItWorks/HowItWorks';
const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNewArrivals());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getProductsByCount());
	}, [dispatch]);

	const { newArrivals } = useSelector(state => state.filters);
	// const { products } = useSelector(state => state.products);
	const { loading } = useSelector(state => state.loading);

	return (

		<div className='home-page'>
			<HomeHeader />
			<HowItWorks />
			<InfoBar />
			{loading ? (
				<div className='text-center'>{showLoading()}</div>
			) : (
				<>
					<Slide right>
						<div className='arrivals'>
							<div className='arrivals-crt'>
								<h3 className='text-center w-100'>New Arrivals</h3>
								{newArrivals &&
									newArrivals.map(newArrival => (
										<Card
											key={newArrival._id}
											product={newArrival}
											homePage={true}
										/>
									))}
							</div>
							{/* <h3 className='text-center'>Menu</h3>
						<div className='menu-crt'>
						{products &&
							products.map(product => (
								<Card
								key={product._id}
								product={product}
								homePage={true}
								/>
								))}
							</div> */}

						</div>
					</Slide>
				</>
			)}
		</div>
	);
};

export default Home;
