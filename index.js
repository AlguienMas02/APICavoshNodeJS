const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./src/routes/productosRoutes');

const app = express();
const port = 3002;

app.use(bodyParser.json());

//Rutas Generales

app.use('/api/productos', productosRoutes);


//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});