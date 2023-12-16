import Team from '../database/models/Team';

export default class TeamService {
  public teamModel = Team;

  public async getAllTeams() {
    try {
      const teams = await this.teamModel.findAll();
      return teams;
    } catch (error) {
      throw new Error(`Error when searching for ${error}`);
    }
  }
    
  public async createTeam(teamName: string) { 
    try {
      const newTeam = await this.teamModel.create({ teamName });
      return newTeam;
    } catch (error) {
      throw new Error(`Error when creating team: ${error}`);
    }
  }
      
  public async getTeamById(id: number) {   
    try {
      const team = await this.teamModel.findByPk(id);
      return team;
    } catch (error) {
      throw new Error(`Error when searching for team: ${error}`)
    }
  }
    
  public async updateTeam(id: number, teamName: { [teamField: string]: any }) {    
    try {
      const teamToUpdate = await this.teamModel.findByPk(id);
      if (!teamToUpdate) {
        throw new Error('Team not found');
      }
      
      const updatedTeam = await teamToUpdate.update(teamName);
      return updatedTeam;
    } catch (error) {
      throw new Error(`Error when updating team: ${error}`);
    }
  }
    
  public async deleteTeam(id: number) {    
    try {
      const team = await this.teamModel.findByPk(id);
      if (!team) {
        throw new Error('Team not found');
      }
      await team.destroy();
      return { message: 'Team deleted successfully' };
    } catch (error) {
      throw new Error(`Error when deleting team: ${error}`);
    }
  }
}