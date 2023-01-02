/*
2.) Create a function that finds the word "happiness" in the given string (not case sensitive). 
If found, return "Hurray!", otherwise return "There is no happiness.".
Example
findHappiness(“Work makes me happy”) -> There is no happiness.
findHappiness(“You give me the feeling of happiness”) -> Hurray
*/

let findHappiness = (string) => {
  let regex = /happiness/gi;
  let result = regex.test(string);
  if (result) {
    console.log("Hurray!");
  } else {
    console.log("There is no happiness.");
  }
};

findHappiness("Work makes me happy");
findHappiness("You give me the feeling of HapPIness");
