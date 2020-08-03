const express = require('express');
const router = express.Router();
const registerRoutes = require('../controllers/register');

router.get('/', registerRoutes.getRegisterPage);

module.exports = router;