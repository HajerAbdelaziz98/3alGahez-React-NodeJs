import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_CART } from '../../redux/constants/cartConstants';
import { createOrder } from '../../redux/actions/orderActions';
import emailjs from '@emailjs/browser';


export default function PayPal() {

    const { cart } = useSelector(state => state.cart);
    const address = useSelector(state => state.address);
    const paypal = useRef();
    const [completed, setCompleted] = useState(false);
    const [paid, setPaid] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    const dispatch = useDispatch();
    let arrOfCounts = null
    const order = JSON.parse(localStorage.getItem("addressDetails"))
    // const orderPrice = cart.reduce(
    //     (currentSum, currentCartItem) =>
    //         currentSum +
    //         currentCartItem.count *
    //         currentCartItem.productPrice,
    //     0
    // ).toFixed(2);
    // let { orderPrice } = orderData;



    const [orderData, setOrderData] = useState({
        orderStatus: "Processed",
        orderPrice: "",
        title: order.title,
        email: order.email,
        city: order.city,
        address: order.address,
        mobile: order.mobile,
        // items: cart,
        products: cart.map((c) => ({
            productId: c._id,
            countPerProduct: parseInt(c.count),
            productName: c.productName,
            productPrice: c.productPrice,
            seller: c.seller,
            fileName: c.fileName
        })),
        // countPerProduct: cart.map((c) => (c.count)),
        // productCount: cart.map((c) => c.count),
        // productDetails: cart.map((c) => (c)),
        // productName: cart.map((c) => c.productName),
        user: user._id,


        // prdouctCount: cart.map((p) => (p.count)).forEach((p)=>console.log(p)),
        // prdouctCount:Object.prototype.valueOf.call(cart.map((p) => (p.count)))
        // prdouctCount:cart.forEach((element) => parseInt(element.count)),
        // prdouctCount: cart.map((p) => Object.assign({}, p.count)), //Working
        // arrOfCounts: cart.map((p) => Object.assign({}, p.count)),
        // prdouctCount: Object.entries(cart).forEach(([_, value]) => console.log(value.count)),
        // arrOfCounts: cart.map((p) => {return Object.assign({}, p.count)}),
        // prdouctCount: cart.filter((p) => (p.count)),
        // prdouctCount: cart.map((p) => ({ prdouctCount: p.count })),
        // prdouctCount:cart.map((p)=>(p.count)),
    });
    console.log(cart);

    // console.log("arrOfCounts", orderData.arrOfCounts)
    // console.log("Counts", orderData.prdouctCount)


    var templateParams = {
        name: 'Marina',
    };

    const sendEmail = () => {
        emailjs.send('service_c9ea6c7', 'template_tllvfto', templateParams, 'RkxGm88iQuXYVTJsP')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    };

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "CAD",
                                    value: cart.reduce(
                                        (currentSum, currentCartItem) =>
                                            currentSum +
                                            currentCartItem.count *
                                            currentCartItem.productPrice,
                                        0
                                    ).toFixed(2)
                                    //JSON.parse(window.localStorage.getItem('cart'))
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const payPalOrder = await actions.order.capture();
                    orderData.orderPrice = parseInt(payPalOrder.purchase_units[0].amount.value);
                    console.log(orderData.orderPrice, "orderData.orderPrice");

                    setPaid(true);
                    setCompleted(true);

                    console.log(orderData, "formData");
                    let orderFormData = new FormData();
                    orderFormData = orderData;
                    console.log(orderFormData, "orderFormData");

                    dispatch(createOrder(orderFormData))
                    console.log(payPalOrder, "paypalorder");
                    console.log(order, "order");

                    sendEmail()
                    dispatch({ type: DELETE_CART });

                    localStorage.removeItem("cart");
                    localStorage.removeItem("__paypal_storage__");
                    localStorage.removeItem("addressDetails");
                    // dispatch({ type: DELETE_CART });
                    // localStorage.removeItem("cart");
                    // localStorage.removeItem("__paypal_storage__");
                    // localStorage.removeItem("addressDetails");

                },
                onError: (err) => {
                    setCompleted(true);
                    console.log(err);
                },
            })
            .render(paypal.current)

    }, []);

    return (
        <div>
            <div ref={paypal}>
            </div>
            <div className="Processing">
                <div id="paypal-button-container" />
                {completed &&
                    (paid ? (
                        // If the payment is made
                        <div className='alert alert-success'> Hey {user.username}, your Payment was successful!</div>
                    ) : (
                        // If any error occurs
                        <div className='alert alert-danger'>Error Occurred in processing payment! Please try again.</div>
                    ))}
            </div>
        </div>
    )
}




