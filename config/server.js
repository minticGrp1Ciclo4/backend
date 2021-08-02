module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5303),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b8c10b26f038801803104115e9b567b1'),
    },
  },
});
