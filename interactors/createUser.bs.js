import Interactor from './interactor';
import usersRep from '../repositories/users.rep';
import bcrypt from 'bcrypt';
import config from './../config/config';

class CreateUserBs extends Interactor {
  constructor(){
    super();
  }

  async execute({ name, password, allowedBathTime }) {

    if (!allowedBathTime) {
      allowedBathTime = 10;
    }

    const hash = await bcrypt.hash(password.toString(), config.bcrypt.saltRounds);

    const user = await usersRep.createUser({ name, password: hash, allowedBathTime });

    if(!user) {
      throw 'Não foi possível criar o usuário!';
    }

    const response = {
      id: user.user_id,
      name: user.user.name,
      allowed_bath_time: user.allowed_bath_time,
    };

    return response;
  }
}

export default CreateUserBs;