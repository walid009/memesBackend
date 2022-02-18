const express = require ('Express')
const router = express.Router()


const authController = require ('../controllers/authController.js')

router.post('/register',authController.register)
router.post('/login',authController.login)

module.exports = router  
 