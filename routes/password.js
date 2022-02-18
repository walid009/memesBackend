const express = require('Express')
const router = express.Router()

const passwordController = require('../controllers/passwordController.js')



router.get('/',passwordController.index)

router.post('/store',passwordController.store)

router.post('/update',passwordController.update)

router.post('/destroy',passwordController.destroy)

module.exports = router

