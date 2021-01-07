const router = require('express').Router()
const animalController = require('../controllers/animalController')

router.get('/dogs', animalController.getDog)
router.get('/fox', animalController.getFox)
router.get('/cats', animalController.getCat)

module.exports = router