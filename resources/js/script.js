
let mail = document.getElementById("userValue");
let userLogInResponse = document.getElementById("login-response")
let arrayUsersMail = ["Pippo@gmail.com", "ZioLuciano@gmail.com", "SenatoreRomano@gmail.com", "Pizza@libero.it"];
const logIn = document.getElementById("log-in");
const playButton = document.getElementById("play-button")

mail.addEventListener("input", () => {
    if (mail.value !== "") {
        enableButtons(logIn);
    }
});
let checkedUser = "";

logIn.addEventListener('click', function () {
    let inputUserMail = mail.value;
    let userFlag = false;
    for (let i = 0; i < arrayUsersMail.length; i++) {
        if (arrayUsersMail[i].toLocaleLowerCase() === inputUserMail.toLocaleLowerCase()) {
            userFlag = true;
            checkedUser = inputUserMail.substr(0, inputUserMail.indexOf("@"))
            logIn.classList.add("d-none")
            mail.classList.add("d-none")
            enableButtons(playButton);
        }
    }
    userLogInResponse.innerHTML = (userFlag === true ? `<h3>Bentornato ${checkedUser}</h3>` : '<h3>Devi registrarti per poter giocare</h3>')
    console.log(checkedUser);
})

function enableButtons(element) {
    element.classList.remove("disabled")
}


let playerNameTab = document.querySelector("h2")
let gameResponse = document.getElementById('game-response')
let rollResults = document.querySelector('.results')

playButton.addEventListener('click', function () {
    playerNameTab.innerHTML = checkedUser;
    gameResponse.innerHTML = "";
    //rollResults.classList.remove("d-none");
    let userRoll = getRndInteger(1, 6);
    let pcRoll = getRndInteger(1, 6);
    rolldice(playerDice, userRoll);
    rolldice(pcDice, pcRoll);
    playButton.classList.add("disabled");
    setTimeout(() => {
        if (userRoll > pcRoll) {
            gameResponse.innerHTML = `<h3>${checkedUser} ha vinto con ${userRoll} contro il PC con ${pcRoll}</h3>`
        } else if (userRoll < pcRoll) {
            gameResponse.innerHTML = `<h3>${checkedUser} ha perso con ${userRoll} contro il PC con ${pcRoll}</h3>`
        } else {
            gameResponse.innerHTML = `<h3>${checkedUser} e PC hanno pareggiato con ${pcRoll}</h3>`
        };
        enableButtons(playButton);
        playButton.innerHTML = "Gioca di Nuovo";
    }, 6000);

})


/*
!My BONUS
*/

let playerDice = document.getElementById("player-dice")
let pcDice = document.getElementById("pc-dice")

function rolldice(dice, result) {
    let xRandom;
    let yRandom;
    if (result === 1) {
        xRandom = 360 * getRndInteger(1, 24);
        yRandom = 360 * getRndInteger(1, 24);
    } else if (result === 2) {
        xRandom = 180 + ((360) * getRndInteger(1, 24));
        yRandom = 360 * getRndInteger(1, 24);
    } else if (result === 3) {
        xRandom = (360) * getRndInteger(1, 24);
        yRandom = 270 + (360 * getRndInteger(1, 24));
    } else if (result === 4) {
        console.log("4");
        xRandom = 360 * getRndInteger(1, 24);
        yRandom = 90 + (360 * getRndInteger(1, 24));
    } else if (result === 5) {
        xRandom = 270 + (360 * getRndInteger(1, 24));
        yRandom = 360 * getRndInteger(1, 24);
    } else {
        xRandom = (90) + ((360) * getRndInteger(1, 24));
        yRandom = 360 * getRndInteger(1, 24);
    }
    dice.style.transform = `rotateX(${xRandom}deg) rotateY(${yRandom}deg) `;
}