import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class MatchService {
  public matchModel = Match;
  public teamModel = Team;

  public async getAllMatches() {
    try {
      const matches = await this.matchModel.findAll({
        include: [
          { model: this.teamModel, as: 'teamHome', attributes: ['teamName'] },
          { model: this.teamModel, as: 'teamAway', attributes: ['teamName'] },
        ],
        attributes: { exclude: ['homeTeam', 'awayTeam'] },
      });
      return matches;
    } catch (error) {
      throw new Error(`Error when searching for ${error}`);
    }
  }
    
  public async createMatch(validMatch: {homeTeam: number, homeTeamGoals: number, awayTeam: number, awayTeamGoals: number, inProgress: boolean}) { 
    try {
      const { homeTeam, awayTeam } = validMatch;

      if (!homeTeam || !awayTeam) {
        throw new Error('Invalid match data: Home team or away team missing');
      }

      const existingMatch = await this.matchModel.findOne({ 
        where: { 
          homeTeam,
          awayTeam,
        } 
      });

      if (existingMatch) {
        throw new Error('Match between home team and away team already exists');
      }

      const newMatch = await this.matchModel.create(validMatch);
      return newMatch;
    } catch (error) {
      throw new Error(`Error when creating match: ${error}`);
    }
  }
      
  public async getMatchById(id: number) {   
    try {
      const match = await this.matchModel.findByPk(id);
      return match;
    } catch (error) {
      throw new Error(`Error when searching for match: ${error}`)
    }
  }
    
  public async updateMatch(id: number, matchData: { [matchField: string]: any }) {    
    try {
      const matchToUpdate = await this.matchModel.findByPk(id);
      if (!matchToUpdate) {
        throw new Error('Match not found');
      }
      
      const updatedMatch = await matchToUpdate.update(matchData);
      return updatedMatch;
    } catch (error) {
      throw new Error(`Error when updating match: ${error}`);
    }
  }
    
  public async deleteMatch(id: number) {    
    try {
      const match = await this.matchModel.findByPk(id);
      if (!match) {
        throw new Error('Match not found');
      }
      await match.destroy();
      return { message: 'Match deleted successfully' };
    } catch (error) {
      throw new Error(`Error when deleting match: ${error}`);
    }
  }
}