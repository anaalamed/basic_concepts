/**
 * Closure - ability of a function to remember the variables and functions that are declared in its outer scope.
 *         - saves the value in memory for further reference
 *         - a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function
 */

// Counter
const createCounter = (num) => {
  let count = num;

  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
  };
};

export const counterClosure = () => {
  const counter = createCounter(1);
  console.log("increment: ", counter.increment());
  console.log("decrement: ", counter.decrement());
};

// Cache arr (inserted numbers)
const createCache = () => {
  let arr = [];

  return (num) => {
    arr.push(num);
    return arr;
  };
};

export const cacheClosure = () => {
  const cache = createCache();
  console.log("insert 1: ", cache(1));
  console.log("insert 2: ", cache(2));
};

// Cache sum for nums
const sum = (nums) => {
  console.log("calculate sum for: ", nums);
  return nums.reduce((acc, num) => acc + num, 0);
};

const createCacheSum = () => {
  let cache = {};

  return (nums) => {
    const numsString = nums.join("-");

    if (cache[numsString]) {
      return cache[numsString];
    } else {
      const res = sum(nums);
      cache[numsString] = res;
      return res;
    }
  };
};

export const cacheSumClosure = () => {
  const cacheSum = createCacheSum();
  console.log("sum of [1,2]: ", cacheSum([1, 2]));
  console.log("sum of [1,3]: ", cacheSum([1, 3]));
  console.log("sum of [1,2]: ", cacheSum([1, 2]));
};

// class representation - person
const createPerson = (name, age) => {
  let n = name;
  let a = age;

  return {
    getName: () => {
      return n;
    },
    setName: (name) => {
      n = name;
    },
    getAge: () => {
      return a;
    },
    setAge: (age) => {
      a = age;
    },
  };
};

export const personClosure = () => {
  const person = createPerson("Ana", 18);
  console.log(person.getName());
  person.setName("Yasmin");
  console.log(person.getName());
  console.log(person.getAge());
  person.setAge(12);
  console.log(person.getAge());
};
