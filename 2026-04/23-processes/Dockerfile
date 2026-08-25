FROM node:alpine AS build-stage

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm ci --omit=dev

COPY cases ./cases
COPY shared ./shared

FROM node:alpine AS run-stage

WORKDIR /usr/src/app

RUN chown node:node ./
COPY --chown=node:node --from=build-stage /usr/src/app .

USER node

CMD [ "npm", "run", "start" ]
