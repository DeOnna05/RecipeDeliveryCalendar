//importing mongoose and setting up mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//New user schema
const RecipesSchema = new Schema({
    
    //do I just need users???
    recipe_name: {
        type: String,
        required: true},

    category: {
        type: String,
        required: fakse},
        
    servings: {
        type: Number, 
        required: false},
        
    ingredients: {
        type: Array, 
        required: false},
    
    directions: {
        type: Array, 
        required: false}
});
//mongoose model function to establish Users schema
const users = mongoose.model("recipes", UserSchema)

module.exports = users;