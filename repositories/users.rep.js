import models from './../config/models/index';

const createUser = async ({ name, password, allowedBathTime }) => {
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

const getUser = async ({ id }) => {
  return await models.User.findOne({
    where: {
      id
    },
    include: [ models.UserSettings ]
  });
};

const editUserTime = async ({ id, new_time }) => {
  return await models.UserSettings.update({
    allowed_bath_time: new_time
  },{
    where: {
      user_id: id
    }
  });
};

export default {
  createUser,
  getUser,
  editUserTime
};