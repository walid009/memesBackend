const express = require('Express')
const router = express.Router()

const reactController = require('../controllers/reactController.js')



router.get('/',reactController.index)

router.post('/store',reactController.store)


router.post('/destroy',reactController.destroy)

module.exports = router

