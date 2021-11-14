/**
 * @param {number} x
 * @return {boolean}
 */

const getReverse = (n) => String(n).split("").reverse().join("");
const isPalindrome = (x) => getReverse(x) == x ? true : false
