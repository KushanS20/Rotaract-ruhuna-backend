const controller = require('../Controllers/AdminController')
const express = require('express')
const router = express.Router()
const passwordValidator = require('../Middleware/validatePassword')

router.post('/new-admin', passwordValidator.passwordComparisonMiddleware, controller.createAdmin);

module.exports = router;