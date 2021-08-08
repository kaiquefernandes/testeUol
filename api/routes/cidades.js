const express = require('express')
const router = express.Router();
const cidadesController = require("../controllers/cidadesController")



router.get('/cidade', cidadesController.getCity )
router.post('/postcidade', cidadesController.insertCity )


module.exports = router