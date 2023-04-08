const countCoustomers = document.querySelector("#count-customers");

const observer = new IntersectionObserver((entry) => {
  if (entry[0].isIntersecting) {
    counting();
    observer.unobserve(countCoustomers);
  }
});

observer.observe(countCoustomers);

function counting() {
  let expected = 100;
  let current = 1;
  countCoustomers.innerHTML = `${current}+`;
  const counterInterval = setInterval(() => {
    countCoustomers.innerHTML = `${current}+`;
    if (current == expected) {
      clearInterval(counterInterval);
    }
    current++;
  }, 20);
}
