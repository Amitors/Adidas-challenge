const { Router } = require("express");
const {
  getSubscriptions,
  getSubscriptionById,
  createSubscription,
  deleteSubscriptionById,
} = require("../services/subscription");

const subscriptionRouter = Router();

/**
 * @swagger
 * /subscriptions:
 *   get:
 *     summary: List all subscriptions
 *     tags:
 *       - Subscriptions
 *     responses:
 *       '200':
 *         description: List all subscriptions
 *       '404':
 *         description: Error getting subscriptions
 */
subscriptionRouter.get("/", async (req, res) => {
  try {
    const obtainedSubscriptions = await getSubscriptions();
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while getting subscriptions");
    console.log(error);
  }
});

/**
 * @swagger
 * /subscription/{id}:
 *   get:
 *     summary: Get a subscription
 *     tags:
 *       - Subscriptions
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Subscription ID
 *     responses:
 *       '200':
 *         description: Returns Subscription(object)
 *       '500':
 *         description: Error
 */
subscriptionRouter.get("/:id", async (req, res) => {
  try {
    const obtainedSubscriptions = await getSubscriptionById(req.params.id);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while getting a subscription");
    console.log(error);
  }
});

/**
 * @swagger
 * /subscriptions:
 *   post:
 *     summary: Create a subscription
 *     tags:
 *       - Subscriptions
 *     parameters:
 *      - in: body
 *        name: subscription
 *        description: Create a subscription
 *        schema:
 *           type: object
 *           required:
 *             - email
 *             - birthDate
 *             - consent
 *             - newsletterId
 *           properties:
 *             email:
 *               type: string
 *             firstName:
 *               type: string
 *             gender:
 *               type: string
 *               enum:
 *                 - Male
 *                 - Female
 *             birthDate:
 *               type: string
 *             consent:
 *               type: boolean
 *             newsletterId:
 *               type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error.
 */
subscriptionRouter.post("/", async (req, res) => {
  try {
    const obtainedSubscriptions = await createSubscription(req.body);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while creating a subscription");
    console.log(error);
  }
});

/**
 * @swagger
 * /subscription/{id}:
 *   delete:
 *     summary: Delete a subscription
 *     tags:
 *       - Subscriptions
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Subscription ID
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error
 */
subscriptionRouter.delete("/:id", async (req, res) => {
  try {
    const obtainedSubscriptions = await deleteSubscriptionById(req.params.id);
    res.send(obtainedSubscriptions);
  } catch (error) {
    res.status(500).send("An error ocurred while deleting a subscription");
    console.log(error);
  }
});

module.exports = { subscriptionRouter };
