# Образ на основании которого делаем наш образ
FROM node:22-alpine
# Не указан конкретный образ. 
# Версию nodejs можно указать образ операционной системы.

# WO

COPY ./ ./

RUN npm install
RUN npm run build

CMD ["node", "./build/index.js"]

















# установили nodejs


# FROM - это специальная команда указывает на базе какого образа создавать наш образ.
# можно указать версию и размер образа(alpine-slim)

# node_modules

# сбилженный код


# COPY package*.json ./
# RUN npm ci


# RUN npm run build

# RUN npm prune

# CMD [ "node", "./build/index.js" ]








# Просто сложит в корень, если не укажу WORKDIR



# COPY ./ ./

# 1. кэш
# 2. Явно указать, что мы копируем внутрь.

# package.json package-lock.json
# Формируем папку node_modules



# # Копируем внутрь образа package.json
# COPY package*.json ./
# # Внутри образа запускаем команду по установки
# RUN npm ci

# # Будем собирать наше ПО
# COPY tsconfig.json ./
# COPY src ./src
# RUN npm run build

# Прописа,ть команду, которая будет выполняться при старте нашего образа.
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
