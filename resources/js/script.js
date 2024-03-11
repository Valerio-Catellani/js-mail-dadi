
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
})

function enableButtons(element) {
    element.classList.remove("disabled")
}

let gameResponse = document.getElementById('game-response')

playButton.addEventListener('click', function () {
    console.log("ciao");
    let userRoll = getRndInteger(1, 6);
    let pcRoll = getRndInteger(1, 6);
    if (userRoll > pcRoll) {
        gameResponse.innerHTML = `<h3>${checkedUser} ha vinto con ${userRoll} contro il PC con ${pcRoll}</h3>`
    } else if (userRoll < pcRoll) {
        gameResponse.innerHTML = `<h3>${checkedUser} ha perso con ${userRoll} contro il PC con ${pcRoll}</h3>`
    } else {
        gameResponse.innerHTML = `<h3>${checkedUser} e PC hanno pareggiato con ${pcRoll}</h3>`
    };
    playButton.innerHTML = "Gioca di Nuovo"
})