module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b1b6cc3d90d87aefcddd37e11371101c'),
    },
  },
  cron: {
    enabled: env('NODE_ENV', 'development') == 'production',
  }
});
