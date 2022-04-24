import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orderActions';
import Card from '../Card/Card';
import './menu.css';
import Slide from 'react-reveal/Slide';
import { showLoading } from '../../helpers/loading';

const Orders = () => {
  const { loading } = useSelector((state) => state.loading);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const { orders } = useSelector((state) => state.orders);

  return (
    <>
      <section className="menu-page">
        {/* <div className='menu-food-ctr'>
				{products &&
					products.map(p => (
						<Card key={p._id} product={p} homePage={true} />
					))}
			</div> */}

        {loading ? (
          <div className="text-center">{showLoading()}</div>
        ) : (
          <Slide right>
            <div className="menu-food-ctr">
              {orders.map((o) => (
                <div key={o._id}> {o.orderStatus} </div>
              ))}
            </div>
          </Slide>
        )}
      </section>
    </>
  );
};

export default Orders;
