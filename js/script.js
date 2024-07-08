
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

function generateBombs(square) {
    bomb = [];
    for (let i = 0; i < 16; i++) {//numero fisse di mine
        let position;
        do {
            position = Math.floor(Math.random() * square);//faccio in modo che in base agli square, le bombe vengano distribuite per un numero massimo di 16 sulla grid senza che si possa ripetere la posizione di ogni bomba 
        } while (bomb.includes(position));
        bomb.push(position);
    }
}

//creao una variabile globale (array) per contenere le bombe
let bomb = [];



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



