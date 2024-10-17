// 1
function convertMinutesToHours(minutes) {
  return (Math.floor(minutes / 60)) + ':' + (minutes % 60);
}
console.log(convertMinutesToHours(75));

function convertMinutesToHoursInNumber(minutes) {
  return (Math.floor(minutes / 60)) + ((minutes % 60) / 60);
}
console.log(convertMinutesToHoursInNumber(75));


// 2
function isTextUppercase(text) {
  return text.toUpperCase() === text;
}
console.log(isTextUppercase('START'));


// 3
function isDivisible(numberToDivide, firstNumberToDivideBy, secondNumberToDivideBy) {
  return numberToDivide % firstNumberToDivideBy === 0 && numberToDivide % secondNumberToDivideBy === 0;
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
    return number * -1;
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
function basicOp(operation, valueOne, valueTwo){
  if (operation === '+') {
    return valueOne + valueTwo;
  }
  if (operation === '-') {
    return valueOne - valueTwo;
  }
  if (operation === '*') {
    return valueOne * valueTwo;
  }
  if (operation === '/') {
    return valueOne / valueTwo;
  }
}
console.log(basicOp("+", 4, 8));

// 9
function century(year) {
  return (Math.ceil(year / 100));
}
console.log(century(1801));

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
  const firstLetterFromName = (name.toLowerCase())[0];
  if (firstLetterFromName === 'r') {
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}
console.log(areYouPlayingBanjo('Robert'));

// 12
function bmi(weight, height) {
  const bmiCalculate = weight / (height * height);
  if (bmiCalculate <= 18.5) {
    return 'Underweight';
  } else if (bmiCalculate <= 25) {
    return 'Normal';
  } else if (bmiCalculate <= 30) {
    return 'Overweight';
  } else if (bmiCalculate > 30) {
    return 'Obese';
  }
}

console.log(bmi(80, 180));