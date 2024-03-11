
let mail = document.getElementById("userValue");
let response = document.getElementById("response")

let arrayUsersMail = ["Pippo@gmail.com", "ZioLuciano@gmail.com", "SenatoreRomano@gmail.com", "Pizza@libero.it"];
console.log(arrayUsersMail);

const logIn = document.getElementById("log-in");
let playButton = document.getElementById("play-button")



logIn.addEventListener('click', function () {
    let inputUserMail = mail.value;
    let checkedUserMail = "";
    let userFlag = false;
    for (let i = 0; i < arrayUsersMail.length; i++) {
        if (arrayUsersMail[i].toLocaleLowerCase() === inputUserMail.toLocaleLowerCase()) {
            userFlag = true;
            checkedUserMail = arrayUsersMail[i];
            enbaleButtons(playButton);

        }
    }
    response.innerHTML = (userFlag === true ? `<h3>Bentornato ${inputUserMail.substr(0, inputUserMail.indexOf("@"))}</h3>` : '<h3>Devi registrarti per poter giocare</h3>')
})

function enbaleButtons(element) {
    element.classList.remove("disabled")
}

//  response.innerHTML = `<h3>Bentornato ${inputUserMail.substr(inputUserMail.indexOf("@"))}</h3>` : response.innerHTML = `<h3>Devi registrarti per poter giocare</h3>`