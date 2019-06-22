import CadastroBs from '../interactors/cadastro.bs';

exports.createUser = async (req, res) => {
  const cadastroBs = new CadastroBs();

  const user = {
    name: req.body.name,
    password: req.body.password,
    allowedBathTime: req.body.allowed_bath_time ? req.body.allowed_bath_time : false,
  };

  try {
    const response = await cadastroBs.createUser(user);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};