const productosModel = require('../models/ProductosModel');



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

        const { id } = req.params;
        productosModel.getProductosById(id, (err, result) => {
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
    },
    
    getProductosByNombre: (req, res) => {
        const { nombre } = req.params;
        productosModel.getProductosByNombre(nombre, (err, result) => {
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
    },

    postProductos: (req, res) => {
        const { nombre, precio, categoria } = req.body;
        productosModel.postProductos(nombre, precio, categoria, (err, result) => {
            if (err) {
                res.status(500).json({error: err.message });
                return;
            }
            res.status(201).json({message: "Personaje creado correctamente", data: {idInsertado: result}});
        });
    },
    
    putProductos: (req, res) => {
        const { id, nombre, precio, categoria } = req.body;
        productosModel.putProductos(id, nombre, precio, categoria, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({message: "Personaje actualizado correctamente", data: {idInsertado: result}});
        });
    },

    deleteProductos: (req, res) => {
        const { id } = req.params;
        productosModel.deleteProductos(id, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.status(200).json({ message: "Personaje eliminado correctamente" });
        });
    }

}