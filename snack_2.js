console.log('snack 2');

const championsLeague = [
    {
        name: 'Real Madrid',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Benfica',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Amburgo',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Ajax',
        points: 0,
        fouls: 0,
    }
]


for (let i = 0; i < championsLeague.length; i++) {
    const teams = championsLeague[i];
    const randomPoints = Math.floor(Math.random() * 100) + 1;
    const randomFouls = Math.floor(Math.random() * 100) + 1;
    teams.points = randomPoints
    teams.fouls = randomFouls
    console.log(championsLeague);
}