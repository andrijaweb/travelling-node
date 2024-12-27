const express = require('express');
const {
  getOverview,
  getTour,
  login,
} = require('../controllers/viewsController');

const router = express.Router();

router.get('/', getOverview);
router.get('/tours/:slug', getTour);
// /login route
router.get('/login', login);

module.exports = router;
