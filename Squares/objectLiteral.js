let square1 = {
    length: 5,
    getArea: function () {
        return this.length * this.length;
    }
};
let square2 = {
    length: 10,
    getArea: function () {
        return this.length * this.length;
    }
};

console.log("1. Quadrat: Seitenlänge = " + square1.length + ", Fläche = " + square1.getArea());
console.log("2. Quadrat: Seitenlänge = " + square2.length + ", Fläche = " + square2.getArea());