const express = require('express');
const router = express.Router();
const {
    signupValidator,
    signinValidator,
    validatorResult,
} = require('../middleware/validator');
const { signupController, signinController } = require('../controllers/auth');
const User = require('../models/User');

// router.get('/sellers', async (req, res) => {
//     try {
//         let sellers = await User.find();
//         res.json(sellers)
//     } catch (error) {
//         console.log(error)
//         return res.status(500).send("Server error from auth")
//     }
// })
router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;
