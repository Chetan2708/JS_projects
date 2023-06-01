// - - -     A A A (win)   1  line
// - - -     B A D   (no win) 2 line
// - - -     C A D      (no win) 3 line


//Deposit Some amount
//Enter the number of lines user wants to bet on
// Collect bet from user (depending upon money deposited and number of lines)
// Make a SymbolCount (how many symbols are there) and SymbolValues object (the values for each symbol)

const ROWS = 3;
const COLS = 3;

const SymbolsCount = {
  A: 2, //2 A's
  B: 4, //4 B's
  C: 3,
  D: 5,
};
const SymbolValues = {
  A: 5, // if user gets the line filled with A, he gets a 5x multiplier
  B: 4, // if user gets the line filled with B, he gets a 4x multiplier
  C: 3,
  D: 2,
};

// Function to deposit some amount
const deposit = () => {
  while (true) {
    const user = prompt("Enter your amount: ");
    const deposited = parseFloat(user); // parseFloat converts a string to a floating-point number.
    if (isNaN(deposited) || deposited <= 0) {
      // If the entered value is a string like "Hello" or a non-positive number, it will be NaN (not a number).
      alert("Enter a valid amount");
    } else {
      return deposited;
    }
  }
};

// Function to input the number of lines user wants to bet on
const line = () => {
  while (true) {
    const user_lines = prompt("Enter the number of lines between 1-3 ");
    const NumberOfLines = parseFloat(user_lines);
    if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
      alert("Enter a valid input");
    } else {
      return NumberOfLines;
    }
  }
};

// Function to collect the bet amount
const bet = (Balance, Lines) => {
  while (true) {
    const user_bet = prompt("Enter the bet per line : ");
    const betnum = parseFloat(user_bet);
    if (isNaN(betnum) || betnum <= 0 || betnum > Balance / Lines) {    // bet per line (e.g., if $15 on 2 lines, then $15*2 <= $40 or $15 > $40/2)
      alert("Invalid Bet");
    } else {
      return betnum;
    }
  }
};

// Function to generate a random spin of the wheel
const spin = () => {
  const symbols = []; // Array to store symbols
  for (const [symbol, count] of Object.entries(SymbolsCount)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const wheel = []; // Array to store the main array that will contain random symbols
  for (let i = 0; i < COLS; i++) {
    wheel.push([]);
    const wheelSymbols = [...symbols]; // Create a copy of the symbols array, this array contains symbols and each symbol will get removed
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * wheelSymbols.length);
      wheel[i].push(wheelSymbols[randomIndex]); // Pushing random symbol to wheel array
      wheelSymbols.splice(randomIndex, 1); // Remove the symbol from available symbols (1 at a time)
    }
  }
  return wheel;
};

// Function to transpose the reels
const transpose = (reels) => {
  const rows = []; // Array to store the transpose of symbols

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

// Function to print the rows of symbols
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const symbol of row) {
      rowString += `| ${symbol} `;
    }
    console.log(rowString);
  }
};

// Function to calculate the winnings based on the rows and bet amount
const getWinnings = (rows, bet, lines) => {
  let wins = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let same = true;
    for (const symbol of symbols) {
      if (symbol !== symbols[0]) {
        same = false;
        break;
      }
    }
    if (same) {
      wins += bet * SymbolValues[symbols[0]];
    }
  }
  return wins;
};

// Main game function
const game = () => {
  let Balance = deposit();
  while (true) {
    console.log(`Your current balance is $${Balance}`);
    const NumberOfLines = line();
    const betCollected = bet(Balance, NumberOfLines);
    Balance -= betCollected * NumberOfLines;
    const reels = spin();
    const rows = transpose(reels);

    printRows(rows);
    const winner = getWinnings(rows, betCollected, NumberOfLines);
    Balance += winner;
    console.log("You won $" + winner.toString());
    
    if (Balance <= 0) {
      console.log("You ran out of money");
      break;
    }
    const play = prompt("Do you want to play again? (y/n)");
    if (play.toLowerCase() !== "y") {
      break;
    }
  }
};

// Start the game
game();
