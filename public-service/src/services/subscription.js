const axios = require("axios");

axios.defaults.baseURL = "http://subscription-service:3001/subscription";

exports.getSubscriptions = async () => {
  try {
    const { data: obtainedSubscriptions } = await axios.get("/");
    return obtainedSubscriptions;
  } catch (error) {
    throw error;
  }
};

exports.getSubscriptionById = async (id) => {
  try {
    const { data: obtainedSubscriptions } = await axios.get(`/${id}`);

    return obtainedSubscriptions;
  } catch (error) {
    throw error;
  }
};

exports.createSubscription = async (subscriptionData) => {
  try {
    await axios.post("/", subscriptionData);
  } catch (error) {
    throw error;
  }
};

exports.deleteSubscriptionById = async (id) => {
  try {
    await axios.delete(`/${id}`);
  } catch (error) {
    throw error;
  }
};
