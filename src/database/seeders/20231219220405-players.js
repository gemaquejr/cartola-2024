module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'players',
      [
        {
          position: 'Atacante',
          name: 'Gabigol',
          punctuation: 8.35,
          price: 10.5,
          appreciation: 2.25,
          team_id: 1
        },
        {
          position: 'Meio Campo',
          name: 'Arrascaeta',
          punctuation: 9.60,
          price: 18.9,
          appreciation: 6.25,
          team_id: 3
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('players', null, {});
  },
};