const express = require('express');
const multer = require('multer');

const controllerPost = require('../controllers/post.controller');

const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.get('/', controllerPost.index);

router.get('/create', controllerPost.createFolder);

router.post('/', upload.single("imageUrl"), controllerPost.postCreate);


module.exports = router;