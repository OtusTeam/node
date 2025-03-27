const { ObjectId } = require("mongodb");
const { start } = require('./clients');

// Db.collection('my-collection').aggregate([
//   {
//     $match: {
//       age: { $gte: 18 }
//     }
//   }, // stage 1 - осуществляем поиск
//   {
//     $project: {
//       name: 1,
//       age: 1
//     }
//   } // stage 2 - осуществляем проекцию
// ])

// $match, $project

// find().skip().limit()
// JOIN - как объеденить две коллекции?
// GROUP BY - find + aggregate + find(WHERE + GROUP BY + HAVING)

// Aggregation pipeline.
// 1.
// find() - это императивный подход.
// SELECT * FROM table - это императивный подход.
// 2. Концепция pipeline



// $match - аналог find в aggregation pipeline
// $project - проекция данных

// collection('users').aggregate([
//   {
//     $match: {
//       age: { $gte: 18 }
//     }, // stage 1 - мы фильтруем по условию
//     $project: {
//       name: 1,
//       age: 1
//     }, // stage 2 - мы проектируем
//   }
// ])

// collection('users').find({
//   year: { $gte: 18 }
// }, { 
//   name: 1, age: 1 
// });

// groupMoviesByYears();
// groupUnwindMovies();

// lookupUserComments();
// lookupMoviesComments();
lookupMoviesFilterComments();

// outMovies();

// $gte - greater then or equal
// unwind - что значит?

async function groupMoviesByYears() {
  const { movies } = await start();

  const res = await movies.collection('movies').aggregate([
    {
      $match: {
        year: { $gte: 2000 }
      }
    },
    {
      $group: {
        _id: '$year', // Поля уникальный, по которым делается группирования
        
        total: { $sum: 1 }, // Добавлять +1

        // movies: { $push: '$title'},

        // Average
        avgImdbRating: { $avg: '$imdb.rating' },
        minImdbRating: { $min: '$imdb.rating' },
        maxImdbRating: { $max: '$imdb.rating' }
      }
    },
    {
      $match: {
        avgImdbRating: { $gte: 6.6 }
      }
    },
    {
      $set: {
        year: '$_id'
      }
    },
    {
      $sort: {
        year: 1
      }
    },
    {
      $project: {
        _id: 0
      }
    }
  ]).toArray();


  //   // Все фильмы в виде массива строк.
  //   // movies: { $push: '$title'}, // Добавить в массив значение
  // // Фильтрация данных, аналог WHERE
  
  // {
  //   $match: {
  //     avgImdbRating: { $gte: 6.6 }
  //   }
  // }, // Что-то в виде HAVING. Добавил ещё одну фильтрацию
  // {
  //   $sort: {
  //     _id: 1
  //   }
  // } // ORDER BY


  console.log(res);
}

async function groupUnwindMovies() {
  const { movies } = await start();

  // https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/
  const res = await movies.collection('movies').aggregate([
    {
      $unwind: '$countries'
    },
    {
      $unwind: '$genres'
    },
    {
      $group: {
        _id: { $concat: ['$countries', '___', '$genres'] }, // массив строк
        total: { $sum: 1 },
      }
    },
    {
      $sort: {
        _id: -1
      }
    }
  ]).toArray();

  console.log(res);
}

async function lookupUserComments() {
  const { movies } = await start();

  const res = await movies.collection('users').aggregate([
    {
      $lookup: {
        from: 'comments', // коллекцию для присоденинения
        localField: 'name', // Что с чем сравниваем
        foreignField: 'name', // C каким полем сравниванем
        as: 'userComments' // Как будет называеться поле
      }
    },
    {
      $limit: 1
    },
    {
      $project: {
        password: 0
      }
    }
  ]).toArray();

  console.dir(res, { depth: 4 });
}

async function lookupMoviesComments() {
  const { movies } = await start();

  const res = await movies.collection('movies').aggregate([
    {
      $match: {
        _id: new ObjectId('573a1396f29313caabce4a9a')
      }
    },
    {
      $lookup: {
        from: 'comments', // Указываем коллекцию для объединения
        localField: '_id', // Указываем ключ в коллекции movies для объединения
        foreignField: 'movie_id', // Указываем ключ в коллекции comments JOIN comments cs ON movies.id = cs.movie_id
        as: 'comments' // как будем называть новое поле
      }
    },
    {
      $project: {
        _id: 1,
        title: 1,
        comments: 1
      }
    },
    {
      $limit: 1
    }
  ]).toArray();

  console.log(res[0]);
}

// update - deprecated
// updateOne, updateMany - 
// delete - 
// deleteOne, deleteMany

async function lookupMoviesFilterComments() {
  const { movies } = await start();

  const res = await movies.collection('movies').aggregate([
    {
      $match: {
        _id: new ObjectId('573a1396f29313caabce4a9a')
      }
    },
    {
      $lookup:
         {
           from: "comments", // Коллекцию подключить
           let: { movieId: "$_id" },
           pipeline: [
              { 
                $match: { 
                  $expr: { $eq: [ "$movie_id",  "$$movieId" ] }
                }
              },
              {
                $project: {
                  movie_id: 0
                }
              },
              {
                $sort: {
                  date: -1
                }
              },
              {
                $limit: 5
              }
           ],
           as: "comments"
      }
    },
    // {
    //   $unwind: '$comments'
    // },
    {
      $limit: 1
    }
  ]).toArray();

  console.log(res[0]);
}

async function outMovies() {
  const { movies } = await start();

  // https://www.mongodb.com/docs/manual/reference/operator/aggregation/group/
  const res = await movies.collection('movies').aggregate([
    {
      $group: {
        _id: '$year',
        total: { $sum: 1 },
        movies: { $push: '$title'}
      }
    },
    {
      $sort: {
        _id: -1
      }
    },
    {
      $out: 'movies_group_by_year'
    }
  ]).toArray();

  console.log(res);
}


// Что будет ближе по духу: написать приложение или создавть инженерное решение как DBA.

// 1. CRUD API Server с бизнес задачей
// 2. DBA - создал кластер(репликация + шардирования), завернуть это или в k8s или в cloud.
// И проводите исследовательскую работу. Показать как кластер работает при падении сети/серверов.
// А как ведёт под нагрузкой.
// Собрали реплика сэт с версией mongodb 4.2 и как обновиться до версии 7.
// 3. Что-то своё придумать.
