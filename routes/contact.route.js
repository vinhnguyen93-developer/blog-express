const express = require('express');

const controllerContact = require('../controllers/contact.controller');
const validate = require('../validate/contact.validate');

const router = express.Router();

router.get('/', controllerContact.index);

router.post('/', validate.postContact, controllerContact.postContact);

module.exports = router;