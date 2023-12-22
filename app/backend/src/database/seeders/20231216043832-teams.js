module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'Athletico-PR',
          stadium_name:'Arena da Baixada',
          team_logo:'https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg',
        },
        {
          team_name: 'Atlético-GO',
          stadium_name:'Castelo do Dragão',
          team_logo:'https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020.svg',
        },
        {
          team_name: 'Atlético-MG',
          stadium_name:'Arena MRV',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg',
        },
        {
          team_name: 'Bahia',
          stadium_name:'Arena Fonte Nova',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/bahia.svg',
        },
        {
          team_name: 'Botafogo',
          stadium_name:'Estádio Olímpico Nilton Santos',
          team_logo:'https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg',
        },
        {
          team_name: 'Bragantino',
          stadium_name:'Arena Red Bull',
          team_logo:'https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg',
        },
        {
          team_name: 'Corinthians',
          stadium_name:'Neo Química Arena',
          team_logo:'https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg',
        },
        {
          team_name: 'Criciúma',
          stadium_name:'Majestoso',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/criciuma.svg',
        },
        {
          team_name: 'Cruzeiro',
          stadium_name:'Mineirão',
          team_logo:'https://s.sde.globo.com/media/organizations/2021/02/13/cruzeiro_2021.svg',
        },
        {
          team_name: 'Cuiabá',
          stadium_name:'Arena Pantanal',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg',
        },
        {
          team_name: 'Flamengo',
          stadium_name:'Maracanã',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg',
        },
        {
          team_name: 'Fluminense',
          stadium_name:'Maracanã',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg',
        },
        {
          team_name: 'Fortaleza',
          stadium_name:'Arena Castelão',
          team_logo:'https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg',
        },
        {
          team_name: 'Grêmio',
          stadium_name:'Arena do Grêmio',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/12/gremio.svg',
        },
        {
          team_name: 'Internacional',
          stadium_name:'Beira-Rio',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg',
        },
        {
          team_name: 'Juventude',
          stadium_name:'Alfredo Jaconi',
          team_logo:'https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg',
        },
        {
          team_name: 'Palmeiras',
          stadium_name:'Allianz Parque',
          team_logo:'https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg',
        },
        {
          team_name: 'São Paulo',
          stadium_name:'Morumbi',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg',
        },
        {
          team_name: 'Vasco',
          stadium_name:'São Januário',
          team_logo:'https://s.sde.globo.com/media/organizations/2021/09/04/vasco_SVG.svg',
        },
        {
          team_name: 'Vitória',
          stadium_name:'Barradão',
          team_logo:'https://s.sde.globo.com/media/organizations/2018/03/11/vitoria.svg',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
