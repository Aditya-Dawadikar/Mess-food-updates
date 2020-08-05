const mongoose = require('mongoose');

const messSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email: String,
    password: String,
    messDetails: {
        messName: String,
        ownerName: String,
        phone: Number,
        address: String
    },
    price: {
        homeDelivery: {
            available: Boolean,
            DeliveryCharge: Number
        },
        onVenue: {
            available: Boolean
        }
    },
    Speciality: [],
    MenuList: [],
    Rating: Number,
    Reviews: []
});

module.exports = mongoose.model('mess', messSchema);