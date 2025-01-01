const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistances,
  uploadTourImages,
  resizeTourImages,
} = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');
const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

// These are nested routes
// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router
  .route('/tour-stats')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getTourStats);
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router
  .route('/tours-within/:distance/center/:latlng/:unit')
  .get(getToursWithin);
// /tours-distance?distance=233&center=-40,45,unit=imperial
// /tours-distance/233/center/-40,45/imperial

router.route('/distances/:latlng/unit/:unit').get(getDistances);

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
