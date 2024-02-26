module.exports = {
  apps: [
    {
      name: 'docker-compose-watch',
      script: 'docker compose watch',
      args: 'up',
      autorestart: true,
      watch: false,
      max_restarts: 10,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
};
