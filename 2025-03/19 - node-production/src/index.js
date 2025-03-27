const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 4000;
const hostname = os.hostname();

const server = http.createServer(async (req, res) => {
  return res.end(`Hello world! Tester. New version. ${hostname}:${PORT}`);
});

server.listen(PORT, () => {
  console.log('Server started at', PORT);
});

// docker-compose build - собирает образы
// docker-compose up - запускает.
// docker-compose up -d - запускает как демон

// 1. Облако или веб-сервер(хостинг).
// 1.1. Bare metal решение.
// 1.2. Dedicated server, VPS. // Мы настраиваем всё сами. Nginx(LB), NodeJS, DB и т.д.
// 1.3. Cloud: AWS, Google Cloud, Yandex Cloud.
// AWS - выделенный сервер(Ubuntu) и все вы настраиваете
// AWS - ECS - это Elastic Container Service. Докер контейнер. Создай Docker Container
// AWS - Load Balancer. Nginx, у AWS он свой.
// AWS - базы данных, очереди, логгеры, лямба(сервер который запускается по требованию)
// AWS - k8s
// 1.4. Heroku. У вас есть CLI и вы выкладываете приложение.

// Нужно двигаться инкрементально.
// 1. MVP. Вам подойдет самое простое решение.
// VPS 1CPU, 2Гб памяти, 30 Гб жесткого диска.
// Вертикально масштабироваться. Увеличивать CPU, memory, жесткий диск.

// Docker container. Если контейнер упал, он не рестатанет.

// Рекомендую использовать Docker.
// Мы настраиваем Pipeline
// 0. Вешаем hook master/main.
// 0. Когда туда попадает обновление pipeline запускается.
// 1. Есть билд-сервера, который будут работать с вашей веткой и собирать образ.
// 2. Каждый новый образ будет иметь tag your-app-1.1.0
// 3. Мы публикуем наш образ в registry.
// 4. Мы идем на сервер и из образа делаем контейнера.
// 5. Переменные окружения - это способ настроить наше приложение под разные среды.

// Pipeline приложения: Jenkins, Teamcity, github actions

// Демонизация
// nodejs cluster
// pm2 
// forever
// Docker как демон
// nginx настраиваю

// production ready. Лучше купите сертификат
// letsencrypt. Это бесплатный сервис для получения сертификатов.
// Специальный клиент, certbot, мы его настраиваем на где у нас балансировщик.
