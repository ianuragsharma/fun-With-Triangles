const quizForm = document.querySelector(".quiz-form");
const questionContainer = document.querySelectorAll(".question-container");
const message = document.querySelector("#quiz-message");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

function calculateScore(event) {
  event.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
      questionContainer[index].style.backgroundColor = "#10B981";
    } else {
      questionContainer[index].style.backgroundColor = "#EF4444";
    }
    index = index + 1;
  }
  message.innerText = "Your Score is " + score;
}

quizForm.addEventListener("submit", calculateScore);
