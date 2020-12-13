const mongoose = require('mongoose');
const categorySchema = require('./categorySchema').category;
const subcategorySchema = mongoose.Schema({

    name :{
        type:String,
        required:true,
        min : 6,
        max : 255
  
    },

 category : [{
    type : mongoose.Schema.Types.ObjectId ,
     ref:"categorySchema"}]
})




const subcategory = mongoose.model('subcategory', subcategorySchema);


module.exports = {subcategory};