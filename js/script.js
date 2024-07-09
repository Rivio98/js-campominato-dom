
//------FUNZIONI------//

//Creo una funzione per mettere dentro la grid un quadrato
function createSingleSquare(num) {
    //creo il quadrato come div
    const square = document.createElement('div');
    //aggiungo la classe square al div
    square.classList.add('square');
    //aggiungo il numero dentro il div square
    square.innerText = num + 1;

    //Aggiungo l'evento click al quadrato
    square.addEventListener('click', function () {
        this.classList.add('clicked');

    });

    //restituisco il quadrato
    return square;
}

//funzione per generare la posizione delle bombe

function generateBombsNumber(max) {
    return Math.floor(Math.random() * max + 1);
}


//funzione per generare array bombe
function generateBombsArray(nums, NUM_BOMBS) {

    //array vuoto dove andremo a pushare le bombe
    let bombsArray = [];

    //variabile di controllo per ciclo while
    let control = false;
    //ciclo while per generare le bombe
    while (bombsArray.length < NUM_BOMBS) {
        //genero il numero random
        let num = generateBombsNumber(nums);

        //controllo se il numero è gia in bombsArray
        if (!bombsArray.includes(num)) {
            //se non è presente lo pusho
            bombsArray.push(num);
            let control = true;
        }
    }

}
//funzione per generare una nuova partita
function newGame() {

    //creo variabile per il punteggio
    let score = 0;


    //creao una variabile per stabilire se la partita è finita 
    let gameOver = false;

    //definizione costante che inidca il numero bombe array
    const NUM_BOMBS = 16;

    //svuoto la griglia
    grid.innerHTML = '';

    //creo un array contenente le bombe
    const bombs = generateBombsArray(100, NUM_BOMBS);

    //genero bombe e inserisco nell'array
    for (let i = 0; i < NUM_BOMBS; i++) {

    }
}


//Recupero il pulsante dall HTML
const button = document.getElementsByName('play');

//Aggiungo l'evento
play.addEventListener('click', function () {

    //Recupero l'elemento che conterrà la griglia
    const grid = document.getElementById('grid');

    //aggiungo il 'reset' al pulsante gioca in modo che resetti il tutto
    grid.innerText = '';
    //ciclo per creare 100 caselle 
    for (let i = 0; i < 100; i++) {
        //chiamo la funzione per creare le caselle
        let item = createSingleSquare(i);
        //aggiungo la casella alla griglia
        grid.append(item);
    }
});



