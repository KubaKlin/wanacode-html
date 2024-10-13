// // const isAdult = true;
// // if (123) {
// //   //
// // }
//
//
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
//

//
//
//
//
// console.log(Boolean(true));
// console.log(Boolean('Hello'));
// console.log(Boolean(100));
// console.log(Boolean(-1));
//
// if (true) {}
// if ('Hi!') {}
// if (100) {}
// if (-50) {}
//
//
// const name = 'John';
// if (name) {
//   console.log('Your name is ' + name);
// } else {
//   console.log('No name is provided');
// }


// console.log('hello' === 'hello'); // true
// console.log('HI' === 'hi'); // false
// console.log(false === false); // true

// console.log(true == 'true'); //
// console.log(NaN == 0);
// // https://stackoverflow.com/questions/11363659/why-does-true-true-show-false-in-javascript
//
// console.log(true || true);   // true
// console.log(false || true);  // true
// console.log(true || false);  // true
// console.log(false || false); // false
//
// const value = null;
// if (isNull(value) || isUndefined(value)) {
//   console.log('The value is null or undefined');
// }


// const value = 0 || false || null || 12;
// // console.log(value); // 12
//
// function getName(personName) {
//   return personName || 'Jan Kowalski';
//   if (!personName) {
//     return 'Jan Kowalski';
//   }
//   return personName;
// }
//
// getName('Adam'); // 'Adam'
// getName(); // 'Jan Kowalski;
//
// console.log(true && true);   // true
// console.log(false && true);  // false
// console.log(true && false);  // false
// console.log(false && false); // false
//
//
// const hour = 10;
// const minute = 0;
// const isNoon = hour === 12 && minute === 0;
//
//
// if (isNoon) {
//   console.log('The time is noon');
// }
//
//
// if (hour === 12 && minute === 0) {
//   console.log('The time is noon');
// }

// if (false) {}
// if (0) {}
// if ('') {}
// if (null) {}
// if (undefined) {}
// if (NaN) {}

const value = 1 && 20 && '0' && NaN;

console.log(value); // 0

function isTeenageAge(age) {
  return age > 10 && age < 20;
}

isTeenageAge(10); // false
isTeenageAge(15); // true
isTeenageAge(20); // false


console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false

const value = 10;

if (value !== undefined) {
  console.log('The value is not undefined!');
}

function isNotNull(value) {
  return value !== null;
}

isNotNull(null); // false
isNotNull(true); // true


console.log((false && false) || true); // true

/*
* Use the round brackets () to change the true || false && false statement to return false.

relying on the precedence makes the code difficult to read
instead, use round brackets to avoid doubt
* */

console.log(true || false && false);

const isCurrentMainLightGreen = false;
const isCurrentTheConditionalLightOn = true;
const didCurrentTheCarStop = true;

function canCarGoRight(isMainLightGreen, isTheConditionalLightOn, didTheCarStop) {
  return isMainLightGreen || (isTheConditionalLightOn && didTheCarStop);
}

canCarGoRight(
    isCurrentMainLightGreen,
    isCurrentTheConditionalLightOn,
    didCurrentTheCarStop
)
