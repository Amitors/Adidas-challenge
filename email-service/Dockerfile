FROM node:lts-alpine

WORKDIR /home/node/email-service

COPY --chown=node:node . /home/node/email-service

CMD ["node", "./src/index.js"]

EXPOSE 3002
