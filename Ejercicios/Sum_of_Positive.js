// https://www.codewars.com/kata/5715eaedb436cf5606000381

let resultado = 0;
function positiveSum(arr) {
  const reducer = (prev, next) => prev + next
  let positiveNumbers = arr.filter(numero => numero > 0)
  let result = positiveNumbers.reduce(reducer, 0)
  return result
}

positiveSum([1,-4,7,12]) // OUTPUTS -> 20
