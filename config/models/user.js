const user = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = models => {
    User.hasMany(models.UserBaths, { onDelete: 'CASCADE' });
    User.hasOne(models.UserSettings);
  };

  return User;
};

export default user;