const express = require('express');
const router = express.Router();
const flightCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.post('/', flightCtrl.create);
router.get('/:id', flightCtrl.show);



module.exports = router;
