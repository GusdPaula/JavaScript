class Animal{
    constructor(name){
        this.name = name;
    }

}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name);
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25)

console.log(rabbit)