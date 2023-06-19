// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winning
// 7. Play again

// 1.

const prompt = require("prompt-sync")();
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmont = parseFloat(depositAmount);
    if (isNaN(numberDepositAmont) || numberDepositAmont <= 0) {
      console.log("Invalid deposit amount, try again!");
    } else {
      return numberDepositAmont;
    }
  }
};

const depositAmount = deposit();
console.log(depositAmount);
