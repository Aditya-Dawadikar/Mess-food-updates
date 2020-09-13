"use strict";
const fs = require("fs");
const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const emailtemplate = "email_template.ejs";

const successful_registration = (mailto) => {
    let msg =
        "Congratulations, Your Registration is Successful, You can proceed to login now";
    let subject = "Successful Registration";
    main(mailto, msg, emailtemplate, subject).catch(console.error);
    console.log("here");
};

const forgot_password = (mailto, OTP) => {
    // OTP TEST LOGIC
    // if (!OTP) {
    //   OTP = 3000;
    // }
    // OTP TEST LOGIC NOT FOR PRODUCTION

    let msg =
        "Your Request for password has been recieved,Here is Your OTP\n" + OTP;
    let subject = "PASSWORD RESET";
    main(mailto, msg, emailtemplate, subject).catch(console.error);
};

const promotional = (mailto) => {
    let msg = "You are invited to the launch of a new project by Devscollab ";
    let subject = "We invite you to launch of our new product";
    main(mailto, msg, emailtemplate, subject).catch(console.error);
};

const broadcast = (mailto, textmsg, subject, html) => {
    main(mailto, textmsg, emailtemplate, subject, html).catch(console.error);
};

async function main(mailto, textmsg, template, subject, html = ``) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.APPLICATION_EMAIL,
            pass: process.env.APPLICATION_PASSWORD,
        },
    });

    console.log(path.join(__dirname, `../views/${template}`));

    ejs.renderFile(
        path.join(__dirname, `../views/${template}`), {
            message: textmsg,
            htmlmsg: html
        },
        function(err, data) {
            if (err) {
                console.log(err);
            } else {
                let mailOptions = {
                    from: '"KhanaKhajana devs team" <geekdev127001@gmail.com>', // sender address
                    to: mailto, // list of receivers
                    subject: subject, // Subject line
                    text: textmsg, // plain text body
                    html: data,
                };
                console.log("Sending ,mail ======================>");
                transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`Message sent:  ${info.response} to  ${mailto}`);
                    }
                });
            }
        }
    );
}

module.exports = {
    successful_registration,
    forgot_password,
    promotional,
    broadcast,
    main,
};