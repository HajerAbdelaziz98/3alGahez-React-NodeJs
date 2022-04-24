const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;

const OrderSchema = new mongoose.Schema(
    {
        orderStatus:
        {
            type: String,
            default: "Pending",
            required: true,
        },
        orderPrice:
        {
            type: Number,
            required: true,
        },
        title:
        {
            type: String,
            required: true,
            trim: true,
        },
        email:
        {
            type: String,
            required: true,
        },
        mobile:
        {
            type: String,
            required: true,
        },
        orderPrice: {
            type: Number,
            required: true
        },
        products: [
            {
                productId: {
                    type: ObjectId,
                    ref: "Product",
                    required: true
                },
                countPerProduct:
                {
                    type: Number,
                    required: true
                },
                fileName:
                {
                    type: String,
                    required: true
                },
                productName:
                {
                    type: String,
                    required: true
                },
                seller:
                {
                    type: String,
                    required: true
                },
                productPrice:
                {
                    type: Number,
                    required: true
                }
            }],
        shippingInfo:
        {
            city: {
                type: String,
                trim: true,
                required: true
            },
            address: {
                type: String,
                trim: true,
                required: true
            }
        },
        isPaid: {
            type: Boolean,
            default: true
        },
        paidAt: {
            type: Date
        },
        user: {
            type: ObjectId,
            ref: "User",
            required: true
        }
    },
    { timestamps: true }
)

OrderSchema.index({ title: "text" });
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;