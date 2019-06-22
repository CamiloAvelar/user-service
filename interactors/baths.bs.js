import bathsRep from '../repositories/baths.rep';

class bathsBs {
  constructor(){}

  async createBath ({ user_id, bath_time }) {

    const bath = await bathsRep.createBath({ user_id, bath_time });

    if(!bath) {
      throw 'Não foi possível cadastrar o banho';
    }

    return bath;
  }

  async getBaths ({ user_id }) {

    const baths = await bathsRep.getBaths({ user_id });
    
    return baths;
  }
}

module.exports = bathsBs;