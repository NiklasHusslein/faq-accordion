const faq1 = document.getElementById("faq-1");
const faq2 = document.getElementById("faq-2");
const faq3 = document.getElementById("faq-3");
const faq4 = document.getElementById("faq-4");

const faq1answer = document.getElementById("faq-1-answer");
const faq2answer = document.getElementById("faq-2-answer");
const faq3answer = document.getElementById("faq-3-answer");
const faq4answer = document.getElementById("faq-4-answer");

function toggleAnswer(faq, answer) {
  if (answer.style.display === "none") {
    answer.style.display = "block";
    faq.children[1].style.display = "none";
    faq.children[2].style.display = "block";
  } else {
    answer.style.display = "none";
    faq.children[1].style.display = "block";
    faq.children[2].style.display = "none";
  }
}

faq1.addEventListener("click", () => {
  toggleAnswer(faq1, faq1answer);
});

faq2.addEventListener("click", () => {
  toggleAnswer(faq2, faq2answer);
});

faq3.addEventListener("click", () => {
  toggleAnswer(faq3, faq3answer);
});

faq4.addEventListener("click", () => {
  toggleAnswer(faq4, faq4answer);
});
