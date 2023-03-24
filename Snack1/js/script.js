// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bike = [
    {
        nome: "Bianchi",
        peso: "1,1 Kg",
    },
    {
        nome: "Atala",
        peso: "2,3 Kg",
    },
    {
        nome: "Olmo",
        peso: "5,1 Kg",
    },
    {
        nome: "Casati",
        peso: "3,5 Kg",
    },
];

console.log(bike);

let smallBike = bike[0];

for(let i = 0; i < bike.length; i++) {
    if (bike[i].peso < smallBike.peso) {
        smallBike = bike[i];
    }
};

const {nome, peso} = smallBike;

document.getElementById("result").innerHTML = `La bici da corsa ${nome} è quella che pesa meno con ${peso}.`;
