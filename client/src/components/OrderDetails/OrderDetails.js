import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../redux/actions/orderActions';
import { getProducts } from '../../redux/actions/productActions';
import Slide from "react-reveal/Slide"

const OrderDetails = ({ match, history }) => {

    const { orderId } = match.params
    // console.log(orderId);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder(orderId));
    }, [dispatch, orderId])

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { order } = useSelector(state => state.orders);
    const { product } = useSelector(state => state.products);
    // console.log(order)
    // console.log(product, "products")
    return (
        <>
            <div>OrderDetails</div>
            {order && (
                <div>
                    <div>
                        <label>Order Id :</label><p>{order._id}</p>
                    </div>
                    <div>
                        <label>Contact Name</label><p>{order.title}</p>
                    </div>
                    <div>
                        <label>Contact email</label><p>{order.email}</p>
                    </div>
                    <div>
                        <label>Contact Number</label><p>{order.mobile}</p>
                    </div>
                    <div>
                        <label>City</label><p>{order.shippingInfo.city}</p>
                    </div>
                    <div>
                        <label>Shipping address</label><p>{order.shippingInfo.address}</p>
                    </div>
                    <div>
                        <label>Order Price:</label><p>{order.orderPrice}</p>
                    </div>
                    <div>
                        <label>Items</label><p>{order.products.length}</p>
                    </div>
                </div>
            )

            }


        </>
    )
}

export default OrderDetails;