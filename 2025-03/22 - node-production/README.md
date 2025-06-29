# node-prod
Node.js in production

# Links

- https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04 настройка сервера
- https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/ настройка letsencrypt для nginx

# Docker-compose

docker-compose up -d - сборка images и запуск сервисов(контейнеров)
docker-compose down - остановка.


# Как мы можем запускать наше приложение?

- Dockerfile + k8s.
- Dockerfile + k8s.
- CI.

k8s - более сложная архитектура для запуска
контейнеров.

Свой балансировщик.
Свои способы гибкой масштабирования
Свои способы запустить базы


Мы создали веб-сервер.

Что нужно, чтобы он заработал где-то в интернет?
- Физическая машина с IP - это верно. Разные Cloud решения. Есть множество VPD/VPS. CPU/Mem/Free.
- Настраиваем машину с IP. Дают root доступ -> Создать юзера -> Настроить доступ по ssh(хотя бы сделать по private-public keys) -> настриваем файрволл, чтобы защитить доступ. 
- Довезти код до сервера -> много вариантов(докер доставка) -> это просто клонировать код на сервер -> CD + Docker + K8s. 
- Поставить зависимости. Мой сегодняшний стэнд - nginx + nodejs + mongodb(в докере). Nginx поставить отдельно, nodejs и docker и т.д.
- Демонизировать на веб-сервер и сделать масштабирование. systemd -> pm2(я его буду делать) -> docker(compose, swarm, k8s).
- База данных. Тут просто запусить как удобно. Если открыть то тут пароль объязателен, tls желателен и другой порт, чтобы спастить от прямого сканирования.
- Load Balancer. Nginx, но периодически слышу про модные новые балансеры.
- Нам нужен HTTPS. Для прода рекомендую покупать сертификаты и следить за ними или брать бесплатные Lets encrypt.

Финально получаем приложение стабильно работающее по HTTPS

Какие вещи должны быть для удобной поддержки?
- логи сервисов и приложения. Нужно писать логи - console.log -> понятные уровни логгирования -> нам нужно эти логи собирать -> у лоогеров есть хорошие интеграции(errot tracking, писать в бд ошибки) -> ELK стэк или Loki(Grafana для логов).
- метрики собирать: системные метрики(с алертами) + перформанс метрики(event loop delay + requests per seconds + error count и т.д.) -> или покупаем и интегрирует(datadog, sentry и т.д.) или сами настраиваем prometheus + grafana нужно уметь отдавать метрики. И потом графики настроить и т.д.
- желательно создать liveprobe эндпоинт -> про endpoint для пинга.

Как понять, что сервис не работает? Он упал или работает, но не отвечает.

Хорошую систему мониторинга.