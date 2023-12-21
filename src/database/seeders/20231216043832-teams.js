module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'Athletico-PR',
        },
        {
          team_name: 'Atlético-GO',
        },
        {
          team_name: 'Atlético-MG',
        },
        {
          team_name: 'Bahia',
        },
        {
          team_name: 'Botafogo',
        },
        {
          team_name: 'Bragantino',
        },
        {
          team_name: 'Corinthians',
        },
        {
          team_name: 'Criciúma',
        },
        {
          team_name: 'Cruzeiro',
        },
        {
          team_name: 'Cuiabá',
        },
        {
          team_name: 'Flamengo',
        },
        {
          team_name: 'Fluminense',
        },
        {
          team_name: 'Fortaleza',
        },
        {
          team_name: 'Grêmio',
        },
        {
          team_name: 'Internacional',
        },
        {
          team_name: 'Juventude',
        },
        {
          team_name: 'Palmeiras',
        },
        {
          team_name: 'São Paulo',
        },
        {
          team_name: 'Vasco',
        },
        {
          team_name: 'Vitória',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
