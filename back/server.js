const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Route = require("./routes/Router");
const URL =
  "mongodb+srv://hibatamimi:1141688Hhh.@cluster0.3obps.mongodb.net/Lily?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then(() => console.log("MongoDB Connected correctly ..."))
  .catch((err) => console.log(err));

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // to parse the data
app.use(express.json());
app.use(express.static(__dirname + "/../front/public"));

//app.use('/users', require('./routes/users')
app.use("/", Route);
app.listen(5000, () => {
  console.log("listening on 5000");
});
