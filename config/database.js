module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cgc8ud02qv267uc17gr0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ahmed_tldg'),
      user: env('DATABASE_USERNAME', 'ahmed_tldg_user'),
      password: env('DATABASE_PASSWORD', 'FLO1T9qCvF1hFdipNrjZQT6X7808HhhC'),
      ssl: env.bool('DATABASE_SSL', require),
    },
  },
});
