import React, { Fragment } from 'react';
import chef from '../../src/images/siamese-cat.gif'
import gif from '../../src/images/loading.gif'
export const showLoading = () => (
    <Fragment>
        <div className='loader'>
            <img src={chef} className="mx-auto d-block" alt='chef' />
            <img src={gif} className=" mx-auto d-block" alt='gif'/>
        </div>
    </Fragment>
);
