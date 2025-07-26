const quizData = [
  {
    question: "HTML এর পূর্ণরূপ কী?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS কী কাজে ব্যবহার হয়?",
    options: ["ডিজাইন করতে", "ডাটাবেজ চালাতে", "অ্যাপ রান করাতে"],
    answer: "ডিজাইন করতে"
  },
  {
    question: "JavaScript হলো ___",
    options: ["Programming Language", "Markup Language", "Style Sheet"],
    answer: "Programming Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.textContent = "🎉 কুইজ শেষ!";
  optionsEl.innerHTML = "";
  scoreEl.textContent = `আপনার স্কোর: ${score} / ${quizData.length}`;
}

// শুরুতেই প্রশ্ন লোড হোক
loadQuestion();
