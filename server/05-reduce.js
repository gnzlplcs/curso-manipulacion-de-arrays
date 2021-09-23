const totals = [1, 2, 3, 4];

let result = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  result += element;
}
console.log(result)

// using reduce
const resultWithReduce = totals.reduce((acc, val) => acc + val, 100); // el segundo parámetro es para dar un valor inicial al acumulador
console.log(resultWithReduce)
