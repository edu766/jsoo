window.onload = main;

class Elev {
    constructor(fornavn, etternavn, klasse) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.klasse = klasse;
    }
}

class Laerer {
    constructor(fornavn, etternavn, underviserKlasser) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.underviserKlasser = underviserKlasser;
    }
}

class Fag {
    constructor(navn, fagkode, arstimetall, trekvarterstimer, elever, laerere) {
        this.navn = navn;
        this.fagkode = fagkode;
        this.arstimetall = arstimetall;
        this.trekvarterstimer = trekvarterstimer;
        this.elever = elever;
        this.laerere = laerere;
    }

    beregnUketime() {
        const antallUker = 36;

        if (this.trekvarterstimer === true) {
            return (this.arstimetall / 3) / antallUker;
        } else {
            return this.arstimetall / antallUker;
        }
    }
}

function lesInputTekst(id) {
    const element = document.getElementById(id);
    return element ? element.value.trim() : "";
}

function lesCheckbox(id) {
    const element = document.getElementById(id);
    return element ? element.checked : false;
}

function main() {
    const elever = [
        new Elev(lesInputTekst("elev1_fornavn"), lesInputTekst("elev1_etternavn"), lesInputTekst("elev1_klasse")),
        new Elev(lesInputTekst("elev2_fornavn"), lesInputTekst("elev2_etternavn"), lesInputTekst("elev2_klasse")),
        new Elev(lesInputTekst("elev3_fornavn"), lesInputTekst("elev3_etternavn"), lesInputTekst("elev3_klasse")),
        new Elev(lesInputTekst("elev4_fornavn"), lesInputTekst("elev4_etternavn"), lesInputTekst("elev4_klasse")),
        new Elev(lesInputTekst("elev5_fornavn"), lesInputTekst("elev5_etternavn"), lesInputTekst("elev5_klasse"))
    ];

    const laerere = [
        new Laerer(lesInputTekst("laerer1_fornavn"), lesInputTekst("laerer1_etternavn"), lesInputTekst("laerer1_underviserKlasse")),
        new Laerer(lesInputTekst("laerer2_fornavn"), lesInputTekst("laerer2_etternavn"), lesInputTekst("laerer2_underviserKlasse"))
    ];

    const fag = new Fag(
        lesInputTekst("fag_navn"),
        lesInputTekst("fag_kode"),
        Number(lesInputTekst("fag_arstimetall")),
        lesCheckbox("fag_trekvarterstimer"),
        elever,
        laerere
    );

    const utdata = document.getElementById("utdata");
    const timerPerUke = fag.beregnUketime();

    utdata.textContent =
        "Faget " + fag.navn + " (" + fag.fagkode + ") har " +
        timerPerUke.toFixed(2) + " timer i uka. " +
        "Trekvarterstimer: " + (fag.trekvarterstimer ? "Ja" : "Nei");
}

