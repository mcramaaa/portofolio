module.exports = {
  apps: [
    {
      name: "mchrama-landing",
      script: "yarn",
      args: "start",
      cwd: "/var/www/cathabot/portofolio",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
