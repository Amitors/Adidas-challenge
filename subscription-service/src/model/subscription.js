const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GENDERS = ["Male", "Female"];

const subscriptionSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: GENDERS,
    required: false,
  },
  birthDate: {
    type: String,
    required: true,
  },
  consent: {
    type: Boolean,
    required: true,
  },
  newsletterId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("subscriptions", subscriptionSchema);
