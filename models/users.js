//importing mongoose and setting up mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//New user schema
const UserSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: true
    },

    firstname: {
        type: String,
        trim: true,
        required: true
    },

    lastname: {
        type: String,
        trim: true,
        required: true
    },

    password: {
        type: String,
        trim: true,
        required: true
    }
});
//mongoose model function to establish Users schema
const users = mongoose.model("users", UserSchema)

module.exports = users;