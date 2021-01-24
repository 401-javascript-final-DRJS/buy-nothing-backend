'use strict';

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appRoute = require("./routes/appRoute");
const app = express();
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("connected to mongo database"))
.catch((error) => console.errror(error));

app.use("/api", appRoute);

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));