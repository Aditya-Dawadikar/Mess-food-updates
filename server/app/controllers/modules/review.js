const Mess = require('../../models/mess');
const Customer = require('../../models/customer');
const Reviews = require('../../models/relations/reviews');
const mess = require('../../models/mess');


//helper function
function calculateOverAllrating(oldrating, count) {
    return oldrating / count;
}

exports.getAllReviews = async(req, res) => {
    await Mess.findById({ _id: req.params.messId })
        .select('Reviews')
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "some error occured while fetching data",
                error: "internal server error"
            });
        });
}

//controllers to handle rating
exports.addReview = async(req, res) => {
    let comment = {
        comment: req.body.comment,
        author: req.params.custId,
        timestamp: req.body.timestamp
    }
    let thread = []
    thread.push(comment)
    const review = new Reviews({
        messId: req.params.messId,
        customerId: req.params.custId,
        rating: req.body.rating,
        thread: thread
    })

    let reviewId = 0
    await review.save()
        .then(doc => {
            reviewId = doc._id
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "some error occured while storing new review",
                error: "internal server error"
            });
        });

    let reviewArray = []
    let sum = 0

    await Mess.findById({ _id: req.params.messId })
        .then(doc => {
            reviewArray = doc.Reviews.reviewers
            sum = doc.Reviews.sum
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "some error occured while updating document",
                error: "internal server error"
            });
        });

    reviewArray.push({
        reviewId: reviewId
    })

    let reviewCount = reviewArray.length;
    sum += req.body.rating;
    let updatedRating = calculateOverAllrating(sum, reviewCount);

    let reviewObject = {
        sum: sum,
        reviewers: reviewArray
    }

    await Mess.findByIdAndUpdate({ _id: req.params.messId }, { Reviews: reviewObject, Rating: updatedRating })
        .then(doc => {
            res.status(200).json({
                message: "successfully rated"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "some error occured while updating document",
                error: "internal server error"
            });
        });
}

//future scope
exports.updateRating = (req, res) => {}

exports.removeReview = async(req, res) => {
    let messId = 0;
    let unwantedRating = 0;
    await Reviews.findById({ _id: req.params.reviewId })
        .then(doc => {
            messId = doc.messId
            unwantedRating = doc.rating;
        })
        .catch(err => {
            res.status(500).json({
                message: "internal server error",
                error: err
            })
        })

    let currentReview = {}
    await Mess.findById({ _id: messId })
        .then(doc => {
            currentReview = doc.Reviews
            currentOverAllRating = doc.Rating
        })
        .catch(err => {
            res.status(500).json({
                message: "internal server error",
                error: err
            })
        })

    let currentReviewers = currentReview.reviewers;
    let currentSum = currentReview.sum;

    let index = currentReviewers.findIndex(review => {
        return String(req.params.reviewId) === String(review.reviewId)
    })

    currentSum -= unwantedRating;

    currentReviewers.splice(index, 1);

    //updateoverall rating
    let updatedRating = calculateOverAllrating(currentSum, currentReviewers.length)

    let updatedReview = {
        sum: currentSum,
        reviewers: currentReviewers
    };


    await Reviews.findByIdAndDelete({ _id: req.params.reviewId })
        .then(doc => {})
        .catch(err => {
            res.status(500).json({
                message: "internal server error",
                error: err
            })
        })

    await Mess.findByIdAndUpdate({ _id: messId }, { Reviews: updatedReview, Rating: updatedRating })
        .then(doc => {
            res.status(200).json({
                message: "successfully removed rating"
            })
        }).catch(err => {
            res.status(500).json({
                message: "internal server error",
                error: err
            })
        })
}

//controllers to handle review
exports.replyToComment = (req, res) => {

}

exports.updateComment = (req, res) => {

}

exports.deleteComment = (req, res) => {

}