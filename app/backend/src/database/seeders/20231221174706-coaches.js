module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'coaches',
      [
        {
          name: 'Wesley Carvalho',
          nacionality: 'Brasil',
          age: 49,
          team_id: 1
        },
        {
          name: 'Jair Ventura',
          nacionality: 'Brasil',
          age: 44,
          team_id: 2
        },
        {
          name: 'Luiz Felipe Scolari',
          nacionality: 'Brasil',
          age: 75,
          team_id: 3
        },
        {
          name: 'Rogério Ceni',
          nacionality: 'Brasil',
          age: 50,
          team_id: 4
        },
        {
          name: 'Tiago Nunes',
          nacionality: 'Brasil',
          age: 43,
          team_id: 5
        },
        {
          name: 'Pedro Caixinha',
          nacionality: 'Portugal',
          age: 53,
          team_id: 6
        },
        {
          name: 'Mano Menezes',
          nacionality: 'Brasil',
          age: 61,
          team_id: 7
        },
        {
          name: 'Claudio Tencati',
          nacionality: 'Brasil',
          age: 50,
          team_id: 8
        },
        {
          name: 'Paulo Autuori',
          nacionality: 'Brasil',
          age: 67,
          team_id: 9
        },
        {
          name: 'António Oliveira',
          nacionality: 'Portugal',
          age: 41,
          team_id: 10
        },
        {
          name: 'Tite',
          nacionality: 'Brasil',
          age: 62,
          team_id: 11
        },
        {
          name: 'Fernando Diniz',
          nacionality: 'Brasil',
          age: 49,
          team_id: 12
        },
        {
          name: 'Juan Pablo Vojvoda',
          nacionality: 'Argentina',
          age: 48,
          team_id: 13
        },
        {
          name: 'Renato Gaúcho',
          nacionality: 'Brasil',
          age: 61,
          team_id: 14
        },
        {
          name: 'Eduardo Coudet',
          nacionality: 'Argentina',
          age: 49,
          team_id: 15
        },
        {
          name: 'Thiago Carpini',
          nacionality: 'Brasil',
          age: 39,
          team_id: 16
        },
        {
          name: 'Abel Ferreira',
          nacionality: 'Portugal',
          age: 44,
          team_id: 17
        },
        {
          name: 'Dorival Júnior',
          nacionality: 'Brasil',
          age: 61,
          team_id: 18
        },
        {
          name: 'Ramón Díaz',
          nacionality: 'Argentina',
          age: 64,
          team_id: 19
        },
        {
          name: 'Leonardo Condé',
          nacionality: 'Brasil',
          age: 45,
          team_id: 20
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('coaches', null, {});
  },
};