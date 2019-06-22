import RetornaUserBs from '../interactors/retornaUser.bs';
import AutorizaUserBs from '../interactors/autorizaUser.bs';

exports.getUser = async (req, res) => {
  const retornaUserBs = new RetornaUserBs();

  try {
    const response = await retornaUserBs.getUser({ id: req.params.id });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.autorizaUser = async (req, res) => {
  const autorizaUserBs = new AutorizaUserBs();

  try {
    const response = await autorizaUserBs.autoriza({ id: req.body.id, pass: +req.body.password });
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};