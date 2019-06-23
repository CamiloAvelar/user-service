export default {
  server: {
    logging: false,
    port: 3001
  },
  sequelize: {
    db: 'users',
    username: 'pi',
    password: '100200300',
    port: 5432,
  },
  bcrypt: {
    saltRounds: 5
  },
  masterPassword: '$2b$05$/dQrC4lY/0kWNzQ8QElbHe57QyaS4mVlUylFszSZTy21LF9mWwSae',
};