// Snack Bonus
// Scrivere una funzione che accetti tre argomenti, un array e due numeri 
// (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione 
// compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// es: 
// const numbersArray = [23, 14, 6, 8, 10];
// const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]

const arrayNumber = [7, 14, 28, 56, 112, 224];
const newArrayFilter = filter(arrayNumber, 1, 4)

function filter(newArray, a, b) {
    return newArray.filter((element, index) => index >= a && index <= b);
};

console.log(newArrayFilter);