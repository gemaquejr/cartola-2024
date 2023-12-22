import Coach from '../database/models/Coach';
import Team from '../database/models/Team';

export default class CoachService {
  public coachModel = Coach;

  public async getAllCoaches() {
    try {
      const coaches = await this.coachModel.findAll({
        include: { model: Team, attributes: ['teamName'] }
      });
      return coaches;
    } catch (error) {
      throw new Error(`Error when searching for ${error}`);
    }
  }
    
  public async createCoach(coachData: {name: string, nacionality: string, age: number, teamId: number}) { 
    try {
      const { name, teamId } = coachData;

      const existingCoach = await this.coachModel.findOne({ where: { name, teamId } });
      if (existingCoach) {
        throw new Error('Coach with this name already exists in this team');
      }
      const newCoach = await this.coachModel.create(coachData);
      return newCoach;
    } catch (error) {
      throw new Error(`Error when creating coach: ${error}`);
    }
  }
      
  public async getCoachById(id: number) {   
    try {
      const team = await this.coachModel.findByPk(id);
      return team;
    } catch (error) {
      throw new Error(`Error when searching for coach: ${error}`)
    }
  }
    
  public async updateCoach(id: number, coachData: { [coachField: string]: any }) {    
    try {
      const coachToUpdate = await this.coachModel.findByPk(id);
      if (!coachToUpdate) {
        throw new Error('Coach not found');
      }
      
      const updatedCoach = await coachToUpdate.update(coachData);
      return updatedCoach;
    } catch (error) {
      throw new Error(`Error when updating coach: ${error}`);
    }
  }
    
  public async deleteCoach(id: number) {    
    try {
      const coach = await this.coachModel.findByPk(id);
      if (!coach) {
        throw new Error('Coach not found');
      }
      await coach.destroy();
      return { message: 'Coach deleted successfully' };
    } catch (error) {
      throw new Error(`Error when deleting coach: ${error}`);
    }
  }
}