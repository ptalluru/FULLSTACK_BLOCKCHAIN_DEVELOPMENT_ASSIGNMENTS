/*
5). Create a function that takes in a number as a string n and returns
the number without trailing and leading zeros.
●Trailing Zerosare the zerosafter a decimal pointwhichdon't
affect the value (e.g. thelast three zeros in 3.4000and
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
