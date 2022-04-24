const express = require("express");
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const orderController = require('../controllers/order');


router.post('/',authenticatateJWT, orderController.create);
router.get('/', orderController.readAll);
router.get('/:orderId', orderController.read);
router.put(
    '/:orderId',
    authenticatateJWT,
    orderController.update
  );
router.delete('/:orderId', authenticatateJWT, orderController.delete);

module.exports = router;
