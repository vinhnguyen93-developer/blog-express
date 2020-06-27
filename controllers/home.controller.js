const Post = require('../models/post.model');
const fs = require('fs');

module.exports.index = async (req, res) => {
  const posts = await Post.find();
  const path = 'mynewfile1.json';
  const data = fs.readFileSync(path, { encoding: 'utf8' });
  const newData = JSON.parse(data);
  console.log(newData);

  res.render('home/index', {
    posts: posts,
    datas: newData.blocks
  });
}

module.exports.detailPost = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  res.render('home/detail', {
    post: post
  });
}