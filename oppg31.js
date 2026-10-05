class Kort {
    constructor(numer, sort, norsk) {
        this.nummer = numer;
        this.sort = sort;
        this.norsk = norsk;
    }

    symbol() {
        const engelskeNavn = {
            1: "A",
            11: "J",
            12: "Q",
            13: "K"
        };

        const norskeNavn = {
            1: "Ess",
            11: "Kn",
            12: "D",
            13: "K"
        };

        const symboler = {
            hjerter: "♥️",
            ruter: "♦️",
            kløver: "♣️",
            spar: "♠️"
        };

        let navn = this.nummer;

        if (this.nummer === 1 || this.nummer > 10) {
            navn = this.norsk ? norskeNavn[this.nummer] : engelskeNavn[this.nummer];
        }

        return navn + symboler[this.sort];
    }
}

function lagKortstokk() {
    const farger = ["hjerter", "ruter", "kløver", "spar"];
    const kortstokk = [];

    for (const i of farger) {
        for (let nummer = 1; nummer <= 13; nummer++) {
            kortstokk.push(new Kort(nummer, i, false));
        }
    }

    return kortstokk;
}


function main() {
    const kortstokk = lagKortstokk();

    console.log(kortstokk[14].symbol());
    console.log(kortstokk[24].symbol());
    console.log(kortstokk[47].symbol());
}

main();