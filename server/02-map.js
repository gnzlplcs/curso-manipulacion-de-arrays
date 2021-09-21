const letters = ['a', 'b', 'c'];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + '++');
}

console.log('original', letters);
console.log('new array', newArray);

// usando map
const newArrayWithMap = letters.map(e => e + '++');

console.log('original', letters);
console.log('new array with map', newArrayWithMap);
