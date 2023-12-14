let numbers = [
    1,
    2,
    3,
    4,
    5
];

numbers.forEach(double);

function double(element, index, array){
    array[index] = element * 2;
    console.log(array[index]);
}