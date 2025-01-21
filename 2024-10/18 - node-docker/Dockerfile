# FROM - это специальная команда указывает на базе какого образа создавать наш образ.
# можно указать версию и размер образа(alpine-slim)
FROM node:alpine

# Просто сложит в корень, если не укажу WORKDIR
WORKDIR /usr/src/app

# COPY ./ ./

# 1. кэш
# 2. Явно указать, что мы копируем внутрь.

# package.json package-lock.json
COPY package*.json ./
# Формируем папку node_modules
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

RUN npm prune

CMD [ "node", "./build/index.js" ]














# # Копируем внутрь образа package.json
# COPY package*.json ./
# # Внутри образа запускаем команду по установки
# RUN npm ci

# # Будем собирать наше ПО
# COPY tsconfig.json ./
# COPY src ./src
# RUN npm run build

# Прописать команду, которая будет выполняться при старте нашего образа.
# CMD [ "node", "./build/index.js" ]







# # сборка и назвал её build-state
# FROM node:alpine as build-stage

# WORKDIR /usr/src/app

# COPY package*.json ./
# RUN npm ci



# RUN npm run build

# # запуск и назвал её run-state
# FROM node:alpine as run-stage

# WORKDIR /usr/src/app

# RUN chown node:node ./
# COPY --chown=node:node --from=build-stage /usr/src/app .

# USER node

# CMD [ "node", "./build/index.js" ]
