
let mail = document.getElementById("userValue");
let userLogInResponse = document.getElementById("login-response")
let arrayUsersMail = ["Pippo@gmail.com", "ZioLuciano@gmail.com", "SenatoreRomano@gmail.com", "Pizza@libero.it"];
const logIn = document.getElementById("log-in");
const playButton = document.getElementById("play-button") //assegno alle variabili e costanti gli elementi html

mail.addEventListener("input", () => {
    if (mail.value !== "") {
        enableButtons(logIn);
    }
});   //controllo che venga inserito qualcosa nell'input
let checkedUser = ""; //dichiaro checkuser per utilizzarlo dopo nelle varie interpolazioni che richiamno il nome del player

logIn.addEventListener('click', function () {
    let inputUserMail = mail.value;  //raccolgo il valore della mail
    let userFlag = false;     //dichiaro un flag per verificare che l'utente sia registrato o meno
    for (let i = 0; i < arrayUsersMail.length; i++) {   //semplice ciclo for
        if (arrayUsersMail[i].toLocaleLowerCase() === inputUserMail.toLocaleLowerCase()) { //caseinsenstive?
            userFlag = true;
            checkedUser = inputUserMail.substr(0, inputUserMail.indexOf("@"))
            logIn.classList.add("d-none")
            mail.classList.add("d-none")  //se correttamente loggato scompare la sezione del log in
            enableButtons(playButton);  //richiamo una funzione a cui passo il parametro per abilitare il pulsante di gioco
        }
    }
    userLogInResponse.innerHTML = (userFlag === true ? `<h3>Bentornato ${checkedUser}</h3>` : '<h3>Devi registrarti per poter giocare</h3>')
    //saluto all'utente appena loggato, o richiesta di registrazione
})

function enableButtons(element) {
    element.classList.remove("disabled")
} //funzione utilizzata per abilitare i pulsanti


let playerNameTab = document.querySelector("h2")
let gameResponse = document.getElementById('game-response')
let rollResults = document.querySelector('.results')  //altre variabili a cui associo elementi persi dal document

playButton.addEventListener('click', function () {
    playerNameTab.innerHTML = checkedUser;   //nomino la colonna di sinistra con il nome dell'utente
    gameResponse.innerHTML = "";         //resetto il testo del risultato del lancio, qual'ora si volesse fare ulteriori tentativi
    let userRoll = getRndInteger(1, 6);
    let pcRoll = getRndInteger(1, 6);
    rolldice(playerDice, userRoll);  //!Animazioni dei dadi per i miei bonus
    rolldice(pcDice, pcRoll);
    playButton.classList.add("disabled"); //setTimeout è una funzione asincrona e così impedisco che il pulsante venga clikkato prima che il messaggio del vicnitore sia stato correttamente visualizzato
    setTimeout(() => {  //attendo la fine delle animazioni del css di 6 secondi
        if (userRoll > pcRoll) {
            gameResponse.innerHTML = `<h3>${checkedUser} ha vinto con ${userRoll} contro il PC con ${pcRoll}</h3>`
        } else if (userRoll < pcRoll) {
            gameResponse.innerHTML = `<h3>${checkedUser} ha perso con ${userRoll} contro il PC con ${pcRoll}</h3>`
        } else {
            gameResponse.innerHTML = `<h3>${checkedUser} e PC hanno pareggiato con ${pcRoll}</h3>`
        };
        enableButtons(playButton); //riabilito e rinomino il pulsante per ulteriori giocate
        playButton.innerHTML = "Gioca di Nuovo";
    }, 6000);

})


/*
!My BONUS
*/

let playerDice = document.getElementById("player-dice")
let pcDice = document.getElementById("pc-dice")  //assegno alle variabili i dadi

function rolldice(dice, result) {
    let xRandom;  //randomizzo le varie rotazione facendo in modo da ottenere solo dei multipli
    let yRandom;
    if (result === 1) {
        xRandom = 360 * getRndInteger(4, 24);
        yRandom = 360 * getRndInteger(4, 24);
    } else if (result === 2) {
        xRandom = 180 + ((360) * getRndInteger(4, 24));
        yRandom = 360 * getRndInteger(4, 24);
    } else if (result === 3) {
        xRandom = (360) * getRndInteger(4, 24);
        yRandom = 270 + (360 * getRndInteger(4, 24));
    } else if (result === 4) {
        xRandom = 360 * getRndInteger(4, 24);
        yRandom = 90 + (360 * getRndInteger(4, 24));
    } else if (result === 5) {
        xRandom = 270 + (360 * getRndInteger(4, 24));
        yRandom = 360 * getRndInteger(4, 24);
    } else {
        xRandom = (90) + ((360) * getRndInteger(4, 24));
        yRandom = 360 * getRndInteger(4, 24);
    }
    dice.style.transform = `rotateX(${xRandom}deg) rotateY(${yRandom}deg) `; //rollo i dadi
}