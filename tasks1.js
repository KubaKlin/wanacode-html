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
}

// 4
const currentAge = 30;
const retirenmentAgeInPoland = 67;
let yearsLeftToRetirenment;

yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

console.log(yearsLeftToRetirenment);

// 5
const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
let taxToPay = 0;

if (isPayingVAT) {
  taxToPay = monthlyIncome * VATRateInPoland;
}

taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

console.log('tax to pay: ' + taxToPay);

// 6
const isSunny = false
if (isSunny) {
  console.log("Don't forget your sunglasses!")
} else {
  console.log("You might need an umbrella.");
}

// 7
const currentMonth = 3;
if ( currentMonth === 12 || currentMonth === 1 || currentMonth === 2 ) {
  console.log("it's winter");
} else if (currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
  console.log("it's spring");
} else if (currentMonth === 6 || currentMonth === 7 || currentMonth === 8) {
  console.log("it's summer");
} else if (currentMonth === 9 || currentMonth === 10 || currentMonth === 11) {
  console.log("it's autumn");
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
let isAdult = false;

if(ageVariable >= 18) {
  isAdult = true;
}

console.log(isAdult)

// 17
const personAge = 21;
const hasDrivingLicense = true;

let isPersonAdult = false, canDriveLegally = false;

if(personAge >= 18) {
  isPersonAdult = true;
}

if(hasDrivingLicense) {
  canDriveLegally = true;
}

if (isPersonAdult && canDriveLegally) {
  console.log('This person can legally drive');
} else {
  console.log("This person can't legally drive");
}