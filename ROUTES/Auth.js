const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {

    res.json({
       ok: true,
        msg: "Petición Recibida",
    });
});

//Crear usuario, login, eliminar

module.exports = router; 