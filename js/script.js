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



