const mongoose = require("mongoose");
const Route = require("./routers/Route");
const URL =
  "mongodb+srv://hibatamimi:1141688Hhh.@cluster0.3obps.mongodb.net/LiLY?retryWrites=true&w=majority";
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

// app.use("/", Route);

app.listen(8080, () => console.log(`Listening on port 8080`));
