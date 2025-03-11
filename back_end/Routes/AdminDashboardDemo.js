const AuthenticatedRouteForDemo = require('../Middleware/authentication')
const express = require('express')
const router = express.Router()

router.get('/dashboard', AuthenticatedRouteForDemo, (req, res) => {
    res.send('Welcome to Dashboard')
})

module.exports = router;