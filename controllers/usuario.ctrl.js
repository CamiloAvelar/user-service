import CreateUserBs from '../interactors/createUser.bs';
import GetUserBs from '../interactors/getUser.bs';
import AuthorizeUserBs from '../interactors/authorizeUser.bs';
import EditUserTimeBs from '../interactors/editUserTime.bs';

const createUser = async (req, res) => {
  const createUserBs = new CreateUserBs();

  try {
    const response = await createUserBs.execute({
      name: req.body.name,
      password: req.body.password,
      allowedBathTime: req.body.allowed_bath_time ? req.body.allowed_bath_time : false,
    });

    res
      .status(200)
      .send(response);
  } catch (err) {
    res
      .status(500)
      .send(err);
  }
};

const getUser = async (req, res) => {
  const getUserBs = new GetUserBs();

  try {
    const response = await getUserBs.execute({ 
      id: req.params.id,
    });

    res
      .status(200)
      .send(response);
  } catch (err) {
    res
      .status(500)
      .send(err);
  }
};

const authorizeUser = async (req, res) => {
  const authorizeUserBs = new AuthorizeUserBs();

  try {
    const response = await authorizeUserBs.execute({
      id: req.body.id,
      pass: +req.body.password,
    });

    res
      .status(200)
      .send(response);
  } catch (err) {
    res
      .status(500)
      .send(err);
  }
};

const editUserTime = async (req, res) => {
  const editUserTimeBs = new EditUserTimeBs();

  try {
    const response = await editUserTimeBs.execute({
      id: req.body.id,
      new_time: +req.body.new_time,
    });

    res
      .status(200)
      .send(response);
  } catch (err) {
    res
      .status(500)
      .send(err);
  }
};

export default {
  createUser,
  getUser,
  authorizeUser,
  editUserTime
};