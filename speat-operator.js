const num = [5,6,9,88,99,77];
const num2 = (5,6,7,88,99,44,55,22);

const num3 = Math.max(...num);

const num4 = [5,Math.max(...num),888]
const num5 = [5,...num,888]

console.log(Math.max(num));
console.log(Math.max(num2));
console.log(Math.max(num3));
console.log(num4);
console.log(num5);
