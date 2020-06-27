require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

const homeRoute = require('./routes/home.route');
const aboutRoute = require('./routes/about.route');
const postRoute = require('./routes/post.route');
const contactRoute = require('./routes/contact.route');

let app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('', homeRoute);

app.use('/post', postRoute);

app.use('/about', aboutRoute);

app.use('/contact', contactRoute);

app.listen(3000, () => {
  console.log('Server listening on port ' + 3000);
});