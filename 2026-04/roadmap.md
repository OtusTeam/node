Репозиторий и каркас

init: TS, ESLint/Prettier, jest + supertest, dotenv.

Express + базовая структура: app/, modules/{auth,courses,lessons,...}.

Скрипты: dev, test, lint.

(Опционально) HTTPS сейчас же 

Самоподписанный cert, https.createServer хелпер.

Страницы-заглушки на Pug: /, /courses, /courses/:id, /auth/login.

Схемы домена + README (0.3д)

Короткая спецификация сущностей и связей (User, Profile, Course, Lesson, Tag, Comment, Rating, CourseAccess).

В README: роли, права, список REST-эндпоинтов, формат ответов.

Контракты API (zod) (0.2д)

DTO/схемы запроса/ответа для ключевых роутов.

Единый error handler.

Репозитории in-memory (0.3д)

Интерфейсы repo + простые массивы как storage.

Минимум: users, courses, lessons, comments, ratings, access.

Сервисы и контроллеры (0.7д)

Auth: register/login/logout (можно без refresh на этом этапе).

Courses: list/get/create/patch; Access: grant.

Lessons: create/list/get c проверкой доступа.

Comments/Ratings: create + list/aggregate.

Тесты → красные → зелёные (0.7д)

Написать jest/supertest по контрактам (сначала RED).

Гоняем имплементацию до GREEN. Покрыть: auth, доступы, CRUD, UGC.

(Дальше по желанию)

Подмена in-memory на Prisma/Postgres, миграции.

Поиск, загрузки, рейтинг-агрегации в БД.