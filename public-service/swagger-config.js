const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Adidas public subscription service",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  apis: ["./src/controllers/*.js"],
};

exports.swaggerJS = swaggerJSDoc(options);
