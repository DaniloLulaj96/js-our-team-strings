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