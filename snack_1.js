console.log('snack 1');

const bicycles = [
    {
        name: 'Giacomo',
        weight: 20
    },
    {
        name: 'Giacomo',
        weight: 18
    },
    {
        name: 'Giacomo',
        weight: 16
    },
    {
        name: 'Giacomo',
        weight: 40
    },
    {
        name: 'Giacomo',
        weight: 10
    },
    {
        name: 'Giacomo',
        weight: 8
    }
]

// console.log(bicycles[0].weight);

let minorBicycle = ''
for (let i = 0; i < bicycles.length; i++) {
    const bicycle = bicycles[i];
    let minorWeight = bicycles[0].weight
    //console.log(bicycle.weight);
    if (bicycle.weight < minorWeight) {
        minorWeight = bicycle.weight
        minorBicycle = bicycle
    }
    
}

console.log(minorBicycle);
