const { Router } = require("express");
const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

//enviroment variable
env.config();

// routes
const authRoute = require("./routs/auth");
const adminRoute = require("./routs/admin/auth");
const categoryRoute = require("./routs/category");
const productRoute = require("./routs/product");
const cartRoute = require("./routs/cart");
//mongodb connect
const mongoose = require("mongoose");
const { connected } = require("process");
const URI =
  "mongodb+srv://hibatamimi:1141688Hhh.@cluster0.3obps.mongodb.net/LiLY?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
});

//midleware
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("../front/public"));
app.options("*", cors());
app.use(bodyParser());
app.use(cors());
app.use("/api", authRoute);
app.use("/api", adminRoute);
app.use("/api", categoryRoute);
app.use("/api", productRoute);
app.use("/api", cartRoute);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
