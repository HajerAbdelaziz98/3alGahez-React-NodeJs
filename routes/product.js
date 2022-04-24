const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const productController = require('../controllers/product');
const upload = require('../middleware/multer');
// const Product = require('../models/Product');

router.post('/',authenticatateJWT,upload.single('productImage'),productController.create);

router.get('/', productController.readAll);
router.get('/count', productController.readByCount);
router.get('/:productId', productController.read);
// router.post('/products', async (req, res) => {
//   try {
//     let products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json('Server Errror on Seller');
//   }
// });

router.put(
  '/:productId',
  authenticatateJWT,
  upload.single('productImage'),
  productController.update
);
router.delete('/:productId', authenticatateJWT, productController.delete);

module.exports = router;
