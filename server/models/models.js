
const mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
   name:  { type: String, required: [true, "name must be provided."], minlength: [3, "Name must be at least 3 characters long."], unique:true}, 
   description:  { type: String, required: [true, "description  must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
   stars: { type: Number, default:0}

},{timestamps:true});
mongoose.model('review', reviewSchema);

var movieSchema = new mongoose.Schema({
    title:  { type: String, required: [true, "type must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
    review: [reviewSchema]
},{timestamps:true});

mongoose.model('movie', movieSchema);





// var reviewSchema = new mongoose.Schema({
//     title:  { type: String, required: [true, "type must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
//     review : [{
//          name:  { type: String, required: [true, "name must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
//          description:  { type: String, required: [true, "description  must be provided."], minlength: [3, "Name must be at least 3 characters long."]}, 
//          stars: { type: Number, default:0}
//     }],
//    },{timestamps:true});

// mongoose.model('review', reviewSchema);




