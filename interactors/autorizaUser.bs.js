import usersRep from '../repositories/users.rep';
import bcrypt from 'bcrypt';

class autorizaUserBs {
  constructor(){}

  async autoriza({ id, pass }) {
    const user = await usersRep.getUser({ id });

    if(!user) {
      throw {error: 'Usuário não encontrado'};
    }

    const match = await bcrypt.compare(pass.toString(), user.password);

    return {
      allowed: match
    };
  }
}

export default autorizaUserBs;