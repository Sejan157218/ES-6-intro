// defult parameter
function sum(num1,num2=20){
    return num1 + num2
}
console.log(sum(5));

const name = 'sejan';


// use backCode
const myDelails  = `My name is ${name}
I am ${sum(5)}`;
console.log(myDelails);


// arrow function

const arrowFunction = (first,last='mahumud')=>first +' ' + last
const arrowFunction1 = (first,last='mahumud')=>{
    const name = first;
    return `${first} ${last}`
}

console.log(arrowFunction('sejan'));
console.log(arrowFunction1('sejan'));


// spead operator

const number = [5,6,7,8,9,5,5,2,5,55,77,88];
const min = Math.min(number); //not work
const minSpread = Math.min(...number);
console.log(min);
console.log(minSpread);


function getSum(a, b=9){
    return a+b;
}
console.log(getSum(2, 7));

const y = x => x*x; 
const x = y(5);
console.log(x);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const ADDD =[...nayikas];
console.log(ADDD);
