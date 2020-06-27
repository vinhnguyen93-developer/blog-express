const express = require('express');

const controllerHome = require('../controllers/home.controller');

const router = express.Router();

router.get('/', controllerHome.index);

router.get('/:id/detail', controllerHome.detailPost);

module.exports = router;