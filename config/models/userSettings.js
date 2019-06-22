const userSettings = (sequelize, DataTypes) => {
  const UserSettings = sequelize.define('user_settings', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT
    },
    allowed_bath_time: {
      type: DataTypes.BIGINT
    }
  });

  UserSettings.associate = models => {
    UserSettings.belongsTo(models.User, {foreignKey: 'user_id'});
  };

  return UserSettings;
};

export default userSettings;