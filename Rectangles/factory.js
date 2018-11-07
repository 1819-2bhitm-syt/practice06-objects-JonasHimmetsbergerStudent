function createSquare(length, width) {
    return {
        length,
        width,
        getArea: function () {
            return this.length * this.width;
        }
    };
}

let square1 = new createSquare(7, 4);
console.log(`1. Rechteck: 
Länge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}
`);

square1 = new createSquare(30, 5);
console.log(`2. Rechteck: 
Länge = ${square1.length}, Breite = ${square1.width}, Fläche = ${square1.getArea()}
`);