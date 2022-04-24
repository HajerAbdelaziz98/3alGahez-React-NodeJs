const Order = require("../models/Order");


exports.create = async (req, res) => {
  const {
    orderStatus,
    orderPrice,
    title,
    email,
    city,
    address,
    mobile,
    // items,
    productId,
    products,
    fileName,
    productName,
    seller,
    productPrice,
    countPerProduct,
    // productDetails,
    prdouctCount,
    // productName,
    user,

  } = req.body;
  console.log(req.body, "body");
  console.log(req.user, "user");

  try {
    let order = new Order();
    order.orderStatus = orderStatus;
    order.orderPrice = orderPrice;
    order.title = title;
    order.email = email;
    order.mobile = mobile;
    order.shippingInfo.city = city;
    order.shippingInfo.address = address;
    // order.items = items.map((x)=>({...x, product:x._id}))
    order.products = products;
    order.products.productId = productId;
    order.products.countPerProduct = countPerProduct;
    order.products.fileName=fileName;
    order.products.productName=productName;
    order.products.seller=seller;
    order.products.productPrice=productPrice;
    // order.items.prdouctCount 
    order.user = user;

    await order.save();

    res.json({
      successMessage: `${order._id} was created`,
      order,
    });
  } catch (err) {
    console.log(err, 'orderController.create error');
    res.status(500).json({
      errorMessage: 'Please try again later',
    });
  }
};

exports.readAll = async (req, res) => {
  try {
    const orders = await Order.find({}).populate(
      'user'
    );

    res.json({ orders });
  } catch (err) {
    console.log(err, 'orderController.readAll error');
    res.status(500).json({
      errorMessage: 'Please try again later',
    });
  }
};

exports.read = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    res.json(order);
  } catch (err) {
    console.log(err, 'orderController.read error');
    res.status(500).json({
      errorMessage: 'Please try again later',
    });
  }
};

exports.update = async (req, res) => {
  const orderId = req.params.orderId;

  const oldOrder = await Order.findByIdAndUpdate(orderId, req.body);

  res.json({
    successMessage: 'Order successfully updated',
  });
};


exports.delete = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    res.json(deletedOrder);
  } catch (err) {
    console.log(err, 'orderController.delete error');
    res.status(500).json({
      errorMessage: 'Please try again later',
    });
  }
};
