const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController');

router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductosbyId);
router.get('/nombre/:nombre', productosController.getProductosByNombre);
router.post('/', productosController.postProductos);
router.put('/:id', productosController.putProductos);
router.delete('/:id', productosController.deleteProductos);

module.exports = router;






