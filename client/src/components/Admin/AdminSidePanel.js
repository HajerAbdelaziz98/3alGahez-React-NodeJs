import React from 'react'
import { Link } from 'react-router-dom';
import './admin.css'
const AdminSidePanel = () => {
    let userDetails = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 admin-panel" >
            <h5 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <i className='fa-solid fa-user'></i> &nbsp; <span className='text-capitalize'>
                    {userDetails.username}</span> 's &nbsp;Dashboard
            </h5>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/admin/dashboard/products" className="nav-link" aria-current="page">
                        <i className="fa-solid fa-utensils"></i> Your Products
                    </Link>
                </li>
                <li>
                    <Link to="/user/dashboard/orders" className="nav-link ">
                        <i className="fa-solid fa-newspaper"></i>  Orders
                    </Link>
                </li>


            </ul>
        </div>

    )
}

export default AdminSidePanel