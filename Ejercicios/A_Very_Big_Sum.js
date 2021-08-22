let ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
let arSum = 0;

function aVeryBigSum() {
    ar.forEach(numero => arSum += numero);
}

aVeryBigSum(ar);
console.log(arSum)