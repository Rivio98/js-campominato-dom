
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

function generateBombs(max) {
    return Math.floor(Math.random() * max + 1);
}
//funzione per generare una nuova partita
function newGame() {
    //creo un array contenente le bombe
    let bombs = [];

    //creo variabile per il punteggio
    let score = 0;
<<<<<<< HEAD

    //creao una variabile per stabilire se la partita è finita 
    let gameOver = false;
=======
>>>>>>> 8099535671ebd20435aa1b6987777a77077825d0
    grid.innerHTML = '';
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



