function RNG(min: number, max: number) {
    const rng = Math.random();
    return Math.trunc(rng * (max - min + 1)) + min;
}

function RNGSequence(length: number, min: number, max: number) {
    if (length > max - min) { 
        throw new Error("Length is greater than the range of numbers.");
    }
    const res: number[] = [];
    while (res.length < length) {
        const rn = RNG(min, max);
        if (res.includes(rn)) {
            continue;
        }
        res.push(rn);
    }
    return res;
}

const route = ["Milano", "Roma", "Napoli", "Torino", "Firenze", "Bologna", "Venezia", "Genova", "Palermo", "Catania"];

const estrazioni: { [ruota: string]: number[]} = {};

for (const ruota of route) {
const estrazione = RNGSequence(5, 1, 100);
estrazioni [ruota] = estrazione;
}

console.log(JSON.stringify(estrazioni, null, 2));
// function RNGdec(min: number, max: number, precision: number) {
//     const multFactor = Math.pow(10, precision);
//     return RNG(min * multFactor, max * multFactor) / multFactor;
// }