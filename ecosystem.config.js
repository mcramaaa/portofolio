module.exports = {
  apps: [
    {
      name: "cathabot-landing",
      script: "yarn",
      args: "start",
      cwd: "/var/www/cathabot/cathabot",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
