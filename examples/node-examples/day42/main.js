let items = [2, 3, 1, 4, 5];
// iterating the items using forEach
items.forEach(value => console.log(value));
console.log('-------------------');
let anotherItems = items.map((value, index) => value * 10);
console.log(anotherItems);