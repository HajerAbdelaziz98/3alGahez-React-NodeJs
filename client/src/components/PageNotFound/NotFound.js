import React from 'react';
import pic from "../../images/Can-Not-Reach-the-Connection.png"

const NotFound = () => {
    return (
        <>
            <div className='container-md my-2'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-12 d-flex justify-content-center'>
                        <img alt="..." src={pic} className='w-25'></img>
                    </div>
                    <div className='text-center col-12 mt-3'>
                        < h3 style={{ color: "#f26522" }}>Page Not Found...</ h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NotFound;
