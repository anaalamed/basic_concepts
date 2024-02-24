/**
 * Currying - f(a,b) -> f(a)(b)
            - advanced technique to transform a function of arguments n, to n functions of one or fewer arguments. 
 *
 */

// add(1)(2)
const add2Numbers = (x) => {
  return (y) => {
    return x + y;
  };
};

export const sum2Currying = () => {
  console.log("sum 2 numbers - Currying");
  console.log("add2Numbers(1)(2): ", add2Numbers(1)(2));

  let add1 = add2Numbers(2);
  console.log("add1(2)", add1(2));
};

// add(1)(2)(3)…(n)()
const sumNnumbers = (a) => {
  return (b) => {
    if (b) {
      return sumNnumbers(a + b);
    }
    return a;
  };
};

export const sumNCurrying = () => {
  console.log("sum N numbers - Currying");
  console.log("sumNnumbers(1)(2)(): ", sumNnumbers(1)(2)());
  console.log("sumNnumbers(1)(2)(3)(): ", sumNnumbers(1)(2)(3)());
};
