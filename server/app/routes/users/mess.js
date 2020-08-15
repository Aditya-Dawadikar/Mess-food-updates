const express = require('express');
const router = express.Router();

const messControllers = require('../../controllers/users/mess');

router.get('/', messControllers.getMessPage);

//get all mess
router.get('/all', messControllers.getAllMess);

//get mess by id
router.get('/:id', messControllers.getMessById);

//get mess by email
router.get('/:email', messControllers.getMessByEmail);

//update mess by id
router.patch('/update/:id', messControllers.updateMessById);

//delete mess
router.delete('/delete/:id', messControllers.deleteMessById);

module.exports = router;