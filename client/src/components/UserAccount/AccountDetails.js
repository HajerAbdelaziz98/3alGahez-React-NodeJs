import React from 'react';
import kit from "../../images/DrawKit-cooking-kitchen-food-vector-illustrations-06.png"
import Slide from "react-reveal/Slide"

const AccountDetails = () => {
    let userDetails = JSON.parse(localStorage.getItem('user'));
    return (
        <>
        <Slide right>
            <div className='d-flex justify-content-around'>
                <div className='col-9'>
                    <ul className="list-group">
                        <li className="list-group-item Head py-2">
                            <strong>
                                My Info
                            </strong>
                        </li>
                    </ul>
                    {/*  */}
                    <div className='px-2'>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-12">
                                    <small for="inputUserName4">Username</small>
                                    <input type="text" className="form-control" id="inputUserName4" value={userDetails.username} />
                                </div>
                                <div className="form-group col-12">
                                    <small for="inputEmail4">Email</small>
                                    <input type="email" className="form-control" id="inputEmail4" value={userDetails.email} />
                                </div>
                                {/* <div className="form-group col">
                            <small for="inputPassword4">Password</small>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <small for="inputAddress">Address</small>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <small for="inputAddress2">Address 2</small>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <small for="inputCity">City</small>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <small for="inputState">State</small>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <small for="inputZip">Zip</small>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <small className="form-check-small" for="gridCheck">
                                Check me out
                            </small>
                        </div> */}
                            </div>
                            {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                        </form>
                    </div>
                </div>
                <div className='col-3'>
                    <img alt='test' src={kit} className='w-100'></img>
                </div>
            </div>
            {/*  */}
            </Slide>
        </>
    )
}
export default AccountDetails;
