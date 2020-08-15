const express = require('express');
const router = express.Router();

const customerController = require('../../controllers/users/customer');

router.get('/', customerController.getCustomerPage);

//get all customers
router.get('/all', customerController.getAllCustomers);

//get customer by email
router.get('/email', customerController.getCustomerByEmail);

//get customer by id
router.get('/:id', customerController.getCustomerById);

//update customer by id
router.patch('/update/:id', customerController.updateCustomerById);

//delete customer
router.delete('/delete/:id', customerController.deleteCustomerById);

module.exports = router;