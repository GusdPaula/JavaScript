class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
    }
}

const product1 = new Product("Shirt", 19.99);

product1.displayProduct();