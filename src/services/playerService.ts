import Player from '../database/models/Player';

export default class TeamService {
  public playerModel = Player;

  public async getAllPlayers() {
    try {
      const players = await this.playerModel.findAll();
      return players;
    } catch (error) {
      throw new Error(`Error when searching for ${error}`);
    }
  }
    
  public async createPlayer(playerData: {position: string, name: string, punctuation: number, price: number, appreciation: number, teamId: number}) { 
    try {     
      const newPlayer = await this.playerModel.create(playerData);
      return newPlayer;
    } catch (error) {
      throw new Error(`Error when creating player: ${error}`);
    }
  }
      
  public async getPlayerById(id: number) {   
    try {
      const team = await this.playerModel.findByPk(id);
      return team;
    } catch (error) {
      throw new Error(`Error when searching for player: ${error}`)
    }
  }
    
  public async updatePlayer(id: number, playerData: { [playerField: string]: any }) {    
    try {
      const playerToUpdate = await this.playerModel.findByPk(id);
      if (!playerToUpdate) {
        throw new Error('Player not found');
      }
      
      const updatedPlayer = await playerToUpdate.update(playerData);
      return updatedPlayer;
    } catch (error) {
      throw new Error(`Error when updating player: ${error}`);
    }
  }
    
  public async deletePlayer(id: number) {    
    try {
      const player = await this.playerModel.findByPk(id);
      if (!player) {
        throw new Error('Player not found');
      }
      await player.destroy();
      return { message: 'Player deleted successfully' };
    } catch (error) {
      throw new Error(`Error when deleting player: ${error}`);
    }
  }
}