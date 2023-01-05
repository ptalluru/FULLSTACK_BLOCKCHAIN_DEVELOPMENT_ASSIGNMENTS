/*
2.) Create a function that finds the word "happiness" in the given string (not case sensitive). 
If found, return "Hurray!", otherwise return "There is no happiness.".
Example
findHappiness(“Work makes me happy”) -> There is no happiness.
findHappiness(“You give me the feeling of happiness”) -> Hurray
*/

let findHappiness = (string) => {
  let happinessRegex = /\bhappiness\b/gi; // The "i" flag makes the regex case-insensitive
  if (happinessRegex.test(string)) {
    return "Hurray!";
  } else {
    return "There is no happiness.";
  }
};
console.log(findHappiness("Work makes me happy")); // "There is no happiness."
console.log(findHappiness("You give me the feeling of hAppIness")); // "Hurray!"
