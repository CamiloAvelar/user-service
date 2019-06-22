import models from './../config/models/index';

exports.createBath = async ({ user_id, bath_time }) => {
  return await models.UserBaths.create({
    user_id,
    time: bath_time
  });
};

exports.getBaths = async ({ user_id }) => {
  return await models.UserBaths.findAll({
    where: {
      user_id
    }
  });
};