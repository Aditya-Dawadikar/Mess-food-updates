const mongoose = require('mongoose');

//menu item sub document
const menuItemSchema = {
    itemName: String,
    quantity: String,
    price: Number,
}

//menu subdocument
const menuSchema = {
    menuName: String,
    menuItem: [menuItemSchema],
    price: Number,
    tag: [
        { type: String }
    ]
}

//reviews sub document
const reviewsSchema = {
    rating: Number,
    comment: {
        type: String
    },
    time: {
        type: Date
    }
}

const subscriberSchema = {
    subscriptionId: mongoose.Types.ObjectId
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
    Reviews: [reviewsSchema],
    subscribers: [subscriberSchema]
});

module.exports = mongoose.model('mess', messSchema);