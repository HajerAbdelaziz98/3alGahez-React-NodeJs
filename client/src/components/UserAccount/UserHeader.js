import React from 'react';

function UserHeader() {
  let userDetails = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="bg-warning text-white py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <h1>
              <i className="fa-solid fa-user"></i> Hello,{' '}
              <span className="text-capitalize">{userDetails.username}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
