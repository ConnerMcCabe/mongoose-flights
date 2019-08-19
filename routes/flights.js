const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightCtrl.index);
router.get('/', flightCtrl.new);
router.post('/', flightCtrl.create);
router.get('/', flightCtrl.show);



module.exports = router;
