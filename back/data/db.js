const mongoose = require('mongoose');
const { connected } = require('process');
const URI = "mongodb+srv://hibatamimi:1141688Hhh.@cluster0.3obps.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', () => { console.log('connected to db')})

module.exports = db