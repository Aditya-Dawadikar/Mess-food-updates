const express = require('express');
const router = express.Router();

const subscriptionController = require('../../controllers/modules/subscription');

//save mess feature
router.post('/subscribe/:custId/:messId', subscriptionController.subscribe);

router.delete('/unsubscribe/:subId', subscriptionController.unsubscribe);


module.exports = router;