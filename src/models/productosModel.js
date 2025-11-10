const db = require('../config/dbconfig');

class ProductosModel {

    getProductos(callback) {
        const sql = 'SELECT * FROM productos';
        db.query(sql, callback);
    }

    getProductosById(id, callback) {
        const sql = 'SELECT * FROM productos WHERE id = ?';
        db.query(sql, [id], callback);
    }

    getProductosByNombre(nombre, callback) {
        const sql = 'SELECT * FROM productos WHERE nombre = ?';
        db.query(sql, [nombre], callback);
    }

    postProductos(nombre, precio, categoria, callback) {
        const sql = 'INSERT INTO productos (nombre, precio, categoria) VALUES (?, ?, ?)';
        db.query(sql, [nombre, precio, categoria], (err, result) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putProductos(id, nombre, precio, categoria, callback) {
        const sql = 'UPDATE productos SET nombre = ?, precio = ?, categoria = ? WHERE id = ?';
        db.query(sql, [nombre, precio, categoria, id], callback);
    }

    deleteProductos(id, callback) {
        const sql = 'DELETE FROM productos WHERE id = ?';
        db.query(sql, [id], callback);
    }


}
module.exports = new ProductosModel();