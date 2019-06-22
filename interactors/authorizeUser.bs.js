import Interactor from './interactor';
import usersRep from '../repositories/users.rep';
import bcrypt from 'bcrypt';

class AuthorizeUserBs extends Interactor {
  constructor(){
    super();
  }

  async execute({ id, pass }) {
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

export default AuthorizeUserBs;