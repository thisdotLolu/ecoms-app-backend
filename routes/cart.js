const router = require('express').Router();
const cartController = require('../controllers/cartControllers')


router.get('/find', cartController.getCart);
router.post('/', cartController.addToCart);
router.post('/quantity', cartController.decrementCartItem);
router.delete('/:cartItemId', cartController.deleteCartItem);


module.exports = router;


