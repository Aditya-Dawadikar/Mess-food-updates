const nodemailer = require('nodemailer');

module.exports = class Notification {
    constructor() {

    }

    //success email after registration
    successEmailOnRegistration(email, message) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.APPLICATION_EMAIL,
                pass: process.env.APPLICATION_PASSWORD
            }
        });

        const email_option = {
            from: process.env.APPLICATION_EMAIL,
            to: email,
            subject: 'successfull registration',
            text: message
        }

        transporter.sendMail(email_option, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            } else {
                console.log(result);
            }
        });
    }

    //verification email mess/customer

    //forgot password mess/customer

    //delete user mess/customer

    //notify subscribers
    notifySubscribers(emails, message) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.APPLICATION_EMAIL,
                pass: process.env.APPLICATION_PASSWORD
            }
        });

        const email_option = {
            from: process.env.APPLICATION_EMAIL,
            to: emails,
            subject: 'successfull registration',
            text: message
        }

        transporter.sendMail(email_option, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            } else {
                console.log(result);
            }
        });
    }
}