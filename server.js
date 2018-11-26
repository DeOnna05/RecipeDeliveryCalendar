//requirements
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;



// Sets up our server to parse our request body for post/put/delete requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using express and path to find files
app.use(express.static('/public'));

//routes
apiRoutes = require('./routes/api-routes');
htmlRoutes = require('./routes/html-routes');

app.use(apiRoutes);
app.use(htmlRoutes);


//start mongo connegtion
mongoose.connect('mongodb://localhost/recipe-delivery-calendar', { useNewUrlParser: true });

//establishing port connection
app.listen(PORT, function() {
    console.log(`App currently running on port ${PORT}`);
  });