let userScore = 0;
let comScore = 0;

const Choices = document.querySelectorAll(".choice");
const massage = document.querySelector(".mas");

let yourScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#com-score");

let resatGame = document.querySelector(".resat");

let modeChange = document.querySelector(".dark");
let body = document.querySelector("body");

const genComChoice = () => {
  // Rock Paper Sissor

  let opction = ["Rock", "Paper", "Sissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return opction[randomIndex];
};

let drawGame = () => {
  //   console.log("Game Was Draw");
  massage.innerText = `Game Draw! `;
  massage.style.backgroundColor = "blue";
};

// Who is Thw Winner

let showWinner = (usearWin, usearChoice, comChoice) => {
  if (usearWin) {
    // console.log(`You Win!`);
    userScore++;
    yourScore.innerText = userScore;
    massage.innerText = `You Win! Yours ${usearChoice} beats ${comChoice}`;
    massage.style.backgroundColor = "green";
  } else {
    // console.log("You Lose");
    comScore++;
    computerScore.innerText = comScore;
    massage.innerText = `You Lose! ${comChoice} beats Yours ${usearChoice}`;
    massage.style.backgroundColor = "red";
  }
};

const playGame = (usearChoice) => {
  //   console.log("Usear Choice = ", usearChoice);

  // Generate Comptur Choice

  const comChoice = genComChoice();
  //   console.log("Computer Choice = ", comChoice);

  // PLAY GAME CONDICTION

  if (usearChoice === comChoice) {
    drawGame();
  } else {
    let usearWin = true;
    if (usearChoice === "Rock") {
      // Paper , Sissor
      usearWin = comChoice === "Sissor" ? true : false;
    } else if (usearChoice === "Paper") {
      // Rock ,Sissor
      usearWin = comChoice === "Rock" ? true : false;
    } else if (usearChoice === "Sissor") {
      // Rock , Paper
      usearWin = comChoice === "Rock" ? false : true;
    }

    showWinner(usearWin, usearChoice, comChoice);
  }
};

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let usearChoice = choice.getAttribute("id");
    // console.log("Choice clicked ", usearChoice,);

    playGame(usearChoice);
  });
});

let mode = () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    modeChange.innerText = "Light";
    modeChange.style.backgroundColor = "black";
    modeChange.style.color = "white";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    modeChange.innerText = "Dark";
    modeChange.style.backgroundColor = "white"
    modeChange.style.color = "black";
  }
};

resatGame.addEventListener("click", () => {
  massage.innerText = "Now Play Your Move!";
  massage.style.backgroundColor = "black";
  window.location.reload();
});

modeChange.addEventListener("click", () => {
  mode();
});

document.getElementById("reset").onclick = function() {
    document.getElementById("number").innerHTML = "";
  };
