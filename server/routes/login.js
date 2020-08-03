const express = require('express');
const router = express.Router();
const loginRoutes = require('../controllers/login');

router.get('/', loginRoutes.getLoginPage);

module.exports = router;