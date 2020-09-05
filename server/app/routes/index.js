const express = require('express');
const router = express.Router();
const indexRoutes = require('../controllers/index');
const emailTest = require('../modules/smtp');

router.get('/', indexRoutes.getIndexPage);

email = "adityadawadikar2000@gmail.com";

router.get("/email", async(req, res) => {
    emailTest.successful_registration(email);
    res.status(200);
    res.end();
});

module.exports = router;