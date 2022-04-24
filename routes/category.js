const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const categoryController = require('../controllers/category');

router.post('/', authenticatateJWT, categoryController.create);
router.get('/', categoryController.readAll);
router.delete('/:categoryId', authenticatateJWT, categoryController.delete);

module.exports = router;
