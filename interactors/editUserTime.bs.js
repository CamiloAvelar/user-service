import Interactor from './interactor';
import usersRep from '../repositories/users.rep';

class EditUserTimeBs extends Interactor {
  constructor() {
    super();
  }

  async execute({ id, new_time }) {

    const editedUser = await usersRep.editUserTime({ id, new_time });

    const response = editedUser[0] === 1 ? {
      status: 200,
      message: 'Usuário editado com sucesso'
    } : 
      {
        status: 500,
        message: 'Erro ao editar usuário'
      };

    return response;

  }
}

export default EditUserTimeBs;