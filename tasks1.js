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


//6
function makeNegativeWithCheck(num) {
  if (num < 0){
    return num
  } else return -num
}
console.log(makeNegativeWithCheck(45));


//7
function removeChar(str){
  const strLength = (str.trim().length)-1;
  return str.substring(1, strLength);
}
console.log(removeChar('START'));
