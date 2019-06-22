import Interactor from './interactor';
import usersRep from '../repositories/users.rep';

class GetUserBs extends Interactor{
  constructor(){
    super();
  }

  async execute({ id }) {
    const user = await usersRep.getUser({ id });

    if(!user) {
      throw {error: 'Não foi possível localizar o usuário!'};
    }

    const response = {
      id: user.id,
      name: user.name,
      allowedBathTime: user.user_setting.allowed_bath_time
    };

    return response;
  }
}

export default GetUserBs;