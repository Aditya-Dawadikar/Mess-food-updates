const Mess = require('../../models/mess');
const Customer = require('../../models/customer');
const Reviews = require('../../models/relations/reviews');

//helper function
function updateOverAllrating(newRating, messId) {

}

exports.getAllReviews = (req, res) => {

}

//controllers to handle rating
exports.addReview = (req, res) => {
    /*
        rating:Number,
        comment: String
        timestamp
        customer
        mess
    */
}

exports.updateRating = (req, res) => {

}

exports.removeReview = (req, res) => {

}

//controllers to handle review
exports.replyToComment = (req, res) => {

}

exports.updateComment = (req, res) => {

}

exports.deleteComment = (req, res) => {

}