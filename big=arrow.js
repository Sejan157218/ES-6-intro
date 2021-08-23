const multiply = (num1,num2,num3)=> num1 * num2 * num3;
console.log(multiply(5,5,5));

const nameFull = name => 'sejan';
console.log(nameFull());


const fullName = () => 'sejan';
console.log(fullName());

const multiLine= (num1,num2,num3)=>{
    const num1And2 = num1 + num2;
    const num4 = num1 - num3
    return num1And2 + num4;
}

console.log(multiLine(10,5,5))
