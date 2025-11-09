const db = require('../config/dbconfig');

class ProductosModel {

    getProductos(callback) {
        const sql = 'SELECT * FROM productos';
        db.callback(sql, callback);
    }

    getProductosById(id, callback) {
        const sql = 'SELECT * FROM productos WHERE id = ?';
        db.callback(sql, [id], callback);

    }
}
module.exports = new ProductosModel();