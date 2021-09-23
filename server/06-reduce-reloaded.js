/*
problema: hallar la cantidad de veces que se repite un elemento dentro de un array
*/

const sampleArr = [1, 1, 2, 2, 3, 4, 5, 1, 4, 8, 6, 7, 4, 3]

const rta = sampleArr.reduce((obj, item) => {
  if (!obj[item]) { // si el ítem no existe se inicializa con 1
    obj[item] = 1;
  } else { // si el ítem ya existe se suma a lo que ya existe
    obj[item] += 1;
  }
  return obj;
}, {})

// console.log(rta)

/*
segundo ejercicio
*/

const data = [{
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "high",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "high",
  },
];
const rta2 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
    return obj;
  }, {});

// console.log(rta2)

const rta3 = data.map(item => item.level)
// console.log(rta3)

// reto
const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result)