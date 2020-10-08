const express = require('express');
const router = express.Router();

const customerFeatureController = require('../../controllers/modules/customerFeatures');

router.get('/savedmess/:custId', customerFeatureController.getMySavedMess);

module.exports = router