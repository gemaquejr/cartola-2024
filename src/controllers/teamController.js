let teams = [
  { id: 1, nome: 'Time A' },
  { id: 2, nome: 'Time B' },
];

const getAllTeams = (_req, res) => {
  res.status(200).json(teams);
};

const getTeamById = (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === parseInt(id));
  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }
  res.status(200).json(team);
};
  
  // Exportar os controladores
  module.exports = {
    getAllTeams,
    getTeamById,
  };