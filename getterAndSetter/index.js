// getter = special method that makes a property readable
// setter = special method that makes a proprerty writable

// validate and modify a value when reading/writing a property


class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number!")
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight
        }
        else{
            console.error("height must be a positive number!")
        }
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }

    get area(){
        return this._width * this._height
    }
}

const rectangle = new Rectangle(10000, 10);

console.log(rectangle);


rectangle.width = 5;
rectangle.height = 10;

console.log(rectangle);
console.log(rectangle.area);