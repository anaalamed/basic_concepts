const sumOfThreeElements = (...elements) => {
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only three elements or less are allowed");
    } else {
      let sum = 0;
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: " + sum);
    }
  });
};

// then catch
export const promiseThenCatch = () => {
  sumOfThreeElements(4, 5, 6)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  sumOfThreeElements(1, 2, 3, 4)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

// try catch
export const promiseAsyncAwait = async () => {
  try {
    const res = await sumOfThreeElements(1, 2, 3);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await sumOfThreeElements(1, 2, 3, 4);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// Promiss.all
async function processTasks() {
  const taskPromises = [
    sumOfThreeElements(1, 2, 3),
    sumOfThreeElements(2, 3, 4),
    sumOfThreeElements(3, 4, 5),
  ];
  const results = await Promise.all(taskPromises);
  console.log(results);
}

export const promiseAll = async () => {
  await processTasks();
};

// event loop
/**
 * Every function get to the Call Stack 
    If sync -> executes
    If async -> pushed to the Web API / Event Table
      When ready -> pushed to the Event Queue / Callback Queue
  When Call Stack is empty, Event Queue -> Call Stack 
 */
export const eventLoopExample = () => {
  // Call stack -> executes
  console.log("fn1");

  // Call stack -> Event Table (responsible to move async code to Event Queqe after a specified time )
  // Event Table -> Event Queque (after 0ms)
  setTimeout(() => {
    console.log("fn2");
  }, 0);

  // meantime: Call stack -> executes
  console.log("fn3");

  // event loop continiosly check the Call Stack
  // if no commands -> check Event Queque has commandes left
  // fn2 Event Queque -> Call Stack -> executes
};
