const mongoose = require('mongoose');

//menu item sub document
const menuItemSchema = {
    itemName: String,
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
    reviewId: mongoose.Types.ObjectId
}

//posted menu sub document
const postedMenuSchema = {
    postId: mongoose.Types.ObjectId
}

//subscription sub document
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
    Reviews: {
        count: Number,
        reviewers: [reviewsSchema]
    },
    subscribers: [subscriberSchema],
    postedMenu: [postedMenuSchema]
});

module.exports = mongoose.model('mess', messSchema);