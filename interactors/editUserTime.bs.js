import Interactor from './interactor';
import usersRep from '../repositories/users.rep';

class EditUserTimeBs extends Interactor {
  constructor() {
    super();
  }

  async execute({ id, new_time }) {

    const editedUser = await usersRep.editUserTime({ id, new_time });

    if(!editedUser) {
      throw new Error('Erro ao editar usuário');
    }

    return editedUser;

  }
}

export default EditUserTimeBs;