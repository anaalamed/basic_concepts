import { counterClosure, cacheClosure, cacheSumClosure, personClosure } from "./closure";
import { sum2Currying, sumNCurrying } from "./currying";
import { promiseThenCatch, promiseAsyncAwait, promiseAll, eventLoopExample } from "./promises";

const JsComponent = () => {
  console.log("%cClosures!", 'background-color: blue')
  counterClosure();
  cacheClosure();
  cacheSumClosure();
  personClosure()

  console.log("%cCurries!", 'background-color: blue')
  sum2Currying()
  sumNCurrying()

  console.log("%cPromises!", 'background-color: blue')
  promiseThenCatch()
  promiseAsyncAwait()
  promiseAll()
  eventLoopExample()

  return (
    <div >
      <h2>JS</h2>

      <h2>Closures</h2>
      <p>Check console!</p>

      <h2>Currying</h2>
      <p>Check console!</p>

      <h2>Promises</h2>
      <p>Check console!</p>
    </div>
  );
}

export default JsComponent