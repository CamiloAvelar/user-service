import config from '../../config/config';
import bcrypt from 'bcrypt';

const AuthorizeMasterPass = async (req, res, next) => {

  const headerPassword = req.headers['x-master-password'];

  if(!headerPassword){
    return res
      .status(401)
      .send({
        error: 'Unauthorized'
      });
  }

  const rightPassword = await bcrypt.compare(headerPassword, config.masterPassword);

  if(rightPassword) {
    next();
  } else {
    res
      .status(401)
      .send({
        error: 'Unauthorized'
      });
  }
};

export default {AuthorizeMasterPass};