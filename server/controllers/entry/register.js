const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Customer = require('../../models/customer');
const Mess = require('../../models/mess');

exports.getRegisterPage = (req, res) => {
    res.send("register page");
}

exports.customerRegister = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, result) => {
        if (err) {
            res.status(500).json({
                message: "error occured while storing the customer password",
                error: "internal server error"
            });
        } else {
            const customerPassword = result;
            const customer = new Customer({
                _id: new mongoose.Types.ObjectId,
                name: req.body.name,
                email: req.body.email,
                password: customerPassword,
                phone: req.body.phone
            });
            customer.save()
                .then(doc => {
                    console.log(doc);
                    res.status(200).json({
                        message: "success",
                        customer: doc
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "some error occured while storing new customer",
                        error: "internal server error"
                    });
                });
        }
    })
}

exports.messRegister = (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, result) => {
        if (err) {
            res.status(500).json({
                message: "error occured while storing the mess password",
                error: "internal server error"
            });
        } else {
            const messPassword = result;
            const mess = new Mess({
                _id: new mongoose.Types.ObjectId,
                email: req.body.email,
                password: messPassword,
                messDetails: {
                    messName: req.body.messDetails.messName,
                    ownerName: req.body.messDetails.ownerName,
                    phone: req.body.messDetails.phone,
                    address: req.body.messDetails.address
                },
                price: {
                    homeDelivery: {
                        available: req.body.price.homeDelivery.available,
                        DeliveryCharge: null
                    },
                    onVenue: {
                        available: req.body.price.onVenue.available
                    }
                },
                Speciality: [],
                MenuList: [],
                Rating: 0,
                Reviews: []
            });
            console.log(mess);
            mess.save()
                .then(doc => {
                    console.log(doc);
                    res.status(200).json({
                        message: "success",
                        mess: doc
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        message: "error occured while storing the mess details",
                        error: "internal server error"
                    });
                })
        }
    })
}