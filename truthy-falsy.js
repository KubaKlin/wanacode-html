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
function willRockWin(opponent) {
  return opponent === 'lizard' || opponent === 'scissors';
}
function willPaperWin(opponent) {
  return opponent === 'rock' || oponent === 'spock';
}
function willScissorsWin(opponent) {
  return opponent === 'paper' || opponent === 'lizard';
}
function willLizardWin(opponent) {
  return opponent === 'spock' || opponent === 'paper';
}
function willSpockWin(opponent) {
  return opponent === 'scissors' || 'rock';
}

function rpsls(playerOne, playerTwo) {
  if (playerOne === playerTwo) {
    return 'Draw!';
  }
  if (playerOne === 'rock' && willRockWin(playerTwo)) {
    return 'Player 1 Won!';
  }
  if (playerOne === 'paper' && willPaperWin(playerTwo)) {
    return 'Player 1 Won!';
  }
  if (playerOne === 'scissors' && willScissorsWin(playerTwo)) {
    return 'Player 1 Won!';
  }
  if (playerOne === 'lizard' && willLizardWin(playerTwo)) {
    return 'Player 1 Won!';
  }
  if (playerOne === 'spock' && willSpockWin(playerTwo)) {
    return 'Player 1 Won!';
  }
  return 'Player 2 Won!';
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