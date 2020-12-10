const env = require("dotenv");
env.config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRoute);
// app.use("/api", categoryRoute);

app.listen(2000, () => console.log(`Listening on port 2000`));
