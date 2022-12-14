/*
5). Create a function that takes in a number as a string n and returns
the number without trailing and leading zeros.
●Trailing Zeros are the zeros after a decimal point which don't
affect the value (e.g. the last three zeros in 3.4000and
3.04000).
●Leading Zerosare the zerosbefore a whole numberwhich
don't affect the value (e.g. thefirst three zerosin 000234 and
000230).
removeLeadingTrailing("230.000") ➞ "230"
removeLeadingTrailing("00402") ➞ "402"
Notes
●Return astring.
●If you get a number with .0 on the end, return the integer value
(e.g. return "4" rather than "4.0").
●If the number is 0, 0.0, 000, 00.00, etc... return "0".
*/

let removeLeadingTrailing = (n) => {
  let result = n.replace(/^0+|0+$|\.0+$/g, "");
  if (result === "") {
    return "0";
  }
  return result;
};

console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
console.log(removeLeadingTrailing("000.000"));
console.log(removeLeadingTrailing("4.0"));
console.log(removeLeadingTrailing("3.04000"));
console.log(removeLeadingTrailing("3.4000"));
console.log(removeLeadingTrailing("0"));
