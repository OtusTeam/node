const { parentPort, workerData } = require('node:worker_threads');

function concatLikes(users) {
  return users.reduce((res, user) => {
    res.push(user.like);
    return res;
  }, []);
}

parentPort.postMessage(concatLikes(workerData.users));
