FROM node:lts-alpine

WORKDIR /home/node/public-service

COPY --chown=node:node . /home/node/public-service

CMD ["node", "./src/index.js"]

EXPOSE 3000
