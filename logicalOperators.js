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
