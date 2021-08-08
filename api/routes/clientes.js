const express = require('express')
const router = express.Router();
const clienteController = require("../controllers/clienteController")

router.get('/cliente', clienteController.getClient )
router.post('/postcliente', clienteController.insertCliente )
router.patch('/updatecliente', clienteController.updateCliente )
router.delete('/deletecliente', clienteController.deleteCliente )

module.exports = router