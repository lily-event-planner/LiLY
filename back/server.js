const { Router } = require("express");
const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");

// routes
const authRoute = require("./routs/auth");
const adminRoute = require("./routs/admin/auth");

//mongodb connect
const mongoose = require("mongoose");
const { connected } = require("process");
const URI =
  "mongodb+srv://hibatamimi:1141688Hhh.@cluster0.3obps.mongodb.net/LiLY?retryWrites=true&w=majority";

//enviroment variable
env.config();

//mongodb connect
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
});

//midleware
app.use(bodyParser());
app.use("/", authRoute);
app.use("/", adminRoute);

// app.use(express.urlencoded({ extended: true })) // to parse the data
// to make the content header application/json

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
