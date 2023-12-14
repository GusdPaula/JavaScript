const person = {
    firstName: "SpongeBob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log(`Hi I am ${this.firstName}`)
    },
}

person.sayHello();