module.exports = {
  apps : [{
    script    : "./src/server.js",
    instances : "max",
    exec_mode : "cluster"
  }]
}
