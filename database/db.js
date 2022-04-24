const mongoose = require('mongoose');

const keys = require('../config/keys.js');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to db');
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
