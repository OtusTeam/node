module.exports = {
  apps : [{
    name: 'node-proc',
    script: 'src/index.js',
    exec_mode: 'cluster', // Кластера в данном случае мы запускаем в его как на cpu
    instances: 8, //
    watch: '.',
    increment_var: 'PORT',
    env: {
      PORT: 4000
    }
  }],
};
