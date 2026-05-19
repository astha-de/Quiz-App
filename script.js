const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", answer: false },
      { text: "Delhi", answer: true },
      { text: "Lucknow", answer: false },
      { text: "Jaipur", answer: false }
    ]
  },

  {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      { text: "Tiger", answer: false },
      { text: "Elephant", answer: false },
      { text: "Lion", answer: true },
      { text: "Bear", answer: false }
    ]
  },

  {
    question: "How many days are there in a week?",
    answers: [
      { text: "5", answer: false },
      { text: "6", answer: false },
      { text: "7", answer: true },
      { text: "8", answer: false }
    ]
  },

  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", answer: false },
      { text: "Mars", answer: true },
      { text: "Jupiter", answer: false },
      { text: "Venus", answer: false }
    ]
  },

  {
    question: "Which gas do humans need to breathe?",
    answers: [
      { text: "Nitrogen", answer: false },
      { text: "Oxygen", answer: true },
      { text: "Hydrogen", answer: false },
      { text: "Carbon Dioxide", answer: false }
    ]
  },

  {
    question: "Which festival is called the Festival of Lights?",
    answers: [
      { text: "Holi", answer: false },
      { text: "Eid", answer: false },
      { text: "Diwali", answer: true },
      { text: "Christmas", answer: false }
    ]
  },

  {
    question: "How many hours are there in a day?",
    answers: [
      { text: "12", answer: false },
      { text: "18", answer: false },
      { text: "24", answer: true },
      { text: "30", answer: false }
    ]
  },

  {
    question: "Which fruit is yellow in color?",
    answers: [
      { text: "Apple", answer: false },
      { text: "Banana", answer: true },
      { text: "Grapes", answer: false },
      { text: "Mango", answer: false }
    ]
  },

  {
    question: "What do bees make?",
    answers: [
      { text: "Milk", answer: false },
      { text: "Honey", answer: true },
      { text: "Water", answer: false },
      { text: "Juice", answer: false }
    ]
  },

  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", answer: false },
      { text: "Atlantic Ocean", answer: false },
      { text: "Pacific Ocean", answer: true },
      { text: "Arctic Ocean", answer: false }
    ]
  }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let  score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
 function showQuestion(){
  resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.answer){
          button.dataset.answer = answer.answer;
        }
        button.addEventListener("click",selectAnswer);
    });
 }

 function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);

  }
 }

 function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.answer === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.answer === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
 }

 function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
 }

 function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
 }

 nextButton.addEventListener("click",() =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
 })

 startQuiz();
