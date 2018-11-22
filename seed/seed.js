const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipe-delivery-calendar"
);

const users = [
    {
        username: 'deonna05@gmail.com',
        password: 'password'
    }
]

db.users
  .remove({})
  .then(() => db.users.collection.insertMany(users))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });