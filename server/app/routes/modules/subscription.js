const express = require('express');
const router = express.Router();

const saveMessController = require('../../controllers/modules/saveMess');

//save mess feature
router.post('/save/:custId/:messId', saveMessController.subscribe);

router.delete('/remove/:subId', saveMessController.unsubscribe);


module.exports = router;