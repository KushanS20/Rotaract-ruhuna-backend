const controller = require('../Controllers/AdminController')
const express = require('express')
const router = express.Router()
const passwordValidator = require('../Middleware/validatePassword')

router.post('/sign-up', passwordValidator.passwordComparisonMiddleware, controller.createAdmin);
router.post('/sign-in', controller.loginAdmin)

module.exports = router;