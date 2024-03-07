/* Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
Consigli del giorno: Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico! */

//chiedo di inserire il numero di utenti
const TeamNumber = prompt('Inserisci un numero tra 1 e 10')

//verifichiamo che l'utente inserisca un numero tra 1 e 10 

if(isNaN(TeamNumber)  || (TeamNumber) <1 || (TeamNumber) >10 ){
    alert('ERRORE HAI INSERITO UN NUMERO NON VALIDO RIPROVA')
}

// creo una variabile per i membri del team 

const TeamMembers = [];

// creo un ciclo for per inserire ciascun membro del team nell'array

for (let i = 1; i <= Number(TeamNumber); i++) {
    
    const TeamMember = prompt(`Inserisci il nome del ${i}° elemento`)
    TeamMembers.push(TeamMember)
    }

// creo una card per ogni membro aggiunto del team

for (let i = 0; i < TeamMembers.length; i++) {
    newcard(TeamMembers[i])
}



/***
 * SEZIONE FUNZIONI
 * 
 */

// creo la funzione che genera la card per ciasun utente e la aggiunge all'elemento row nella DOM

function newcard(person){

    // creo un tag div
    const newElement = document.createElement('div')

    // asseggno la classe all'elemento div
    newElement.className = 'col-3' 

    // aggiungo codice HTML al nuovo elemento
    newElement.innerHTML = `<div id="${person.toLowerCase()}" class="card"><img src="https://xsgames.co/randomusers/avatar.php?g=male" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${person}</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis nobis, aspernatur quod ab officia odit praesentium a corrupti? Facilis.</p><a href="#" class="btn btn-primary">Rimuovi</a></div></div><!-- /.card -->`;

    //seleziono elemento row
    const rowElement = document.querySelector('.row')

    //aggiungiamo elemento alla fine del row
    rowElement.appendChild(newElement)


}