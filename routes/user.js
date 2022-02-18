const express = require("Express");
const router = express.Router();

const userController = require('../controllers/userController.js')

/**
 * @Path /users
 */

/*router.get('/',userController.index)
router.post('/show',userController.show)
router.post('/store',userController.store)

router.post('/update',userController.update)

router.post('/destroy',userController.destroy)*/

router.post("/register",userController.RegisterUser)
router.post("/login",userController.login)
router.post("/loginGmail",userController.loginGmail)
router.get("/getUser/:email",userController.authenticate, userController.findUserByEmail)
router.get("/getUserWithoutAuthenticate/:email", userController.findUserByEmail)
router.get("/emailexist/:email",userController.EmailExist)
router.put("/resetpassword/:email",userController.sendMailForgetPassword)
router.get("/checkKeyReset/:email/:resetpwd",userController.checkKeyReset)
router.put("/sendmodifiedpassword/:email/:password",userController.sendModifiedPassword)

module.exports = router

