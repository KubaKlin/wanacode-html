// const PURPLE_COLOR = '#8758FF';
//
// const activeWebsiteViewerName = 'name';
//
// const userName = "john";
// console.log(name);
// const isUserAdmin = true;
//
// if (isUserAdmin) {
//
// }

// / * come up with a variable name for the name of the person who is currently visiting the website */
// const legalDrinkingAge = 18;
// const user = {
//   firstName: 'John',
//   lastName: 'Smith'
// }
// const name = user.firstName; // 'John'
//
// console.log(user.firstName);
//
// const fruits = ['Apple', 'Banana'];
// console.log(fruits[0]); // Apple
//
//
// const myName = 'Adam';
//
// if (myName === 'Adam') {
//   console.log('My name is Adam');
// } else if (myName === 'John') {
//   console.log('My name is John');
// } else {
//   console.log('My name is neither Adam nor John');
// }


// const shouldOpenYouTube = confirm('Do you want to open YouTube?');
//
// if (shouldOpenYouTube) {
//   open('https://youtube.com');
// }
//
//
// const answer = prompt('how mush is 5 times 5', 0);
//
// if (answer === '5') {
//   alert('correct!')
// }

/*
call the prompt function and ask the user how much is 5 times 5
if they provided the correct answer, praise them
provide 0 as the default value in the second argument
keep in mind that the prompt function returns a string
 */

// const name = prompt('What is your name?', 'John');
//
// alert('The user is called ' + name);

// function openGoogleOnUserConfirmation(question) {
//   const wantsToKnowMoreAboutFunctions = confirm(question);
//   if (wantsToKnowMoreAboutFunctions) {
//     open('https://google.com');
//   }
// }
//
// openGoogleOnUserConfirmation('Do you want to know more about if...else statements?');
// openGoogleOnUserConfirmation('Do you want to know more about functions?');

function openYoutube() {
  open('https://youtube.com');
}

openYoutube();