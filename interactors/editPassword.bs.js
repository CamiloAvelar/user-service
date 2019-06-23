import Interactor from './interactor';
import usersRep from '../repositories/users.rep';
import bcrypt from 'bcrypt';
import config from './../config/config';

class EditPasswordBs extends Interactor {
  constructor(){
    super();
  }

  async execute({ id, new_password }) {

    const hash = await bcrypt.hash(new_password.toString(), config.bcrypt.saltRounds);

    const editedUser = await usersRep.editPassword({ id, password: hash });

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

export default EditPasswordBs;