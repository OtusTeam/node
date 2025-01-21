const {parentPort, workerData} = require("worker_threads");

// parentPort - объект который позволяет общаться с родителем
// workerData - это данные которые приходят от родителя
// parentPort.postMessage - отправить сообщение родителю

parentPort.postMessage(concatLikes(workerData.users))

function concatLikes(users) {
  return users.reduce((res, user) => {
    res = res.concat(user.like)
    
    return res
  }, [])
}
