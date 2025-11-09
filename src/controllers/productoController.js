const productosModel = require('../models/productosModel');



module.exports = {
    getProductos: (req, res) => {
        productosModel.getProductos((err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ data: result });
        });
    },
    getProductosbyId: (req, res) => {
        productosModel.getProductosbyId(req.params.id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            if(result.length === 0){
                res.status(404).json({ error: 'No se encontro el producto'});
                return;
            }
            res.status(200).json({ data: result });
        });
    }

}