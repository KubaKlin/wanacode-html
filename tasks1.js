// 1
function convertMinutesToHours(minutes) {
  return (Math.floor(minutes / 60)) + ':' + (minutes % 60);
}
console.log(convertMinutesToHours(75));


// 2
function isTextUppercase(text) {
  return /^[A-Z]*$/.test(text)
}
console.log(isTextUppercase('START'));


// 3
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else return false;
}
console.log(isDivisible(3,3,4));


// 4
function getBillboardPrice(word, price) {
  const wordLength = word.trim().length;
  return wordLength * price;
}

console.log(getBillboardPrice('Hello world!', 10));


// 5
function makeOppositeNumer(number) {
  return number - (number*2);
}
console.log(makeOppositeNumer(45));


// 6
function makeNegativeWithCheck(num) {
  if (num < 0){
    return num
  } else return -num
}
console.log(makeNegativeWithCheck(45));


// 7
function removeChar(str){
  const strLength = (str.trim().length)-1;
  return str.substring(1, strLength);
}
console.log(removeChar('START'));

// 8
function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2);
}
console.log(basicOp("+", 4, 7));

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
    return ('Even');
  } else {
    return ('Odd');
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