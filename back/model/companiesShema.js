const mongoose = require('mongoose');

const {db} = require('mongodb');
const companySchema = mongoose.Schema({
    
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min : 6,
        max : 255
    },
})


const Company = mongoose.model('company', companySchema);


module.exports = {Company};