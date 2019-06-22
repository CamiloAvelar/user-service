import usersRep from '../repositories/users.rep';
import bcrypt from 'bcrypt';

class cadastroBs {
  constructor(){}

  async createUser({ name, password, allowedBathTime }) {

    if (!allowedBathTime) {
      allowedBathTime = 10;
    }

    const saltRounds = 5;

    const hash = await bcrypt.hash(password.toString(), saltRounds);

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

module.exports = cadastroBs;