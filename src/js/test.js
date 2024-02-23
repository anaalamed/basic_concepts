const visited = new Array(3).fill().map(() => new Array(3).fill(false));

// ______________________ flatten _____________________________
function flatten(arr) {
  return arr.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
    []
  );
}

function sum(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.reduce((acc, curr) => acc + sum(curr), 0);
}

const arr = [1, 2, 3, [4, 5]];

// ______________________ currying _____________________________
function add(x) {
  return function (y) {
    return x + y;
  };
}

let add10 = add(10);
console.log(add10(3));
