import React from 'react';

const AdminHeader = () => {
	let userDetails = JSON.parse(localStorage.getItem('user'));
	return(
		<div className='bg-dark text-white py-2'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<h1>
							<i className='fa-solid fa-user'></i>&nbsp;<span className='text-capitalize'>{userDetails.username}</span> dashboard
						</h1>
					</div>
				</div>
			</div>
		</div>
	)

};

export default AdminHeader;
