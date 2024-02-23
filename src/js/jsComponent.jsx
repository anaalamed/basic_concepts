import { counterClosure, cacheClosure, cacheSumClosure, personClosure } from "./closure";

const Closure = () => {
  counterClosure();

  cacheClosure();
  cacheSumClosure();

  personClosure()

  return (
    <div >
      <h2>Closures</h2>
    </div>
  );
}

export default Closure