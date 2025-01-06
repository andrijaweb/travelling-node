const express = require('express');
const {
  getOverview,
  getTour,
  login,
  getAccount,
  getMyTours,
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/', createBookingCheckout, isLoggedIn, getOverview);
router.get('/tours/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, login);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

// UPDATING USER DATA WITHOUT API
// router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
