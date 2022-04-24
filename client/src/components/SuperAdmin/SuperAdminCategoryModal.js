import React, { Fragment, useState, useEffect } from 'react';

import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../../helpers/message';
import { showLoading } from '../../helpers/loading';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../../redux/actions/messageActions';
import { createCategory } from '../../redux/actions/categoryActions';
import { getCategories } from '../../redux/actions/categoryActions';
import { deleteCategory } from '../../redux/actions/categoryActions';

const SuperAdminCategoryModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	const { loading } = useSelector(state => state.loading);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	const { categories } = useSelector(state => state.categories);
	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [category, setCategory] = useState('');
	const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleMessages = evt => {
		dispatch(clearMessages());
	};

	const handleCategoryChange = evt => {
		dispatch(clearMessages());
		setCategory(evt.target.value);
	};

	const handleCategorySubmit = evt => {
		evt.preventDefault();

		if (isEmpty(category)) {
			setClientSideErrorMsg('Please enter a category');
		} else {
			const data = { category };
			data.category = data.category.toUpperCase();
			dispatch(createCategory(data));
			setCategory('');
		}
	};


	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id='addCategoryModal' className='modal' onClick={handleMessages}>
			<div className='modal-dialog modal-dialog-centered modal-lg'>
				<div className='modal-content'>
					<form onSubmit={handleCategorySubmit}>
						<div className='modal-header bg-info text-white'>
							<h5 className='modal-title'>Add Category</h5>
							<button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
						<div className='modal-body my-2'>
							{clientSideErrorMsg &&
								showErrorMsg(clientSideErrorMsg)}
							{errorMsg && showErrorMsg(errorMsg)}
							{successMsg && showSuccessMsg(successMsg)}

							{loading ? (
								<div className='text-center'>
									{showLoading()}
								</div>
							) : (
								<Fragment>
									<label className='text-secondary'>
										Category
									</label>
									<input
										type='text'
										className='form-control mb-2'
										name='category'
										value={category}
										onChange={handleCategoryChange}
									/>
									<ul className="list-group">
										{categories &&
											categories.map((c) => (
												<li key={c._id} className='list-group-item d-flex justify-content-between'>
													<span>{c.category}</span>
													<span>
														<i className='far fa-trash-alt text-danger' defaultValue={c.category} onClick={() =>
															dispatch(deleteCategory(c._id))}>
														</i>
													</span>
												</li>
											))}

									</ul>
								</Fragment>
							)}
						</div>
						<div className='modal-footer'>
							<button
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='submit' className='btn btn-info'>
								Add
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SuperAdminCategoryModal;
