//requirements
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
const db = require('./models');
const jwt = require('jsonwebtoken');
// Sets up our server to parse our request body for post/put/delete requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using express and path to find files
app.use(express.static('public'));

//routes
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

app.use(apiRoutes);
app.use(htmlRoutes);

//start mongo connegtion
mongoose.connect('mongodb://localhost/recipe-delivery-calendar', { useNewUrlParser: true });

//establishing port connection
app.listen(PORT, function() {
    console.log(`App currently running on port ${PORT}`);
  });