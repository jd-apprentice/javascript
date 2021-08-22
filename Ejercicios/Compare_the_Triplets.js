let scoreAlice = 0;
let scoreBob = 0;
let scoreResultado = [];

const arrA = [17, 28, 30];
const arrB = [99, 16, 8];

function compareTriplets (arrA, arrB) {
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] > arrB[i]) {
            scoreAlice++;
        } else if (arrA[i] < arrB[i]) {
            scoreBob++;
        }
    }
    return scoreResultado;
}

compareTriplets(arrA, arrB);
scoreResultado.push(scoreAlice, scoreBob)
console.log(scoreResultado);
