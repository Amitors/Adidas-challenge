const { subscriptionRouter } = require("./controllers/subscription");
const express = require("express");
const { swaggerJS: swaggerConfig } = require("../swagger-config");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = 3000;

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/subscription", subscriptionRouter);

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
);
