//RESUELVE LOS EJERCICIOS AQUI

//1
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(array) {
    return array.map(element => element ** 2);
}
const result1 = elevados(numbers);
//2
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
let countryList = ['Italia', 'Japón', 'Valencia', ''];

const result2 = foodList.map((element) => {
    if (element === 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza'
    } else if (element === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen'
    } else if (element === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella'
    } else {
        return 'Aunque no como carne, el Entrecot es sabroso'
    };
});
console.log(result2);
/*
[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
]
*/
//3
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers2.filter(element => element % 2 !== 0);
console.log(oddNumbers);
//4
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];


let result3 = staff.map(element => { return `${element.name} es ${element.role} y le gusta ${element.hobbies[0]} y ver ${element.hobbies[1]}` });

console.log(result3);
// Resultado esperado
/*
  [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
//5
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result4 = inventory.filter(element => element.price > 300).map(element => element.name);
console.log(result4);
//6
let numeros = [39, 2, 4, 25, 62];

const multiplicacion = numeros.reduce((acc, cur) => acc *= cur);
console.log(multiplicacion);
//7
const sentenceElements = [
    'Me',
    'llamo',
    'Vitorino',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result7 = sentenceElements.reduce((acc, cur) => acc + ' ' + cur);
console.log(result7);
//8
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

// const result8 = books.reduce((acc, curr)=> {
//   acc.price += curr.price;
//   return acc.price;
//  });

const filteredArray = books.filter(elements => elements.category === 'code').map(element => element.price).reduce((acc, curr) => acc + curr);

console.log(filteredArray);

