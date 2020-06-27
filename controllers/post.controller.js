const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const Post = require('../models/post.model');

cloudinary.config({ 
  cloud_name: process.env.CLOUND_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

module.exports.index = (req, res) => {
  
  res.render('post/index');
}

module.exports.postCreate = async (req, res) => {
  const file = await cloudinary.uploader.upload(req.file.path, (error, result) => {
    console.log(error, result);
  });

  await Post.create({
    caption: req.body.caption,
    imageUrl: file.url,
    postDate: new Date(),
    content: req.body.content
  });

  res.redirect('/');
}

module.exports.createFolder = (req, res) => {
  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}