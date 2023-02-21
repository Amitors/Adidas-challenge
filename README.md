# Adidas Code Challenge

## Services

- Public BFF + Swagger
  - Node + Express
  - Axios for HTTP calls
  - Swagger for OpenApi documentation
  - Nodemon for local development
- Subscriptions API
  - Node + Express
  - Axios for HTTP calls
  - Mongoose for DB connection
  - Jest + Mockingoose for testing
  - Nodemon for local development
- Email service
  - Node + Express
  - Nodemailer as email service
  - Jest + Mockingoose for testing
  - Nodemon for local development
- MongoDB database

## Requirements

Node.js (lts/gallium)
Docker + Docker compose

## How to use:

```
docker-compose up --build
```

## Tests

Test subscription-service or email-service

```
npm run test
```

## Swagger

```
http://localhost:3000/docs
```

## Nice to have/Improvements

- Postman collection to complement swagger
- Type validation of request
- dotenv + file with constants for multiple environments
- Typescript
- Prettier
- Linter
- Auth with JWT token in subscription instead of just using a private/public docker
- More tests (fail cases, edge cases), integration test, e2e test
- Logger
