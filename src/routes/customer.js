const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');
const controller = require('../controller/customerController');



router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/eliminar/:cc', customerController.eliminar);
router.get('/actualizar/:cc', customerController.consult_actualiza);
router.post('/updaactualizar/:cc', customerController.actualizar);



module.exports = router;
