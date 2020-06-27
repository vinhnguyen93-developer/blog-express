const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  caption: String,
  imageUrl: String,
  postDate: Date,
  content: Array 
});

const Post = mongoose.model('Post', postSchema, 'posts');

module.exports = Post;