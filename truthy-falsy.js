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
function or(firstBoolean, secondBoolean) {
  if (firstBoolean === true) {
    return true;
  }
  if (secondBoolean === true) {
    return true;
  }
  return false;
}
console.log(or(true, false));

function xor(xorFirstCondition, xorSecondCondition) {
  if (xorFirstCondition && !xorSecondCondition) {
    return true;
  }
  if (xorSecondCondition && !xorFirstCondition) {
    return true;
  }
  return false;
}
console.log(xor(true, true));

// 4
function isTruthy(booleanVariable, onTruthy, onFalsy) {
  if (booleanVariable === true) {
    return onTruthy();
  }
  return onFalsy();
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
  return baseCost;
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

function rockPaperScissorsLizardSpock(playerOne, playerTwo) {
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
  const specialCharacters = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  const hasCorrectLength = password.trim().length >= 8;
  const hasCapitalLetters = /[A-Z]/.test(password) >= 1;
  const hasSpecialCharacters = specialCharacters.test(password) >= 1;

  return hasCorrectLength && hasCapitalLetters && hasSpecialCharacters;
}
console.log(isValidPassword('passSword!'));

// 9
function isPasswordLengthValid(password) {
  if (password.trim().length >= 8) {
    return 1;
  }
  return 0;
}
console.log(isPasswordLengthValid('pass'));

function hasUppercaseLetter(password) {
  if (/[a-z]/.test(password) >= 1 ) {
    return 1;
  }
  return 0;
}

function hasLowercaseLetter(password) {
  if (/[A-Z]/.test(password) >= 1 ) {
    return 1;
  } return 0;
}

function hasSpecialLetter(password) {
  const specialChars =/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  if (specialChars.test(password) >= 1 ) {
    return 1;
  }
  return 0;
}

function getPasswordRating(password) {
  const hasCorrectLength = isPasswordLengthValid(password);
  const hasUppercase= hasUppercaseLetter(password);
  const hasLowercase = hasLowercaseLetter(password);
  const hasSpecialCharacter = hasSpecialLetter(password);
  return hasCorrectLength + hasUppercase + hasLowercase + hasSpecialCharacter;
}
console.log(getPasswordRating('passWord'));

// 10

function getVipDiscount(isVipMember) {
  if (isVipMember) {
    return 0.05;
  }
  return 1;
}

function getLoyaltyDiscount(loyaltyPoints) {
  if (loyaltyPoints) {
    return loyaltyPoints * 0.01;
  }
  return 0;
}

function getInternationalShippingPrice(isShippedInternationally) {
  if (isShippedInternationally) {
    return 10;
  }
  return 5;
}

function getTotalOrderCost (baseItemCost, isVipMember, loyaltyPoints, isShippedInternationally) {
  const vipMemberDiscount = getVipDiscount(isVipMember);
  const loyaltyDiscount = getLoyaltyDiscount(loyaltyPoints);
  const shippingPrice = getInternationalShippingPrice(isShippedInternationally);

  return baseItemCost - (baseItemCost * vipMemberDiscount) - loyaltyDiscount + shippingPrice;
}
console.log(getTotalOrderCost(10,true,10,true));

// 11
function getDiscountDueToDaysLeftToShow(daysLeftToShow) {
  if (daysLeftToShow > 30) {
    return 0.10;
  }
  return 0;
}

function getShowOnWeekendDiscount(isOnWeekend) {
  if (isOnWeekend) {
    return 15;
  }
  return 0;
}

function getTicketPrice (baseTicketPrice, daysLeftToShow, isOnWeekend) {
  const daysLeftToShowDiscount = getDiscountDueToDaysLeftToShow(daysLeftToShow);
  const weekendDiscount = getShowOnWeekendDiscount(isOnWeekend);

  return baseTicketPrice - (baseTicketPrice * daysLeftToShowDiscount) + weekendDiscount;
}

console.log(getTicketPrice(10, 31, true));