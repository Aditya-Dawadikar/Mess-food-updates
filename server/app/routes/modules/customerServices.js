const express = require('express');
const router = express.Router();

const customerServiceController = require('../../controllers/modules/customerServices');

//save mess feature
router.post('/save/:custId/:messId', customerServiceController.saveMess);

router.delete('/remove/:custId/:messId', customerServiceController.removeMess);


//...

module.exports = router;