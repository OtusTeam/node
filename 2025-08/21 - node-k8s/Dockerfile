FROM node:alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY ./src ./src

# CMD ["node", "./src/index.js"]

CMD ["node", "./src/index-with-db.js"]
