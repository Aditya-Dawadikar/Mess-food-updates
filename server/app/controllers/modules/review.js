const Mess = require('../../models/mess');
const Customer = require('../../models/customer');
const Reviews = require('../../models/relations/reviews');


//helper function
function calculateOverAllrating(newRating) {
    return newRating;
}

exports.getAllReviews = async(req, res) => {
await Mess.findById({_id:req.params.messId})
    .select('Reviews')
    .then(doc=>{
        res.status(200).json({
            message:"success",
            doc:doc
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
    const review=new Reviews({
        messId:req.params.messId,
        customerId:req.params.custId,
        rating: req.body.rating,
        thread: thread
    })

    let reviewId=0

    await review.save()
    .then(doc => {
        reviewId=doc._id
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "some error occured while storing new review",
            error: "internal server error"
        });
    });

    let reviewArray=[]
    let sum = 0

    await Mess.findById({_id:req.params.messId})
    .then(doc=>{
        reviewArray=doc.Reviews.reviewers
        sum=doc.Reviews.sum
        console.log(sum)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "some error occured while updating document",
            error: "internal server error"
        });
    });

    reviewArray.push({
        reviewId:reviewId
    })

    
    sum+=req.body.rating
    let updatedRating=Number(sum)

    let reviewObject={
        sum: sum,
        reviewers: reviewArray
    }
    console.log(reviewObject)

    await Mess.findByIdAndUpdate({_id:req.params.messId},{Reviews:reviewObject}) //missing Rating:updatedRating
    .then(doc=>{
        res.status(200).json({
            message:"successfully rated"
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