// const questions = [
//   {
//     question: "What does HTML stand for?",
//     answers: [
//       { text: "Hyper Type Multi Language", correct: false },
//       { text: "Hyper Text Markup Language", correct: true },
//       { text: "Hyper Type Markup Language", correct: false },
//       { text: "Home Text Multi Language", correct: false },
//     ],
//   },
//   {
//     question: "What does CSS stand for?",
//     answers: [
//       { text: "Cascading Style Sheet", correct: true },
//       { text: "Cute Style Sheet", correct: false },
//       { text: "Computer Style Sheet", correct: false },
//       { text: "Codehal Style Sheet", correct: false },
//     ],
//   },
//   {
//     question: "What does PHP stand for?",
//     answers: [
//       { text: "Hypertext Preprocessor", correct: true },
//       { text: "Hometext Programming", correct: false },
//       { text: "Hypertext Preprogramming", correct: false },
//       { text: "Programming Hypertext Preprocessor", correct: false },
//     ],
//   },
//   {
//     question: "What does SQL stand for?",
//     answers: [
//       { text: "Strength Query Language", correct: false },
//       { text: "Stylesheet Query Language", correct: false },
//       { text: "Science Question Language", correct: false },
//       { text: "Structured Query Language", correct: true },
//     ],
//   },
//   {
//     question: "What does XML stand for?",
//     answers: [
//       { text: "Excellent Multiple Language", correct: false },
//       { text: "Explore Multiple Language", correct: false },
//       { text: "Extra Markup Language", correct: false },
//       { text: "Extensible Markup Language", correct: true },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-btn");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtons.appendChild(button);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("incorrect");
//   }

//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });

//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();


/* ---------- Quiz data ---------- */
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Type Multi Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Type Markup Language", correct: false },
      { text: "Home Text Multi Language", correct: false },
    ],
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Cascading Style Sheet", correct: true },
      { text: "Cute Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
      { text: "Codehal Style Sheet", correct: false },
    ],
  },
  {
    question: "What does PHP stand for?",
    answers: [
      { text: "Hypertext Preprocessor", correct: true },
      { text: "Hometext Programming", correct: false },
      { text: "Hypertext Preprogramming", correct: false },
      { text: "Programming Hypertext Preprocessor", correct: false },
    ],
  },
  {
    question: "What does SQL stand for?",
    answers: [
      { text: "Strength Query Language", correct: false },
      { text: "Stylesheet Query Language", correct: false },
      { text: "Science Question Language", correct: false },
      { text: "Structured Query Language", correct: true },
    ],
  },
  {
    question: "What does XML stand for?",
    answers: [
      { text: "Excellent Multiple Language", correct: false },
      { text: "Explore Multiple Language", correct: false },
      { text: "Extra Markup Language", correct: false },
      { text: "Extensible Markup Language", correct: true },
    ],
  },
];

/* ---------- DOM elements ---------- */
const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-btn");
const nextButton     = document.getElementById("next-btn");

/* ---------- State vars ---------- */
let currentQuestionIndex = 0;
let score = 0;

/* ---------- Initialisation ---------- */
startQuiz();
nextButton.addEventListener("click", handleNextButton);

/* ---------- Functions ---------- */
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  const current = questions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${current.question}`;

  current.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("btn");
    if (answer.correct) btn.dataset.correct = "true";
    btn.addEventListener("click", selectAnswer);
    answerButtons.appendChild(btn);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect   = selectedBtn.dataset.correct === "true";

  selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");
  if (isCorrect) score++;

  Array.from(answerButtons.children).forEach((btn) => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";

  /* Replace old listener with a one-time restart */
  nextButton.removeEventListener("click", handleNextButton);
  nextButton.addEventListener(
    "click",
    () => {
      nextButton.removeEventListener("click", startQuiz);
      nextButton.addEventListener("click", handleNextButton);
      startQuiz();
    },
    { once: true }
  );
}

