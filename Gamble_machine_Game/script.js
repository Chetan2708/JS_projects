// - - -     A A A (win)   1  line
// - - -     B A D   (no win) 2 line
// - - -     C A D      (no win) 3 line

//Deposit Some amount
//Enter the number of lines user wants to bet on
// Collect bet from user (depending apon money deposited and number of lines)
//Make a SymbolCount(how many symbols are there) and SymbolValues object (the values for each symbol)

const ROWS = 3;
const COLS = 3;

const SymbolsCount = {
  A: 2, //2 A's
  B: 4, //4 B's
  C: 3,
  D: 5,
};
const SymbolValues = {
  A: 5, // if  user get the line filled with A , he gets 5 multiplier
  B: 4,
  // if  user get the line filled with B, he gets 4 multiplier
  C: 3,
  D: 2,
};

//Deposit some amount
const deposit = () => {
  //function deposit(){}
  while (true) {
    const user = prompt("Enter your amount: ");
    const deposited = parseFloat(user); //parsefloat converts a C string to a floating-point number.
    if (isNaN(deposited) || deposited <= 0) {
      //if entrered value is a string like HEllo it will NAN(not a number)
      alert("Enter a valid amount");
    } else {
      return deposited;
    }
  }
};

//     Lines you want to bet on
const line = () => {
  // taking input b/w 1-3
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

// Collecting bet
const bet = (Balance, Lines) => {
  while (true) {
    const user_bet = prompt("Enter the bet per line : ");
    const betnum = parseFloat(user_bet);
    if (isNaN(betnum) || betnum <= 0 || betnum > Balance / Lines) {    // bet per line  (if 15 on 2 line then 15*2 < 40 or 15 > 40/2 )
      alert("Invalid Bet");
    } else {
      return betnum;
    }
  }
};
const spin = () => {
  const symbols = []; //array
  for (const [symbol, count] of Object.entries(SymbolsCount)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const wheel = []; //main array that will contain random symbol
  for (let i = 0; i < COLS; i++) {
    wheel.push([]);
    const wheelSymbols = [...symbols]; //copy array, this array contains Symbols , each symbol will get removed
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * wheelSymbols.length);
      wheel[i].push(wheelSymbols[randomIndex]); //pusing random symbol to wheel array
      wheelSymbols.splice(randomIndex, 1); //remove from available symbols , 1 at a time
    }
  }
  return wheel;
};

const transpose = (reels) => {
  const rows = []; //array storing the transpose of Symbols

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const symbol of row) {
      rowString += `| ${symbol} `;
      // if (i!=rows.length - 1){
      //     rowString+= " | "
      // }
    }
    console.log(rowString);
  }
};
const getWinnings = (rows, bet, lines) => {
  let wins = 0;
  for (let row = 0; row < lines; row++) {
    const symbols= rows[row];
    let same = true;
    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        same = false;
        break;
      }
    }
    if (same) {
      wins += bet * SymbolValues[symbols[0]];
    }
  }
  return wins
};

const game=()=>{
let Balance = deposit();
while (true) { 
console.log(`Your current balance is $${Balance}`)
const NumberOfLines = line();
const betCollected = bet(Balance, NumberOfLines);
Balance -= betCollected*NumberOfLines
const reels = spin();
const rows = transpose(reels);

printRows(rows);
const winner = getWinnings(rows, betCollected, NumberOfLines);
Balance+=winner
console.log("You won , $" + winner.toString());
if (Balance<=0){
  console.log("Your ran out of money")
  break
}
const play  = prompt("Do you want to play again ?y/n?")
if (play != "y") break; 
}}
game()