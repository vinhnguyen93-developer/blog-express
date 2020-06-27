const express = require('express');

const controllerAbout = require('../controllers/about.controller');

const router = express.Router();

router.get('/', controllerAbout.index);

module.exports = router;