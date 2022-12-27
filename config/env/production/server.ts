export default ({ env }) => ({
  proxy: true,
  host: env('HOST', '0.0.0.0'),
  url: env("PUBLIC_URL", "http://localhost:1337"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

