// 1
function convertMinutesToHours(minutes) {
  return (Math.floor(minutes / 60)) + ':' + (minutes % 60);
}
console.log(convertMinutesToHours(75));


// 2
function isTextUppercase(text) {
  return text.toUpperCase() === text;
}
console.log(isTextUppercase('START'));


// 3
function isDivisible(number1, number2, number3) {
  return number1 % number2 === 0 && number1 % number3 === 0;
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
function makeNegativeWithCheck(num) {
  if (num < 0){
    return num
  } else {
    return -num
  }
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

// 1
const width = 10;
const height = 20;
const rectangleArea = width * height;
console.log(rectangleArea);

// 2
let firstNumber = 100;
let secondNumber = 200;
let tempNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = tempNumber;
console.log(firstNumber, secondNumber);

// 3
const physicsGrade = 4
const mathGrade = 3
const englishGrade = 5

const avarageGrade = (physicsGrade + mathGrade + englishGrade)/3;

if (avarageGrade >=4 ) {
  console.log('avarage grade is ' + avarageGrade + ' congrats!')
} else {
  console.log('Try harder!')
}

// 4
const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

// 5
const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
const monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
  taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log('tax to pay: ' + taxToPay);

// 6
const isSunny = false
if (isSunny) {
  console.log('Don`t forget your sunglasses!')
} else {
  console.log('You might need an umbrella.');
}

// 7
const currentMonth = 3;
if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
  console.log('it`s winter');
} else if (currentMonth >= 3 || currentMonth <= 5) {
  console.log('it`s spring');
} else if (currentMonth === 6 || currentMonth === 7 || currentMonth === 8) {
  console.log('it`s summer');
} else if (currentMonth === 9 || currentMonth === 10 || currentMonth === 11) {
  console.log('it`s autumn');
}

// 8
const personWeight = 80;
const personHeight = 170;

const personBMI = personWeight/(personHeight * personHeight);
console.log(personBMI);

// 9
const age = 17
if (age >= 18) {
  console.log('a citizen can vote');
} else {
  console.log('a citizen can\'t vote');
}

// 10
const currentColor = 'yellow';
if (currentColor === 'green') {
  console.log('Go');
} else if (currentColor === 'yellow') {
  console.log('Speed up');
} else if (currentColor === 'red') {
  console.log('Stop');
}

//11
const month = 11;
if (month === 1) {
  console.log('January');
} else if (month === 2) {
  console.log('February');
} else if (month === 3) {
  console.log('March');
} else if (month === 4) {
  console.log('April');
} else if (month === 5) {
  console.log('May');
} else if (month === 6) {
  console.log('June');
} else if (month === 7) {
  console.log('July');
} else if (month === 8) {
  console.log('August');
} else if (month === 9) {
  console.log('September');
} else if (month === 10) {
  console.log('October');
} else if (month === 11) {
  console.log('November');
} else if (month === 12) {
  console.log('December');
}

// 12
const someVariable = 10;
const isDividableBy3 = someVariable % 3 === 0;
const isDividableBy5 = someVariable % 5 === 0;

if (isDividableBy3 && isDividableBy5) {
  console.log('variable is dividable by 5 and 3');
} else if (isDividableBy5) {
  console.log('variable is dividable by 5');
} else if (isDividableBy3) {
  console.log('variable is dividable by 3');
}

// 13
const radiusValue = 45;
const circleArea = Math.PI * radiusValue;
console.log(circleArea);

// 14
const studentScore = 24;
if (studentScore >= 90) {
  console.log('A');
} else if (studentScore >= 80) {
  console.log('B');
} else if (studentScore >= 65) {
  console.log('C');
} else if (studentScore >= 40) {
  console.log('D');
} else if (studentScore >= 25) {
  console.log('E');
} else if (studentScore < 25) {
  console.log('F');
}

// 15
const carSpeed = 60;
const speedLimit = 50;

if (carSpeed >= speedLimit) {
  console.log('Speedin!!');
} else {
  console.log('Speed is fine');
}

// 16
const ageVariable = 16;
const isAdult = ageVariable >= 18

console.log(isAdult)

// 17
const personAge = 21;
const hasDrivingLicense = true;

const isPersonAdult = personAge >= 18;
const canDriveLegally = isPersonAdult && hasDrivingLicense;

if (canDriveLegally) {
  console.log('This person can legally drive');
} else {
  console.log('This person can`t legally drive');
