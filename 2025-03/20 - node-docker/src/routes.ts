import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get('/hello/:name', (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    res.send(`Hello OTUS ${name} from express version 1.0.3`);
  },
);

export default router;

// Надо сделать образ.



































// Виртуальная машина
// 1. Хочу установить виртуальную машину только с Node.JS
// Виртуальная машина - она из образов устанавливается(Windows, Ubuntu и прочее).
// Node.JS тоже может быть разный(полные версии и минимальный набор пакетов).
// 2. Хотим эффективно управлять ресурсами.
// 3. Хотим удобно дистрибутировать наш полученый образ.
// - отдать коллеге и чтобы он запустил на своей машине.
// - чтобы наше ПО запускалось одинаково на dev/stage/тестовых стендах/production.
// - есть готовые решения для запуска наших образов.
// Можем докер запускать по разному, как отдельный контейнер, как кластер(docker swarm),
// через окрестрацию при помощи docker-compose, k8s - через кубер, через облачные решение, типа ESC(AWC).

// docker.hub - это ресурс с публичными(или приватными) образами. Что-то типа github, только для образов docker.





// Не Linux way - это гибкий подход.
// Linux way - сделать что-то под задачу и чтобы это что-то работало хорошо.

// Виртуальная машина - устанавливаем лишнии и запускаем в нем.
// Docker - запускаем минимально необходимый образ.

// Веб-сервер: написан на Typescript, запускается командой npm run start
// Ссылка на git репозиторий.
// Путь от скачивания репозитория до команды запуска - это создание образа.
// 1. Убедиться что в среде запуска будет nodejs.
// 2. npm install - устанавливаем.
// 3. npm run build - собираем проект(если необходимо)
// 4. Указываем команду для запуска нашего образа.
// Вот этот путь - это сборка образа. А результат - это образ.
// Dockerfile - файл для сборки образа.

/*
class DockerImage {

}

const dockerContainer1 = new DockerImage()
const dockerContainer2 = new DockerImage()
const dockerContainer3 = new DockerImage()
*/


// class BaseDockerImage {
  
// }

// class AlpineDockerImage extends BaseDockerImage {

// }

// class NodeDockerImage extends AlpineDockerImage {

// }

// class MyAppDockerImage extends NodeDockerImage {
  
// }
