const { Router } = require("express");
const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// routes
const authRoute = require("./routs/auth");
const adminRoute = require("./routs/admin/auth");
const categoryRoute = require("./routs/category");

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
app.options("*", cors());
app.use(bodyParser());
app.use(cors());
app.use("/api", authRoute);
app.use("/api", adminRoute);
app.use("/api", categoryRoute);

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// add middleware
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("../front/public"));

// app.use(express.urlencoded({ extended: true })) // to parse the data
// to make the content header application/json

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
