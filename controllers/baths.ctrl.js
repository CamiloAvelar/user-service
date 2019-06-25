import BathsBs from '../interactors/baths.bs';

const createBath = async (req, res) => {
  const bathsBs = new BathsBs();

  const bath = {
    user_id: req.body.user_id,
    bath_time: req.body.bath_time
  };

  try {
    const response = await bathsBs.execute(bath);

    res
      .status(200)
      .send(response);
  } catch (err) {
    res
      .status(500)
      .send(err);
  }
};

const getBaths = async (req, res) => {
  const bathsBs = new BathsBs();

  try {
    const response = await bathsBs.getBaths({ user_id: req.params.id });

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
  createBath,
  getBaths
};