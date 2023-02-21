FROM node:lts-alpine

WORKDIR /home/node/subscription-service

COPY --chown=node:node . /home/node/subscription-service

CMD ["node", "./src/index.js"]

EXPOSE 3001
