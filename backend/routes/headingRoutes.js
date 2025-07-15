const express = require('express');
const router = express.Router();
const { getHeading, setHeading } = require('../controllers/headingController');

router.get('/', getHeading);
router.post('/', setHeading);

module.exports = router;
