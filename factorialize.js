let factorialize = num => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialize(7))
console.log(1*2*3*4*5*6*7)