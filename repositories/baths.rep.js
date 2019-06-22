import models from './../config/models/index';

const createBath = async ({ user_id, bath_time }) => {
  return await models.UserBaths.create({
    user_id,
    time: bath_time
  });
};

const getBaths = async ({ user_id }) => {
  return await models.UserBaths.findAll({
    where: {
      user_id
    }
  });
};

export default {
  createBath,
  getBaths
};