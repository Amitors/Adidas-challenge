const { emailRouter } = require("./controllers/email");
const express = require("express");

const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/email", emailRouter);

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
