const { subscriptionRouter } = require("./controllers/subscription");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/subscriptions");

app.use("/subscription", subscriptionRouter);

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
