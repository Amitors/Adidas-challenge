const { Router } = require("express");
const { sendEmail } = require("../services/email");

const emailRouter = Router();

emailRouter.post("/", async (req, res) => {
  try {
    const sentEmail = await sendEmail(req.body);
    res.send(sentEmail);
  } catch (error) {
    res.status(500).send("An error ocurred while sending an email");
    console.log(error);
  }
});

module.exports = { emailRouter };
