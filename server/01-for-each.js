const letters = ['a', 'b', 'c'];

// recorrido en un array con for normal
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log('for:', element)
}

// recorrido con forEach (mismo resultado)
letters.forEach(item => console.log('forEach:', item));