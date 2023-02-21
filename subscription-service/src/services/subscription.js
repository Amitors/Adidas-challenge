const axios = require("axios");
const subscriptionModel = require("../model/subscription");

axios.defaults.baseURL = "http://email-service:3002/email";

exports.getSubscriptions = async () => {
  try {
    const obtainedSubscriptions = await subscriptionModel.find();

    return obtainedSubscriptions;
  } catch (error) {
    throw error;
  }
};

exports.getSubscriptionById = async (id) => {
  try {
    const obtainedSubscription = await subscriptionModel.findById(id);
    return obtainedSubscription;
  } catch (error) {
    throw error;
  }
};

exports.createSubscription = async (subscriptionData) => {
  try {
    const subscriptionToCreate = new subscriptionModel(subscriptionData);
    await subscriptionToCreate.save();

    await axios.post("/", subscriptionData.email);
    return `CREATED subscription`;
  } catch (error) {
    throw error;
  }
};

exports.deleteSubscriptionById = async (id) => {
  try {
    await subscriptionModel.findByIdAndRemove(id);

    return `DELETED subscription ${id}`;
  } catch (error) {
    throw error;
  }
};
