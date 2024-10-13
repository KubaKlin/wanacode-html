// function openGoogle(searchQuery) {
//   if (!searchQuery) {
//     console.error('The search query has to be provided');
//     return;
//   }
//   open('https://google.com/search?q=' + searchQuery);
// }
//
// const result = openGoogle('mdn');
//
// // console.log(result); //
//
//
// function getAverageValue(firstNumber, secondNumber) {
//   const sum = firstNumber + secondNumber;
//   return sum / 2;
//   console.log('The average value was calculated');
// }
//
// const average = getAverageValue(2, 4);
//
// // console.log(average);
//
// /*
// * create the getTotalMealCost function that receives two arguments:
// a number representing the base cost of the meal
// a number that represents the tip percentage
// the function needs to return the total cost of the meal including the tip
// *
// * */
//
// function getTotalMealCost(mealCost, tipPercentage) {
//   return mealCost + (mealCost * tipPercentage / 100);
// }
//
// const totalCost = getTotalMealCost(200, 10);
// console.log(totalCost); // 220
//
//
// function getAgeCategory(age) {
//   if (age < 13) {
//     return 'child';
//   } else if (age < 18) {
//     return 'teenager';
//   } else if (age < 60) {
//     return 'adult';
//   }
//   return 'senior';
// }
//
// getAgeCategory(8); // child
// getAgeCategory(15); // teenager
// getAgeCategory(20); // adult
// getAgeCategory(70); // senior
//
//
// function getAgeCategory(age) {
//   if (age < 13) {
//     return 'child';
//   } else if (age < 18) {
//     return 'teenager';
//   } else if (age < 60) {
//     return 'adult';
//   } else {
//     return 'senior';
//   }
// }
//
// getAgeCategory(8); // child
// getAgeCategory(15); // teenager
// getAgeCategory(20); // adult
// getAgeCategory(70); // senior
//
//
// function getSummedNumbers(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }
// console.log(getSummedNumbers(15, 10)); // 25


function getBaseCostBasedOnSize(size) {
  if (size === 'small') {
    return 5;
  }
  if (size === 'medium') {
    return 7;
  }
  return 10;
}

function getTotalToppingsCost(numberOfToppings) {
  const pricePerTopping = 1.5;
  return numberOfToppings * pricePerTopping;
}

function getDeliveryFee(distanceInKilometers) {
  if (distanceInKilometers <= 5) {
    return 2;
  }
  return 5;
}

function getCustomPizzaCost(
    size,
    numberOfToppings,
    distanceInKilometers
) {
  let orderCost = 0;
  const pricePerTopping = 1.5;

  orderCost += numberOfToppings * pricePerTopping;

  if (size === 'small') {
    orderCost += 5;
  } else if (size === 'medium') {
    orderCost += 7;
  } else {
    orderCost += 10;
  }

  if (distanceInKilometers <= 5) {
    orderCost += 2;
  } else {
    orderCost += 5;
  }

  // 4. Sum all parts of the cost
  return orderCost;
}


function getCustomPizzaCost(
    size,
    numberOfToppings,
    distanceInKilometers
) {
  // 1. Calculate the base cost based on the size of the pizza
  const baseCost = getBaseCostBasedOnSize(size);

  // 2. Get the cost of all toppings
  const toppingsCost = getTotalToppingsCost(numberOfToppings);

  // 3. Calculate the delivery fee based on the distance
  const deliveryFee = getDeliveryFee(distanceInKilometers);

  // 4. Sum all parts of the cost
  return baseCost + toppingsCost + deliveryFee;
}


console.log(getCustomPizzaCost('medium', 5, 8)); // 19.5
