const express = require('express');
const router = express.Router();
const indexRoutes = require('../controllers/index');

router.get('/', indexRoutes.getIndexPage);

module.exports = router;