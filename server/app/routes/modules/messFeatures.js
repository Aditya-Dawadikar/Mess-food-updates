const express = require('express');
const router = express.Router();

const messFeatureController = require('../../controllers/modules/messFeatures');

router.get('/subscribers/:messid', messFeatureController.getSubscriberInfo);

module.exports = router