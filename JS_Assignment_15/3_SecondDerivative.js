/**
 * @PTalluru
 * 
 * 3). Create a function that takes numbers b and m as arguments and
    returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
    with respect to x evaluated at x=m, where b and m are constants.
 */

let secondDerivative = (b, m) => {
  let x = m;
  let derivative = b * (b - 1) * Math.pow(x, b - 2) + b * m * (b * m - 1) * Math.exp(b * m - 2)
  let result = Math.round((derivative + Number.EPSILON) * 100) / 100;
  return result;
};

console.log(secondDerivative(2, 2));
