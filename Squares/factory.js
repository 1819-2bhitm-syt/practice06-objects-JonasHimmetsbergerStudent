function createSquare(length) {
    return {
        length,
        getArea: function () {
            return this.length * this.length;
        }
    };
}

let square1 = createSquare(7);
console.log("1. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());

square1 = createSquare(2);
console.log("1. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());