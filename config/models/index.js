import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.sequelize.db,
  config.sequelize.username,
  config.sequelize.password,
  {
    host: 'postgres',
    dialect: 'postgres',
    port: config.sequelize.port,
    logging: config.logging,
    define: {
      freezeTableName: true,
      underscored: true,
    },
    timezone: config.sequelize.timezone,
  },
);

const models = {
  User: sequelize.import('./user'),
  UserSettings: sequelize.import('./userSettings'),
  UserBaths: sequelize.import('./userBaths'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;