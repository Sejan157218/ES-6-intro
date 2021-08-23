function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
console.log(add(10));


// set defult parameter

function adds(num1,num2=10){
    const sum = num1 + num2;
    return sum;
}
console.log(adds(10));