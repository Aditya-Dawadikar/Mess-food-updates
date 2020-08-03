const express = require('express');
const router = express.Router();
const messControllers = require('../controllers/mess');

router.get('/', messControllers.getMessPage);

module.exports = router;