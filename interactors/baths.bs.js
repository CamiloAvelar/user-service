import Interactor from './interactor';
import bathsRep from '../repositories/baths.rep';

class BathsBs extends Interactor {
  constructor(){
    super();
  }

  async execute({ user_id, bath_time }) {

    const bath = await bathsRep.createBath({
      user_id,
      bath_time
    });

    if(!bath) {
      throw 'Não foi possível cadastrar o banho';
    }

    return bath;
  }

  async getBaths ({ user_id }) {

    const baths = await bathsRep.getBaths({
      user_id,
    });
    
    return baths;
  }
}

export default BathsBs;