const controller = require('../Controllers/AvenuesController')
const express = require('express')
const router = express.Router()

router.post('/new-avenue', controller.createAvenue);
router.get('/all-avenues', controller.getAvenues);
router.delete('/delete-avenue', controller.deleteAvenue);


module.exports = router;