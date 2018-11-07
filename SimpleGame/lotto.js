let lottoZiehung = new Array(6);
let tipps = new Array(6);
let schonVorhanden;
let versuche = 0;


lottoZiehung = [5, 11, 27, 31, 34, 40];


const lotto =  {
    drawing: lottoZiehung,

    simulate: function () {
        while (lottoZiehung.toString() !== tipps.toString()) {
            for (let i = 0; i < 6; i++) {
                let x = Math.floor(Math.random() * 45 + 1);
                while (tipps.includes(x)) {
                    x = Math.floor(Math.random() * 45 + 1);
                }
                tipps[i] = x;
            }
            tipps = tipps.sort(function (a, b) {
                {return a - b}
            });
            versuche++;
        }
        return versuche;
    }
};

console.log(lotto.drawing);
console.log(lotto.simulate());