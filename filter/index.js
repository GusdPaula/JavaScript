let numbers = [1, 2 ,3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 === 0;
}

let even = numbers.filter(isEven);

console.log(even);