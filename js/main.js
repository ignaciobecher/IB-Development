const inputName = document.getElementById("name-input");
const inputMail = document.getElementById("mail-input");
const inputConsult = document.getElementById("consult-input");
const btnSend = document.getElementById("btn-send");

btnSend.addEventListener("click", () => {
  let valueName = inputName.value;
  let valueMail = inputMail.value;
  let valueConsult = inputConsult.value;

  if (valueName === "") {
    window.alert("obligatorio");
  } else {
    console.log(valueName, valueMail, valueConsult);
  }
});
