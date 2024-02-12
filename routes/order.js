const router = require('express').Router();
const ordersControllers = require('../controllers/ordersControllers');


router.get('/:id',ordersControllers.getUserOrders);

module.exports = router;