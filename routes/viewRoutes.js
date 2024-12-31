const express = require('express');
const {
  getOverview,
  getTour,
  login,
  getAccount,
  updateUserData,
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');

const router = express.Router();

router.get('/', isLoggedIn, getOverview);
router.get('/tours/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, login);
router.get('/me', protect, getAccount);

// UPDATING USER DATA WITHOUT API
// router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
