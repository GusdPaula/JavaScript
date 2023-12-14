function sayHello(){
    console.log("Hello");
}

const id = setTimeout(sayHello, 3000);

clearTimeout(id);