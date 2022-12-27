module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_RAILWAY_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
