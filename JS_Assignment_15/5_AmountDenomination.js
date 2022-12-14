/**
 * @PTalluru
 * 
 * 5). Given a total due and an array representing the amount of
    change in your pocket, determine whether or not you are able to pay
    for the item. Change will always be represented in the following
    order: quarters, dimes, nickels, pennies.
    To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
    since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
    you 6.25 + 2 + .25 + 0 = 8.50.
    Examples
    changeEnough([2, 100, 0, 0], 14.11) ➞ false
    changeEnough([0, 0, 20, 5], 0.75) ➞ true
    changeEnough([30, 40, 20, 5], 12.55) ➞ true
    Notes
    ●quarter: 25 cents / $0.25
    ●dime: 10 cents / $0.10
    ●nickel: 5 cents / $0.05
    ●penny: 1 cent / $0.01
 */

let changeEnough = (denominationsArray, due) => {
  let quarter = denominationsArray[0] * 0.25;
  let dime = denominationsArray[1] * 0.1;
  let nickel = denominationsArray[2] * 0.05;
  let penny = denominationsArray[3] * 0.01;
  let sum = quarter + dime + nickel + penny;
  if (sum >= due) {
    return true;
  } else {
    return false;
  }
};

console.log(changeEnough([25, 20, 5, 0], 4.25)); //true
console.log(changeEnough([2, 100, 0, 0], 14.11)); //false
console.log(changeEnough([0, 0, 20, 5], 0.75)); //true
console.log(changeEnough([30, 40, 20, 5], 12.55)); //true
