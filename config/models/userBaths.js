const userBaths = (sequelize, DataTypes) => {
  const UserBaths = sequelize.define('user_baths', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    time: {
      type: DataTypes.BIGINT
    }
  });

  UserBaths.associate = models => {
    UserBaths.belongsTo(models.User, {foreignKey: 'user_id'});
  };

  return UserBaths;
};

export default userBaths;