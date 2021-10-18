const items = [
    {weight: 4, value: 450},
    {weight: 3, value: 300},
    {weight: 5, value: 600},
    {weight: 9, value: 900}
];

// for all possible combinations

for (let current = 0; current < Math.pow(2, items.length); current++) {
    console.log(current + ": " + current.toString(2) + ": "+ );
}

function fitness(solution){
    //Extract bits by % 2
    while (solution>0){
        let bit = solution % 2;
        if (bit == 1) {
            value += items[i].value;
            weight += items[i].weight;
        }
        solution = Math.floor(solution/2);
        i++;
    }
    // Max weight = 10 kg
    if (weight>10) {value = 0;}
    return value;
}