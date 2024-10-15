// 1
function convertMinutesToHours(minutes) {
  return (Math.floor(minutes / 60)) + ':' + (minutes % 60);
}
console.log(convertMinutesToHours(75));

function convertMinutesToHoursInNumber(minutes) {
  return (Math.floor(minutes / 60)) + (minutes % 60) / 100;
}
console.log(convertMinutesToHoursInNumber(75));


// 2
function isTextUppercase(text) {
  return text.toUpperCase() === text;
}
console.log(isTextUppercase('START'));


// 3
function isDivisible(dividedNumber, divideBy1, divideBy2) {
  return dividedNumber % divideBy1 === 0 && dividedNumber % divideBy2 === 0;
}
console.log(isDivisible(6,3,3));


// 4
function getBillboardPrice(word, price) {
  const wordLength = word.trim().length;
  return wordLength * price;
}

console.log(getBillboardPrice('Hello world!', 10));


// 5
function makeOppositeNumer(number) {
  return number - (number * 2);
}
console.log(makeOppositeNumer(45));


// 6
function makeNegativeWithCheck(number) {
  if (number < 0){
    return number;
  } else {
    return number * - 1;
  }
}
console.log(makeNegativeWithCheck(45));


// 7
function removeChar(string){
  const cutStringSign = (string.trim().length)-1;
  return string.substring(1, cutStringSign);
}
console.log(removeChar('START'));

// 8
function basicOp(operation, value1, value2){
  if(operation === "+") {
    return value1 + value2
  }
  if(operation === "-") {
    return value1 - value2
  }
  if(operation === "*") {
    return value1 * value2
  }
  if(operation === "/") {
    return value1 / value2
  }
}
console.log(basicOp("+", 4, 8));

// 9
function century(year) {
  if (year % 100 === 0) {
    return (Math.floor(year / 100));
  } else {
    return (Math.floor(year / 100)+1);
  }
}
console.log(century(1700));

// 10
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(evenOrOdd(2));

// 11
function areYouPlayingBanjo(name) {
  const firstLetterFromName = Array.from(name)[0];
  if (firstLetterFromName === 'R' || firstLetterFromName === 'r') {
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}
console.log(areYouPlayingBanjo('Robert'));

// 12
function bmi(weight, height) {
  const bmiCalc = weight/(height*height);
  if (bmiCalc <= 18.5) {
    return "Underweight";
  } else if (bmiCalc <= 25) {
    return "Normal";
  } else if (bmiCalc <= 30) {
    return "Overweight";
  } else if (bmiCalc > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 180));