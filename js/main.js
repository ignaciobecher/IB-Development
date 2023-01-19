const inputName = document.getElementById("name-input");
const inputMail = document.getElementById("mail-input");
const inputConsult = document.getElementById("consult-input");
const btnSend = document.getElementById("btn-send");
const confirmationWindow = document.getElementById("confirmation-window");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Funcion para limpiar campos
function clearFields() {
  inputName.value = "";
  inputMail.value = "";
  inputConsult.value = "";
}

//Funcion confirmar envio de formulario

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  let valueName = inputName.value;
  let valueMail = inputMail.value;
  let valueConsult = inputConsult.value;

  if (valueName === "" || valueMail === "" || valueConsult === "") {
    window.alert("Todos los campos son obligatorios");
  } else if (
    valueName.length >= 5 ||
    valueMail.value.match(validRegex) ||
    valueConsult.length >= 5
  ) {
    confirmationWindow.style.display = "block";
    clearFields();
    setTimeout(() => {
      confirmationWindow.style.display = "none";
    }, 7000);
  }
});
