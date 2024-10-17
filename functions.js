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
