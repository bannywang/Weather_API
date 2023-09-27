const express = require('express')
const router = express.Router()
const ctrl = require('../controller/ctrl')

router.get('/', ctrl.get_index)

module.exports = router
