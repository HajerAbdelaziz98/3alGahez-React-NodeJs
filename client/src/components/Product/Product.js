import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartActions';
import './product.css'
import Slide from "react-reveal/Slide"


const Product = ({ match, history }) => {
	const { productId } = match.params;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	const handleGoBackBtn = () => {
		history.goBack();
		// history.push("/menu");
	};

	return (
		<section className='product-page p-3 food-details-ctr'>
			<button
				to='/menu'
				className='btn btn-light text-primary mb-4'
				onClick={handleGoBackBtn}
			>
				Go Back
			</button>
			{product && (
				<div className='row detail-ctr'>
					<Slide left>
					<div className='col-md-5 img-ctr'>
						<img
							className='food-img-dtl'
							src={`/uploads/${product.fileName}`}
							alt='product'
						/>
					</div>
					</Slide>
					<Slide right cascade>
					<div className='col-md-5 info-ctr'>
						<h3 className='mb-4'>{product.productName}</h3>
						<p className='text-muted border-top py-2'>
							Price:{' '}
							{product.productPrice.toLocaleString('en-US', {
								style: 'currency',
								currency: 'EGP',
							})}
						</p>
						<p className='text-muted border-top py-2'>
							Status:{' '}
							{product.productQty <= 0
								? 'Out of Stock'
								: 'In Stock'}
						</p>
						<p className='text-muted border-top py-2'>
							Description: {product.productDesc}
						</p>
						<button
							className='btn add-to-cart btn-block mb-5 py-2'
							disabled={product.productQty <= 0}
							onClick={handleAddToCart}
						>
							Add to Cart
						</button>
					</div>
					</Slide>
				</div>
			)}
		</section>
	);
};

export default Product;
