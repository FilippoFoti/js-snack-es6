// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse 
// proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.

const team = [
    {
        nome: "AS Matic",
        punti: "0",
        falli: "0",
    },
    {
        nome: "Scarsenal",
        punti: "0",
        falli: "0",
    },
    {
        nome: "RealColizzati",
        punti: "0",
        falli: "0",
    },
    {
        nome: "Aston Birra",
        punti: "0",
        falli: "0",
    },
    {
        nome: "Divano Kiev",
        punti: "0",
        falli: "0",
    },
];

for (let i = 0; i < team.length; i++ ) {
    team[i].punti = Math.floor(Math.random() * 150);
    team[i].falli = Math.floor(Math.random() * 100);
};

const newArrayTeam = team.map (({nome, falli}) => ({nome,falli}));
console.log(team);
console.log(newArrayTeam)
