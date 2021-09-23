const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element)
  }
}
console.log(newArray)

// using filter
const newArray2 = words.filter(item => item.length >= 6)
console.log(newArray2)

// exercise
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// devuelve en un array las órdenes que se han entregado y mayores de $100
const deliveredOrders = orders.filter(item => item.delivered && item.total > 100);
console.log(deliveredOrders)

// buscador con filter e includes
const search = query => {
  return orders.filter(item => item.customerName.includes(query));
}
console.log(search('lem'))