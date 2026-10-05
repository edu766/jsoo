class ParkertBil {
    constructor(markeNavn, modellNavn, klokkeslett, dato, betalingsbelop, etasjeNr, plassNr) {
        this.marke = markeNavn;
        this.modell = modellNavn;
        this.klokkeslett = klokkeslett;
        this.dato = dato;
        this.betalt = betalingsbelop;
        this.etasje = etasjeNr;
        this.plass = plassNr;
    }

    betaltTil() {
        const tidOgDato = this.dato + "T" + this.klokkeslett;
        const startTid = Date.parse(tidOgDato);

        const timer = this.betalt / 15;
        const millisekunder = timer * 60 * 60 * 1000;
        const sluttTid = startTid + millisekunder;

        return new Date(sluttTid).toString();
    }
}

const bil = new ParkertBil("ford", "fiesta", "20:00:00", "2026-08-17", 15, 2, 215);

console.log(bil.betaltTil());