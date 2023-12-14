// Swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

// swap two elements in an array

const colors = ["red", "green", "blue", "black"];

[colors[0], colors[1]] = [colors[1], colors[0]];

console.log(colors);

// Assign array elements to variables

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor, secondColor, thirdColor);

console.log(extraColors);

// extract values from objects
const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName, lastName, age, job);

// desctructure in function parameters

function displyPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(firstName, lastName, age, job)
}

displyPerson(person2)