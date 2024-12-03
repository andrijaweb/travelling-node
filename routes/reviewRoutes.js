const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(updateReview)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteReview);

module.exports = router;
