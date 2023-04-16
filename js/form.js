const afterSubmit = document.querySelector("#after-submit");
const beforeSubmit = document.querySelector("#before-submit");
const form = document.querySelector("#contact");
const button = document.querySelector("#consultation button");

form.addEventListener("submit", statusFormCheck);

function statusFormCheck(e) {
  e.preventDefault();

  const styles = window.getComputedStyle(afterSubmit);
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
  //     telefon: inputs[1].value,
  //     godzina: inputs[2].value,
  //   }),
  // });

  afterSubmit.style.display = "flex";
  if (beforeSubmit.classList.contains("shown")) {
    beforeSubmit.classList.remove("shown");
  }
  afterSubmit.className = "shown";

  beforeSubmit.style.display = "none";

  button.style.backgroundColor = "#4fbe36";
  button.style.color = "white";
  button.innerHTML = "OK";
  button.className = "success";
}

function backToForm() {
  form.reset();

  const successButton = document.querySelector(".success");
  successButton.classList.remove("success");

  afterSubmit.style.display = "none";
  afterSubmit.classList.remove("shown");

  beforeSubmit.style.display = "flex";
  beforeSubmit.className = "shown";

  button.style.backgroundColor = "#f6c325";
  button.style.color = "#293845";
  button.innerHTML = "Wyślij";
}
