import models from './../config/models/index';

exports.createUser = async ({ name, password, allowedBathTime }) => {
  return await models.UserSettings.create({
    allowed_bath_time: allowedBathTime,
    user: {
      name,
      password
    }
  }, {
    include: [
      models.User
    ]
  },
  {
    raw:true
  });
};

exports.getUser = async ({ id }) => {
  return await models.User.findOne({
    where: {
      id
    },
    include: [ models.UserSettings ]
  });
};