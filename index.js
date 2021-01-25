const express = require('express');
require('dotenv').config();


// Crear servidor Express
const app = express();


//Acceso al directorio Público
app.use(express.static('public'));


//Rutas

app.use('/api/auth', require('./routes/auth'));


//Configuración del puerto
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);
})