require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser=require('body-parser')
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require ("./routes/order")
const filterRoutes = require('./routes/filter');
const path = require('path');

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/filter', filterRoutes);
connectDB();

// Serve satic assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // set static folder
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

//     })
// }

// if (process.env.NODE_ENV === "production") {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, "client/build")));
//     // Handle React routing, return all requests to React app
//     app.get("*", function (req, res) {
//         res.sendFile(path.join(__dirname, "client/build", "index.html"));
//     });
// }

// app.use((req, res, next) => {
//     const error = new Error("Not found");
//     error.status = 404;
//     next(error);
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
