//importing mongoose and setting up mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//New user schema
const UserSchema = new Schema({
    
    //do I just need users???
    username: {
        type: String,
        required: true},
        
    password: {
        type: String, 
        required: true}
});
//mongoose model function to establish Users schema
const users = mongoose.model("users", UserSchema)

module.exports = users;