function Rectangle(length, width) {
    this.length = length;
    this.width = width;
    this.getArea = function () {
        return this.length * this.width;
    };
}

let square1 = new Rectangle(8, 3);
console.log(`1. Rechteck: 
Länge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}
`);

square1 = new Rectangle(60, 10);
console.log(`2. Rechteck: 
Länge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}
`);

square1 = new Rectangle(9, 5);
console.log(`3. Rechteck: 
Länge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}
`);