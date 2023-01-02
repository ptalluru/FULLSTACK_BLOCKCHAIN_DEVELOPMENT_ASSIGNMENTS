/*
1). The time has a format: hours:minutes. Both hoursand minutes
have two digits, like 09:00.
Make a regex to find time in the string:Lunch at10:10 in the room
123:456.In this task there’s no need to check timecorrectness yet,
so 25:99 can also be a valid result. The regex shouldnotmatch
333:333.
*/
let iszRegexMatched = (string) => {
  let regex = /\s?\d{2}:\d{2}\s?/g; //check for a space before checking for hours and the same implies to check space after minutes which may not return true for 3 digit hours or minutes
  console.log(string.match(regex));
  //   let matchedElements = string.matchAll(regex);
  //   Array.from(matchedElements).forEach((element) => console.log(element));
  return regex.test(string);
};

let stringToTest = "Lunch at 10:10 in the room 123:456";
console.log(iszRegexMatched(stringToTest));
