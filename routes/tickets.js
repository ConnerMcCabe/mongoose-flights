const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');


router.get('/:id/new/', ticketCtrl.new);
router.post('/', ticketCtrl.create);



module.exports = router;
