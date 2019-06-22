import BathsBs from '../interactors/baths.bs';

exports.createBath = async (req, res) => {
  const bathsBs = new BathsBs();

  const bath = {
    user_id: req.body.user_id,
    bath_time: req.body.bath_time
  };

  try {
    const response = await bathsBs.createBath(bath);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBaths = async (req, res) => {
  const bathsBs = new BathsBs();

  try {
    const response = await bathsBs.getBaths({ user_id: req.params.id });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};