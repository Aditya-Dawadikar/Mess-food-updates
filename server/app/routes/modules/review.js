const express = require('express');
const router = express.Router();

const reviewsController = require('../../controllers/modules/review');

router.get('/all/:messId', reviewsController.getAllReviews);

//routes for handling the rating
router.post('/new/review/:custId/:messId', reviewsController.addReview);

router.patch('/update/:reviewId', reviewsController.updateRating);

router.delete('/delete/:reviewId', reviewsController.removeReview);

//routes for handling the comments
router.post('/new/comment/:reviewId', reviewsController.replyToComment);

router.patch('/update/comment/:reviewId/:commentId', reviewsController.updateComment);

router.delete('/remove/comment/:reviewId/:commentId', reviewsController.deleteComment);

module.exports = router;