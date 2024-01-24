const router = require('express').Router();
const productionController = require('../controllers/productsControllers');


router.get('/', productionController.getAllProduct)
router.get('/:id', productionController.getProduct)
router.get('/search/:key', productionController.searchProduct)
router.post('/', productionController.createProduct)


module.exports = router