module.exports = {
  apps: [
    {
      name: 'processes-demo',
      script: './cases/07-server/index.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
