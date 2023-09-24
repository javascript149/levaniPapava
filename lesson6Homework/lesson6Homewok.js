


class Shape{
    constructor(name){
        this.name=name
    }

    area(){
        return "Area calculation not implemented for generic shape"
    }
}


class Circle extends Shape{
    constructor(name, radius){
        super(name)
        this.radius=radius;
    }

    area(){
        return ` ${this.name} area calculation is equal to ${Math.PI * this.radius * this.radius}`
    }
}

const circle=new Circle("circle",5)

console.log(circle.area())

class Rectangle extends Shape{
    constructor(name, width, height){
        super(name);
        this.width=width;
        this.height=height;
    }

    area(){
        return `${this.name} area calculation is equal to ${this.width * this.height}`
    }
}


const rectangle=new Rectangle("rectangle", 5, 8)

console.log(rectangle.area())

class Triangle extends Shape{
    constructor(name, base, height){
        super(name);
        this.base=base;
        this.height=height;
    }

    area(){
        return `${this.name} area calculation is eqaul to ${(this.base * this.height) /2}`
    }
}

const triangle=new Triangle("triangle", 5, 7)

console.log(triangle.area())