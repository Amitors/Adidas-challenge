const { Router } = require("express");
const {
  getSubscriptions,
  getSubscriptionById,
  createSubscription,
  deleteSubscriptionById,
} = require("../services/subscription");

const subscriptionRouter = Router();

subscriptionRouter.get("/", async (req, res) => {
  try {
    const obtainedSubscriptions = await getSubscriptions();
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while getting subscriptions");
    console.log(error);
  }
});

subscriptionRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obtainedSubscriptions = await getSubscriptionById(id);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while getting a subscription");
    console.log(error);
  }
});

subscriptionRouter.post("/", async (req, res) => {
  try {
    const obtainedSubscriptions = await createSubscription(req.body);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while creating a subscription");
    console.log(error);
  }
});

subscriptionRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obtainedSubscriptions = await deleteSubscriptionById(id);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while deleting a subscription");
    console.log(error);
  }
});

module.exports = { subscriptionRouter };
