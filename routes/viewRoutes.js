const express = require('express');
const {
  getOverview,
  getTour,
  login,
} = require('../controllers/viewsController');
const { isLoggedIn } = require('../controllers/authController');

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tours/:slug', getTour);
// /login route
router.get('/login', login);

module.exports = router;
