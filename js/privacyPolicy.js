const Checkbox = document.querySelector("#checkbox-privacy-policy");
const linkPrivacyPolicy = document.querySelector("#open");
const modal = document.querySelector("#modal");
const PrivacyPolicy = document.querySelector("#privacy-policy");
const declineButton = document.querySelector("#decline");
const acceptButton = document.querySelector("#accept");

linkPrivacyPolicy.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  PrivacyPolicy.className = "zoom-in";
});

declineButton.addEventListener("click", (e) => {
  e.preventDefault();
  Checkbox.checked = false;
  modal.style.display = "none";
  PrivacyPolicy.classList.remove("zoom-in");
});

acceptButton.addEventListener("click", (e) => {
  e.preventDefault();
  Checkbox.checked = true;
  modal.style.display = "none";
  PrivacyPolicy.classList.remove("zoom-in");
});
