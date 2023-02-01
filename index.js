let gameStart = confirm("Let's play rock, paper and scissors!");
function formatUserValue(value) {
  return value.trim().toLowerCase();
}
choices = ["rock", "paper", "scissors"];
if (gameStart) {
  while (gameStart) {
    const userValue = prompt("Enter your choice as rock, paper or scissors.");
    if (userValue) {
      const playerChoice = formatUserValue(userValue);
      if (playerChoice.length > 0) {
        if (
          playerChoice === choices[0] ||
          playerChoice === choices[1] ||
          playerChoice === choices[2]
        ) {
          const computerChoice = choices[Math.floor(Math.random() * 3)];
          if (playerChoice === computerChoice) {
            alert(
              `Player Choice: ${playerChoice}\nComputer Choice: ${computerChoice}\nDraw Game!`
            );
            break;
          } else if (
            (playerChoice === choices[0] && computerChoice === choices[1]) ||
            (playerChoice === choices[1] && computerChoice === choices[2])
          ) {
            alert(
              `Player Choice: ${playerChoice}\nComputer Choice: ${computerChoice}\nYou Lose!`
            );
            break;
          } else {
            alert(
              `Player Choice: ${playerChoice}\nComputer Choice: ${computerChoice}\nYou Win!`
            );
            break;
          }
        } else {
          alert("Please enter a valid choice!");
          continue;
        }
      } else {
        alert("Please enter something.");
        break;
      }
    } else {
      alert("You didn't enter rock, paper or scissors.");
      break;
    }
  }
} else {
  alert("Well maybe next time!");
}
