const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController');

router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductosbyId);

module.exports = router;






