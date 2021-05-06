/* Partendo dall'esercizio fatto tempo fa, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno(numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente */
var chara = ["!", "?", ".", ",", ":", ";", "*", "*", "+", "-", "/", "'", "[", "]", "(", ")", "[", "]", "#", "_", "<", ">", "€", "£", "$", "%", "&",];
function loadTicket() {
    var username = document.getElementById("username").value;
    var km = Number(document.getElementById("km").value);
    var prezzo = 0.21;
    var prezzoXkm = (prezzo * km);
    var prezzofinale = 0;

    var pass_name = document.getElementById("nomepasseggero");
    var sconto = document.getElementById("sconto");
    var wagon = document.getElementById("wagon");
    var n_wagon = document.getElementById("n_wagon");
    var prize = document.getElementById("prize");
    var eta_selected = document.getElementById("eta");
    if (isNaN(username) == false || username.includes(chara)) {
        alert("Inserisci dei dati anagrafici corretti!");
    } else {
        pass_name.innerHTML = username;
        wagon.innerHTML = genCode(1, 10);
        n_wagon.innerHTML = genCode(90000, 99999);
        if (eta_selected.selectedIndex == 0) {
            //Sconto anziano
            prezzofinale = prezzoXkm - ((prezzoXkm * 40) / 100);
            prize.innerHTML = prezzofinale.toFixed(2) + " €";
            sconto.innerHTML = "Sconto anzianità<br>del 40%!"
        } else if (eta_selected.selectedIndex == 2) {
            //Sconto minorenne
            prezzofinale = prezzoXkm - ((prezzoXkm * 20) / 100);
            prize.innerHTML = prezzofinale.toFixed(2) + " €";
            sconto.innerHTML = "Sconto minorenni<br>del 20%!"

        } else {
            prezzofinale = prezzoXkm;
            prize.innerHTML = prezzofinale.toFixed(2) + " €";
            sconto.innerHTML = "Nessuno"
        }
    }
}

function genCode(min, max) {
    var n = parseInt((Math.random() * (max - min + 1)) + min);
    return n;
}

//DEVO FARE IL CALCOLO PER I PREZZI E LA GENERAZIONE DEI NUMERI