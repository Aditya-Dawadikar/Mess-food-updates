const mongoose = require('mongoose');

//menu subdocument
const menuSchema = {
    menuName: String,
    menuItem: [{
        type: String,
        required: true
    }],
    price: Number,
    tag: [
        { type: String }
    ]
}

//reviews sub document
const reviewsSchema = {
    comment: {
        type: String
    },
    time: {
        type: Date
    }
}


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
    Speciality: [{ type: String }],
    MenuList: [menuSchema],
    Rating: Number,
    Reviews: [reviewsSchema]
});

module.exports = mongoose.model('mess', messSchema);