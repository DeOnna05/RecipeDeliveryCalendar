//importing mongoose and setting up mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//New user schema
const RecipesSchema = new Schema({
    
    recipe_name: {
        type: String,
        required: true},

    category: {
        type: String,
        required: true},
        
    image: {
        type: String, 
        required: false},
        
    ingredients: {
        type: Array, 
        required: false},
    
    directions: {
        type: Array, 
        required: false}
});
//mongoose model function to establish Users schema
const recipes = mongoose.model("recipes", RecipesSchema)
module.exports = recipes;