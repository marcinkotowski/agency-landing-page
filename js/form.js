const successContaner = document.querySelector("#after-submit");
const formContainer = document.querySelector("#before-submit");
const form = document.querySelector("#contact");
const button = document.querySelector("#consultation button");

form.addEventListener("submit", statusFormCheck);

function statusFormCheck(e) {
  e.preventDefault();

  const styles = window.getComputedStyle(successContaner);
  const successDisplayType = styles.getPropertyValue("display");

  if (successDisplayType === "none") {
    const inputs = Array.from(form.querySelectorAll("input"));
    sendMail(inputs);
  } else {
    backToForm();
  }
}

function sendMail(inputs) {
  // fetch("https://formsubmit.co/ajax/example.com@gmail.com", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({
  //     imie: inputs[0].value,
  //     nazwisko: inputs[1].value,
  //     telefon: inputs[2].value,
  //   }),
  // });

  successContaner.style.display = "flex";
  if (formContainer.classList.contains("shown")) {
    formContainer.classList.remove("shown");
  }
  successContaner.className = "shown";

  formContainer.style.display = "none";

  button.style.backgroundColor = "#4fbe36";
  button.style.color = "white";
  button.innerHTML = "OK";
  button.className = "success";
}

function backToForm() {
  form.reset();

  const successButton = document.querySelector(".success");
  successButton.classList.remove("success");

  successContaner.style.display = "none";
  successContaner.classList.remove("shown");

  formContainer.style.display = "flex";
  formContainer.className = "shown";

  button.style.backgroundColor = "#f6c325";
  button.style.color = "#293845";
  button.innerHTML = "Wyślij";
}
