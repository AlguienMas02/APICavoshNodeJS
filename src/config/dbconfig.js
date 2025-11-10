const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cavosh',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database: ', err);
    }
    console.log('Conexion establecida');

});

module.exports = db;