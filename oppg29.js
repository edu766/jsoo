class Kjaeledyr {
    constructor(navn, dyreart, alder, vekt, farge) {
        this.navn = navn;
        this.dyreart = dyreart;
        this.alder = alder;
        this.vekt = vekt;
        this.farge = farge;
    }
    getInfo() {
        return [this.navn, this.dyreart, this.alder, this.vekt, this.farge]
    }
}

const hund = new Kjaeledyr("Beethoven", "hund", 3, 25, "brun");
console.log(hund.getInfo());