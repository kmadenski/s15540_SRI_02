FROM node:11-alpine

WORKDIR /node-app

RUN npm install nodemon -g --quiet

EXPOSE 9000

CMD nodemon -L --watch . index.js
