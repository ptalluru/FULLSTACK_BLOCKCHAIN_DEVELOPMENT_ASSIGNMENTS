/*
1). The time has a format: hours:minutes. Both hoursand minutes
have two digits, like 09:00.
Make a regex to find time in the string:Lunch at10:10 in the room
123:456.In this task there’s no need to check timecorrectness yet,
so 25:99 can also be a valid result. The regex shouldnotmatch
333:333.
*/
let iszRegexMatched = (inputString) => {
  let timeRegex = /\b\d\d:\d\d\b/g;
  const isMatch = inputString.match(timeRegex);
  if (isMatch) {
    console.log(`Matched time: ${isMatch}`);
  } else {
    console.log("No time found");
  }
};

let inputString = "Lunch at 10:10 in the room 123:456";

iszRegexMatched(inputString);
