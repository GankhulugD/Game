//Varables
let userScore = 0;
let computerScore = 0;
//Doms
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

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

let turn = (choice) => {
  const computerChoice = computerChoicer();

  console.log(
    "(Таны сонголт:",
    choice,
    ")",
    " (Компьютерийн сонголт:",
    computerChoice,
    ")"
  );

  if (choice === computerChoice) {
    console.log("Тэнцлээ!");
  } else if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")
  ) {
    console.log("Та яллаа!");
    userScore++;
  } else {
    console.log("Компьютер яллаа!");
    computerScore++;
  }

  console.log(`Одоогийн оноо: Та ${userScore} - Компьютер ${computerScore}`);
};

// user oorin songolt oruuldag

// computer songodog

// hen ylsan esehiig shalgana

// user bolon computer onootoi bna /0/

// onoo nemne
