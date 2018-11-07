function Square(length) {
    this.length = length;
    this.getArea = function () {
        return this.length * this.length;
    };
}

let square1 = new Square(20);
console.log("1. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());

square1 = new Square(50);
console.log("2. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());




square1 = new Square(20);
console.log(`1. Quadrat: Seitenlänge = ${square1.length}, Fläche = ${square1.getArea()}`);

square1 = new Square(50);
console.log(`2. Quadrat: Seitenlänge = ${square1.length}, Fläche = ${square1.getArea()}`);


square1 = new Square(20);
console.log(`1. Quadrat: 
Seitenlänge = ${square1.length}, Fläche = ${square1.getArea()}
`);

square1 = new Square(50);
console.log(`2. Quadrat: 
Seitenlänge = ${square1.length}, 
Fläche = ${square1.getArea()}
`);
