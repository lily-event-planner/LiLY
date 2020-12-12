const mongoose = require('mongoose');
const db = require('mongodb');
const categorySchema = mongoose.Schema({

    name :{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
    img:{
        type:String,
        required:true,

    },
    description:{
        type:String,

    },
    supCategory : {
     type : Array
 }
})


const category = mongoose.model('category', categorySchema);

module.exports = {category};