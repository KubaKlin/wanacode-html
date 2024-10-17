// 1
function setAlarm(isEmployed, isOnVacation){
  return isEmployed && !isOnVacation;
}
console.log(setAlarm(true, false));

// 2
function closeCompare(firstNumber, secondNumber, numbersMargin = 0){
  const numbersDiff = Math.abs(firstNumber - secondNumber);
  if (numbersDiff <= numbersMargin) {
    return 0;
  }
  if (firstNumber < secondNumber) {
    return -1;
  }
  return 1;
}

// 3
function or(firstVariable, secondVariable) {
  if (firstVariable === true) {
    return true;
  }
  if (secondVariable === true) {
    return true;
  }
  return false;
}
console.log(or(true, false));

function xor(firstVariable, secondVariable) {
  if (firstVariable && !secondVariable) {
    return true;
  }
  if (secondVariable && !firstVariable) {
    return true;
  }
  return false;
}
console.log(xor(true, true));

// 4
function isTruthy(bool, firstFunction, secondFuntion) {
  if (bool == true) return firstFunction();
  return secondFuntion();
}

// 5
function rentalCarCost(days) {
  const baseCost = days * 40;
  if (days >= 7) {
    return baseCost - 50;
  }
  if (days >= 3) {
    return baseCost - 20;
  }
  return days * 40;
}

// 6
function getRealFloor(floorNumber) {
  if (floorNumber <= 0) {
    return floorNumber;
  }
  if (floorNumber >= 13) {
    return floorNumber - 2;
  }
  return floorNumber - 1;
}

// 7
function rpsls(pl1, pl2){
  if ((pl1 === "rock" && pl2 === "lizard") || (pl1 === "rock" && pl2 === "scissors")) return 'Player 1 Won!'
  if ((pl1 === "scissors" && pl2 === "paper") || (pl1 === "scissors" && pl2 === "lizard")) return 'Player 1 Won!'
  if ((pl1 === "paper" && pl2 === "rock") || (pl1 === "paper" && pl2 === "spock")) return 'Player 1 Won!'
  if ((pl1 === "lizard" && pl2 === "spock") || (pl1 === "lizard" && pl2 === "paper")) return 'Player 1 Won!'
  if ((pl1 === "spock" && pl2 === "scissors") || (pl1 === "spock" && pl2 === "rock")) return 'Player 1 Won!'

  if ((pl2 === "rock" && pl1 === "lizard") || (pl2 === "rock" && pl1 === "scissors")) return 'Player 2 Won!'
  if ((pl2 === "scissors" && pl1 === "paper") || (pl2 === "scissors" && pl1 === "lizard")) return 'Player 2 Won!'
  if ((pl2 === "paper" && pl1 === "rock") || (pl2 === "paper" && pl1 === "spock")) return 'Player 2 Won!'
  if ((pl2 === "lizard" && pl1 === "spock") || (pl2 === "lizard" && pl1 === "paper")) return 'Player 2 Won!'
  if ((pl2 === "spock" && pl1 === "scissors") || (pl2 === "spock" && pl1 === "rock")) return 'Player 2 Won!'

  if (pl1 === pl2) return "Draw!"
}

// 8
function isValidPassword(password) {
  return password === 'StrongPassword123'
}
console.log(isValidPassword('password'))

// 9
function isPasswordStrong(passwordVar) {
  let passwordRating = 0;
  const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  if (passwordVar.trim().length >= 8) passwordRating += 1;
  if (/[A-Z]/.test(passwordVar) >= 1 ) passwordRating += 1;
  if (/[a-z]/.test(passwordVar) >= 1 ) passwordRating += 1;
  if (specialChars.test(passwordVar) >= 1 ) passwordRating += 1;
  return passwordRating;
}
console.log(isPasswordStrong('pAAs!'));

// 10
function getTotalOrderCost (baseItemCost, isVipMember, loyaltyPoints, isShippedInternationally) {
  let finalCost = baseItemCost
  if (isVipMember) finalCost = baseItemCost - (baseItemCost * 0.05)
  if (loyaltyPoints) finalCost = finalCost - (loyaltyPoints * 0.01)
  if (isShippedInternationally) {
    finalCost = finalCost + 10
  } else finalCost = finalCost + 5
  return finalCost
}

console.log(getTotalOrderCost(10,true,10,true))

// 11
function getTicketPrice (baseTicketPrice, daysLeftToShow, isShowOnWeekend) {
  if (daysLeftToShow > 30) baseTicketPrice = baseTicketPrice - baseTicketPrice * 0.10
  if (isShowOnWeekend) baseTicketPrice = baseTicketPrice + 15;
  return baseTicketPrice;
}

console.log(getTicketPrice(10, 31, true))