//Varables
let userScore = 0;
let computerScore = 0;
//Doms
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const AI = document.getElementById("AI");
const HUMAN = document.getElementById("HUMAN");

const humanChoice = document.getElementById("choice_human");
const aiChoice = document.getElementById("choice_ai");

const flex = document.getElementById("flex");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");
const body = document.getElementById("body");

//Event listeners
// rock.addEventListener("click", () => turn("rock"));
// scissors.addEventListener("click", () => turn("scissors"));
// paper.addEventListener("click", () => turn("paper"));

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);
  const choices = ["rock", "scissors", "paper"];
  let computerChoice = choices[ramdomChoiceIndex];
  return computerChoice;
};
let urDun = (event) => {
  if (event === "next") {
    flex.style.display = "flex";
    result.style.display = "none";
    body.classList.remove("body3", "body2");
    body.classList.add("body");
  }
  if (event === "restart") {
    flex.style.display = "flex";
    result.style.display = "none";
    body.classList.remove("body3", "body2");
    body.classList.add("body");
    userScore = 0;
    HUMAN.innerHTML = userScore;
    computerScore = 0;
    AI.innerHTML = computerScore;
    humanChoice.src = "./images/animation=0, choice=1.png";
    aiChoice.src = "./images/animation2=0, choice=1.png";
  }
};
let turn = (choice) => {
  const computerChoice = computerChoicer();

  setTimeout(function () {
    flex.style.display = "none";
  }, 200);

  console.log(
    "(Таны сонголт:",
    choice,
    ")",
    " (Компьютерийн сонголт:",
    computerChoice,
    ")"
  );

  if (choice === "rock") {
    setTimeout(function () {
      humanChoice.src = "./images/animation=1, choice=1.png";
    }, 200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=2, choice=1.png";
    }, 400);
    setTimeout(function () {
      humanChoice.src = "./images/animation=3, choice=1.png";
    }, 600);
    setTimeout(function () {
      humanChoice.src = "./images/animation=4, choice=1.png";
    }, 800);
    setTimeout(function () {
      humanChoice.src = "./images/animation=5, choice=1.png";
    }, 1000);
    setTimeout(function () {
      humanChoice.src = "./images/animation=6, choice=1.png";
    }, 1200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=7, choice=1.png";
    }, 1400);
  }
  if (choice === "scissors") {
    setTimeout(function () {
      humanChoice.src = "./images/animation=1, choice=2.png";
    }, 200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=2, choice=2.png";
    }, 400);
    setTimeout(function () {
      humanChoice.src = "./images/animation=3, choice=2.png";
    }, 600);
    setTimeout(function () {
      humanChoice.src = "./images/animation=4, choice=2.png";
    }, 800);
    setTimeout(function () {
      humanChoice.src = "./images/animation=5, choice=2.png";
    }, 1000);
    setTimeout(function () {
      humanChoice.src = "./images/animation=6, choice=2.png";
    }, 1200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=7, choice=2.png";
    }, 1400);
  }
  if (choice === "paper") {
    setTimeout(function () {
      humanChoice.src = "./images/animation=1, choice=3.png";
    }, 200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=2, choice=3.png";
    }, 400);
    setTimeout(function () {
      humanChoice.src = "./images/animation=3, choice=3.png";
    }, 600);
    setTimeout(function () {
      humanChoice.src = "./images/animation=4, choice=3.png";
    }, 800);
    setTimeout(function () {
      humanChoice.src = "./images/animation=5, choice=3.png";
    }, 1000);
    setTimeout(function () {
      humanChoice.src = "./images/animation=6, choice=3.png";
    }, 1200);
    setTimeout(function () {
      humanChoice.src = "./images/animation=7, choice=3.png";
    }, 1400);
  }
  if (computerChoice === "rock") {
    setTimeout(function () {
      aiChoice.src = "./images/animation2=1, choice=1.png";
    }, 200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=2, choice=1.png";
    }, 400);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=3, choice=1.png";
    }, 600);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=4, choice=1.png";
    }, 800);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=5, choice=1.png";
    }, 1000);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=6, choice=1.png";
    }, 1200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=7, choice=1.png";
    }, 1400);
  }
  if (computerChoice === "scissors") {
    setTimeout(function () {
      aiChoice.src = "./images/animation2=1, choice=2.png";
    }, 200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=2, choice=2.png";
    }, 400);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=3, choice=2.png";
    }, 600);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=4, choice=2.png";
    }, 800);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=5, choice=2.png";
    }, 1000);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=6, choice=2.png";
    }, 1200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=7, choice=2.png";
    }, 1400);
  }
  if (computerChoice === "paper") {
    setTimeout(function () {
      aiChoice.src = "./images/animation2=1, choice=3.png";
    }, 200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=2, choice=3.png";
    }, 400);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=3, choice=3.png";
    }, 600);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=4, choice=3.png";
    }, 800);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=5, choice=3.png";
    }, 1000);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=6, choice=3.png";
    }, 1200);
    setTimeout(function () {
      aiChoice.src = "./images/animation2=7, choice=3.png";
    }, 1400);
  }

  if (choice === computerChoice) {
    setTimeout(function () {
      result.style.display = "block";
    }, 1410);
    console.log("Тэнцлээ!");
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")
  ) {
    console.log("Та яллаа!");
    userScore++;
    setTimeout(function () {
      result.style.display = "block";
      result1.innerHTML = "YOU WIN !";
      HUMAN.innerHTML = userScore;
      body.classList.add("body2");
    }, 1400);
  } else {
    console.log("Та ялагдлаа!");
    computerScore++;
    setTimeout(function () {
      result.style.display = "block";
      result1.innerHTML = "YOU LOOSE";
      AI.innerHTML = computerScore;
      body.classList.add("body3");
    }, 1400);
  }
  console.log(`Одоогийн оноо: Та ${userScore} - Компьютер ${computerScore}`);
};

// user oorin songolt oruuldag

// computer songodog

// hen ylsan esehiig shalgana

// user bolon computer onootoi bna /0/

// onoo nemne
