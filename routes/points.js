const express = require('Express')
const router = express.Router()

const pointsController = require('../controllers/pointsController.js')



router.get('/',pointsController.index)

router.post('/store',pointsController.store)

router.post('/update',pointsController.update)

router.post('/destroy',pointsController.destroy)

module.exports = router

