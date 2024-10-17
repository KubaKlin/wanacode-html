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
  const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  if ((password.trim().length >= 8) && (/[A-Z]/.test(password) >= 1 ) && (specialChars.test(password) >= 1 )) {
    return true;
  } return false;
}
console.log(isValidPassword('passSword!'));

// 9
function getPasswordLenght(passwordVariable) {
  if (passwordVariable.trim().length >= 8) {
    return 1;
  } return 0;
}
console.log(getPasswordLenght('pass'));

function getPasswordLowercaseLetter(passwordVariable) {
  if (/[a-z]/.test(passwordVariable) >= 1 ) {
    return 1;
  } return 0;
}

function getPasswordUppercaseLetter(passwordVariable) {
  if (/[A-Z]/.test(passwordVariable) >= 1 ) {
    return 1;
  } return 0;
}

function getPasswordSpecialLetter(passwordVariable) {
  const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  if (specialChars.test(passwordVariable) >= 1 ) {
    return 1;
  } return 0;
}

function getPasswordRating(passwordVariable) {
  const passwordLength = getPasswordLenght(passwordVariable);
  const passwordLowercase= getPasswordLowercaseLetter(passwordVariable);
  const passwordUppercase = getPasswordUppercaseLetter(passwordVariable);
  const passwordSpecialLetter = getPasswordSpecialLetter(passwordVariable);
  return passwordLength + passwordLowercase + passwordUppercase + passwordSpecialLetter;
}
console.log(getPasswordRating('passWord'));

// 10

function getVipDiscount(isVipMember) {
  if (isVipMember) {
    return 0.05;
  } return 1;
}

function getLoyaltyDiscount(loyaltyPoints) {
  if (loyaltyPoints) {
    return loyaltyPoints * 0.01;
  } return 0;
}

function getInternationalShipping(isShippedInternationally) {
  if (isShippedInternationally) {
    return 10;
  } else {
    return 5;
  }
}

function getTotalOrderCost (baseItemCost, isVipMember, loyaltyPoints, isShippedInternationally) {
  const vipMemberDiscount = getVipDiscount(isVipMember);
  const loyaltyDiscount = getLoyaltyDiscount(loyaltyPoints);
  const shippingPrice = getInternationalShipping(isShippedInternationally);

  return baseItemCost - (baseItemCost * vipMemberDiscount) - loyaltyDiscount + shippingPrice
}
console.log(getTotalOrderCost(10,true,10,true))

// 11
function getTicketPrice (baseTicketPrice, daysLeftToShow, isShowOnWeekend) {
  if (daysLeftToShow > 30) baseTicketPrice = baseTicketPrice - baseTicketPrice * 0.10
  if (isShowOnWeekend) baseTicketPrice = baseTicketPrice + 15;
  return baseTicketPrice;
}

console.log(getTicketPrice(10, 31, true))